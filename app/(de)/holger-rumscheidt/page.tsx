import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
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
        alternateLabel="EN"
      >
        <p className="section-kicker">Geschäftsführung</p>
        <h1>Holger Rumscheidt</h1>
        <p className="content-intro">Geschäftsführer der Toleo GmbH in Taufkirchen.</p>

        <section>
          <h2>Holger Rumscheidt und die Toleo GmbH</h2>
          <p>
            Holger Rumscheidt ist Geschäftsführer der Toleo GmbH. Gemeinsam mit Nicole
            Rumscheidt vertritt er die Gesellschaft. Die Toleo GmbH ist eine seit 2019 bestehende
            Familienholding und Beratungsboutique mit Sitz in Taufkirchen bei München.
          </p>
          <p>
            Das Unternehmen verbindet strategische Beratung, Marktzugang und operative Umsetzung
            mit dem Erwerb, dem Halten und der Verwaltung von Beteiligungen im In- und Ausland.
          </p>
        </section>

        <section>
          <h2>Tätigkeitsfelder der Toleo GmbH</h2>
          <div className="content-card-grid">
            <div className="content-card">
              <h3>Markteintritt &amp; Strategie</h3>
              <p>Analyse, Positionierung und Begleitung nationaler und internationaler Markteintritte.</p>
            </div>
            <div className="content-card">
              <h3>Vertrieb &amp; Marketing</h3>
              <p>Vertriebsunterstützung, Markenführung, Marketingplanung und Audits.</p>
            </div>
            <div className="content-card">
              <h3>Beteiligungen &amp; Umsetzung</h3>
              <p>Aufbau, Erwerb und aktive Begleitung von Beteiligungen und Projekten.</p>
            </div>
            <div className="content-card">
              <h3>Finanzen &amp; Regulierung</h3>
              <p>Geschäftsplanung, Controlling und Unterstützung in regulierten Märkten.</p>
            </div>
          </div>
        </section>

        <blockquote className="content-quote">
          „Man trifft sich immer zweimal im Leben. Deshalb ist es entscheidend, immer fair und
          freundlich miteinander umzugehen und mit Freude und Überzeugung dabei zu sein.“
          <cite>Holger Rumscheidt, Geschäftsführer der Toleo GmbH</cite>
        </blockquote>

        <section>
          <h2>Unternehmensangaben</h2>
          <dl className="fact-list">
            <div><dt>Unternehmen</dt><dd>Toleo GmbH</dd></div>
            <div><dt>Funktion</dt><dd>Geschäftsführer</dd></div>
            <div><dt>Sitz</dt><dd>Taufkirchen, Deutschland</dd></div>
            <div><dt>Handelsregister</dt><dd>Amtsgericht München, HRB 249991</dd></div>
          </dl>
        </section>

        <div className="content-cta">
          <a href="/unternehmen">Mehr über die Toleo GmbH</a>
          <a href="/leistungen">Leistungen der Toleo GmbH</a>
          <a href="/#kontakt">Kontakt aufnehmen</a>
        </div>
      </ContentShell>
    </>
  );
}
