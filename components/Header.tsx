"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const navigation = [
  { label: "Unternehmen", href: "/#unternehmen" },
  { label: "Kapsule", href: "/product" },
  { label: "Arbeitsweise", href: "/#arbeitsweise" },
  { label: "Kontakt", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const filled = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      data-header-state={filled ? "filled" : "transparent"}
      className={`site-header z-50 ${isHome ? "fixed inset-x-0 top-0" : "sticky top-0"} ${
        filled ? "site-header--filled" : "site-header--transparent"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-5 md:h-[72px]">
        <BrandLogo href="/" className="w-36 shrink-0 md:w-40" priority dark={filled} />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 text-sm lg:flex">
          {navigation.map((item) => {
            const active = !item.href.includes("#") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center px-4 font-medium transition-colors ${
                  filled
                    ? active
                      ? "text-ink"
                      : "text-ink/65 hover:text-ink"
                    : active
                      ? "text-copy"
                      : "text-white/70 hover:text-copy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`hidden min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors sm:inline-flex ${
              filled ? "bg-ink text-copy hover:bg-accent hover:text-ink" : "bg-copy text-ink hover:bg-accent"
            }`}
          >
            Pilotpartner werden
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Navigation schliessen" : "Navigation öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
              filled ? "border-black/15 bg-black/[0.04] text-ink" : "border-white/15 bg-white/[0.04] text-copy"
            }`}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile Navigation" className="border-t border-black/10 lg:hidden">
          <div className="section-shell grid gap-1 py-4">
            {navigation.map((item) => {
              const active = !item.href.includes("#") && pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-12 items-center justify-between px-3 text-base font-medium ${
                    active ? "text-ink" : "text-ink/65"
                  }`}
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 text-ink/45" aria-hidden="true" />
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-copy"
            >
              Pilotpartner werden
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
