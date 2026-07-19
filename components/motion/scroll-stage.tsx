"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

type ScrollStageProps = {
  id: string;
  className?: string;
  /** Active animation distance in svh; start/end holds are added around it. */
  extra?: number;
  startHold?: number;
  endHold?: number;
  children: ReactNode;
};

function remapProgress(progress: number, startHold: number, motionRange: number) {
  return Math.min(1, Math.max(0, (progress - startHold) / motionRange));
}

/**
 * Pinned scrollytelling stage: on desktop the section sticks for one viewport
 * plus `extra` svh of active animation distance. Opening and closing holds are
 * added around that distance, while the normalized CSS variable --p still
 * runs from 0 → 1. Each section choreographs its own children from that value.
 * On phones and under prefers-reduced-motion the stage renders as a normal
 * flowing section with --p locked at 1, so nothing is ever hidden. Server
 * markup also ships --p: 1 — content stays visible without JavaScript.
 */
export function ScrollStage({
  id,
  className,
  extra = 80,
  startHold = 0.08,
  endHold = 0.16,
  children,
}: ScrollStageProps) {
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const pinned = !isMobile && !prefersReduced;
  const motionRange = Math.max(0.1, 1 - startHold - endHold);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (pinned) {
      innerRef.current?.style.setProperty(
        "--p",
        remapProgress(v, startHold, motionRange).toFixed(4)
      );
    }
  });

  /* The pin state is applied imperatively after mount: server markup is
     always the un-pinned flowing layout (correct for phones, reduced
     motion and no-JS visitors), and useLayoutEffect upgrades desktop
     before first paint — no hydration-attribute ambiguity. */
  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    outer.dataset.pinned = pinned ? "true" : "false";
    outer.style.height = pinned ? `calc(100svh + ${extra / motionRange}svh)` : "";
    inner.style.setProperty(
      "--p",
      pinned
        ? remapProgress(scrollYProgress.get(), startHold, motionRange).toFixed(4)
        : "1"
    );
  }, [pinned, extra, startHold, motionRange, scrollYProgress]);

  return (
    <section
      id={id}
      ref={outerRef}
      className={`section stage ${className ?? ""}`}
      data-pinned="false"
    >
      <div
        ref={innerRef}
        className="stage-inner"
        style={{ "--p": 1 } as CSSProperties}
      >
        {children}
      </div>
    </section>
  );
}
