import { LocalizedHome } from "@/components/site/localized-home";
import { JsonLd } from "@/components/seo/json-ld";
import { createLocalizedMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Toleo GmbH | Advisory, Investments & Market Entry",
  description:
    "Toleo GmbH, managed by Holger Rumscheidt and Nicole Rumscheidt: advisory, investments, market entry and operational execution.",
  path: "/en",
  locale: "en_US",
  germanPath: "/",
  englishPath: "/en",
});

export default function EnglishHome() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <LocalizedHome locale="en" />
    </>
  );
}
