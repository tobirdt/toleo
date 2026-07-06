import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProjectsSectionProps = {
  content: SiteContent["projects"];
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="section project-section" id="projekte">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading compact">
            <p className="section-kicker">{content.kicker}</p>
            <SectionTitle title={content.title} tone="red" />
            <p>{content.copy}</p>
          </div>
        </Reveal>

        <div className="project-columns" aria-label={content.title}>
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className="project-col" delay={index * 0.06}>
              <span className="project-col-num">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
