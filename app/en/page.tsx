import type { Metadata } from "next";
import { LocalizedHome } from "@/components/site/localized-home";
import { getSiteContent } from "@/lib/site-content";

const content = getSiteContent("en");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/en",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: "https://toleo.biz/en",
    siteName: "Toleo GmbH",
    locale: content.meta.ogLocale,
    type: "website"
  }
};

export default function EnglishHome() {
  return <LocalizedHome locale="en" />;
}
