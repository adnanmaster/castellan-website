import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MINIMUM_FORM_TIME_MS = 1_200;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

function json(message: string, status: number, headers?: HeadersInit) {
  return Response.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...headers,
      },
    },
  );
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(identifier: string) {
  const now = Date.now();

  if (rateLimits.size > 1_000) {
    for (const [key, entry] of rateLimits) {
      if (entry.resetAt <= now) {
        rateLimits.delete(key);
      }
    }
  }

  const current = rateLimits.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimits.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function cleanEnvironmentValue(value: string | undefined, fallback = "") {
  return (value ?? fallback).trim().replace(/^(["'])(.*)\1$/, "$2").trim();
}

function deliveryErrorMessage(status: number) {
  if (status === 401) {
    return "Der Versanddienst ist noch nicht korrekt eingerichtet (Fehler E401).";
  }

  if (status === 403) {
    return "Resend hat den Testversand für diese Empfängeradresse abgelehnt (Fehler E403).";
  }

  if (status === 422) {
    return "Die Absender- oder Empfängeradresse ist noch nicht korrekt konfiguriert (Fehler E422).";
  }

  if (status === 429) {
    return "Der Versanddienst hat derzeit zu viele Anfragen erhalten. Bitte versuchen Sie es später erneut (Fehler E429).";
  }

  return `Die Anfrage konnte gerade nicht zugestellt werden (Fehler E${status}).`;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json("Ungültige Anfrage.", 415);
  }

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json("Die Anfrage ist zu gross.", 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json("Ungültige Anfrage.", 400);
  }

  if (!body || typeof body !== "object") {
    return json("Ungültige Anfrage.", 400);
  }

  const values = body as Record<string, unknown>;
  const website = typeof values.website === "string" ? values.website.trim() : "";

  // Bots that fill the hidden field receive a neutral success response.
  if (website) {
    return json("Vielen Dank. Ihre Anfrage ist angekommen.", 200);
  }

  const name = typeof values.name === "string" ? values.name.trim() : "";
  const email = typeof values.email === "string" ? values.email.trim().toLowerCase() : "";
  const company = typeof values.company === "string" ? values.company.trim() : "";
  const message = typeof values.message === "string" ? values.message.trim() : "";
  const startedAt = typeof values.startedAt === "number" ? values.startedAt : 0;

  if (
    name.length < 2 ||
    name.length > 100 ||
    company.length < 2 ||
    company.length > 120 ||
    email.length > 254 ||
    !isEmail(email) ||
    message.length < 20 ||
    message.length > 3000
  ) {
    return json("Bitte prüfen Sie alle Pflichtfelder und versuchen Sie es erneut.", 400);
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < MINIMUM_FORM_TIME_MS) {
    return json("Bitte warten Sie einen Moment und senden Sie das Formular erneut.", 400);
  }

  if (isRateLimited(getClientIp(request))) {
    return json("Zu viele Anfragen. Bitte versuchen Sie es in zehn Minuten erneut.", 429, {
      "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000),
    });
  }

  const apiKey = cleanEnvironmentValue(process.env.RESEND_API_KEY);

  if (!apiKey) {
    console.error("Contact form delivery is not configured: RESEND_API_KEY is missing.");
    return json("Der Versand ist vorübergehend nicht verfügbar. Bitte kontaktieren Sie uns per E-Mail.", 503);
  }

  const from = cleanEnvironmentValue(
    process.env.CONTACT_FROM_EMAIL,
    "Castellan Website <onboarding@resend.dev>",
  );
  const to = cleanEnvironmentValue(process.env.CONTACT_TO_EMAIL, "adnanhalder@protonmail.com");
  const safeCompany = cleanHeaderValue(company).slice(0, 80);
  const emailText = [
    "Neue Kontaktanfrage über die Castellan-Website",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Unternehmen: ${company}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "Castellan-Website/1.0",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Neue Website-Anfrage · ${safeCompany}`,
        text: emailText,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const providerError = (await response.json().catch(() => null)) as
        | { message?: string; name?: string }
        | null;

      console.error("Contact form delivery failed.", {
        status: response.status,
        type: providerError?.name,
        message: providerError?.message,
      });
      return json(deliveryErrorMessage(response.status), 502);
    }
  } catch (error) {
    console.error("Contact form delivery failed.", {
      error: error instanceof Error ? error.name : "UnknownError",
    });
    return json("Die Anfrage konnte gerade nicht zugestellt werden. Bitte versuchen Sie es später erneut.", 502);
  }

  return json("Vielen Dank. Ihre Anfrage ist angekommen.", 200);
}
