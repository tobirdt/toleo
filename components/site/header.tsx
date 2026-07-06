"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
};

export function Header({ locale, navigation, copy, language }: HeaderProps) {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY }                       = useScroll();
  const mobileNavId                       = "mobile-navigation";

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
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

      <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
      <a className="brand" href="#top" aria-label={copy.homeAria}>
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
          const isActive = item.href === `#${activeSection}`;

          return (
            <a key={item.href} href={item.href} data-active={isActive || undefined}>
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

      <a className="header-cta" href="#kontakt">
        {copy.contact}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>

      <LanguageSwitch locale={locale} language={language} />

      <button
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
            id={mobileNavId}
            className="mobile-nav"
            aria-label={copy.mobileNavAria}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={item.href === "#kontakt" ? "mobile-nav-cta" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}

function LanguageSwitch({
  locale,
  language
}: {
  locale: Locale;
  language: SiteContent["language"];
}) {
  return (
    <nav className="language-switch" aria-label={language.ariaLabel}>
      {languages.map((item) => {
        const isActive = item.locale === locale;
        const label = item.locale === "de" ? "Deutsch" : "English";

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
            href={getLocaleHref(item.locale)}
            aria-label={label}
            onClick={(event) => {
              // Keep the visitor on the section they are reading
              const hash = window.location.hash;
              if (!hash) return;
              event.preventDefault();
              window.location.href = getLocaleHref(item.locale) + hash;
            }}
          >
            {language.options[item.locale]}
          </a>
        );
      })}
    </nav>
  );
}
