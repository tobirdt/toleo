import Image from "next/image";
import type { ReactNode } from "react";

type LegalShellProps = {
  children: ReactNode;
};

export function LegalShell({ children }: LegalShellProps) {
  return (
    <main className="legal-main">
      <div className="legal-shell">
        <div className="legal-top">
          <a href="/" aria-label="Zur Startseite">
            <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={96} height={61} priority />
          </a>
          <a className="legal-back" href="/">
            Zur Startseite
          </a>
        </div>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
