"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";
import { useIsMobile } from "@/lib/hooks";

type ServicesSectionProps = {
  content: SiteContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const lineProgress = useTransform(smoothProgress, [0, 1], [0, 1]);
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, content.items.length - 1e-6]);

  useMotionValueEvent(rawIndex, "change", (v) => {
    if (isMobile) return;
    const next = Math.min(content.items.length - 1, Math.max(0, Math.floor(v)));
    setActiveIndex(next);
  });

  return (
    <section className="section services-section" id="leistungen">
      {/* Section header rendered before sticky container */}
      <div className="section-inner" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Reveal>
          <div className="section-rule is-visible" />
        </Reveal>
      </div>

      <div className="services-sticky-outer" ref={containerRef}>
        <div className="services-sticky-inner section-inner">

          {/* LEFT — fixed heading + nav */}
          <div className="services-sticky-left">
            {/* Vertical progress line */}
            <svg
              className="services-sticky-line"
              viewBox="0 0 1 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="service-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3060a8" />
                  <stop offset="100%" stopColor="#e00810" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0.5 0 V100"
                pathLength={1}
                style={{ pathLength: lineProgress }}
                suppressHydrationWarning
              />
            </svg>

            <p className="section-kicker">{content.kicker}</p>
            <h2>{content.title}</h2>
            <p className="lead">
              {content.copy}
            </p>

            {/* Step indicators */}
            <nav className="services-sticky-nav" aria-label={content.navAria}>
              {content.items.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  className={index === activeIndex ? "is-active" : undefined}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{service.title}</span>
                </button>
              ))}
            </nav>

            <div style={{ marginTop: 8 }}>
              <BrandDots mode="pulse" size={7} />
            </div>
          </div>

          {/* RIGHT — animated card */}
          <div className="services-sticky-right">
            {content.items.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={service.title}
                  className={`services-sticky-card${isActive ? " is-active" : ""}`}
                  animate={isMobile ? undefined : {
                    opacity: isActive ? 1 : 0,
                    scale:   isActive ? 1 : 0.97,
                    y:       isActive ? 0 : 12,
                  }}
                  transition={
                    prefersReduced
                      ? { duration: 0 }
                      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                  aria-hidden={isMobile ? undefined : !isActive}
                  suppressHydrationWarning
                >
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </motion.article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
