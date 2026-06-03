import Image from "next/image";
import { Sparkles } from "lucide-react";
import { navigation } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={92} height={58} />
          <p>Smarte Investitionen für eine nachhaltige Zukunft.</p>
        </div>

        <div className="footer-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-legal">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <span>Keine Tracking-Cookies. Kein Analysepixel.</span>
        </div>

        <Sparkles className="footer-spark" size={42} aria-hidden="true" />
      </div>
    </footer>
  );
}
