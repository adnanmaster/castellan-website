import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Compass, Layers3, Route } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "IT Consulting",
  description: "Pragmatisches IT Consulting von Castellan für klare Entscheidungen und umsetzbare nächste Schritte.",
};

const consultingAreas = [
  {
    title: "Standortbestimmung",
    description: "Wir erfassen die Ausgangslage, Abhängigkeiten und Risiken, bevor Lösungen vorgeschlagen werden.",
    icon: Compass,
  },
  {
    title: "Architektur & Prioritäten",
    description: "Wir ordnen Optionen ein und entwickeln eine technische Richtung, die zu Ihren Ressourcen passt.",
    icon: Layers3,
  },
  {
    title: "Umsetzungsbegleitung",
    description: "Wir übersetzen Entscheidungen in klare Arbeitsschritte und begleiten die Umsetzung nachvollziehbar.",
    icon: Route,
  },
];

const workingPrinciples = [
  "Verständliche Einordnung statt unnötiger Fachsprache",
  "Empfehlungen mit sichtbaren Vor- und Nachteilen",
  "Ein realistischer Plan für Ihre vorhandenen Ressourcen",
];

export default function ItConsultingPage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <p className="eyebrow">IT Consulting</p>
            <h1 className="mt-7 max-w-4xl text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Klare IT-Entscheidungen, die sich umsetzen lassen.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Wir helfen Schweizer KMU, technische Herausforderungen zu ordnen, sinnvolle Prioritäten zu setzen und aus offenen Fragen einen belastbaren nächsten Schritt zu machen.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
            >
              IT-Anliegen besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="glass-layer p-3 md:p-4">
            <MediaPlaceholder
              aspect="landscape"
              label="IT Consulting im Arbeitskontext"
              hint="Kuratiertes Bild einer Beratung, Analyse oder technischen Planung"
            />
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Leistungsfelder"
            title="Von der offenen Frage zur klaren Richtung."
            description="Unser Consulting schafft zuerst Übersicht und danach einen Weg, der technisch sinnvoll und betrieblich realistisch ist."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {consultingAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className="surface-card flex min-h-72 flex-col p-7 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-auto pt-12 text-xl font-semibold tracking-[-0.02em] text-copy">{area.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Arbeitsweise</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl md:text-5xl">
              Beratung mit einem sichtbaren Ergebnis.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Am Ende soll nicht nur ein Gespräch stattgefunden haben. Sie erhalten eine klare Einordnung, konkrete Empfehlungen und verständliche nächste Schritte.
            </p>
          </div>
          <ul className="grid gap-3">
            {workingPrinciples.map((principle) => (
              <li key={principle} className="surface-card flex gap-3 p-5 text-sm leading-6 text-copy">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
