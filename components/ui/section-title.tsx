"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  tone?: "blue" | "red";
  className?: string;
};

/**
 * Section headline with the brand signature: the closing period is rendered
 * as a blue or red dot (mirroring the two dots in the Toleo logo), and the
 * line rises out of an overflow mask when it scrolls into view.
 *
 * Visibility is observed on the static <h2> — the moving span itself is
 * fully clipped by the mask, so it would never intersect the viewport.
 */
export function SectionTitle({ title, tone = "red", className }: SectionTitleProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const text = title.replace(/\.\s*$/, "");

  return (
    <h2 className={className} ref={ref}>
      <span className="headline-mask">
        <motion.span
          className="headline-line"
          initial={prefersReduced ? false : { y: "112%" }}
          animate={inView || prefersReduced ? { y: 0 } : undefined}
          transition={
            prefersReduced
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }
          suppressHydrationWarning
        >
          {text}
          <span className={`headline-dot headline-dot-${tone}`} aria-hidden="true">
            .
          </span>
        </motion.span>
      </span>
    </h2>
  );
}
