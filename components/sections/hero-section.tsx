"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedLogo } from "@/components/brand/animated-logo";
import type { SiteContent } from "@/lib/site-content";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] as const, delay },
});

type HeroSectionProps = {
  content: SiteContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  /* Progress is tied to the hero itself scrolling out of view, so the
     parallax speed stays constant no matter how long the page grows. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoY  = useTransform(scrollYProgress, [0, 1],    [0, 48]);
  const copyY  = useTransform(scrollYProgress, [0, 1],    [0, -36]);
  const copyOp = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero-aurora" aria-hidden="true">
        <span />
      </div>

      <div className="hero-shell">
        <motion.div
          className="hero-copy-wrap"
          style={prefersReduced ? undefined : { y: copyY, opacity: copyOp }}
          suppressHydrationWarning
        >
          <motion.p className="eyebrow" suppressHydrationWarning {...reveal(0)}>
            {content.eyebrow}
          </motion.p>

          <motion.h1 suppressHydrationWarning {...reveal(0.1)}>
            {content.title.replace(/\.\s*$/, "")}
            <span className="headline-dot headline-dot-red" aria-hidden="true">.</span>
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

          <motion.div className="hero-meta" suppressHydrationWarning {...reveal(0.42)}>
            {content.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="hero-logo-stage"
            style={prefersReduced ? undefined : { y: logoY }}
            suppressHydrationWarning
          >
            <motion.div
              className="hero-logo-wrap"
              initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }
              }
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
