import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Castellan | Cybersecurity für Schweizer KMU",
    template: "%s | Castellan",
  },
  description:
    "Castellan entwickelt konsequente, transparente Cybersecurity-Lösungen für Schweizer KMU. Kapsule ist unser erstes Produkt für Schutz auf DNS-Ebene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className={`${inter.variable} ${newsreader.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
