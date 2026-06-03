"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatedLogo } from "@/components/brand/animated-logo";
import { BrandDots } from "@/components/ui";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 22, filter: "blur(8px)", scale: 0.98 },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  const logoY     = useTransform(scrollYProgress, [0, 0.28], [0,  52]);
  const ringY     = useTransform(scrollYProgress, [0, 0.28], [0, -28]);
  const copyY     = useTransform(scrollYProgress, [0, 0.28], [0, -32]);
  const copyOp    = useTransform(scrollYProgress, [0, 0.18], [1,   0]);
  const glowScale = useTransform(scrollYProgress, [0, 0.4],  [1, 1.14]);
  const glowOp    = useTransform(scrollYProgress, [0, 0.4],  [1, 0.55]);
  const indicOp   = useTransform(scrollYProgress, [0, 0.08], [1,   0]);

  return (
    <section className="hero" id="top">
      {/* Soft background glows */}
      <motion.div
        className="hero-glow hero-glow-blue"
        style={{ scale: glowScale, opacity: glowOp }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-glow hero-glow-red"
        style={{ scale: glowScale, opacity: glowOp }}
        aria-hidden="true"
      />

      <div className="hero-shell">
        {/* LEFT — Copy */}
        <motion.div className="hero-copy-wrap" style={{ y: copyY, opacity: copyOp }}>
          <motion.p className="eyebrow" {...reveal(0)}>
            Familienholding und Beratungsboutique seit 2019
          </motion.p>

          <motion.h1 {...reveal(0.1)}>
            Wachstum mit Präzision, Kapital und Haltung.
          </motion.h1>

          <motion.p className="hero-copy" {...reveal(0.2)}>
            Beratung, Beteiligungen und operative Unterstützung für spezialisierte Märkte:
            Kommunikationstechnologien, Sicherheit, Verteidigung und Hospitality.
          </motion.p>

          <motion.div className="hero-actions" {...reveal(0.3)}>
            <a className="primary-link" href="#leistungen">
              Leistungen
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-link" href="#portfolio">
              Portfolio
            </a>
          </motion.div>

          <motion.div
            className="hero-brand-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <BrandDots mode="signature" size={9} />
            <span className="hero-brand-label">Toleo GmbH · Taufkirchen</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Visual */}
        <div className="hero-visual">
          <motion.div className="hero-logo-stage" style={{ y: logoY }}>
            {/* Decorative ring */}
            <motion.div className="hero-ring" style={{ y: ringY }} aria-hidden="true">
              <svg viewBox="0 0 480 480" fill="none">
                <circle
                  className="hero-ring-path"
                  cx="240"
                  cy="240"
                  r="218"
                  pathLength="1"
                />
              </svg>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              className="hero-float-card hero-float-card--tl"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <span className="hero-float-label">Gegründet</span>
              <span className="hero-float-value">2019</span>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-card--br"
              initial={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <span className="hero-float-label">Fokus</span>
              <span className="hero-float-value">Beratung · Beteiligung</span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <AnimatedLogo />
            </motion.div>

            {/* Accent chip */}
            <motion.span
              className="hero-accent-chip"
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <BrandDots size={7} />
              Seit 2019 · Familienholding
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="scroll-indicator" style={{ opacity: indicOp }} aria-hidden="true">
        <BrandDots mode="indicator" size={7} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
