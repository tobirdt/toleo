import { ContentShell } from "@/components/content/content-shell";
import { PageCta } from "@/components/content/page-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/ui";
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
        activeHref="/leistungen"
        hero={{
          variant: "services",
          kicker: "Leistungen",
          title: "Strategische Beratung mit operativer Bodenhaftung",
          lead: "Toleo verbindet Strategie mit Umsetzung – von Markteintritt und Positionierung bis zu Vertrieb, Finanzen und Compliance.",
        }}
      >
        <section className="content-section services-index-section">
          <div className="content-services-index">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;

              return (
                <section key={service.title}>
                  <span className="content-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                  </div>
                  <Icon className="content-service-icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                </section>
              );
            })}
          </div>
        </section>

        <section className="content-section content-process-section services-process-section">
          <SectionTitle title="Von der Analyse bis zur Umsetzung" tone="blue" animated={false} />
          <p className="content-process-lead">
            Projekte folgen einem klaren Ablauf: Markt und Rahmenbedingungen analysieren,
            Positionierung und Geschäftsmodell entwickeln, den Markteintritt vorbereiten und die
            operative Umsetzung mit Management, Vertrieb, Marketing und Controlling verbinden.
          </p>
          <ol className="content-process-list">
            {content.process.phases.map((phase) => (
              <li key={phase.number}>
                <strong>{phase.title}</strong>
                <span>{phase.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <PageCta
          primary={{ label: "Leistung anfragen", href: "/#kontakt" }}
          secondary={[
            { label: "Über Toleo", href: "/unternehmen" },
            { label: "Holger Rumscheidt", href: "/holger-rumscheidt" },
          ]}
        />
      </ContentShell>
    </>
  );
}
