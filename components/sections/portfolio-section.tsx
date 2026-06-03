import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { portfolio } from "@/lib/site-content";

export function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading compact">
            <p className="section-kicker">Portfolio</p>
            <h2>Beteiligungen und Beratung in spezialisierten Märkten.</h2>
            <p>
              Toleo verbindet spezialisierte Märkte mit klaren Strukturen, belastbaren Prozessen
              und einem Netzwerk für nachhaltige Expansion.
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className={`portfolio-tile ${item.tone}`}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
                <div className="tile-orbit" aria-hidden="true" />
                <div className="tile-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
