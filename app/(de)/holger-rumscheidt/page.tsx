import { ContentShell } from "@/components/content/content-shell";
import { PageCta } from "@/components/content/page-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { BrandDots, SectionTitle } from "@/components/ui";
import {
  SITE_URL,
  breadcrumbJsonLd,
  createLocalizedMetadata,
} from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Holger Rumscheidt | Geschäftsführer der Toleo GmbH",
  description:
    "Holger Rumscheidt ist Geschäftsführer der Toleo GmbH in Taufkirchen. Informationen zur Tätigkeit, zum Unternehmen und den Beratungsfeldern.",
  path: "/holger-rumscheidt",
  locale: "de_DE",
  germanPath: "/holger-rumscheidt",
  englishPath: "/en/holger-rumscheidt",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/" },
  { name: "Holger Rumscheidt", path: "/holger-rumscheidt" },
];

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/holger-rumscheidt#profile`,
  url: `${SITE_URL}/holger-rumscheidt`,
  name: "Holger Rumscheidt | Geschäftsführer der Toleo GmbH",
  description:
    "Unternehmensprofil von Holger Rumscheidt, Geschäftsführer der Toleo GmbH.",
  inLanguage: "de",
  dateModified: "2026-07-17",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/holger-rumscheidt#person`,
    name: "Holger Rumscheidt",
    jobTitle: "Geschäftsführer",
    url: `${SITE_URL}/holger-rumscheidt`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
};

export default function HolgerRumscheidtPage() {
  return (
    <>
      <JsonLd data={profileJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="de"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Holger Rumscheidt" },
        ]}
        alternateHref="/en/holger-rumscheidt"
        activeHref="/holger-rumscheidt"
        hero={{
          variant: "profile",
          kicker: "Geschäftsführung",
          title: "Holger Rumscheidt",
          lead: "Geschäftsführer der Toleo GmbH in Taufkirchen.",
        }}
      >
        <section className="content-section profile-overview">
          <SectionTitle title="Holger Rumscheidt und die Toleo GmbH" tone="blue" animated={false} />
          <div className="content-prose">
            <p>
              Holger Rumscheidt ist Geschäftsführer der Toleo GmbH. Gemeinsam mit Nicole
              Rumscheidt vertritt er die Gesellschaft. Die Toleo GmbH ist eine seit 2019 bestehende
              Familienholding und Beratungsboutique mit Sitz in Taufkirchen bei München.
            </p>
            <p>
              Das Unternehmen verbindet strategische Beratung, Marktzugang und operative Umsetzung
              mit dem Erwerb, dem Halten und der Verwaltung von Beteiligungen im In- und Ausland.
            </p>
          </div>
        </section>

        <section className="content-section profile-fields-section">
          <SectionTitle title="Tätigkeitsfelder der Toleo GmbH" animated={false} />
          <div className="profile-fields">
            <div><span className="profile-field-dot" /><h3>Markteintritt &amp; Strategie</h3><p>Analyse, Positionierung und Begleitung nationaler und internationaler Markteintritte.</p></div>
            <div><span className="profile-field-dot" /><h3>Vertrieb &amp; Marketing</h3><p>Vertriebsunterstützung, Markenführung, Marketingplanung und Audits.</p></div>
            <div><span className="profile-field-dot" /><h3>Beteiligungen &amp; Umsetzung</h3><p>Aufbau, Erwerb und aktive Begleitung von Beteiligungen und Projekten.</p></div>
            <div><span className="profile-field-dot" /><h3>Finanzen &amp; Regulierung</h3><p>Geschäftsplanung, Controlling und Unterstützung in regulierten Märkten.</p></div>
          </div>
        </section>

        <aside className="profile-quote-section">
          <div className="profile-quote-glow profile-quote-glow-blue" aria-hidden="true" />
          <div className="profile-quote-glow profile-quote-glow-red" aria-hidden="true" />
          <div className="profile-quote-inner">
            <BrandDots mode="signature" size={9} />
            <blockquote>
              „Man trifft sich immer zweimal im Leben. Deshalb ist es entscheidend, immer fair und
              freundlich miteinander umzugehen und mit Freude und Überzeugung dabei zu sein.“
              <cite>Holger Rumscheidt, Geschäftsführer der Toleo GmbH</cite>
            </blockquote>
          </div>
        </aside>

        <section className="content-section facts-section">
          <SectionTitle title="Unternehmensangaben" tone="blue" animated={false} />
          <dl className="fact-list">
            <div><dt>Unternehmen</dt><dd>Toleo GmbH</dd></div>
            <div><dt>Funktion</dt><dd>Geschäftsführer</dd></div>
            <div><dt>Sitz</dt><dd>Taufkirchen, Deutschland</dd></div>
            <div><dt>Handelsregister</dt><dd>Amtsgericht München, HRB 249991</dd></div>
          </dl>
        </section>

        <PageCta
          primary={{ label: "Kontakt aufnehmen", href: "/#kontakt" }}
          secondary={[
            { label: "Mehr über die Toleo GmbH", href: "/unternehmen" },
            { label: "Leistungen der Toleo GmbH", href: "/leistungen" },
          ]}
        />
      </ContentShell>
    </>
  );
}
