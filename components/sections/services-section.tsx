import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";
import { SectionTitle } from "@/components/ui";

type ServicesSectionProps = {
  content: SiteContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="section services-section" id="leistungen">
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
              <Reveal key={service.title} delay={index * 0.04}>
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
      </div>
    </section>
  );
}
