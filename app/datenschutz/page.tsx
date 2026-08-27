import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Vorlage der Datenschutzerklärung für den Webauftritt von Castellan.",
};

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    text: "[Vollständigen Firmennamen, Rechtsform, Postadresse, E-Mail-Adresse und gegebenenfalls die zuständige Datenschutzkontaktperson ergänzen.]",
  },
  {
    title: "2. Umfang und Zweck der Datenbearbeitung",
    text: "[Beschreiben, welche Personendaten auf dieser Website tatsächlich bearbeitet werden und zu welchen konkreten Zwecken. Nur effektiv stattfindende Bearbeitungen aufführen.]",
  },
  {
    title: "3. Hosting und Server-Protokolle",
    text: "[Hosting-Anbieter, Serverstandorte, protokollierte technische Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Aufbewahrungsdauer ergänzen.]",
  },
  {
    title: "4. Kontaktaufnahme und Kontaktformular",
    text: "Das Kontaktformular ist derzeit noch nicht aktiv. Vor seiner Aktivierung sind die erhobenen Felder, Bearbeitungszwecke, Empfänger, Versanddienstleister und Aufbewahrungsfristen hier vollständig zu dokumentieren.",
  },
  {
    title: "5. Cookies, Analyse und eingebundene Dienste",
    text: "[Alle tatsächlich eingesetzten Cookies, Analysewerkzeuge, Schrift-, Karten-, Video-, Spam-Schutz- oder sonstigen Drittservices inklusive Zweck und Widerspruchsmöglichkeit aufführen. Nicht eingesetzte Dienste nicht vorsorglich nennen.]",
  },
  {
    title: "6. Bekanntgabe an Dritte und Auslandübermittlung",
    text: "[Auftragsbearbeiter und weitere Empfänger benennen. Bei Bearbeitung ausserhalb der Schweiz Empfängerstaat und vorhandene Garantien für einen angemessenen Datenschutz ergänzen.]",
  },
  {
    title: "7. Aufbewahrungsdauer",
    text: "[Konkrete Aufbewahrungsfristen oder nachvollziehbare Kriterien für die Löschung der jeweiligen Datenkategorien ergänzen.]",
  },
  {
    title: "8. Datensicherheit",
    text: "[Die angemessenen technischen und organisatorischen Schutzmassnahmen in verständlicher Form beschreiben, ohne sicherheitskritische Details offenzulegen.]",
  },
  {
    title: "9. Rechte betroffener Personen",
    text: "[Kontaktweg und Verfahren für Auskunft, Berichtigung, Löschung, Widerspruch, Datenherausgabe oder -übertragung sowie weitere anwendbare Rechte ergänzen.]",
  },
  {
    title: "10. Änderungen dieser Datenschutzerklärung",
    text: "[Festhalten, wie Aktualisierungen kenntlich gemacht werden und welches Datum die jeweils gültige Fassung trägt.]",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="content-section pt-16 md:pt-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Rechtliches</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] text-copy sm:text-5xl md:text-7xl">
              Datenschutz
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Transparente Informationen darüber, wie Castellan Personendaten im Zusammenhang mit dieser Website bearbeitet.
            </p>
          </div>

          <aside className="mt-12 max-w-3xl border border-accent/30 bg-accent/[0.08] p-5 text-sm leading-6 text-muted" aria-label="Hinweis zum Entwurfsstatus">
            <strong className="text-copy">Entwurf – noch keine vollständige Datenschutzerklärung.</strong>{" "}
            Die Vorlage muss nach der technischen Umsetzung anhand der tatsächlich stattfindenden Datenbearbeitungen vervollständigt und fachlich geprüft werden.
          </aside>

          <div className="mt-10 max-w-3xl divide-y divide-white/10 border-y border-white/10">
            {sections.map((section) => (
              <section key={section.title} className="py-8">
                <h2 className="text-lg font-semibold text-copy">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{section.text}</p>
              </section>
            ))}
          </div>

          <p className="mt-8 text-xs text-quiet">Stand: Entwurf vom 27. August 2026</p>
        </div>
      </section>
    </main>
  );
}
