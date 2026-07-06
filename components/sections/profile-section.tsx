import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/lib/site-content";

type ProfileSectionProps = {
  content: SiteContent["profile"];
};

export function ProfileSection({ content }: ProfileSectionProps) {
  return (
    <section className="section profile-section" id="profil" data-num="01">
      <div className="section-inner profile-grid">

        <div>
          <Reveal>
            <p className="section-kicker">{content.kicker}</p>
            <SectionTitle title={content.title} tone="blue" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="profile-copy">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="fields">
              {content.fields.map((item) => (
                <span key={item}>{item}</span>
              ))}
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
    </section>
  );
}
