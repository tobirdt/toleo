"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedLogo } from "@/components/brand/animated-logo";
import type { SiteContent } from "@/lib/site-content";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 22, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay },
});

type HeroSectionProps = {
  content: SiteContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();

  const logoY     = useTransform(scrollYProgress, [0, 0.28], [0,  40]);
  const copyY     = useTransform(scrollYProgress, [0, 0.28], [0, -28]);
  const copyOp    = useTransform(scrollYProgress, [0, 0.18], [1,   0]);
  const glowScale = useTransform(scrollYProgress, [0, 0.4],  [1, 1.1]);
  const glowOp    = useTransform(scrollYProgress, [0, 0.4],  [1, 0.5]);

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-glow hero-glow-blue"
        style={{ scale: glowScale, opacity: glowOp }}
        aria-hidden="true"
        suppressHydrationWarning
      />
      <motion.div
        className="hero-glow hero-glow-red"
        style={{ scale: glowScale, opacity: glowOp }}
        aria-hidden="true"
        suppressHydrationWarning
      />

      <div className="hero-shell">
        <motion.div className="hero-copy-wrap" style={{ y: copyY, opacity: copyOp }} suppressHydrationWarning>
          <motion.p className="eyebrow" suppressHydrationWarning {...reveal(0)}>
            {content.eyebrow}
          </motion.p>

          <motion.h1 suppressHydrationWarning {...reveal(0.1)}>
            {content.title}
          </motion.h1>

          <motion.p className="hero-copy" suppressHydrationWarning {...reveal(0.2)}>
            {content.copy}
          </motion.p>

          <motion.div className="hero-actions" suppressHydrationWarning {...reveal(0.3)}>
            <a className="primary-link" href="#leistungen">
              {content.primaryAction}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-link" href="#portfolio">
              {content.secondaryAction}
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="hero-logo-stage"
            style={{ y: logoY }}
            suppressHydrationWarning
          >
            <motion.div
              className="hero-logo-wrap"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              suppressHydrationWarning
            >
              <AnimatedLogo />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
