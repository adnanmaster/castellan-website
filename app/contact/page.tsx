import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Sprechen Sie mit Castellan über einen kontrollierten Kapsule-Pilotbetrieb für Ihr Unternehmen.",
};

const contactDetails = [
  {
    label: "Telefon",
    value: "+41 76 564 43 69",
    note: "Direkter Kontakt",
    icon: Phone,
  },
  {
    label: "Standort",
    value: "Seebahnstrasse 185, 8004 Zürich",
    note: "Schweiz",
    icon: MapPin,
  },
  {
    label: "E-Mail",
    value: "adnanhalder@protonmail.com",
    note: "Antwort auf Ihre Anfrage",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Sprechen wir offen über Ihre Umgebung.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Erzählen Sie uns, welche Risiken, Standorte und Anforderungen Sie beschäftigen. Wir sagen Ihnen direkt, ob Kapsule für einen kontrollierten Pilotbetrieb sinnvoll ist.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <Clock3 className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold text-copy">Klare nächste Schritte</p>
                <p className="mt-2 text-sm leading-6 text-muted">Erstgespräch, technische Einordnung, ehrliche Empfehlung.</p>
              </div>
              <div className="surface-card p-6">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold text-copy">Direkter Ansprechpartner</p>
                <p className="mt-2 text-sm leading-6 text-muted">Keine anonyme Support-Schleife, kein unnötiger Verkaufsdruck.</p>
              </div>
            </div>
          </div>

          <div className="glass-layer p-3 md:p-4">
            <MediaPlaceholder
              aspect="portrait"
              label="Ansprechpartner bei Castellan"
              hint="Authentisches Portrait oder Gesprächssituation in Zürich"
              className="max-h-[640px]"
            />
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Direkter Kontakt</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl">
              Erreichbar, wenn es darauf ankommt.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Schreiben Sie uns kurz, worum es geht. Wir prüfen Ihre Anfrage persönlich und melden uns mit einer klaren Einschätzung zurück.
            </p>

            <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="grid grid-cols-[auto_1fr] gap-4 bg-panel p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-quiet">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-copy">{item.value}</p>
                      <p className="mt-1 text-xs text-muted">{item.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
