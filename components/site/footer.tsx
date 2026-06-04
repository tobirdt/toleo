import Image from "next/image";
import { Sparkles } from "lucide-react";
import { navigation } from "@/lib/site-content";
import { BrandDots } from "@/components/ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={92} height={58} />
          <p>Strategische Beratung und Beteiligungen seit 2019.</p>
          <div style={{ marginTop: 16 }}>
            <BrandDots size={7} />
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footer-legal">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <span>Keine Tracking-Cookies. Kein Analysepixel.</span>
        </div>

        <Sparkles className="footer-spark" size={40} aria-hidden="true" />
      </div>
    </footer>
  );
}
