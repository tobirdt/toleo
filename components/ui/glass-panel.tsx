import type { ElementType, ReactNode, CSSProperties } from "react";

type GlassPanelVariant = "default" | "strong" | "blue" | "red" | "frosted";

type GlassPanelProps = {
  children: ReactNode;
  variant?: GlassPanelVariant;
  className?: string;
  style?: CSSProperties;
  radius?: number;
  as?: ElementType;
};

export function GlassPanel({
  children,
  variant = "default",
  className,
  style,
  radius,
  as: Tag = "div",
}: GlassPanelProps) {
  const variantClass = `glass-panel glass-panel--${variant}`;
  const radiusStyle = radius !== undefined ? { borderRadius: radius, ...style } : style;

  return (
    <Tag
      className={[variantClass, className].filter(Boolean).join(" ")}
      style={radiusStyle}
    >
      {children}
    </Tag>
  );
}
