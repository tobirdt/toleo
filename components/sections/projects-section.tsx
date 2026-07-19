import { Reveal } from "@/components/motion/reveal";
import { ScrollStage } from "@/components/motion/scroll-stage";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProjectsSectionProps = {
  content: SiteContent["projects"];
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <ScrollStage id="projekte" className="project-section" extra={105}>
      <div className="section-inner">
        <Reveal>
          <div className="section-heading compact">
            <p className="section-kicker">{content.kicker}</p>
            <SectionTitle title={content.title} tone="red" />
            <p>{content.copy}</p>
          </div>
        </Reveal>

        {/* The wrapper preserves the shared section structure; desktop motion
            is driven by the pinned stage so the content remains visible in
            static, mobile and reduced-motion rendering. */}
        <Reveal>
          <div className="project-columns" aria-label={content.title}>
            {content.pillars.map((pillar) => (
              <div className="project-col" key={pillar.title}>
                <span className="project-col-num">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </ScrollStage>
  );
}
