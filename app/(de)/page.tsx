import { LocalizedHome } from "@/components/site/localized-home";
import { JsonLd } from "@/components/seo/json-ld";
import { createLocalizedMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Toleo GmbH | Beratung, Beteiligungen & Markteintritt",
  description:
    "Toleo GmbH mit den Geschäftsführern Holger Rumscheidt und Nicole Rumscheidt: Beratung, Beteiligungen, Markteintritt und operative Umsetzung.",
  path: "/",
  locale: "de_DE",
  germanPath: "/",
  englishPath: "/en",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <LocalizedHome locale="de" />
    </>
  );
}
