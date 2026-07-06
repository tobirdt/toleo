import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ScrollStage } from "@/components/motion/scroll-stage";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProfileSectionProps = {
  content: SiteContent["profile"];
};

export function ProfileSection({ content }: ProfileSectionProps) {
  return (
    <ScrollStage id="profil" className="profile-section" extra={70}>
      <div className="section-inner profile-grid">

        <div>
          <Reveal>
            <p className="section-kicker">{content.kicker}</p>
            <SectionTitle title={content.title} tone="blue" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="profile-copy">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-hide">{paragraph}</p>
              ))}
              <p className="m-only">{content.summaryMobile}</p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="capabilities">
              <p className="capabilities-label">{content.fieldsLabel}</p>
              <div className="capabilities-grid">
                {content.fields.map((field) => (
                  <div className="capability" key={field.label}>
                    <span className="cap-dot" aria-hidden="true" />
                    <span className="cap-label">{field.label}</span>
                    <span className="cap-note">{field.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="profile-visual" delay={0.12}>
          <div className="image-frame">
            <Image
              src="/images/firm-profile.jpg"
              alt={content.imageAlt}
              width={1200}
              height={800}
              sizes="(max-width: 1050px) 100vw, 44vw"
            />
          </div>
        </Reveal>

      </div>
    </ScrollStage>
  );
}
