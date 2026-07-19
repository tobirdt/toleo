import { Reveal } from "@/components/motion/reveal";
import { ScrollStage } from "@/components/motion/scroll-stage";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProcessSectionProps = {
  content: SiteContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <ScrollStage id="prozess" className="process-section" extra={110}>
      <div className="section-inner process-layout">
        <Reveal className="process-copy">
          <p className="section-kicker">{content.kicker}</p>
          <SectionTitle title={content.title} tone="blue" />
          <p className="lead">{content.copy}</p>
        </Reveal>

        <ol className="process-steps" aria-label={content.title}>
          {content.phases.map((phase) => (
            <li key={phase.number} className="process-step">
              <Reveal className="process-step-inner">
                <span className="process-card-number">{phase.number}</span>
                <div>
                  <h3>{phase.title}</h3>
                  <p>
                    <span className="desktop-copy">{phase.text}</span>
                    <span className="mobile-copy">{phase.textMobile}</span>
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </ScrollStage>
  );
}
