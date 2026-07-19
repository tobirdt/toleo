"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ScrollStage } from "@/components/motion/scroll-stage";
import { useIsMobile } from "@/lib/hooks";
import type { SiteContent } from "@/lib/site-content";
import { BrandDots, SectionTitle } from "@/components/ui";

type InvestmentsSectionProps = {
  content: SiteContent["investments"];
};

export function InvestmentsSection({ content }: InvestmentsSectionProps) {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile(700);
  const staticAtmosphere = prefersReduced || isMobile;

  return (
    <ScrollStage id="investitionen" className="investment-section" extra={105}>
      <motion.div
        className="investment-glow investment-glow-blue"
        aria-hidden="true"
        animate={staticAtmosphere ? { x: 0, y: 0 } : { x: [0, 34, 0], y: [0, 20, 0] }}
        transition={
          staticAtmosphere
            ? { duration: 0 }
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
        suppressHydrationWarning
      />
      <motion.div
        className="investment-glow investment-glow-red"
        aria-hidden="true"
        animate={staticAtmosphere ? { x: 0, y: 0 } : { x: [0, -26, 0], y: [0, -16, 0] }}
        transition={
          staticAtmosphere
            ? { duration: 0 }
            : { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }
        suppressHydrationWarning
      />

      <div className="section-inner investment-grid">

        <Reveal>
          <p className="section-kicker">{content.kicker}</p>
          <SectionTitle title={content.title} tone="red" />
          <blockquote>
            {content.quote}
            <cite>{content.cite}</cite>
          </blockquote>
          <div className="investment-signature">
            <BrandDots mode="signature" size={9} />
          </div>
        </Reveal>

        <div className="investment-list">
          {content.points.map((point) => (
            <Reveal key={point.desktop}>
              <div className="investment-row">
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>
                  <span className="desktop-copy">{point.desktop}</span>
                  <span className="mobile-copy">{point.mobile}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </ScrollStage>
  );
}
