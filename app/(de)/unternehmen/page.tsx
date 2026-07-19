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
        activeHref="/unternehmen"
        hero={{
          variant: "company",
          kicker: "Unternehmen",
          title: "Toleo GmbH",
          lead: "Familienholding und Beratungsboutique für Wachstum, Marktzugang und belastbare Umsetzung.",
        }}
      >
        <section className="content-section company-overview">
          <SectionTitle title="Beratung und Beteiligungen seit 2019" tone="blue" animated={false} />
          <div className="content-prose">
            <p>
              Die Toleo GmbH gründet, erwirbt, hält, verwaltet und berät Beteiligungen im In- und
              Ausland. Im Mittelpunkt stehen klare Strukturen, operative Umsetzung und nachhaltiges
              Wachstum in spezialisierten Märkten.
            </p>
            <p>
              Das Leistungsspektrum reicht von Analyse, Positionierung und Markteintritt bis zu
              Vertrieb, Marketing, Finanzen, Controlling und regulatorischen Fragestellungen.
            </p>
          </div>
        </section>

        <section className="content-section management-highlight">
          <div className="management-mark"><BrandDots mode="signature" size={9} /></div>
          <div>
            <SectionTitle title="Geschäftsführung" animated={false} />
            <p>
              Die Toleo GmbH wird durch Holger Rumscheidt und Nicole Rumscheidt als Geschäftsführer
              vertreten.
            </p>
            <a className="content-arrow-link" href="/holger-rumscheidt">
              Unternehmensprofil von Holger Rumscheidt
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="content-section content-process-section">
          <SectionTitle title="Arbeitsweise" tone="blue" animated={false} />
          <ol className="content-process-list">
            <li><strong>Analyse</strong><span>Marktpotenzial, Wettbewerb und Regulierung bewerten.</span></li>
            <li><strong>Strategie</strong><span>Positionierung, Geschäftsmodell und Marktzugang entwickeln.</span></li>
            <li><strong>Markteintritt</strong><span>Netzwerk, Compliance-Wissen und lokale Expertise verbinden.</span></li>
            <li><strong>Umsetzung</strong><span>Management, Vertrieb, Marketing und Controlling verzahnen.</span></li>
            <li><strong>Beteiligung</strong><span>Langfristige Partnerschaften und Investitionen strukturieren.</span></li>
          </ol>
        </section>

        <PageCta
          primary={{ label: "Gespräch starten", href: "/#kontakt" }}
          secondary={[
            { label: "Leistungen ansehen", href: "/leistungen" },
            { label: "Holger Rumscheidt", href: "/holger-rumscheidt" },
          ]}
        />
      </ContentShell>
    </>
  );
}
