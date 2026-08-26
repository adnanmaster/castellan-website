import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bug,
  Check,
  CircleOff,
  EyeOff,
  ListFilter,
  Network,
  ShieldAlert,
  X,
} from "lucide-react";
import DnsFlow from "@/components/DnsFlow";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Kapsule DNS-Sinkhole",
  description: "Kapsule schützt Schweizer KMU auf DNS-Ebene und macht blockierte Verbindungen nachvollziehbar sichtbar.",
};

const categories = [
  {
    title: "Schadsoftware",
    description: "Bekannte Malware-Domains und nachgelagerte Infrastruktur werden vor dem Verbindungsaufbau blockiert.",
    icon: Bug,
  },
  {
    title: "Phishing",
    description: "Zugriffe auf bekannte Phishing-Seiten und verdächtige Zielinfrastruktur lassen sich konsequent unterbinden.",
    icon: ShieldAlert,
  },
  {
    title: "Botnetze",
    description: "Kommunikation mit bekannten Command-and-Control-Domains wird auf DNS-Ebene unterbrochen.",
    icon: Network,
  },
  {
    title: "Tracker",
    description: "Unerwünschte Analyse- und Tracking-Domains können anhand definierter Richtlinien gefiltert werden.",
    icon: EyeOff,
  },
  {
    title: "Eigene Listen",
    description: "Interne Sperrlisten und Ausnahmen ergänzen verwaltete Kategorien für Ihre konkrete Umgebung.",
    icon: ListFilter,
  },
  {
    title: "Richtlinien",
    description: "Kategorien lassen sich kontrolliert auf Standorte, Netzwerke oder betriebliche Anforderungen ausrichten.",
    icon: CircleOff,
  },
];

const pilotPoints = [
  "Kontrollierter Start in einer klar abgegrenzten Umgebung",
  "Gemeinsam definierte Erfolgskriterien",
  "Nachvollziehbare Auswertung erlaubter und blockierter Anfragen",
  "Offene Besprechung von Nutzen, Grenzen und False Positives",
];

export default function ProductPage() {
  return (
    <main>
      <section className="content-section border-b border-white/10 pt-16 md:pt-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">Produkt 01</p>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
                Pilotprogramm
              </span>
            </div>
            <h1 className="mt-7 text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Kapsule schützt, bevor eine Verbindung entsteht.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Das DNS-Sinkhole von Castellan prüft Domain-Anfragen gegen Threat Intelligence und Ihre Richtlinien. Risiken werden blockiert, legitime Ziele normal aufgelöst und Entscheidungen sichtbar dokumentiert.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
              >
                Pilotgespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#funktionsweise"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-sm font-semibold text-copy transition-colors hover:bg-white/[0.06]"
              >
                Funktionsweise ansehen
              </a>
            </div>
          </div>

          <div className="glass-layer p-3 md:p-4">
            <MediaPlaceholder
              aspect="wide"
              label="Kapsule-Produktoberfläche"
              hint="DNS-Ereignisse, Kategorien und nachvollziehbare Entscheidungen"
            />
          </div>
        </div>
      </section>

      <section id="funktionsweise" className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Funktionsweise"
            title="Eine klare Entscheidung an einem zentralen Punkt."
            description="Kapsule sitzt im DNS-Pfad. Dadurch kann eine riskante Verbindung gestoppt werden, bevor Browser, Anwendung oder Schadsoftware das Ziel erreicht."
          />
          <div className="mt-14">
            <DnsFlow />
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Schutzkategorien"
            title="Fokussierter DNS-Schutz für reale KMU-Umgebungen."
            description="Verwaltete Kategorien schaffen eine belastbare Basis. Eigene Listen und Ausnahmen geben Ihnen die nötige Kontrolle für Ihre Umgebung."
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article key={category.title} className="flex min-h-64 flex-col bg-panel p-7 md:p-8">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-auto pt-10 text-lg font-semibold text-copy">{category.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{category.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <MediaPlaceholder
            aspect="landscape"
            label="Kapsule im Pilotbetrieb"
            hint="Authentische KMU- oder IT-Umgebung mit sichtbarem Produktkontext"
          />
          <div>
            <p className="eyebrow">Sichtbarkeit</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl md:text-5xl">
              Blockieren allein reicht nicht.
            </h2>
            <p className="mt-6 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Sicherheitsverantwortliche müssen nachvollziehen können, was passiert ist. Kapsule ordnet Ereignisse einer Kategorie zu und schafft die Grundlage für Untersuchung, Ausnahmen und klare Kommunikation.
            </p>
            <ul className="mt-8 grid gap-4 text-sm text-copy">
              {["Kategorie und Entscheidung sichtbar", "Richtlinien zentral verwaltbar", "Ausnahmen kontrolliert dokumentierbar"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Leistungsgrenzen"
            title="Transparenz beginnt mit einem klaren Umfang."
            description="Kapsule ergänzt bestehende Sicherheitsmassnahmen. Es ersetzt nicht jede Schutzschicht und verspricht keine absolute Sicherheit."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="surface-card p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Kapsule ist</p>
              <ul className="mt-7 grid gap-5">
                {[
                  "eine kontrollierbare Schutzschicht auf DNS-Ebene",
                  "ein zentraler Ort für Kategorien, Listen und Ausnahmen",
                  "eine Quelle für nachvollziehbare DNS-Sicherheitsereignisse",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-copy">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Kapsule ist nicht</p>
              <ul className="mt-7 grid gap-5">
                {[
                  "ein vollständiger Ersatz für Firewall, EDR oder Backups",
                  "ein Versprechen, jeden unbekannten Angriff zu verhindern",
                  "eine Blackbox, deren Entscheidungen niemand erklären kann",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-quiet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell glass-layer grid gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Pilotprogramm</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-copy sm:text-4xl md:text-5xl">
              Kapsule kontrolliert in Ihrer Umgebung prüfen.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              Wir definieren vorab, was der Pilot zeigen soll. Danach bewerten wir Ergebnisse und Grenzen gemeinsam – ohne künstlichen Verkaufsdruck.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
            >
              Pilotpartner werden
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-3">
            {pilotPoints.map((point) => (
              <li key={point} className="surface-card flex gap-3 p-4 text-sm leading-6 text-copy">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
