"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site-content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavId = "mobile-navigation";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Toleo Startseite">
        <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={92} height={58} priority />
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#kontakt">
        Kontakt
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-controls={mobileNavId}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {menuOpen ? (
        <motion.nav
          id={mobileNavId}
          className="mobile-nav"
          aria-label="Mobile Navigation"
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22 }}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </motion.nav>
      ) : null}
    </header>
  );
}
