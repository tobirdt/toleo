"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/ui";
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
      className={`portfolio-h-tile ${item.tone}`}
      style={isStatic ? undefined : { scale, opacity }}
      suppressHydrationWarning
    >
      <Image src={item.image} alt={item.title} fill sizes="(max-width: 1050px) 100vw, 360px" />
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
  const viewportRef  = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const shiftRef     = useRef(0);
  const [activeStep, setActiveStep] = useState(1);
  const [hasShift, setHasShift]     = useState(false);
  const isMobile = useIsMobile();
  const items = content.items;

  /* Measure how far the track actually needs to travel so the last tile
     lands flush with the right edge — a fixed percentage only fits one
     viewport width. */
  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const shift = Math.max(0, track.scrollWidth - viewport.clientWidth);
      shiftRef.current = shift;
      setHasShift(shift > 0);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const trackX       = useTransform(smoothProgress, (v) => v * -shiftRef.current);
  const progressFill = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const step = Math.round(v * (items.length - 1)) + 1;
    setActiveStep(Math.min(items.length, Math.max(1, step)));
  });

  const isStatic = isMobile || !hasShift;

  return (
    <section className="section portfolio-section" id="portfolio" data-num="02">
      <div
        className="portfolio-h-outer"
        ref={containerRef}
        data-static={isStatic ? "true" : "false"}
      >
        <div className="portfolio-h-inner">

          <div className="portfolio-h-header">
            <Reveal>
              <div className="section-heading compact">
                <p className="section-kicker">{content.kicker}</p>
                <SectionTitle title={content.title} tone="red" />
                <p>
                  {content.copy}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="portfolio-h-viewport" ref={viewportRef}>
            <motion.div
              className="portfolio-h-track"
              ref={trackRef}
              style={isStatic ? undefined : { x: trackX }}
              suppressHydrationWarning
            >
              {items.map((item, index) => (
                <HorizontalTile
                  key={item.title}
                  item={item}
                  index={index}
                  total={items.length}
                  progress={smoothProgress}
                  isStatic={isStatic}
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
