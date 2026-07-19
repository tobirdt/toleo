import { Reveal } from "@/components/motion/reveal";
import { ScrollStage } from "@/components/motion/scroll-stage";
import type { SiteContent } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui";

type ServicesSectionProps = {
  content: SiteContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <ScrollStage id="leistungen" className="services-section" extra={90} endHold={0.22}>
      <div className="section-inner">
        <Reveal>
          <div className="section-heading compact">
            <p className="section-kicker">{content.kicker}</p>
            <SectionTitle title={content.title} tone="blue" />
            <p>{content.copy}</p>
          </div>
        </Reveal>

        <div className="service-index" aria-label={content.navAria}>
          {content.items.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title}>
                <article className="service-row">
                  <span className="service-row-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>
                    <span className="desktop-copy">{service.text}</span>
                    <span className="mobile-copy">{service.textMobile}</span>
                  </p>
                  <Icon className="service-row-icon" size={20} aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
        <a className="section-more-link" href={content.moreHref}>
          {content.moreLink}
        </a>
      </div>
    </ScrollStage>
  );
}
