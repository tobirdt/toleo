import Image from "next/image";
import type { NavigationItem, SiteContent } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

type FooterProps = {
  navigation: NavigationItem[];
  content: SiteContent["footer"];
};

export function Footer({ navigation, content }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={92} height={58} />
          <div>
            <p>{content.tagline}</p>
            <BrandDots size={7} />
          </div>
        </div>

        <nav className="footer-nav" aria-label={content.navAria}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footer-legal">
          <a href={content.legalHref}>{content.legal}</a>
          <a href={content.privacyHref}>{content.privacy}</a>
          <span>{content.noTracking}</span>
        </div>
      </div>
    </footer>
  );
}
