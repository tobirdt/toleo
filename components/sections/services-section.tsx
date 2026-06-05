import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

type ServicesSectionProps = {
  content: SiteContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="section viewport-section services-section" id="leistungen">
      <div className="section-inner viewport-inner services-onepage">
        <Reveal className="services-intro">
          <div className="section-rule is-visible" />
          <p className="section-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p className="lead">{content.copy}</p>
          <BrandDots mode="pulse" size={7} />
        </Reveal>

        <div className="services-card-grid" aria-label={content.navAria}>
          {content.items.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} className="service-card-wrap" delay={index * 0.035}>
                <article className="service-card" data-accent={index % 2 === 0 ? "blue" : "red"}>
                  <div className="service-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
