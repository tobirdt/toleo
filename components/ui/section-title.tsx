type SectionTitleProps = {
  title: string;
  tone?: "blue" | "red";
  className?: string;
  animated?: boolean;
};

/**
 * Section headline with the Toleo closing dot. Scroll choreography is applied
 * to the surrounding section, keeping the text present in the initial HTML at
 * all times. The animated prop remains for backwards-compatible callers.
 */
export function SectionTitle({ title, tone = "red", className }: SectionTitleProps) {
  const text = title.replace(/\.\s*$/, "");

  return (
    <h2 className={className}>
      <span className="headline-line">
        {text}
        <span className={`headline-dot headline-dot-${tone}`} aria-hidden="true">
          .
        </span>
      </span>
    </h2>
  );
}
