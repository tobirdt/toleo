import type { Metadata } from "next";
import "../globals.css";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://toleo.biz"),
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png"
  }
};

export default function GermanRootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Zum Inhalt
        </a>
        {children}
      </body>
    </html>
  );
}
