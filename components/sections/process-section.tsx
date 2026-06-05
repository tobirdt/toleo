import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";

type ProcessSectionProps = {
  content: SiteContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className="section viewport-section process-section" id="prozess">
      <div className="section-inner viewport-inner process-inner">
        <Reveal className="process-intro">
          <p className="section-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <p className="lead">{content.copy}</p>
        </Reveal>

        <ol className="process-map" aria-label={content.title}>
          {content.phases.map((phase, index) => (
            <li key={phase.number} className="process-card">
              <Reveal delay={index * 0.045}>
                <span className="process-card-number">{phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
