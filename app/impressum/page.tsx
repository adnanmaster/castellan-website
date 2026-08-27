import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterinformationen von Castellan.",
};

const details = [
  {
    title: "Anbieter und verantwortliche Stelle",
    content: (
      <address className="not-italic">
        <strong className="font-semibold text-copy">Castellan</strong>
        <br />
        Adnan Halder, Geschäftsführer
        <br />
        Seebahnstrasse 185
        <br />
        8004 Zürich
        <br />
        Schweiz
      </address>
    ),
  },
  {
    title: "Kontakt",
    content: (
      <p>
        Telefon: +41 76 564 43 69
        <br />
        E-Mail: <a href="mailto:adnanhalder@proton.ch">adnanhalder@proton.ch</a><br />
        Web: <a href="https://castellan-one.vercel.app">castellan-one.vercel.app</a>
      </p>
    ),
  },
];

const disclaimerItems = [
  {
    title: "Inhalte",
    text: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Gewähr für die Aktualität, Vollständigkeit und Richtigkeit der bereitgestellten Informationen. Jegliche Haftungsansprüche gegen uns, die sich auf Schäden materieller oder ideeller Art beziehen – verursacht durch die Nutzung oder Nichtnutzung der dargebotenen Inhalte bzw. durch Nutzung fehlerhafter und unvollständiger Informationen – sind grundsätzlich ausgeschlossen.",
  },
  {
    title: "Externe Links",
    text: "Unsere Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
  },
  {
    title: "Urheberrecht",
    text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung.",
  },
  {
    title: "Änderungen und Irrtümer",
    text: "Wir behalten uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot jederzeit zu ändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen. Sollten einzelne Formulierungen oder Darstellungen dieses Haftungsausschlusses unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.",
  },
];

export default function ImprintPage() {
  return (
    <main>
      <section className="content-section pt-16 md:pt-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Rechtliches</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Impressum
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Anbieterinformationen und Kontaktangaben zum Webauftritt von Castellan.
            </p>
          </div>

          <div className="mt-10 max-w-3xl divide-y divide-white/10 border-y border-white/10">
            {details.map((detail) => (
              <section key={detail.title} className="grid gap-4 py-8 sm:grid-cols-[0.42fr_0.58fr] sm:gap-10">
                <h2 className="text-base font-semibold text-copy">{detail.title}</h2>
                <div className="text-sm leading-7 text-muted">{detail.content}</div>
              </section>
            ))}
            <section className="py-8">
              <h2 className="text-xl font-semibold text-copy">Haftungsausschluss</h2>
              <ol className="mt-7 list-decimal space-y-7 pl-5 marker:font-semibold marker:text-accent">
                {disclaimerItems.map((item) => (
                  <li key={item.title} className="pl-2 text-sm leading-7 text-muted">
                    <strong className="font-semibold text-copy">{item.title}</strong>
                    <p className="mt-2">{item.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <p className="mt-8 text-xs text-quiet">Stand: 27. August 2026</p>
        </div>
      </section>
    </main>
  );
}
