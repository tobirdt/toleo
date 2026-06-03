import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const profileFields = ["Neugründung", "Erwerb", "Verwaltung", "Beratung"];

export function ProfileSection() {
  return (
    <section className="section profile-section" id="profil">
      <div className="section-inner profile-grid">
        <Reveal>
          <p className="section-kicker">Firmenprofil</p>
          <h2>Eine Holding für Wachstum, Marktzugang und belastbare Umsetzung.</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="profile-copy">
            <p>
              Die Toleo GmbH wurde im Juli 2019 als Familienholding sowie Dienstleistungs- und
              Beratungsgesellschaft gegründet. Gründer und Geschäftsführer sind Nicole und Holger
              Rumscheidt.
            </p>
            <p>
              Die Gesellschaft erbringt Beratungsleistungen in verschiedenen Geschäftsfeldern,
              beteiligt sich an Unternehmen mit gleichem oder ähnlichem Zweck im In- und Ausland
              und übernimmt deren Führung oder Beteiligung als persönlich haftende Gesellschafterin.
            </p>
          </div>
        </Reveal>

        <Reveal className="profile-visual" delay={0.14}>
          <div className="image-frame">
            <Image
              src="/images/firm-profile.jpg"
              alt="Handschlag in einem Besprechungsraum"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div className="frame-caption">
              <span>capital</span>
              <span>structure</span>
              <span>trust</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="fields">
            {profileFields.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
