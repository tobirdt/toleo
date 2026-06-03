"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatedLogo } from "@/components/brand/animated-logo";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const logoY = useTransform(scrollYProgress, [0, 0.32], [0, 56]);

  return (
    <section className="hero" id="top">
      <div className="hero-shell">
        <div className="hero-copy-wrap">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Familienholding und Beratungsboutique seit 2019
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Toleo. Wachstum mit Präzision, Kapital und Haltung.
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            Beratung, Beteiligungen und operative Unterstützung für spezialisierte Märkte:
            Kommunikationstechnologien, Sicherheit, Verteidigung und Hospitality.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
          >
            <a className="primary-link" href="#leistungen">
              Leistungen
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-link" href="#portfolio">
              Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-logo-stage"
          style={{ y: logoY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.14 }}
          aria-hidden="true"
        >
          <AnimatedLogo />
        </motion.div>

        <a className="scroll-cue" href="#profil" aria-label="Zum Profil scrollen">
          <ChevronDown size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
