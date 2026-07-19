import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale, SiteContent } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

type FooterProps = {
  locale: Locale;
  content: SiteContent["footer"];
  contactHref?: string;
};

export function Footer({ locale, content, contactHref = "#kontakt" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Image
            src="/images/toleo-logo-white.png"
            alt="Toleo Holding"
            width={132}
            height={83}
          />
          <a className="footer-cta" href={contactHref}>
            {content.cta}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-grid">
          <nav aria-label={content.navAria}>
            <h3>{content.navHeading}</h3>
            <ul>
              {content.links.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>{content.contactHeading}</h3>
            <ul>
              <li>
                <a href="mailto:info@toleo.biz">info@toleo.biz</a>
              </li>
              <li>
                <span>
                  Ritter-Hilprand-Str. 9
                  <br />
                  82024 Taufkirchen
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3>{content.legalHeading}</h3>
            <ul>
              <li>
                <a href={content.legalHref}>{content.legal}</a>
              </li>
              <li>
                <a href={content.privacyHref}>{content.privacy}</a>
              </li>
              <li className="footer-langs">
                {locale === "de" ? (
                  <span aria-current="page">Deutsch</span>
                ) : (
                  <a href="/">Deutsch</a>
                )}
                <span className="footer-lang-sep" aria-hidden="true" />
                {locale === "en" ? (
                  <span aria-current="page">English</span>
                ) : (
                  <a href="/en">English</a>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Toleo GmbH</span>
          <BrandDots size={6} />
          <span>{content.noTracking}</span>
        </div>
      </div>
    </footer>
  );
}
