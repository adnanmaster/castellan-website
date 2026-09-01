import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, LayoutTemplate, MessageSquareText } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Digitale Präsenz",
  description: "Professionelle digitale Auftritte von Castellan für Schweizer KMU – klar positioniert und sauber umgesetzt.",
};

const serviceAreas = [
  {
    title: "Positionierung & Inhalte",
    description: "Wir schärfen Botschaft, Seitenstruktur und Inhalte, damit Besucher Ihr Angebot schnell verstehen.",
    icon: MessageSquareText,
  },
  {
    title: "Design & Nutzerführung",
    description: "Wir gestalten einen eigenständigen, glaubwürdigen Auftritt mit klarer visueller Hierarchie.",
    icon: LayoutTemplate,
  },
  {
    title: "Technische Umsetzung",
    description: "Wir entwickeln eine schnelle, responsive und wartbare Website als verlässliche digitale Grundlage.",
    icon: Code2,
  },
];

const outcomes = [
  "Ein Auftritt, der Ihr Unternehmen klar positioniert",
  "Eine verständliche Struktur für Kunden und Interessenten",
  "Eine technische Basis, die sich weiterentwickeln lässt",
];

export default function DigitalPresencePage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <p className="eyebrow">Digitale Präsenz</p>
            <h1 className="mt-7 max-w-4xl text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Ein digitaler Auftritt, der Vertrauen verdient.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Wir entwickeln digitale Auftritte für Schweizer KMU, die professionell aussehen, klar kommunizieren und technisch sauber funktionieren.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
            >
              Digitalen Auftritt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="glass-layer p-3 md:p-4">
            <MediaPlaceholder
              aspect="landscape"
              label="Digitaler Markenauftritt"
              hint="Kuratiertes Bild eines modernen Schweizer Unternehmens oder digitalen Produkts"
            />
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Leistungsfelder"
            title="Von der Botschaft bis zur fertigen Website."
            description="Ein guter Auftritt entsteht, wenn Positionierung, Gestaltung und Technik gemeinsam gedacht werden."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {serviceAreas.map((area) => {
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
            <p className="eyebrow">Ergebnis</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl md:text-5xl">
              Professionell nach aussen. Klar im Inneren.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Ihre Website soll nicht nur gut aussehen. Sie soll erklären, Orientierung geben und als verlässliche Grundlage für Ihre weitere digitale Entwicklung dienen.
            </p>
          </div>
          <ul className="grid gap-3">
            {outcomes.map((outcome) => (
              <li key={outcome} className="surface-card flex gap-3 p-5 text-sm leading-6 text-copy">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
