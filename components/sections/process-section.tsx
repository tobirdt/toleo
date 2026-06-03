"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { processPhases } from "@/lib/site-content";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });

  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      processPhases.length - 1,
      Math.max(0, Math.floor(value * processPhases.length))
    );
    setActivePhase(next);
  });

  return (
    <section className="section process-section" id="prozess">
      {/* Section header above the sticky area */}
      <div className="process-section-header">
        <Reveal>
          <p className="section-kicker">Vorgehensweise</p>
          <h2>Von der Analyse zur Beteiligung.</h2>
        </Reveal>
      </div>

      <div className="process-outer" ref={containerRef}>
        <div className="process-sticky">
          <div className="section-inner process-inner">

            {/* LEFT — timeline */}
            <div className="process-timeline" aria-hidden="true">
              {/* Track */}
              <div className="process-line-track" />

              {/* Animated fill */}
              <motion.div
                className="process-line-fill"
                style={{ scaleY: lineScaleY }}
              />

              {/* Phase rows */}
              {processPhases.map((phase, i) => (
                <div key={phase.number} className="process-phase-row">
                  <div
                    className={[
                      "process-phase-dot",
                      i === activePhase ? "is-active" : "",
                      i < activePhase ? "is-past" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {phase.number}
                  </div>
                  <span
                    className={[
                      "process-phase-label",
                      i === activePhase ? "is-active" : "",
                      i < activePhase ? "is-past" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {phase.title}
                  </span>
                </div>
              ))}
            </div>

            {/* RIGHT — phase content */}
            <div className="process-content">
              <div className="process-cards">
                {processPhases.map((phase, i) => (
                  <motion.div
                    key={phase.number}
                    className={`process-card${i === activePhase ? " is-active" : ""}`}
                    animate={{
                      opacity: i === activePhase ? 1 : 0,
                      scale:   i === activePhase ? 1 : 0.97,
                      filter:  i === activePhase ? "blur(0px)" : "blur(4px)",
                      y:       i === activePhase ? 0 : 14,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={i !== activePhase}
                  >
                    <span className="process-card-number">{phase.number}</span>
                    <h3>{phase.title}</h3>
                    <p>{phase.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
