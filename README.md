
<div align="center">

# Castellan

### Cybersecurity für Schweizer KMU – klar, konsequent und transparent.

Die öffentliche Unternehmens- und Produktwebsite von **Castellan**.<br>
**Kapsule** ist das erste Produkt: ein fokussierter DNS-Schutz, der riskante Verbindungen stoppt, bevor sie entstehen.

</div>

![Castellan Website Hero](./public/images/home-hero.jpg)

## Über das Projekt

Diese Website bildet den digitalen Markenauftritt von Castellan. Sie positioniert das Unternehmen als modernen und verlässlichen Cybersecurity-Partner für Schweizer KMU und stellt mit Kapsule das erste Pilotprodukt vor.

Der Auftritt konzentriert sich auf drei Grundsätze:

- **Konsequenz:** klar definierte Risiken zuverlässig reduzieren
- **Transparenz:** Entscheidungen, Wirkung und Grenzen offen erklären
- **Nähe:** direkte Ansprechpartner statt anonymer Support-Schleifen

> Dieses Repository enthält ausschliesslich die öffentliche Marketingwebsite. DNS-Engine, Control API und Security Console sind nicht Bestandteil dieses Projekts.

## Seiten

| Route | Inhalt |
| --- | --- |
| `/` | Unternehmenspositionierung, Arbeitsweise und Kapsule-Einstieg |
| `/product` | Funktionsweise, Schutzkategorien und Pilotprogramm von Kapsule |
| `/contact` | Kontaktinformationen und funktionsfähiges Anfrageformular |
| `/impressum` | Impressum und Haftungsausschluss |
| `/datenschutz` | Datenschutzerklärung für Website, Kontakte und Pilotbetrieb |

Das Kontaktformular validiert Anfragen serverseitig, begrenzt wiederholte Einsendungen und leitet Nachrichten ohne eigene Kontaktdatenbank über Resend an das konfigurierte Postfach weiter.

## Technologie

- [Next.js](https://nextjs.org/) mit App Router
- [React](https://react.dev/) und TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) für Icons
- `next/font` mit Inter und Newsreader
- Standalone-Output für containerisierte Deployments

## Lokal starten

Voraussetzungen:

- Node.js `20.9` oder neuer
- pnpm `10.30.2`

```powershell
git clone https://github.com/adnanmaster/castellan-website.git
cd castellan-website
pnpm install
pnpm dev -- -p 3001
```

Danach ist die Website unter [http://localhost:3001](http://localhost:3001) erreichbar.

## Produktionsbuild

```powershell
pnpm build
pnpm start -- -p 3001
```

Der Build prüft TypeScript, kompiliert alle Seiten und erzeugt die optimierte Produktionsversion.

## Kontaktformular konfigurieren

Die benötigten Variablen sind in `.env.example` dokumentiert. Für die lokale Entwicklung eine Datei `.env.local` anlegen:

```env
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL="Castellan IT Website <website@castellan-it.ch>"
CONTACT_TO_EMAIL=info@castellan-it.ch
```

`RESEND_API_KEY` wird im Resend-Dashboard erstellt. Die verifizierte Domain `castellan-it.ch` wird für den Versand verwendet; Antworten werden durch den gesetzten Reply-To-Header direkt an die im Formular angegebene Adresse des Besuchers gerichtet.

In Vercel dieselben Werte unter **Settings → Environment Variables** hinterlegen und danach ein neues Deployment auslösen. Secrets gehören nie in Git.

## Bilder austauschen

Die Bilddateien liegen unter `public/images/`:

| Datei | Verwendung |
| --- | --- |
| `home-hero.jpg` | Vollflächiges Hero-Bild der Startseite |
| `candy_glass_3240x3240@3x.webp` | Produktvisual im Kapsule-Abschnitt |
| `home-kapsule_dashboard.png` | Vorbereitetes Dashboard-Visual, derzeit nicht eingebunden |

Eine bestehende Datei kann unter demselben Namen ersetzt werden. Dadurch sind keine Änderungen am Code notwendig. Bei einem neuen Dateinamen muss der entsprechende `src`-Wert in der jeweiligen Seitenkomponente angepasst werden.

## Projektstruktur

```text
castellan-website/
├── app/
│   ├── contact/        # Kontaktseite
│   ├── product/        # Kapsule-Produktseite
│   ├── globals.css     # Farben, Oberflächen und globale Styles
│   ├── layout.tsx      # Metadaten, Fonts und gemeinsames Layout
│   └── page.tsx        # Startseite
├── components/         # Wiederverwendbare UI-Komponenten
├── design-assets/      # Originale Marken- und Logoassets
├── public/             # Öffentlich ausgelieferte Bilder und Logos
├── next.config.mjs     # Next.js-Konfiguration
└── tailwind.config.ts  # Design-Tokens und Tailwind-Konfiguration
```

## Deployment mit Vercel

1. Das Repository in [Vercel](https://vercel.com/) als neues Projekt importieren.
2. Das automatisch erkannte Framework **Next.js** beibehalten.
3. Build- und Output-Einstellungen unverändert lassen.
4. Deployment starten.
5. Unter **Settings → Domains** die gewünschte Castellan-Domain verbinden.

Jeder spätere Push auf `main` löst automatisch ein neues Produktionsdeployment aus.

## Weiterentwicklung

Geplante nächste Schritte:

- kuratierte Markenbilder anstelle der verbleibenden Platzhalter
- finales Farb- und Kontrast-Finetuning
- finale Domain-, Open-Graph- und SEO-Konfiguration vor dem Launch

---

<div align="center">

**Castellan**<br>
Digitale Sicherheit. Schweizerisch konsequent.

</div>
