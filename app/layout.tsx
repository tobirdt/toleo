import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toleo.biz"),
  title: "Toleo GmbH | Smart Investments",
  description:
    "Familienholding und Beratungsboutique für Strategie, Markteintritt, Beteiligungen und operative Umsetzung.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Toleo GmbH | Smart Investments",
    description:
      "Familienholding und Beratungsboutique für Strategie, Markteintritt, Beteiligungen und operative Umsetzung.",
    url: "https://toleo.biz",
    siteName: "Toleo GmbH",
    locale: "de_DE",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
