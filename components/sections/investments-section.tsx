"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";
import { BrandDots, SectionTitle } from "@/components/ui";

type InvestmentsSectionProps = {
  content: SiteContent["investments"];
};

export function InvestmentsSection({ content }: InvestmentsSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section investment-section" id="investitionen">
      {!prefersReduced && (
        <>
          <motion.div
            className="investment-glow investment-glow-blue"
            aria-hidden="true"
            animate={{ x: [0, 34, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            suppressHydrationWarning
          />
          <motion.div
            className="investment-glow investment-glow-red"
            aria-hidden="true"
            animate={{ x: [0, -26, 0], y: [0, -16, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            suppressHydrationWarning
          />
        </>
      )}

      <div className="section-inner investment-grid">

        <Reveal>
          <p className="section-kicker">{content.kicker}</p>
          <SectionTitle title={content.title} tone="red" />
          <blockquote>
            {content.quote}
            <cite>{content.cite}</cite>
          </blockquote>
          <div style={{ marginTop: 28 }}>
            <BrandDots mode="signature" size={9} />
          </div>
        </Reveal>

        <div className="investment-list">
          {content.points.map((point, index) => (
            <Reveal key={point.desktop} delay={index * 0.06}>
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
    </section>
  );
}
