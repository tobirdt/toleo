import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toleo GmbH | Smart Investments",
  description:
    "Toleo GmbH ist eine Familienholding und Beratungs- und Beteiligungsgesellschaft für Strategie, Markteintritt, Sicherheit, Verteidigung und Hospitality.",
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
