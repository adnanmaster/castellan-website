import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  Handshake,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const principles = [
  {
    title: "Konsequent schützen",
    description: "Wir konzentrieren uns auf klar definierte Risiken und erledigen den Schutz zuverlässig – ohne unnötige Komplexität.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent entscheiden",
    description: "Sie sehen, was blockiert wurde, weshalb eine Entscheidung fiel und wo die Grenzen unserer Lösung liegen.",
    icon: Eye,
  },
  {
    title: "Persönlich erreichbar",
    description: "Sie sprechen mit Menschen, die Ihre Umgebung verstehen und Verantwortung für den nächsten Schritt übernehmen.",
    icon: Headphones,
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Umgebung verstehen",
    description: "Wir klären Ihre DNS-Infrastruktur, Risiken und Erwartungen an den Pilotbetrieb.",
  },
  {
    number: "02",
    title: "Kapsule einrichten",
    description: "Die Lösung wird kontrolliert eingebunden, ohne Ihre bestehende Security-Landschaft unnötig umzubauen.",
  },
  {
    number: "03",
    title: "Wirkung sichtbar machen",
    description: "Blockierte und erlaubte Anfragen werden nachvollziehbar ausgewertet und gemeinsam besprochen.",
  },
  {
    number: "04",
    title: "Ergebnisse bewerten",
    description: "Wir halten Nutzen, Grenzen und nächste Schritte offen fest – auch wenn der Pilot nicht weitergeführt wird.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10">
        <Image
          src="/images/home-hero.jpg"
          alt="Moderne Arbeitsumgebung eines Schweizer KMU"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="hero-scrim" />

        <div className="section-shell relative z-10 flex min-h-[100svh] items-center pb-12 pt-24 md:pb-14 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy drop-shadow-[0_3px_28px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl">
              Digitale Sicherheit. <span className="text-accent">Schweizerisch konsequent.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-white/78 drop-shadow-[0_2px_18px_rgba(0,0,0,0.72)] md:text-lg md:leading-8">
              Castellan entwickelt fokussierte und transparente Cybersecurity-Lösungen für Schweizer KMU. Unser erstes Produkt Kapsule stoppt gefährliche Verbindungen bereits auf DNS-Ebene.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
              >
                Kapsule kennenlernen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-black/20 px-6 text-sm font-semibold text-copy backdrop-blur-sm transition-colors hover:bg-black/40"
              >
                Pilotpartner werden
              </Link>
            </div>

          </div>
        </div>
      </section>


      <section id="unternehmen" className="content-section border-b border-white/10">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Castellan"
            title="Cybersecurity ohne Theater. Dafür mit Verantwortung."
            description="KMU brauchen keine weiteren Schlagwörter. Sie brauchen Lösungen, die verständlich eingeführt, konsequent betrieben und offen erklärt werden. Genau dafür bauen wir Castellan."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article key={principle.title} className="surface-card flex min-h-72 flex-col p-7 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-auto pt-12 text-xl font-semibold tracking-[-0.02em] text-copy">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell surface-card grid overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Produkt 01 · Kapsule</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-copy sm:text-4xl md:text-5xl">
              Risiken stoppen, bevor die Verbindung entsteht.
            </h2>
            <p className="mt-6 text-pretty text-base leading-7 text-muted">
              Kapsule prüft DNS-Anfragen gegen Threat Intelligence und Ihre Richtlinien. Gefährliche Ziele werden blockiert, legitime Anfragen normal aufgelöst und Entscheidungen sichtbar protokolliert.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-copy">
              {["Kein Agent auf jedem Endgerät", "Zentrale Richtlinien", "Nachvollziehbare Ereignisse"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/product" className="mt-9 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-accent">
              Kapsule im Detail
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/images/candy_glass_3240x3240@3x.webp"
              alt="Kapsule Produktoberfläche"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="arbeitsweise" className="content-section border-b border-white/10">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Pilotprogramm"
            title="Erst verstehen. Dann schützen."
            description="Unser Pilot ist bewusst überschaubar. Sie wissen jederzeit, was als Nächstes passiert, welche Daten betrachtet werden und wie wir den Nutzen beurteilen."
          />

          <ol className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {pilotSteps.map((step) => (
              <li key={step.number} className="bg-panel p-7 md:p-8">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent">{step.number}</p>
                <h3 className="mt-10 text-lg font-semibold text-copy">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section border-b border-white/10 bg-panel/35">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <MediaPlaceholder
            aspect="portrait"
            label="Ansprechpartner bei Castellan"
            hint="Authentisches Portrait oder Gesprächssituation in Zürich"
            className="mx-auto w-full max-w-md lg:mx-0"
          />

          <div>
            <p className="eyebrow">Transparenz</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl md:text-5xl">
              Sie wissen, was wir tun – und was nicht.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Gute Sicherheit entsteht nicht durch Geheimniskrämerei. Wir erklären Entscheidungen verständlich, dokumentieren Leistungsgrenzen und sprechen Probleme an, bevor sie zu Überraschungen werden.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <Eye className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-semibold text-copy">Klare Sichtbarkeit</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Entscheidungen und Ereignisse bleiben nachvollziehbar.</p>
              </div>
              <div className="surface-card p-6">
                <Handshake className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-semibold text-copy">Ehrliche Zusammenarbeit</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Keine künstlichen Versprechen, keine versteckten Grenzen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell glass-layer overflow-hidden p-7 sm:p-10 md:p-14">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow">Nächster Schritt</p>
              <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-copy sm:text-4xl md:text-5xl">
                Machen wir Ihr Netzwerk gemeinsam widerstandsfähiger.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Erzählen Sie uns, wie Ihre Umgebung aussieht. Wir sagen offen, ob Kapsule für einen Pilotbetrieb sinnvoll ist.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-sunshine"
            >
              Pilotgespräch vereinbaren
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
