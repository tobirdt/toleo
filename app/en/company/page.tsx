import { ContentShell } from "@/components/content/content-shell";
import { PageCta } from "@/components/content/page-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { BrandDots, SectionTitle } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import {
  SITE_URL,
  breadcrumbJsonLd,
  createLocalizedMetadata,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Toleo GmbH | Company, Advisory & Investments",
  description:
    "Toleo GmbH is a family holding and advisory boutique for strategy, market entry, investments and operational execution.",
  path: "/en/company",
  locale: "en_US",
  germanPath: "/unternehmen",
  englishPath: "/en/company",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/en" },
  { name: "Company", path: "/en/company" },
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/en/company#page`,
  url: `${SITE_URL}/en/company`,
  name: "Toleo GmbH | Company",
  inLanguage: "en",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function CompanyPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="en"
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Company" }]}
        alternateHref="/unternehmen"
        activeHref="/en/company"
        hero={{
          variant: "company",
          kicker: "Company",
          title: "Toleo GmbH",
          lead: "A family holding and advisory boutique for growth, market access and reliable execution.",
        }}
      >
        <section className="content-section company-overview">
          <SectionTitle title="Advisory and investments since 2019" tone="blue" animated={false} />
          <div className="content-prose">
            <p>
              Toleo GmbH establishes, acquires, holds, manages and advises investments in Germany and
              abroad. Its work is built around clear structures, operational execution and sustainable
              growth in specialized markets.
            </p>
            <p>
              Services range from analysis, positioning and market entry to sales, marketing, finance,
              controlling and regulatory matters.
            </p>
          </div>
        </section>

        <section className="content-section management-highlight">
          <div className="management-mark"><BrandDots mode="signature" size={9} /></div>
          <div>
            <SectionTitle title="Management" animated={false} />
            <p>Toleo GmbH is represented by Managing Directors Holger Rumscheidt and Nicole Rumscheidt.</p>
            <a className="content-arrow-link" href="/en/holger-rumscheidt">
              Company profile of Holger Rumscheidt
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="content-section content-process-section">
          <SectionTitle title="Approach" tone="blue" animated={false} />
          <ol className="content-process-list">
            <li><strong>Analysis</strong><span>Assess market potential, competition and regulation.</span></li>
            <li><strong>Strategy</strong><span>Develop positioning, business model and market access.</span></li>
            <li><strong>Market Entry</strong><span>Connect networks, compliance knowledge and local expertise.</span></li>
            <li><strong>Execution</strong><span>Align management, sales, marketing and controlling.</span></li>
            <li><strong>Investment</strong><span>Structure long-term partnerships and investments.</span></li>
          </ol>
        </section>

        <PageCta
          primary={{ label: "Start a conversation", href: "/en#kontakt" }}
          secondary={[
            { label: "Explore services", href: "/en/services" },
            { label: "Holger Rumscheidt", href: "/en/holger-rumscheidt" },
          ]}
        />
      </ContentShell>
    </>
  );
}
