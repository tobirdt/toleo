"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

type ScrollStageProps = {
  id: string;
  className?: string;
  /** Additional scroll distance (in svh) the visitor scrubs through while pinned. */
  extra?: number;
  children: ReactNode;
};

/**
 * Pinned scrollytelling stage: on desktop the section sticks for one viewport
 * plus `extra` svh of scroll, exposing the progress as the CSS variable --p
 * (0 → 1) on the inner wrapper. Each section choreographs its own children in
 * CSS from that variable. On phones and under prefers-reduced-motion the
 * stage renders as a normal flowing section with --p locked at 1, so nothing
 * is ever hidden. Server markup also ships --p: 1 — content stays visible
 * without JavaScript.
 */
export function ScrollStage({ id, className, extra = 80, children }: ScrollStageProps) {
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const pinned = !isMobile && !prefersReduced;

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (pinned) innerRef.current?.style.setProperty("--p", v.toFixed(4));
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
    outer.style.height = pinned ? `calc(100svh + ${extra}svh)` : "";
    inner.style.setProperty("--p", pinned ? scrollYProgress.get().toFixed(4) : "1");
  }, [pinned, extra, scrollYProgress]);

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
