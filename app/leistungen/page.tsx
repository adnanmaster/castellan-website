import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MonitorSmartphone, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Kapsule und digitale Präsenz: die Leistungen von Castellan für Schweizer KMU.",
};

const services = [
  {
    eyebrow: "Cybersecurity",
    title: "Kapsule",
    description:
      "DNS-basierter Schutz, der riskante Verbindungen früh stoppt und Sicherheitsentscheidungen nachvollziehbar macht.",
    href: "/product",
    linkLabel: "Kapsule kennenlernen",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Digitaler Auftritt",
    title: "Digitale Präsenz",
    description:
      "Professionelle Websites und digitale Grundlagen, die Ihr Unternehmen glaubwürdig und verständlich präsentieren.",
    href: "/digitale-praesenz",
    linkLabel: "Digitale Präsenz entdecken",
    icon: MonitorSmartphone,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell">
          <p className="eyebrow">Leistungen</p>
          <h1 className="mt-7 max-w-5xl text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
            Digitale Stärke braucht mehr als eine einzelne Lösung.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
            Castellan verbindet Sicherheit, technische Orientierung und einen professionellen digitalen Auftritt. Jede Leistung ist klar abgegrenzt und lässt sich dort einsetzen, wo Ihr Unternehmen sie tatsächlich braucht.
          </p>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Unser Angebot"
            title="Zwei Leistungen. Ein konsequenter Anspruch."
            description="Wir schaffen Lösungen, die verständlich eingeführt, sauber umgesetzt und persönlich begleitet werden."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="surface-card flex min-h-[25rem] flex-col p-7 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-9 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{service.eyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-copy">{service.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-8 text-sm font-semibold text-accent"
                  >
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell glass-layer grid gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">Erster Schritt</p>
            <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-copy sm:text-4xl md:text-5xl">
              Finden wir heraus, welche Leistung zu Ihrem Ziel passt.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Schildern Sie uns kurz Ihre Ausgangslage. Wir ordnen sie ein und empfehlen einen nachvollziehbaren nächsten Schritt.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
          >
            Gespräch vereinbaren
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
