"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { useIsMobile } from "@/lib/hooks";
import type { PortfolioItem, SiteContent } from "@/lib/site-content";

type TileProps = {
  item: PortfolioItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isStatic: boolean;
};

function HorizontalTile({ item, index, total, progress, isStatic }: TileProps) {
  const scale = useTransform(progress, (v) => {
    const center   = index / (total - 1 || 1);
    const distance = Math.abs(v - center);
    return 1 - Math.min(distance * 0.055, 0.045);
  });

  const opacity = useTransform(progress, (v) => {
    const center   = index / (total - 1 || 1);
    const distance = Math.abs(v - center);
    return 1 - Math.min(distance * 0.28, 0.24);
  });

  return (
    <motion.article
      className={`portfolio-h-tile portfolio-tile ${item.tone}`}
      style={isStatic ? undefined : { scale, opacity }}
      suppressHydrationWarning
    >
      <Image src={item.image} alt={item.title} fill sizes="(max-width: 1050px) 100vw, 360px" />
      <div className="tile-orbit" aria-hidden="true" />
      <div className="tile-label">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h3>{item.title}</h3>
      </div>
    </motion.article>
  );
}

type PortfolioSectionProps = {
  content: SiteContent["portfolio"];
};

export function PortfolioSection({ content }: PortfolioSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const isMobile = useIsMobile();
  const items = content.items;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const trackX       = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);
  const progressFill = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const step = Math.round(v * (items.length - 1)) + 1;
    setActiveStep(Math.min(items.length, Math.max(1, step)));
  });

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="portfolio-h-outer" ref={containerRef}>
        <div className="portfolio-h-inner">

          <div className="portfolio-h-header">
            <Reveal>
              <div className="section-heading compact">
                <p className="section-kicker">{content.kicker}</p>
                <h2>{content.title}</h2>
                <p>
                  {content.copy}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="portfolio-h-viewport">
            <motion.div
              className="portfolio-h-track"
              style={isMobile ? undefined : { x: trackX }}
              suppressHydrationWarning
            >
              {items.map((item, index) => (
                <HorizontalTile
                  key={item.title}
                  item={item}
                  index={index}
                  total={items.length}
                  progress={smoothProgress}
                  isStatic={isMobile}
                />
              ))}
            </motion.div>

            <div className="portfolio-h-progress" aria-hidden="true">
              <span>
                {String(activeStep).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
              <div className="portfolio-h-progress-bar">
                <motion.div
                  className="portfolio-h-progress-fill"
                  style={{ scaleX: progressFill }}
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
