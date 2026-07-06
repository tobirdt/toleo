import type { Metadata } from "next";
import { LocalizedHome } from "@/components/site/localized-home";
import { getSiteContent } from "@/lib/site-content";

const content = getSiteContent("de");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: "https://toleo.biz",
    siteName: "Toleo GmbH",
    locale: content.meta.ogLocale,
    type: "website"
  }
};

export default function Home() {
  return <LocalizedHome locale="de" />;
}
