import Image from "next/image";
import { AnimatedLogo } from "@/components/brand/animated-logo";
import { BrandDots } from "@/components/ui";
import type { Locale } from "@/lib/site-content";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  locale: Locale;
  variant: "company" | "profile" | "services";
  kicker: string;
  title: string;
  lead: string;
  breadcrumbs: Breadcrumb[];
};

export function PageHero({
  locale,
  variant,
  kicker,
  title,
  lead,
  breadcrumbs,
}: PageHeroProps) {
  const spectrum =
    locale === "de"
      ? ["Strategie", "Marktzugang", "Umsetzung"]
      : ["Strategy", "Market Access", "Execution"];

  return (
    <section className={`content-hero content-hero-${variant}`} id="top">
      <div className="hero-aurora" aria-hidden="true"><span /></div>
      <div className="content-hero-inner">
        <nav className="breadcrumbs" aria-label={locale === "de" ? "Brotkrumen" : "Breadcrumb"}>
          <ol>
            {breadcrumbs.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="content-hero-grid">
          <div className="content-hero-copy">
            <p className="content-hero-kicker">
              <span aria-hidden="true" />
              {kicker}
            </p>
            <h1>{title}</h1>
            <p className="content-hero-lead">{lead}</p>
          </div>

          <div className="content-hero-visual" aria-hidden={variant === "services" ? "true" : undefined}>
            {variant === "company" && (
              <div className="content-company-image">
                <Image
                  src="/images/firm-profile.jpg"
                  alt={locale === "de" ? "Handschlag in einem Besprechungsraum" : "Handshake in a meeting room"}
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 42vw"
                />
              </div>
            )}

            {variant === "profile" && (
              <div className="content-profile-mark">
                <AnimatedLogo />
                <BrandDots mode="signature" size={8} />
              </div>
            )}

            {variant === "services" && (
              <div className="content-spectrum">
                {spectrum.map((item, index) => (
                  <div key={item}>
                    <span className={index === 1 ? "spectrum-dot spectrum-dot-red" : "spectrum-dot"} />
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
