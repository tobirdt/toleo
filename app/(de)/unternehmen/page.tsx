import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SITE_URL,
  breadcrumbJsonLd,
  createLocalizedMetadata,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Toleo GmbH | Unternehmen, Beratung & Beteiligungen",
  description:
    "Die Toleo GmbH ist eine Familienholding und Beratungsboutique für Strategie, Markteintritt, Beteiligungen und operative Umsetzung.",
  path: "/unternehmen",
  locale: "de_DE",
  germanPath: "/unternehmen",
  englishPath: "/en/company",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/" },
  { name: "Unternehmen", path: "/unternehmen" },
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/unternehmen#page`,
  url: `${SITE_URL}/unternehmen`,
  name: "Toleo GmbH | Unternehmen",
  inLanguage: "de",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function UnternehmenPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="de"
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Unternehmen" }]}
        alternateHref="/en/company"
        alternateLabel="EN"
      >
        <p className="section-kicker">Unternehmen</p>
        <h1>Toleo GmbH</h1>
        <p className="content-intro">
          Familienholding und Beratungsboutique für Wachstum, Marktzugang und belastbare Umsetzung.
        </p>

        <section>
          <h2>Beratung und Beteiligungen seit 2019</h2>
          <p>
            Die Toleo GmbH gründet, erwirbt, hält, verwaltet und berät Beteiligungen im In- und
            Ausland. Im Mittelpunkt stehen klare Strukturen, operative Umsetzung und nachhaltiges
            Wachstum in spezialisierten Märkten.
          </p>
          <p>
            Das Leistungsspektrum reicht von Analyse, Positionierung und Markteintritt bis zu
            Vertrieb, Marketing, Finanzen, Controlling und regulatorischen Fragestellungen.
          </p>
        </section>

        <section>
          <h2>Geschäftsführung</h2>
          <p>
            Die Toleo GmbH wird durch Holger Rumscheidt und Nicole Rumscheidt als Geschäftsführer
            vertreten.
          </p>
          <p><a className="text-link" href="/holger-rumscheidt">Unternehmensprofil von Holger Rumscheidt</a></p>
        </section>

        <section>
          <h2>Arbeitsweise</h2>
          <ol className="process-list">
            <li><strong>Analyse</strong><span>Marktpotenzial, Wettbewerb und Regulierung bewerten.</span></li>
            <li><strong>Strategie</strong><span>Positionierung, Geschäftsmodell und Marktzugang entwickeln.</span></li>
            <li><strong>Markteintritt</strong><span>Netzwerk, Compliance-Wissen und lokale Expertise verbinden.</span></li>
            <li><strong>Umsetzung</strong><span>Management, Vertrieb, Marketing und Controlling verzahnen.</span></li>
            <li><strong>Beteiligung</strong><span>Langfristige Partnerschaften und Investitionen strukturieren.</span></li>
          </ol>
        </section>

        <div className="content-cta">
          <a href="/leistungen">Leistungen ansehen</a>
          <a href="/holger-rumscheidt">Holger Rumscheidt</a>
          <a href="/#kontakt">Gespräch starten</a>
        </div>
      </ContentShell>
    </>
  );
}
