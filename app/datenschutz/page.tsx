import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Castellan für Website, Geschäftskontakte und Kapsule-Pilotbetriebe.",
};

function PrivacySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold text-copy">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}

const pilotData = [
  "DNS-Anfragen und angefragte Domainnamen",
  "Zeitstempel, IP-Adressen und technische Gerätekennungen",
  "Netzwerk- oder Mandantenkennungen",
  "Sicherheitsereignisse und Blockierungsentscheidungen",
  "Konfigurations-, Diagnose- und Supportdaten",
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
              Diese Erklärung informiert darüber, wie Castellan Personendaten im Zusammenhang mit der Website, Geschäftskontakten und Kapsule-Pilotbetrieben bearbeitet.
            </p>
          </div>

      

          <div className="mt-10 max-w-3xl divide-y divide-white/10 border-y border-white/10">
            <PrivacySection title="1. Verantwortliche Stelle">
              <address className="not-italic">
                <strong className="font-semibold text-copy">Castellan · Adnan Halder</strong>
                <br />
                Seebahnstrasse 185
                <br />
                8004 Zürich, Schweiz
                <br />
                E-Mail:{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="mailto:adnanhalder@proton.ch">
                  adnanhalder@proton.ch
                </a>
                <br />
                Telefon: +41 76 564 43 69
              </address>
            </PrivacySection>

            <PrivacySection title="2. Geltungsbereich und Rollen">
              <p>
                Diese Datenschutzerklärung gilt für den öffentlichen Webauftritt von Castellan, für geschäftliche Kommunikation und Akquise sowie für die im Rahmen eines Kapsule-Pilotbetriebs durch Castellan bearbeiteten Daten.
              </p>
              <p>
                Bei Websitebetrieb, Kontaktpflege und eigener Akquise entscheidet Castellan über Zweck und Mittel der Bearbeitung. Im Kapsule-Pilotbetrieb ist grundsätzlich der jeweilige Kunde für die Datenbearbeitung in seinem Netzwerk verantwortlich; Castellan bearbeitet die technischen Daten nach den dokumentierten Weisungen des Kunden.
              </p>
            </PrivacySection>

            <PrivacySection title="3. Aufruf der Website und Hosting">
              <p>
                Die Website wird über Vercel bereitgestellt. Beim Aufruf können technisch erforderliche Daten wie IP-Adresse, Browser- und Geräteinformationen, aufgerufene URL, Zeitpunkt, Referrer sowie Diagnose- und Sicherheitsinformationen in Server-Protokollen verarbeitet werden. Dies dient der Auslieferung, Stabilität, Fehleranalyse und dem Schutz der Website.
              </p>
              <p>
                Anbieter ist Vercel Inc. Eine Bearbeitung in den USA oder weiteren Ländern kann nicht ausgeschlossen werden. Weitere Informationen enthalten die{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">
                  Datenschutzhinweise von Vercel
                </a>{" "}
                und das{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">
                  Data Processing Addendum
                </a>.
              </p>
            </PrivacySection>

            <PrivacySection title="4. Cookies, Analyse und eingebettete Inhalte">
              <p>
                Castellan setzt derzeit weder Google Analytics noch Werbe- oder Marketing-Cookies ein. Es findet keine profilbasierte Werbeanalyse statt. Die auf der Website verwendeten Schriften und Bilder werden lokal ausgeliefert.
              </p>
              <p>
                Derzeit sind keine externen Videos, Karten, Social-Media-Plugins oder vergleichbaren Inhalte eingebettet. Werden künftig Analysewerkzeuge oder externe Inhalte aktiviert, wird diese Erklärung vorab entsprechend ergänzt und, soweit erforderlich, eine Auswahl- oder Einwilligungsmöglichkeit bereitgestellt.
              </p>
            </PrivacySection>

            <PrivacySection title="5. Kontaktaufnahme und Kommunikation">
              <p>
                Wenn Sie Castellan über das Kontaktformular, telefonisch oder per E-Mail kontaktieren, bearbeiten wir die von Ihnen übermittelten Angaben. Dazu können Name, Unternehmen, Funktion, geschäftliche Kontaktdaten, Inhalt der Anfrage und technische Kommunikationsdaten gehören. Die Bearbeitung erfolgt, um Ihre Anfrage zu beantworten, einen Gesprächstermin vorzubereiten oder einen möglichen Pilotbetrieb zu besprechen.
              </p>
              <p>
                Beim Absenden des Kontaktformulars werden Name, geschäftliche E-Mail-Adresse, Unternehmen und Nachricht verschlüsselt an unsere Website übermittelt und über den E-Mail-Versanddienst Resend an unser Postfach bei Proton zugestellt. Zur Missbrauchsabwehr werden ausserdem technische Anfragedaten wie Zeitpunkt und IP-Adresse vorübergehend verarbeitet. Das Formular legt keine eigene Kundendatenbank an.
              </p>
              <p>
                Abgeschlossene Anfragen werden gelöscht, sobald sie für die Bearbeitung und eine mögliche Geschäftsbeziehung nicht mehr benötigt werden und keine gesetzlichen oder vertraglichen Aufbewahrungspflichten entgegenstehen. Eingehende Kontaktanfragen verwenden wir nicht für sachfremde Werbung.
              </p>
            </PrivacySection>

            <PrivacySection title="6. Geschäftliche Akquise">
              <p>
                Castellan nimmt potenzielle Geschäftskunden auch selbst telefonisch oder per E-Mail auf seine Leistungen und Pilotmöglichkeiten aufmerksam. Hierfür bearbeiten wir in begrenztem Umfang geschäftliche Kontaktdaten wie Name, Funktion, Unternehmen, geschäftliche Telefonnummer und E-Mail-Adresse sowie die bisherige Kontakthistorie.
              </p>
              <p>
                Die Angaben stammen aus öffentlich zugänglichen geschäftlichen Quellen, insbesondere Unternehmenswebsites und öffentlichen Verzeichnissen, aus direkter Korrespondenz oder werden von der betreffenden Person selbst mitgeteilt. Beim Erstkontakt informieren wir über unsere Identität und den geschäftlichen Zweck. Werbesperrvermerke und erklärte Widersprüche werden beachtet. Sie können einer weiteren Kontaktaufnahme jederzeit widersprechen.
              </p>
            </PrivacySection>

            <PrivacySection title="7. Datenbearbeitung im Kapsule-Pilotbetrieb">
              <p>
                Kapsule analysiert DNS-Anfragen des Kundennetzwerks, um potenziell schädliche oder nach den vereinbarten Richtlinien unerwünschte Domains zu erkennen und zu blockieren. Je nach Konfiguration können dabei insbesondere folgende technische Daten bearbeitet werden:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                {pilotData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Diese Daten werden ausschliesslich für Bereitstellung, Sicherheit, Fehlerbehebung, vereinbarte Auswertung und Dokumentation des Pilotdienstes bearbeitet. Eine Nutzung personenbezogener Kundendaten für Werbung findet nicht statt. Erkenntnisse zur Produktverbesserung werden nur in anonymisierter oder ausreichend aggregierter Form verwendet, sofern nichts anderes ausdrücklich und zulässig vereinbart wurde.
              </p>
              <p>
                Nach Abschluss des Pilotbetriebs werden die operativen Pilotdaten gelöscht oder anonymisiert, sobald sie für den geordneten Abschluss, die vereinbarte Schlussauswertung und die Behebung offener Sicherheitsvorfälle nicht mehr benötigt werden. Abweichende gesetzliche oder vertragliche Aufbewahrungspflichten bleiben vorbehalten. Die konkrete maximale Speicherdauer, Speicherorte und eingesetzten Unterauftragnehmer werden für jeden Pilotbetrieb vertraglich festgelegt.
              </p>
            </PrivacySection>

            <PrivacySection title="8. Empfänger und Dienstleister">
              <p>
                Personendaten werden nur an Dienstleister weitergegeben, soweit dies für Hosting, Kommunikation, Betrieb oder Sicherheit erforderlich ist, oder wenn eine gesetzliche Pflicht besteht. Dienstleister werden auf ihre Aufgaben beschränkt und, soweit erforderlich, vertraglich zur angemessenen Bearbeitung und Datensicherheit verpflichtet.
              </p>
              <p>
                Für den Versand von Kontaktanfragen nutzen wir Resend, einen Dienst der Plus Five Five, Inc. Dabei können E-Mail-Adresse, Nachrichteninhalt und technische Versanddaten in den USA oder weiteren Ländern bearbeitet werden. Hinweise dazu finden Sie in der{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">
                  Datenschutzerklärung von Resend
                </a>{" "}
                und im{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="https://resend.com/legal/dpa" target="_blank" rel="noreferrer">
                  Data Processing Addendum
                </a>.
              </p>
              <p>
                Für Kapsule werden Unterauftragnehmer und allfällige Bearbeitungen im Ausland vor dem jeweiligen Pilotbetrieb gegenüber dem Kunden dokumentiert. Kundendaten werden nicht verkauft.
              </p>
            </PrivacySection>

            <PrivacySection title="9. Aufbewahrung und Löschung">
              <p>
                Castellan bewahrt Personendaten nur so lange auf, wie dies für den angegebenen Zweck, die Erfüllung vertraglicher Pflichten, die IT-Sicherheit oder gesetzliche Nachweis- und Aufbewahrungspflichten erforderlich ist. Danach werden sie gelöscht oder anonymisiert. Die Fristen unterscheiden sich je nach Datenkategorie und Bearbeitungskontext.
              </p>
            </PrivacySection>

            <PrivacySection title="10. Datensicherheit">
              <p>
                Castellan trifft angemessene technische und organisatorische Massnahmen, um Personendaten vor Verlust, unberechtigtem Zugriff, Veränderung und Offenlegung zu schützen. Dazu gehören insbesondere Zugriffsbeschränkungen, verschlüsselte Übertragung, Trennung von Kundenumgebungen, Protokollierung sicherheitsrelevanter Vorgänge und geregelte Löschprozesse. Kein System kann jedoch absolute Sicherheit gewährleisten.
              </p>
            </PrivacySection>

            <PrivacySection title="11. Rechte betroffener Personen">
              <p>
                Sie können im Rahmen des anwendbaren Datenschutzrechts insbesondere Auskunft über bearbeitete Personendaten sowie deren Berichtigung, Löschung oder Herausgabe verlangen und einer bestimmten Bearbeitung widersprechen. Für entsprechende Anliegen schreiben Sie an{" "}
                <a className="text-copy underline decoration-white/30 underline-offset-4 hover:decoration-accent" href="mailto:adnanhalder@proton.ch">
                  adnanhalder@proton.ch
                </a>.
              </p>
              <p>
                Betrifft Ihr Anliegen Daten aus dem Netzwerk eines Kapsule-Kunden, ist grundsätzlich dieser Kunde die erste Anlaufstelle. Castellan unterstützt den Kunden bei der Bearbeitung des Begehrens im vertraglich vereinbarten Rahmen.
              </p>
            </PrivacySection>

            <PrivacySection title="12. Anwendbares Recht und Änderungen">
              <p>
                Die Datenbearbeitung untersteht in erster Linie dem schweizerischen Bundesgesetz über den Datenschutz. Soweit im Einzelfall weitere Datenschutzvorschriften anwendbar sind, werden auch deren Anforderungen berücksichtigt.
              </p>
              <p>
                Diese Erklärung wird angepasst, wenn sich die Website, eingesetzte Dienstleister oder der Kapsule-Betrieb wesentlich verändern. Massgebend ist die jeweils auf dieser Seite veröffentlichte Fassung.
              </p>
            </PrivacySection>
          </div>

          <p className="mt-8 text-xs text-quiet">Stand: Arbeitsentwurf vom 27. August 2026</p>
        </div>
      </section>
    </main>
  );
}
