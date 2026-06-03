import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <section className="section services-section" id="leistungen">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Dienstleistungen</p>
            <h2>Strategische Beratung mit operativer Bodenhaftung.</h2>
            <p>
              Toleo begleitet Kunden und Unternehmen mit einem 360-Grad-Service:
              Unternehmensvertretung, Markteintritt, Strategieentwicklung, Branding, operative
              Managementunterstützung und Vermittlung.
            </p>
          </div>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="service-card">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
