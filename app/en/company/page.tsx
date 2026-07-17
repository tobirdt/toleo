import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
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
        alternateLabel="DE"
      >
        <p className="section-kicker">Company</p>
        <h1>Toleo GmbH</h1>
        <p className="content-intro">
          A family holding and advisory boutique for growth, market access and reliable execution.
        </p>

        <section>
          <h2>Advisory and investments since 2019</h2>
          <p>
            Toleo GmbH establishes, acquires, holds, manages and advises investments in Germany and
            abroad. Its work is built around clear structures, operational execution and sustainable
            growth in specialized markets.
          </p>
          <p>
            Services range from analysis, positioning and market entry to sales, marketing, finance,
            controlling and regulatory matters.
          </p>
        </section>

        <section>
          <h2>Management</h2>
          <p>Toleo GmbH is represented by Managing Directors Holger Rumscheidt and Nicole Rumscheidt.</p>
          <p><a className="text-link" href="/en/holger-rumscheidt">Company profile of Holger Rumscheidt</a></p>
        </section>

        <section>
          <h2>Approach</h2>
          <ol className="process-list">
            <li><strong>Analysis</strong><span>Assess market potential, competition and regulation.</span></li>
            <li><strong>Strategy</strong><span>Develop positioning, business model and market access.</span></li>
            <li><strong>Market Entry</strong><span>Connect networks, compliance knowledge and local expertise.</span></li>
            <li><strong>Execution</strong><span>Align management, sales, marketing and controlling.</span></li>
            <li><strong>Investment</strong><span>Structure long-term partnerships and investments.</span></li>
          </ol>
        </section>

        <div className="content-cta">
          <a href="/en/services">Explore services</a>
          <a href="/en/holger-rumscheidt">Holger Rumscheidt</a>
          <a href="/en#kontakt">Start a conversation</a>
        </div>
      </ContentShell>
    </>
  );
}
