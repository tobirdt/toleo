import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getSiteContent, type Locale } from "@/lib/site-content";
import { PageHero, type Breadcrumb } from "./page-hero";

type ContentShellProps = {
  children: ReactNode;
  locale: Locale;
  breadcrumbs: Breadcrumb[];
  alternateHref: string;
  activeHref: string;
  hero: {
    variant: "company" | "profile" | "services";
    kicker: string;
    title: string;
    lead: string;
  };
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
  activeHref,
  hero,
}: ContentShellProps) {
  const content = getSiteContent(locale);
  const homeHref = locale === "de" ? "/" : "/en";
  const contactHref = locale === "de" ? "/#kontakt" : "/en#kontakt";
  const languageHrefs = locale === "de" ? { en: alternateHref } : { de: alternateHref };

  return (
    <>
      <Header
        locale={locale}
        navigation={navigation[locale]}
        copy={content.header}
        language={content.language}
        homeHref={homeHref}
        contactHref={contactHref}
        activeHref={activeHref}
        languageHrefs={languageHrefs}
      />
      <main id="main-content" className="content-main" tabIndex={-1}>
        <PageHero locale={locale} breadcrumbs={breadcrumbs} {...hero} />
        <div className="content-shell">
          <article className="content-article">{children}</article>
        </div>
      </main>
      <Footer locale={locale} content={content.footer} contactHref={contactHref} />
    </>
  );
}
