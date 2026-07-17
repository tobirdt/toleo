import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, createLocalizedMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

const content = getSiteContent("de");

export const metadata = createLocalizedMetadata({
  title: "Leistungen | Strategie, Markteintritt & Beteiligungen | Toleo",
  description:
    "Leistungen der Toleo GmbH: Markteintritt, Strategie, Vertrieb, Marketing, Finanzen, Regulierung, Hospitality und Franchise.",
  path: "/leistungen",
  locale: "de_DE",
  germanPath: "/leistungen",
  englishPath: "/en/services",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/" },
  { name: "Leistungen", path: "/leistungen" },
];

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="de"
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]}
        alternateHref="/en/services"
        alternateLabel="EN"
      >
        <p className="section-kicker">Leistungen</p>
        <h1>Strategische Beratung mit operativer Bodenhaftung</h1>
        <p className="content-intro">
          Toleo verbindet Strategie mit Umsetzung – von Markteintritt und Positionierung bis zu
          Vertrieb, Finanzen und Compliance.
        </p>

        <div className="service-detail-list">
          {content.services.items.map((service, index) => (
            <section key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </section>
          ))}
        </div>

        <section>
          <h2>Von der Analyse bis zur Umsetzung</h2>
          <p>
            Projekte folgen einem klaren Ablauf: Markt und Rahmenbedingungen analysieren,
            Positionierung und Geschäftsmodell entwickeln, den Markteintritt vorbereiten und die
            operative Umsetzung mit Management, Vertrieb, Marketing und Controlling verbinden.
          </p>
        </section>

        <div className="content-cta">
          <a href="/unternehmen">Über Toleo</a>
          <a href="/holger-rumscheidt">Holger Rumscheidt</a>
          <a href="/#kontakt">Leistung anfragen</a>
        </div>
      </ContentShell>
    </>
  );
}
