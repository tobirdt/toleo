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
import { portfolio, type PortfolioItem } from "@/lib/site-content";

type TileProps = {
  item: PortfolioItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function HorizontalTile({ item, index, total, progress }: TileProps) {
  const scale = useTransform(progress, (v) => {
    const center   = index / (total - 1 || 1);
    const distance = Math.abs(v - center);
    return 1 - Math.min(distance * 0.1, 0.08);
  });

  const opacity = useTransform(progress, (v) => {
    const center   = index / (total - 1 || 1);
    const distance = Math.abs(v - center);
    return 1 - Math.min(distance * 0.45, 0.38);
  });

  return (
    <motion.article
      className={`portfolio-h-tile portfolio-tile ${item.tone}`}
      style={{ scale, opacity }}
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

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

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
    const step = Math.round(v * (portfolio.length - 1)) + 1;
    setActiveStep(Math.min(portfolio.length, Math.max(1, step)));
  });

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="portfolio-h-outer" ref={containerRef}>
        <div className="portfolio-h-inner">

          <div className="portfolio-h-header">
            <Reveal>
              <div className="section-heading compact">
                <p className="section-kicker">Portfolio</p>
                <h2>Beteiligungen und Beratung in spezialisierten Märkten.</h2>
                <p>
                  Toleo verbindet spezialisierte Märkte mit klaren Strukturen, belastbaren
                  Prozessen und einem Netzwerk für nachhaltige Expansion.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="portfolio-h-viewport">
            <motion.div className="portfolio-h-track" style={{ x: trackX }} suppressHydrationWarning>
              {portfolio.map((item, index) => (
                <HorizontalTile
                  key={item.title}
                  item={item}
                  index={index}
                  total={portfolio.length}
                  progress={smoothProgress}
                />
              ))}
            </motion.div>

            <div className="portfolio-h-progress" aria-hidden="true">
              <span>
                {String(activeStep).padStart(2, "0")} /{" "}
                {String(portfolio.length).padStart(2, "0")}
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
