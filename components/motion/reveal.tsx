import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Stable content wrapper. Section-level motion is owned by ScrollStage on
 * desktop; mobile, reduced-motion and no-JavaScript rendering stay fully
 * visible instead of depending on an intersection-triggered opacity change.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
