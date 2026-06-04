"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { processPhases } from "@/lib/site-content";
import { useIsMobile } from "@/lib/hooks";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const prevPhase = useRef(0);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (isMobile) return;
    const clamped = Math.min(Math.max(value, 0), 1 - 1e-6);
    const next = Math.floor(clamped * processPhases.length);
    if (next !== prevPhase.current) {
      prevPhase.current = next;
      setActivePhase(next);
    }
  });

  const lineTarget = useMotionValue(0);
  const lineScaleY = useSpring(lineTarget, {
    stiffness: prefersReduced ? 10000 : 220,
    damping:   prefersReduced ?   200 :  34,
    mass: 0.4,
  });

  useEffect(() => {
    if (isMobile) return;
    lineTarget.set(
      processPhases.length > 1
        ? activePhase / (processPhases.length - 1)
        : 0
    );
  }, [activePhase, isMobile, lineTarget]);

  return (
    <section className="section process-section" id="prozess">
      <div className="process-outer" ref={containerRef}>
        <div className="process-sticky">
          <div className="section-inner process-inner">

            <div className="process-timeline" aria-hidden="true">
              <div className="process-line-track" />

              <motion.div
                className="process-line-fill"
                style={{ scaleY: lineScaleY }}
                suppressHydrationWarning
              />

              {processPhases.map((phase, i) => (
                <div key={phase.number} className="process-phase-row">
                  <div
                    className={[
                      "process-phase-dot",
                      i === activePhase ? "is-active" : "",
                      i < activePhase  ? "is-past"   : "",
                    ].filter(Boolean).join(" ")}
                  >
                    {phase.number}
                  </div>
                  <span
                    className={[
                      "process-phase-label",
                      i === activePhase ? "is-active" : "",
                      i < activePhase  ? "is-past"   : "",
                    ].filter(Boolean).join(" ")}
                  >
                    {phase.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="process-content">
              <div className="process-content-header">
                <p className="section-kicker">Vorgehensweise</p>
                <h2>Von der Analyse zur Beteiligung.</h2>
              </div>
              <div className="process-cards">
                {processPhases.map((phase, i) => {
                  const cardContent = (
                    <>
                      <span className="process-card-number">{phase.number}</span>
                      <h3>{phase.title}</h3>
                      <p>{phase.text}</p>
                    </>
                  );

                  if (isMobile) {
                    return (
                      <div key={phase.number} className="process-card">
                        {cardContent}
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={phase.number}
                      className={`process-card${i === activePhase ? " is-active" : ""}`}
                      animate={{
                        opacity: i === activePhase ? 1 : 0,
                        scale:   i === activePhase ? 1 : 0.97,
                        y:       i === activePhase ? 0 : 10,
                      }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { duration: 0.4, ease: [0.25, 1, 0.35, 1] }
                      }
                      aria-hidden={i !== activePhase}
                    >
                      {cardContent}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
