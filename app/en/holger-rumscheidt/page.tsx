import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
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
        alternateLabel="DE"
      >
        <p className="section-kicker">Management</p>
        <h1>Holger Rumscheidt</h1>
        <p className="content-intro">Managing Director of Toleo GmbH in Taufkirchen, Germany.</p>

        <section>
          <h2>Holger Rumscheidt and Toleo GmbH</h2>
          <p>
            Holger Rumscheidt is Managing Director of Toleo GmbH. He represents the company
            together with Nicole Rumscheidt. Toleo GmbH is a family holding and advisory boutique
            established in 2019 and based in Taufkirchen near Munich.
          </p>
          <p>
            The company combines strategic advisory, market access and operational execution with
            establishing, acquiring, holding and managing investments in Germany and abroad.
          </p>
        </section>

        <section>
          <h2>Fields of activity at Toleo GmbH</h2>
          <div className="content-card-grid">
            <div className="content-card"><h3>Market Entry &amp; Strategy</h3><p>Analysis, positioning and support for national and international market entries.</p></div>
            <div className="content-card"><h3>Sales &amp; Marketing</h3><p>Sales support, brand management, marketing planning and audits.</p></div>
            <div className="content-card"><h3>Investments &amp; Execution</h3><p>Establishing, acquiring and supporting investments and projects.</p></div>
            <div className="content-card"><h3>Finance &amp; Regulation</h3><p>Business planning, controlling and support in regulated markets.</p></div>
          </div>
        </section>

        <blockquote className="content-quote">
          “You always meet twice in life. That is why it is essential to treat people fairly and
          kindly, and to work with joy and conviction.”
          <cite>Holger Rumscheidt, Managing Director of Toleo GmbH</cite>
        </blockquote>

        <section>
          <h2>Company details</h2>
          <dl className="fact-list">
            <div><dt>Company</dt><dd>Toleo GmbH</dd></div>
            <div><dt>Position</dt><dd>Managing Director</dd></div>
            <div><dt>Registered office</dt><dd>Taufkirchen, Germany</dd></div>
            <div><dt>Commercial register</dt><dd>Local Court of Munich, HRB 249991</dd></div>
          </dl>
        </section>

        <div className="content-cta">
          <a href="/en/company">About Toleo GmbH</a>
          <a href="/en/services">Services of Toleo GmbH</a>
          <a href="/en#kontakt">Get in touch</a>
        </div>
      </ContentShell>
    </>
  );
}
