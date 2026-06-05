import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";

type ProcessSectionProps = {
  content: SiteContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className="section viewport-section process-section" id="prozess">
      <div className="section-inner viewport-inner process-layout">
        <Reveal className="process-copy">
          <p className="section-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p className="lead">{content.copy}</p>
        </Reveal>

        <ol className="process-steps" aria-label={content.title}>
          {content.phases.map((phase, index) => (
            <li key={phase.number} className="process-step">
              <Reveal className="process-step-inner" delay={index * 0.045}>
                <span className="process-card-number">{phase.number}</span>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
