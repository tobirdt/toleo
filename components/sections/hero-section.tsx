"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const signatureY = useTransform(scrollYProgress, [0, 0.32], [0, 120]);
  const orbY = useTransform(scrollYProgress, [0, 0.32], [0, -80]);

  return (
    <section className="hero" id="top">
      <div className="hero-shell">
        <motion.div className="hero-signature" style={{ y: signatureY }} aria-hidden="true">
          <svg viewBox="0 0 640 320" role="img">
            <path
              d="M18 126C98 70 248 28 376 42c24 3 41 9 47 18 8 14-15 20-60 18-48-2-96-3-142 11-31 66-63 139-84 217"
              pathLength="1"
            />
            <path
              d="M221 218c28-72 72-95 88-70 13 20-26 91-63 89-19-1-17-39 1-73"
              pathLength="1"
            />
            <path
              d="M319 143c-23 80-17 127 22 108 44-22 76-101 123-174 45-68 78-36 38 25-36 55-91 90-133 104"
              pathLength="1"
            />
            <path
              d="M464 190c30-66 73-69 75-29 2 42-69 88-84 52-12-28 30-87 58-78"
              pathLength="1"
            />
          </svg>
        </motion.div>

        <motion.div className="hero-orbit" style={{ y: orbY }} aria-hidden="true">
          <span className="orbit-dot blue" />
          <span className="orbit-dot red" />
          <span className="orbit-line" />
        </motion.div>

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
            Toleo gestaltet Wachstum mit Präzision, Kapital und Haltung.
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            Smarte Investitionen für eine nachhaltige Zukunft. Beratung, Beteiligungen und operative
            Managementunterstützung für Kommunikationstechnologien, Sicherheit, Verteidigung und
            Hospitality.
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
          className="hero-panel"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="panel-top">
            <span />
            <span />
          </div>
          <div className="metric-ring">
            <svg viewBox="0 0 220 220" aria-hidden="true">
              <circle cx="110" cy="110" r="78" />
              <circle cx="110" cy="110" r="78" />
            </svg>
            <strong>360°</strong>
            <p>Rundum-Service</p>
          </div>
          <div className="panel-grid">
            <div>
              <strong>4</strong>
              <span>Geschäftsfelder</span>
            </div>
            <div>
              <strong>2019</strong>
              <span>Gründung</span>
            </div>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#profil" aria-label="Zum Profil scrollen">
          <ChevronDown size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
