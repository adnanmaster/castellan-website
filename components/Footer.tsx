import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { label: "Unternehmen", href: "/#unternehmen" },
  { label: "Kapsule", href: "/product" },
  { label: "Arbeitsweise", href: "/#arbeitsweise" },
  { label: "Kontakt", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel/75">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div>
          <BrandLogo href="/" className="w-44" />
          <p className="mt-6 max-w-md text-balance text-2xl font-semibold tracking-[-0.025em] text-copy">
            Digitale Sicherheit. Schweizerisch konsequent.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            Castellan entwickelt fokussierte und transparente Cybersecurity-Lösungen für Schweizer KMU.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_auto]">
          <nav aria-label="Footer Navigation" className="flex flex-col items-start gap-2">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-copy">
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-quiet">Standort</p>
            <p className="mt-4 text-sm text-copy">Zürich, Schweiz</p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">
              Gespräch vereinbaren
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-quiet sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Castellan. Alle Rechte vorbehalten.</p>
          <p>Kapsule ist ein Produkt von Castellan.</p>
        </div>
      </div>
    </footer>
  );
}
