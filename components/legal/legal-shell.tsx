import Image from "next/image";
import type { ReactNode } from "react";

type LegalShellProps = {
  children: ReactNode;
  homeHref?: string;
  logoAria?: string;
  backLabel?: string;
};

export function LegalShell({
  children,
  homeHref = "/",
  logoAria = "Zur Startseite",
  backLabel = "Zur Startseite",
}: LegalShellProps) {
  return (
    <main id="main-content" className="legal-main" tabIndex={-1}>
      <div className="legal-shell">
        <div className="legal-top">
          <a href={homeHref} aria-label={logoAria}>
            <Image
              src="/images/toleo-logo.png"
              alt="Toleo Holding"
              width={96}
              height={61}
              priority
            />
          </a>
          <a className="legal-back" href={homeHref}>
            {backLabel}
          </a>
        </div>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
