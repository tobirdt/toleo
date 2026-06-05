"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const { scrollY }               = useScroll();
  const mobileNavId               = "mobile-navigation";

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => { setScrolled(window.scrollY > 40); }, []);

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
    <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
      <a className="brand" href="#top" aria-label={copy.homeAria}>
        <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={72} height={45} priority />
      </a>

      <nav className="desktop-nav" aria-label={copy.navAria}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
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

      <motion.div
        className="header-scroll-line"
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        suppressHydrationWarning
      />

      {menuOpen && (
        <motion.nav
          id={mobileNavId}
          className="mobile-nav"
          aria-label={copy.mobileNavAria}
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22 }}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#kontakt" ? "mobile-nav-cta" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
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

        return (
          <a
            key={item.locale}
            href={isActive ? "#top" : getLocaleHref(item.locale)}
            aria-current={isActive ? "page" : undefined}
            aria-label={item.locale === "de" ? "Deutsch" : "English"}
          >
            {language.options[item.locale]}
          </a>
        );
      })}
    </nav>
  );
}
