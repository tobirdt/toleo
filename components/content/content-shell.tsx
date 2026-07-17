import Image from "next/image";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { getSiteContent, type Locale } from "@/lib/site-content";

type Breadcrumb = {
  label: string;
  href?: string;
};

type ContentShellProps = {
  children: ReactNode;
  locale: Locale;
  breadcrumbs: Breadcrumb[];
  alternateHref: string;
  alternateLabel: string;
};

const navigation = {
  de: [
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Holger Rumscheidt", href: "/holger-rumscheidt" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Kontakt", href: "/#kontakt" },
  ],
  en: [
    { label: "Company", href: "/en/company" },
    { label: "Holger Rumscheidt", href: "/en/holger-rumscheidt" },
    { label: "Services", href: "/en/services" },
    { label: "Contact", href: "/en#kontakt" },
  ],
} satisfies Record<Locale, Array<{ label: string; href: string }>>;

export function ContentShell({
  children,
  locale,
  breadcrumbs,
  alternateHref,
  alternateLabel,
}: ContentShellProps) {
  const content = getSiteContent(locale);
  const homeHref = locale === "de" ? "/" : "/en";

  return (
    <>
      <main id="main-content" className="content-main">
        <div className="content-shell">
          <header className="content-top">
            <a href={homeHref} aria-label={locale === "de" ? "Zur Startseite" : "Back to home"}>
              <Image
                src="/images/toleo-logo.png"
                alt="Toleo GmbH"
                width={96}
                height={61}
                priority
              />
            </a>
            <nav aria-label={locale === "de" ? "Seitennavigation" : "Page navigation"}>
              {navigation[locale].map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={alternateHref} hrefLang={locale === "de" ? "en" : "de"}>
                {alternateLabel}
              </a>
            </nav>
          </header>

          <nav className="breadcrumbs" aria-label={locale === "de" ? "Brotkrumen" : "Breadcrumb"}>
            <ol>
              {breadcrumbs.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
                </li>
              ))}
            </ol>
          </nav>

          <article className="content-article">{children}</article>
        </div>
      </main>
      <Footer locale={locale} content={content.footer} />
    </>
  );
}
