"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  getLocaleHref,
  languages,
  type Locale,
  type NavigationItem,
  type SiteContent
} from "@/lib/site-content";

type HeaderProps = {
  locale: Locale;
  navigation: NavigationItem[];
  copy: SiteContent["header"];
  language: SiteContent["language"];
  homeHref?: string;
  contactHref?: string;
  activeHref?: string;
  languageHrefs?: Partial<Record<Locale, string>>;
};

export function Header({
  locale,
  navigation,
  copy,
  language,
  homeHref = "#top",
  contactHref = "#kontakt",
  activeHref,
  languageHrefs,
}: HeaderProps) {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY }                       = useScroll();
  const mobileNavId                       = "mobile-navigation";
  const menuButtonRef                     = useRef<HTMLButtonElement>(null);
  const mobileNavRef                      = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => { setScrolled(window.scrollY > 40); }, []);

  useEffect(() => {
    setActiveSection(window.location.hash.slice(1));

    const onSection = (event: Event) => {
      setActiveSection((event as CustomEvent<string>).detail ?? "");
    };

    window.addEventListener("toleo:section", onSection);
    return () => window.removeEventListener("toleo:section", onSection);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const links = Array.from(
        mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []
      );
      const first = links[0];
      const last = links.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-scrim"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <div
        className="header-focus-layer"
        data-active={scrolled || menuOpen ? "true" : "false"}
        aria-hidden="true"
      />

      <header
        className="site-header"
        data-scrolled={scrolled ? "true" : "false"}
        data-page={activeHref ? "content" : undefined}
      >
        <a className="brand" href={homeHref} aria-label={copy.homeAria}>
          <Image
            src="/images/toleo-logo.png"
            alt="Toleo Holding"
            width={72}
            height={45}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label={copy.navAria}>
          {navigation.map((item) => {
            const isActive = item.href === activeHref || item.href === `#${activeSection}`;

            return (
              <a
                key={item.href}
                href={item.href}
                data-active={isActive || undefined}
                aria-current={isActive ? (activeHref ? "page" : "location") : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    className="nav-dot"
                    layoutId="nav-dot"
                    aria-hidden="true"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a className="header-cta" href={contactHref}>
          {copy.contact}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <LanguageSwitch locale={locale} language={language} hrefs={languageHrefs} />

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          aria-controls={mobileNavId}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              ref={mobileNavRef}
              id={mobileNavId}
              className="mobile-nav"
              aria-label={copy.mobileNavAria}
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                    staggerChildren: 0.035,
                    delayChildren: 0.05,
                  },
                },
                closed: { opacity: 0, scale: 0.98, transition: { duration: 0.16 } },
              }}
            >
              {navigation.map((item, index) => {
                const isActive = item.href === activeHref || item.href === `#${activeSection}`;
                const isContact = item.href === contactHref || item.href.endsWith("#kontakt");

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={isContact ? "mobile-nav-cta" : undefined}
                    data-active={isActive || undefined}
                    aria-current={isActive ? (activeHref ? "page" : "location") : undefined}
                    onClick={() => setMenuOpen(false)}
                    variants={{
                      closed: { opacity: 0, y: -6 },
                      open: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <span className="mobile-nav-num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </motion.a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function LanguageSwitch({
  locale,
  language,
  hrefs,
}: {
  locale: Locale;
  language: SiteContent["language"];
  hrefs?: Partial<Record<Locale, string>>;
}) {
  return (
    <nav className="language-switch" aria-label={language.ariaLabel}>
      {languages.map((item) => {
        const isActive = item.locale === locale;
        const label = item.locale === "de" ? "Deutsch" : "English";
        const href = hrefs?.[item.locale] ?? getLocaleHref(item.locale);

        if (isActive) {
          return (
            <span
              key={item.locale}
              className="language-option"
              aria-current="page"
              aria-label={label}
            >
              {language.options[item.locale]}
            </span>
          );
        }

        return (
          <a
            key={item.locale}
            className="language-option"
            href={href}
            hrefLang={item.locale}
            aria-label={label}
            onClick={(event) => {
              if (hrefs?.[item.locale]) return;
              // Keep the visitor on the section they are reading
              const hash = window.location.hash;
              if (!hash) return;
              event.preventDefault();
              window.location.href = href + hash;
            }}
          >
            {language.options[item.locale]}
          </a>
        );
      })}
    </nav>
  );
}
