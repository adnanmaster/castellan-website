import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Handshake, Target } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Erfahren Sie, wofür Castellan steht und wie wir Schweizer KMU bei digitalen Herausforderungen begleiten.",
};

const principles = [
  {
    title: "Klarheit",
    description: "Wir erklären Zusammenhänge verständlich und machen Entscheidungen nachvollziehbar.",
    icon: Eye,
  },
  {
    title: "Konsequenz",
    description: "Wir fokussieren uns auf das, was Wirkung erzielt, und setzen es zuverlässig um.",
    icon: Target,
  },
  {
    title: "Partnerschaft",
    description: "Wir arbeiten direkt, erreichbar und auf Augenhöhe mit den Menschen im Unternehmen.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Über Castellan</p>
            <h1 className="mt-7 max-w-4xl text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Technologie soll Vertrauen schaffen, nicht Verwirrung.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Castellan unterstützt Schweizer KMU dabei, sicherer, klarer und digital stärker zu werden. Wir verbinden technisches Verständnis mit einer direkten und transparenten Zusammenarbeit.
            </p>
          </div>

          <div className="glass-layer p-3 md:p-4">
            <MediaPlaceholder
              aspect="portrait"
              label="Castellan persönlich"
              hint="Authentisches Portrait oder Arbeitssituation des Castellan-Teams"
              className="max-h-[640px]"
            />
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Unser Anspruch"
            title="Ohne unnötiges Theater. Mit Verantwortung."
            description="Gute Zusammenarbeit beginnt für uns mit einer ehrlichen Einordnung: Was ist wichtig, was ist realistisch und was bringt Ihr Unternehmen tatsächlich weiter?"
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article key={principle.title} className="surface-card p-7 md:p-8">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="mt-10 text-xl font-semibold tracking-[-0.02em] text-copy">{principle.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell glass-layer grid gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">Kennenlernen</p>
            <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-copy sm:text-4xl md:text-5xl">
              Sprechen wir über das, was Ihr Unternehmen weiterbringt.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
