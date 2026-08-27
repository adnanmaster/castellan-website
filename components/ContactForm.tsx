"use client";

import Link from "next/link";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "mt-3 min-h-12 w-full rounded-lg border border-white/15 bg-black/25 px-4 text-base text-copy outline-none transition-colors placeholder:text-quiet hover:border-white/25 focus:border-accent focus:ring-2 focus:ring-accent/25 disabled:cursor-wait disabled:opacity-70";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef(Date.now());
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setStatusMessage("Ihre Anfrage wird sicher übermittelt …");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          website: formData.get("website"),
          startedAt: startedAtRef.current,
        }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Die Anfrage konnte nicht gesendet werden.");
      }

      formRef.current?.reset();
      startedAtRef.current = Date.now();
      setStatus("success");
      setStatusMessage("Vielen Dank. Ihre Anfrage ist angekommen – wir melden uns persönlich bei Ihnen.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="surface-card p-6 sm:p-8 md:p-10">
      <div className="border-b border-white/10 pb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Direkte Anfrage</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-copy">Pilotgespräch anfragen</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
          Vier Angaben genügen. Wir verwenden sie ausschliesslich, um Ihre Anfrage zu beantworten.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="relative mt-7" aria-describedby="privacy-note form-status">
        <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <fieldset disabled={isSubmitting} className="grid gap-5 disabled:cursor-wait">
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="name" className="text-sm font-medium text-copy">
              Name
              <span className="ml-1 text-accent" aria-hidden="true">*</span>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                className={fieldClassName}
                placeholder="Max Mustermann"
              />
            </label>

            <label htmlFor="email" className="text-sm font-medium text-copy">
              Geschäftliche E-Mail
              <span className="ml-1 text-accent" aria-hidden="true">*</span>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
                required
                className={fieldClassName}
                placeholder="max@unternehmen.ch"
              />
            </label>
          </div>

          <label htmlFor="company" className="text-sm font-medium text-copy">
            Unternehmen
            <span className="ml-1 text-accent" aria-hidden="true">*</span>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              minLength={2}
              maxLength={120}
              required
              className={fieldClassName}
              placeholder="Name Ihres Unternehmens"
            />
          </label>

          <label htmlFor="message" className="text-sm font-medium text-copy">
            Worum geht es?
            <span className="ml-1 text-accent" aria-hidden="true">*</span>
            <textarea
              id="message"
              name="message"
              rows={6}
              minLength={20}
              maxLength={3000}
              required
              className={`${fieldClassName} resize-y py-3`}
              placeholder="Umgebung, Herausforderungen und Ziel des möglichen Pilotbetriebs"
            />
          </label>

          <p id="privacy-note" className="text-xs leading-5 text-quiet">
            Mit dem Absenden werden Ihre Angaben zur Bearbeitung der Anfrage übermittelt. Mehr dazu in der{" "}
            <Link className="text-muted underline decoration-white/30 underline-offset-4 hover:text-copy hover:decoration-accent" href="/datenschutz">
              Datenschutzerklärung
            </Link>
            .
          </p>

          <button
            type="submit"
            className="mt-1 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Wird gesendet
              </>
            ) : (
              <>
                Anfrage senden
                <Send className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </fieldset>

        <div
          id="form-status"
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-5 flex min-h-6 items-start gap-2 text-sm leading-6 ${
            status === "error" ? "text-red-300" : status === "success" ? "text-copy" : "text-muted"
          }`}
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /> : null}
          {statusMessage ? <span>{statusMessage}</span> : null}
        </div>
      </form>
    </div>
  );
}
