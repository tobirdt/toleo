"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProcessSectionProps = {
  content: SiteContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section process-section" id="prozess" data-num="05">
      <div className="section-inner process-layout">
        <Reveal className="process-copy">
          <p className="section-kicker">{content.kicker}</p>
          <SectionTitle title={content.title} tone="blue" />
          <p className="lead">{content.copy}</p>
        </Reveal>

        <ol className="process-steps" aria-label={content.title}>
          <motion.span
            className="process-line"
            aria-hidden="true"
            initial={prefersReduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }
            }
            suppressHydrationWarning
          />
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
