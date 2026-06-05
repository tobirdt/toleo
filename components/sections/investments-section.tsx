import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import type { SiteContent } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

type InvestmentsSectionProps = {
  content: SiteContent["investments"];
};

export function InvestmentsSection({ content }: InvestmentsSectionProps) {
  return (
    <section className="section investment-section" id="investitionen">
      <div className="section-inner investment-grid">

        <Reveal>
          <p className="section-kicker">{content.kicker}</p>
          <h2>{content.title}</h2>
          <blockquote>
            {content.quote}
            <cite>{content.cite}</cite>
          </blockquote>
          <div style={{ marginTop: 28 }}>
            <BrandDots mode="signature" size={9} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="investment-list">
            {content.points.map((point) => (
              <div key={point.desktop}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>
                  <span className="desktop-copy">{point.desktop}</span>
                  <span className="mobile-copy">{point.mobile}</span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
