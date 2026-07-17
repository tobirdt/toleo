import { ContentShell } from "@/components/content/content-shell";
import { JsonLd } from "@/components/seo/json-ld";
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
        alternateLabel="DE"
      >
        <p className="section-kicker">Services</p>
        <h1>Strategic advisory with operational discipline</h1>
        <p className="content-intro">
          Toleo connects strategy with execution – from market entry and positioning to sales,
          finance and compliance.
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
          <h2>From analysis to execution</h2>
          <p>
            Projects follow a clear sequence: analyse the market and its framework, develop the
            positioning and business model, prepare market entry and connect operational execution
            with management, sales, marketing and controlling.
          </p>
        </section>

        <div className="content-cta">
          <a href="/en/company">About Toleo</a>
          <a href="/en/holger-rumscheidt">Holger Rumscheidt</a>
          <a href="/en#kontakt">Request a conversation</a>
        </div>
      </ContentShell>
    </>
  );
}
