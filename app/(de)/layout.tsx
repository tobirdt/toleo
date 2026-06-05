import type { Metadata } from "next";
import "../globals.css";

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
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
