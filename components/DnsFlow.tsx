import { ArrowDown, ArrowRight, CircleOff, Laptop, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "DNS-Anfrage",
    description: "Ein Gerät möchte eine Domain auflösen.",
    icon: Laptop,
  },
  {
    title: "Kapsule prüft",
    description: "Threat Intelligence und Richtlinien werden abgeglichen.",
    icon: ScanSearch,
  },
  {
    title: "Entscheidung",
    description: "Legitime Ziele werden erlaubt, Risiken konsequent blockiert.",
    icon: ShieldCheck,
  },
  {
    title: "Sichtbares Ergebnis",
    description: "Blockierte Verbindungen werden nachvollziehbar protokolliert.",
    icon: CircleOff,
  },
];

export default function DnsFlow() {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={step.title} className="contents">
            <article className="surface-card flex min-h-52 flex-col p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-auto pt-10 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-copy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
            {index < steps.length - 1 ? (
              <div className="grid place-items-center text-quiet" aria-hidden="true">
                <ArrowDown className="h-5 w-5 md:hidden" />
                <ArrowRight className="hidden h-5 w-5 md:block" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
