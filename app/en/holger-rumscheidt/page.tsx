import { ContentShell } from "@/components/content/content-shell";
import { PageCta } from "@/components/content/page-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { BrandDots, SectionTitle } from "@/components/ui";
import { SITE_URL, breadcrumbJsonLd, createLocalizedMetadata } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Holger Rumscheidt | Managing Director of Toleo GmbH",
  description:
    "Holger Rumscheidt is Managing Director of Toleo GmbH in Taufkirchen. Information about the company and its advisory activities.",
  path: "/en/holger-rumscheidt",
  locale: "en_US",
  germanPath: "/holger-rumscheidt",
  englishPath: "/en/holger-rumscheidt",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/en" },
  { name: "Holger Rumscheidt", path: "/en/holger-rumscheidt" },
];

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/en/holger-rumscheidt#profile`,
  url: `${SITE_URL}/en/holger-rumscheidt`,
  name: "Holger Rumscheidt | Managing Director of Toleo GmbH",
  description: "Company profile of Holger Rumscheidt, Managing Director of Toleo GmbH.",
  inLanguage: "en",
  dateModified: "2026-07-17",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/holger-rumscheidt#person`,
    name: "Holger Rumscheidt",
    jobTitle: "Managing Director",
    url: `${SITE_URL}/holger-rumscheidt`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
};

export default function HolgerRumscheidtEnglishPage() {
  return (
    <>
      <JsonLd data={profileJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="en"
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Holger Rumscheidt" }]}
        alternateHref="/holger-rumscheidt"
        activeHref="/en/holger-rumscheidt"
        hero={{
          variant: "profile",
          kicker: "Management",
          title: "Holger Rumscheidt",
          lead: "Managing Director of Toleo GmbH in Taufkirchen, Germany.",
        }}
      >
        <section className="content-section profile-overview">
          <SectionTitle title="Holger Rumscheidt and Toleo GmbH" tone="blue" animated={false} />
          <div className="content-prose">
            <p>
              Holger Rumscheidt is Managing Director of Toleo GmbH. He represents the company
              together with Nicole Rumscheidt. Toleo GmbH is a family holding and advisory boutique
              established in 2019 and based in Taufkirchen near Munich.
            </p>
            <p>
              The company combines strategic advisory, market access and operational execution with
              establishing, acquiring, holding and managing investments in Germany and abroad.
            </p>
          </div>
        </section>

        <section className="content-section profile-fields-section">
          <SectionTitle title="Fields of activity at Toleo GmbH" animated={false} />
          <div className="profile-fields">
            <div><span className="profile-field-dot" /><h3>Market Entry &amp; Strategy</h3><p>Analysis, positioning and support for national and international market entries.</p></div>
            <div><span className="profile-field-dot" /><h3>Sales &amp; Marketing</h3><p>Sales support, brand management, marketing planning and audits.</p></div>
            <div><span className="profile-field-dot" /><h3>Investments &amp; Execution</h3><p>Establishing, acquiring and supporting investments and projects.</p></div>
            <div><span className="profile-field-dot" /><h3>Finance &amp; Regulation</h3><p>Business planning, controlling and support in regulated markets.</p></div>
          </div>
        </section>

        <aside className="profile-quote-section">
          <div className="profile-quote-glow profile-quote-glow-blue" aria-hidden="true" />
          <div className="profile-quote-glow profile-quote-glow-red" aria-hidden="true" />
          <div className="profile-quote-inner">
            <BrandDots mode="signature" size={9} />
            <blockquote>
              “You always meet twice in life. That is why it is essential to treat people fairly and
              kindly, and to work with joy and conviction.”
              <cite>Holger Rumscheidt, Managing Director of Toleo GmbH</cite>
            </blockquote>
          </div>
        </aside>

        <section className="content-section facts-section">
          <SectionTitle title="Company details" tone="blue" animated={false} />
          <dl className="fact-list">
            <div><dt>Company</dt><dd>Toleo GmbH</dd></div>
            <div><dt>Position</dt><dd>Managing Director</dd></div>
            <div><dt>Registered office</dt><dd>Taufkirchen, Germany</dd></div>
            <div><dt>Commercial register</dt><dd>Local Court of Munich, HRB 249991</dd></div>
          </dl>
        </section>

        <PageCta
          primary={{ label: "Get in touch", href: "/en#kontakt" }}
          secondary={[
            { label: "About Toleo GmbH", href: "/en/company" },
            { label: "Services of Toleo GmbH", href: "/en/services" },
          ]}
        />
      </ContentShell>
    </>
  );
}
