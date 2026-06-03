import { tickerItems } from "@/lib/site-content";

export function Ticker() {
  return (
    <section className="intro-band" aria-label="Schwerpunkte">
      <div className="intro-track" aria-hidden="true">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
