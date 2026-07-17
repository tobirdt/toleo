import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-07-17T00:00:00.000Z");

const translatedPages = [
  { de: "/", en: "/en", priority: 1 },
  { de: "/unternehmen", en: "/en/company", priority: 0.9 },
  { de: "/holger-rumscheidt", en: "/en/holger-rumscheidt", priority: 0.9 },
  { de: "/leistungen", en: "/en/services", priority: 0.8 },
  { de: "/impressum", en: "/en/legal-notice", priority: 0.2 },
  { de: "/datenschutz", en: "/en/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return translatedPages.flatMap(({ de, en, priority }) => {
    const languages = {
      de: absoluteUrl(de),
      en: absoluteUrl(en),
      "x-default": absoluteUrl(de),
    };

    return [
      {
        url: absoluteUrl(de),
        lastModified,
        priority,
        alternates: { languages },
      },
      {
        url: absoluteUrl(en),
        lastModified,
        priority,
        alternates: { languages },
      },
    ];
  });
}
