import { Reveal } from "@/components/motion/reveal";
import { projectAreas, projectMethods } from "@/lib/site-content";

export function ProjectsSection() {
  return (
    <section className="section project-section" id="projekte">
      <div className="section-inner project-layout">
        <Reveal>
          <div className="sticky-copy">
            <p className="section-kicker">Projekte</p>
            <h2>Von der Machbarkeit bis zum Management.</h2>
            <p className="lead">
              Toleo berät Unternehmen im Sicherheits- und Verteidigungsumfeld
              sowie in der Gastronomie- und Hospitality-Branche. Das Spektrum reicht
              von Gründungsunternehmen bis hin zu etablierten Konzernen.
            </p>
          </div>
        </Reveal>

        <div>
          <div className="project-areas">
            {projectAreas.map((area, index) => (
              <Reveal key={area} delay={index * 0.04}>
                <div className="area-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{area}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="method-cloud">
            {projectMethods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
