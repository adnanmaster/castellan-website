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

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
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
    "Castellan IT Website <website@castellan-it.ch>",
  );
  const to = cleanEnvironmentValue(process.env.CONTACT_TO_EMAIL, "info@castellan-it.ch");
  const safeCompany = cleanHeaderValue(company).slice(0, 80);
  const emailText = [
    "Neue Kontaktanfrage über castellan-it.ch",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Unternehmen: ${company}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");
  const emailHtml = `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:32px;background:#f5f3ee;color:#151515;font-family:Arial,sans-serif;line-height:1.6">
    <main style="max-width:640px;margin:0 auto;padding:32px;background:#ffffff;border:1px solid #e4e0d7">
      <p style="margin:0 0 8px;color:#c85b00;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Castellan IT</p>
      <h1 style="margin:0 0 28px;font-size:24px;line-height:1.25">Neue Kontaktanfrage</h1>
      <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="width:120px;padding:8px 16px 8px 0;color:#666;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(name)}</td></tr>
        <tr><td style="width:120px;padding:8px 16px 8px 0;color:#666;vertical-align:top">Unternehmen</td><td style="padding:8px 0;font-weight:600">${escapeHtml(company)}</td></tr>
        <tr><td style="width:120px;padding:8px 16px 8px 0;color:#666;vertical-align:top">E-Mail</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#151515">${escapeHtml(email)}</a></td></tr>
      </table>
      <div style="margin-top:28px;padding-top:24px;border-top:1px solid #e4e0d7">
        <p style="margin:0 0 8px;color:#666;font-size:14px">Nachricht</p>
        <p style="margin:0;font-size:15px;white-space:normal">${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
      </div>
    </main>
  </body>
</html>`;

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
        html: emailHtml,
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
      return json("Die Anfrage konnte gerade nicht zugestellt werden. Bitte versuchen Sie es später erneut.", 502);
    }
  } catch (error) {
    console.error("Contact form delivery failed.", {
      error: error instanceof Error ? error.name : "UnknownError",
    });
    return json("Die Anfrage konnte gerade nicht zugestellt werden. Bitte versuchen Sie es später erneut.", 502);
  }

  return json("Vielen Dank. Ihre Anfrage ist angekommen.", 200);
}
