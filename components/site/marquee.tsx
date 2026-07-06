"use client";

import { useReducedMotion } from "framer-motion";

type MarqueeProps = {
  items: string[];
};

/**
 * Slow, decorative ticker of the firm's fields of work. Purely visual —
 * the same terms are all reachable through the regular navigation, so the
 * whole strip is hidden from assistive tech.
 */
export function Marquee({ items }: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  const group = (
    <div className="marquee-group">
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
          <span className="marquee-sep" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track${prefersReduced ? " is-static" : ""}`}>
        {group}
        {group}
      </div>
    </div>
  );
}
