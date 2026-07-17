import type { Metadata } from "next";

export const SITE_NAME = "Toleo GmbH";
export const SITE_URL = "https://www.toleo.biz";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(normalizedPath, `${SITE_URL}/`).toString();
  return normalizedPath === "/" ? url.slice(0, -1) : url;
}

type LocalizedMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale: "de_DE" | "en_US";
  germanPath: string;
  englishPath: string;
};

export function createLocalizedMetadata({
  title,
  description,
  path,
  locale,
  germanPath,
  englishPath,
}: LocalizedMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        de: absoluteUrl(germanPath),
        en: absoluteUrl(englishPath),
        "x-default": absoluteUrl(germanPath),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/toleo-logo.png`,
  foundingDate: "2019",
  email: "info@toleo.biz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ritter-Hilprand-Str. 9",
    postalCode: "82024",
    addressLocality: "Taufkirchen",
    addressCountry: "DE",
  },
  employee: [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/holger-rumscheidt#person`,
      name: "Holger Rumscheidt",
      jobTitle: "Geschäftsführer",
      url: `${SITE_URL}/holger-rumscheidt`,
    },
    {
      "@type": "Person",
      name: "Nicole Rumscheidt",
      jobTitle: "Geschäftsführerin",
    },
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Handelsregister",
    value: "Amtsgericht München, HRB 249991",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["de", "en"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
