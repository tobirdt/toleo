import { ContentShell } from "@/components/content/content-shell";
import { PageCta } from "@/components/content/page-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionTitle } from "@/components/ui";
import { breadcrumbJsonLd, createLocalizedMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

const content = getSiteContent("en");

export const metadata = createLocalizedMetadata({
  title: "Services | Strategy, Market Entry & Investments | Toleo",
  description:
    "Toleo GmbH services: market entry, strategy, sales, marketing, finance, regulation, hospitality and franchise development.",
  path: "/en/services",
  locale: "en_US",
  germanPath: "/leistungen",
  englishPath: "/en/services",
});

const breadcrumbs = [
  { name: "Toleo GmbH", path: "/en" },
  { name: "Services", path: "/en/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContentShell
        locale="en"
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Services" }]}
        alternateHref="/leistungen"
        activeHref="/en/services"
        hero={{
          variant: "services",
          kicker: "Services",
          title: "Strategic advisory with operational discipline",
          lead: "Toleo connects strategy with execution – from market entry and positioning to sales, finance and compliance.",
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
          <SectionTitle title="From analysis to execution" tone="blue" animated={false} />
          <p className="content-process-lead">
            Projects follow a clear sequence: analyse the market and its framework, develop the
            positioning and business model, prepare market entry and connect operational execution
            with management, sales, marketing and controlling.
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
          primary={{ label: "Request a conversation", href: "/en#kontakt" }}
          secondary={[
            { label: "About Toleo", href: "/en/company" },
            { label: "Holger Rumscheidt", href: "/en/holger-rumscheidt" },
          ]}
        />
      </ContentShell>
    </>
  );
}
