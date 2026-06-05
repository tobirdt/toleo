import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";

type ProjectsSectionProps = {
  content: SiteContent["projects"];
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="section viewport-section project-section" id="projekte">
      <div className="section-inner viewport-inner project-layout">
        <Reveal className="project-intro">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2>{content.title}</h2>
            <p className="lead">
              {content.copy}
            </p>
          </div>
        </Reveal>

        <div className="projects-board">
          <div className="project-areas">
            {content.areas.map((area, index) => (
              <Reveal key={area} delay={index * 0.04}>
                <div className="area-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{area}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="method-cloud">
            {content.methods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
