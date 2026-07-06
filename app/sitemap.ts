import type { MetadataRoute } from "next";

const base = "https://toleo.biz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      priority: 1,
      alternates: {
        languages: { de: base, en: `${base}/en` }
      }
    },
    {
      url: `${base}/en`,
      priority: 1,
      alternates: {
        languages: { de: base, en: `${base}/en` }
      }
    },
    { url: `${base}/impressum`, priority: 0.3 },
    { url: `${base}/datenschutz`, priority: 0.3 },
    { url: `${base}/en/legal-notice`, priority: 0.3 },
    { url: `${base}/en/privacy`, priority: 0.3 }
  ];
}
