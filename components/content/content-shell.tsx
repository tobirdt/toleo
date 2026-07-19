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
  const sectionNavigation = content.navigation.map((item) => ({
    ...item,
    href: `${homeHref}${item.href}`,
  }));

  return (
    <>
      <Header
        locale={locale}
        navigation={sectionNavigation}
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
