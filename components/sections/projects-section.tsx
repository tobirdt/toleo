import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";

type ProjectsSectionProps = {
  content: SiteContent["projects"];
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="section project-section" id="projekte">
      <div className="section-inner project-layout">
        <Reveal className="project-intro">
          <p className="section-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p className="lead">{content.copy}</p>
        </Reveal>

        <div className="project-showcase" aria-label={content.title}>
          {content.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              className={`project-pillar${index === 0 ? " is-primary" : ""}`}
              delay={index * 0.06}
            >
              <div className="project-pillar-head">
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
              </div>

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
