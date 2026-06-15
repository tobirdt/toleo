"use client";

import { motion, useReducedMotion } from "framer-motion";

type BrandDotsMode = "default" | "indicator" | "pulse" | "connected" | "signature";

type BrandDotsProps = {
  mode?: BrandDotsMode;
  size?: number;
  className?: string;
};

export function BrandDots({ mode = "default", size = 8, className }: BrandDotsProps) {
  const prefersReduced = useReducedMotion();
  const motionEnabled = !prefersReduced;

  if (mode === "indicator") {
    return (
      <div className={`brand-dots-indicator ${className ?? ""}`} aria-hidden="true">
        <motion.span
          className="brand-dot brand-dot-blue"
          style={{ width: size, height: size }}
          animate={motionEnabled ? { y: [0, -4, 0] } : undefined}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          suppressHydrationWarning
        />
        <motion.span
          className="brand-dots-line"
          animate={motionEnabled ? { scaleY: [0.6, 1, 0.6] } : undefined}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          suppressHydrationWarning
        />
        <motion.span
          className="brand-dot brand-dot-red"
          style={{ width: size, height: size }}
          animate={motionEnabled ? { y: [0, 4, 0] } : undefined}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          suppressHydrationWarning
        />
      </div>
    );
  }

  if (mode === "pulse") {
    return (
      <div className={`brand-dots ${className ?? ""}`} aria-hidden="true">
        <motion.span
          className="brand-dot brand-dot-blue"
          style={{ width: size, height: size }}
          animate={motionEnabled ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          suppressHydrationWarning
        />
        <motion.span
          className="brand-dot brand-dot-red"
          style={{ width: size, height: size }}
          animate={motionEnabled ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          suppressHydrationWarning
        />
      </div>
    );
  }

  if (mode === "signature") {
    return (
      <div className={`brand-dots-signature ${className ?? ""}`} aria-hidden="true">
        <motion.span
          className="brand-dot brand-dot-blue"
          style={{ width: size, height: size }}
          initial={motionEnabled ? { scale: 0, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          suppressHydrationWarning
        />
        <motion.span
          className="brand-dots-connector"
          initial={motionEnabled ? { scaleX: 0 } : false}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          suppressHydrationWarning
        />
        <motion.span
          className="brand-dot brand-dot-red"
          style={{ width: size, height: size }}
          initial={motionEnabled ? { scale: 0, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          suppressHydrationWarning
        />
      </div>
    );
  }

  return (
    <div className={`brand-dots ${className ?? ""}`} aria-hidden="true">
      <span className="brand-dot brand-dot-blue" style={{ width: size, height: size }} />
      <span className="brand-dot brand-dot-red" style={{ width: size, height: size }} />
    </div>
  );
}
