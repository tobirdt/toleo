import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { investmentPoints } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

export function InvestmentsSection() {
  return (
    <section className="section investment-section" id="investitionen">
      <div className="section-inner investment-grid">

        <Reveal>
          <p className="section-kicker">Investitionen</p>
          <h2>Smarte Investitionen für eine nachhaltige Zukunft.</h2>
          <blockquote>
            „Man trifft sich immer zweimal im Leben. Deshalb ist es essenziell, immer fair und
            freundlich miteinander umzugehen und mit Spaß und Motivation dabei zu sein."
            <cite>Holger Rumscheidt, Geschäftsführer der Toleo GmbH</cite>
          </blockquote>
          <div style={{ marginTop: 28 }}>
            <BrandDots mode="signature" size={9} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="investment-list">
            {investmentPoints.map((point) => (
              <div key={point}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
