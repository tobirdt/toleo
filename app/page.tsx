"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Utensils,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const navigation = [
  { label: "Profil", href: "#profil" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" }
];

const services: Service[] = [
  {
    title: "Markteintritt & Strategie",
    text: "Analyse, Positionierung, Marktplatzierung und operative Begleitung für neue nationale und internationale Märkte.",
    icon: Target
  },
  {
    title: "Vertrieb & Marketing",
    text: "Vertriebsunterstützung, Branding, Marketingpläne und Audits für anspruchsvolle Wachstumsphasen.",
    icon: LineChart
  },
  {
    title: "Sicherheit & Verteidigung",
    text: "Beratung für Kommunikations-, Sicherheits- und Verteidigungslösungen innerhalb des rechtlichen Rahmens.",
    icon: ShieldCheck
  },
  {
    title: "Finanzen & Controlling",
    text: "Geschäftsplanung, Revision, Controlling und finanzielle Strukturen für belastbare Entscheidungen.",
    icon: BriefcaseBusiness
  },
  {
    title: "Recht & Regulierung",
    text: "Unterstützung bei nationalen und internationalen Vorschriften, Exportthemen und Compliance-Fragen.",
    icon: Scale
  },
  {
    title: "Hospitality & Franchise",
    text: "Expansion bestehender Restaurantkonzepte und internationaler Aufbau von Franchise-Systemen.",
    icon: Utensils
  }
];

const projectAreas = [
  "Neue Technologien und Anwendungen",
  "Informations- und Kommunikationstechnologien",
  "Sichere Kommunikation und Cyber Defense",
  "Produkte und Lösungen für Sicherheit und Verteidigung",
  "Restaurant- und Gastgewerbe",
  "Implementierung von Franchise-Systemen"
];

const projectMethods = [
  "Machbarkeitsstudien",
  "Markenstrategie",
  "Geschäftsplanerstellung",
  "Konzept- und Markenentwicklung",
  "Projektentwicklung",
  "Marketingpläne",
  "Projektmanagement",
  "Finanzen, Revision und Controlling",
  "Vertriebs- und Marketing-Audits",
  "Betriebs-, Sicherheits- und Personalaudits",
  "Richtlinien und Verfahren",
  "Executive- und Management-Recruiting"
];

const portfolio = [
  {
    title: "Sicherheits- und Verteidigungsindustrie",
    image: "/images/defence.png",
    tone: "blue"
  },
  {
    title: "Vertrieb und Marketing",
    image: "/images/marketing.png",
    tone: "red"
  },
  {
    title: "Gastronomie und F&B",
    image: "/images/hospitality.jpg",
    tone: "ink"
  },
  {
    title: "Franchise-Systeme",
    image: "/images/franchise.jpg",
    tone: "blue"
  }
];

const investmentPoints = [
  "Umfassender Erfahrungsschatz in Produktplatzierung, Vertriebsunterstützung, Marketing und Finanzen.",
  "Investitionen in nationale und internationale Hospitality-Märkte, Restaurantkonzepte und Gastronomie-Unternehmen.",
  "Unterstützung nationaler und internationaler Marktführer beim Erreichen operativer und finanzieller Ziele.",
  "Bewährte Prozesse und Strategien, um Unternehmen von nationalen zu internationalen Playern weiterzuentwickeln."
];

const tickerItems = [
  "Strategy",
  "Capital",
  "Defense",
  "Hospitality",
  "Market Entry",
  "Franchise",
  "Operations"
];

function Reveal({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-110px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    document.body.classList.add("light-site");
    return () => document.body.classList.remove("light-site");
  }, []);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Ticker />
      <Profile />
      <Services />
      <Projects />
      <Portfolio />
      <Investments />
      <Contact />
      <Footer />
    </main>
  );
}

function Header({
  menuOpen,
  setMenuOpen
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
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
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
      {menuOpen ? (
        <motion.nav
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

function Hero() {
  const { scrollYProgress } = useScroll();
  const signatureY = useTransform(scrollYProgress, [0, 0.32], [0, 120]);
  const orbY = useTransform(scrollYProgress, [0, 0.32], [0, -80]);

  return (
    <section className="hero" id="top">
      <div className="hero-shell">
        <motion.div className="hero-signature" style={{ y: signatureY }} aria-hidden="true">
          <svg viewBox="0 0 640 320" role="img">
            <path
              d="M18 126C98 70 248 28 376 42c24 3 41 9 47 18 8 14-15 20-60 18-48-2-96-3-142 11-31 66-63 139-84 217"
              pathLength="1"
            />
            <path
              d="M221 218c28-72 72-95 88-70 13 20-26 91-63 89-19-1-17-39 1-73"
              pathLength="1"
            />
            <path
              d="M319 143c-23 80-17 127 22 108 44-22 76-101 123-174 45-68 78-36 38 25-36 55-91 90-133 104"
              pathLength="1"
            />
            <path
              d="M464 190c30-66 73-69 75-29 2 42-69 88-84 52-12-28 30-87 58-78"
              pathLength="1"
            />
          </svg>
        </motion.div>
        <motion.div className="hero-orbit" style={{ y: orbY }} aria-hidden="true">
          <span className="orbit-dot blue" />
          <span className="orbit-dot red" />
          <span className="orbit-line" />
        </motion.div>
        <div className="hero-copy-wrap">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Familienholding und Beratungsboutique seit 2019
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Toleo gestaltet Wachstum mit Präzision, Kapital und Haltung.
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            Smarte Investitionen für eine nachhaltige Zukunft. Beratung,
            Beteiligungen und operative Managementunterstützung für
            Kommunikationstechnologien, Sicherheit, Verteidigung und Hospitality.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
          >
            <a className="primary-link" href="#leistungen">
              Leistungen
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-link" href="#portfolio">
              Portfolio
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="panel-top">
            <span />
            <span />
          </div>
          <div className="metric-ring">
            <svg viewBox="0 0 220 220" aria-hidden="true">
              <circle cx="110" cy="110" r="78" />
              <circle cx="110" cy="110" r="78" />
            </svg>
            <strong>360°</strong>
            <p>Rundum-Service</p>
          </div>
          <div className="panel-grid">
            <div>
              <strong>4</strong>
              <span>Geschäftsfelder</span>
            </div>
            <div>
              <strong>2019</strong>
              <span>Gründung</span>
            </div>
          </div>
        </motion.div>
        <a className="scroll-cue" href="#profil" aria-label="Zum Profil scrollen">
          <ChevronDown size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <section className="intro-band" aria-label="Schwerpunkte">
      <div className="intro-track" aria-hidden="true">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section profile-section" id="profil">
      <div className="section-inner profile-grid">
        <Reveal>
          <p className="section-kicker">Firmenprofil</p>
          <h2>Eine Holding für Wachstum, Marktzugang und belastbare Umsetzung.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="profile-copy">
            <p>
              Die Toleo GmbH wurde im Juli 2019 als Familienholding sowie
              Dienstleistungs- und Beratungsgesellschaft gegründet. Gründer und
              Geschäftsführer sind Nicole und Holger Rumscheidt.
            </p>
            <p>
              Die Gesellschaft erbringt Beratungsleistungen in verschiedenen
              Geschäftsfeldern, beteiligt sich an Unternehmen mit gleichem oder
              ähnlichem Zweck im In- und Ausland und übernimmt deren Führung
              oder Beteiligung als persönlich haftende Gesellschafterin.
            </p>
          </div>
        </Reveal>
        <Reveal className="profile-visual" delay={0.14}>
          <div className="image-frame">
            <Image
              src="/images/firm-profile.jpg"
              alt="Handschlag in einem Besprechungsraum"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div className="frame-caption">
              <span>capital</span>
              <span>structure</span>
              <span>trust</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="fields">
            {["Neugründung", "Erwerb", "Verwaltung", "Beratung"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="leistungen">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Dienstleistungen</p>
            <h2>Strategische Beratung mit operativer Bodenhaftung.</h2>
            <p>
              Toleo begleitet Kunden und Unternehmen mit einem 360-Grad-Service:
              Unternehmensvertretung, Markteintritt, Strategieentwicklung,
              Branding, operative Managementunterstützung und Vermittlung.
            </p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="service-card">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section project-section" id="projekte">
      <div className="section-inner project-layout">
        <Reveal>
          <div className="sticky-copy">
            <p className="section-kicker">Projekte</p>
            <h2>Von der Machbarkeit bis zum Management.</h2>
            <p className="lead">
              Toleo berät Kunden, Unternehmen und Dienstleister in der
              Sicherheits-, Verteidigungs- und Gastgewerbebranche. Das Spektrum
              reicht von Start-up-Einheiten bis hin zu großen Konzernen.
            </p>
          </div>
        </Reveal>
        <div className="project-areas">
          {projectAreas.map((area, index) => (
            <Reveal key={area} delay={index * 0.035}>
              <div className="area-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{area}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.14} className="method-cloud">
          {projectMethods.map((method) => (
            <span key={method}>{method}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="section-inner">
        <Reveal>
          <div className="section-heading compact">
            <p className="section-kicker">Portfolio</p>
            <h2>Beteiligungen und Beratung in spezialisierten Märkten.</h2>
            <p>
              Bestehende Bildmotive werden hier bewusst reduziert eingesetzt:
              als moderne Materialflächen, die von Logo-Punkten, Linien und
              klarer Typografie geführt werden.
            </p>
          </div>
        </Reveal>
        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className={`portfolio-tile ${item.tone}`}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
                <div className="tile-orbit" aria-hidden="true" />
                <div className="tile-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investments() {
  return (
    <section className="section investment-section" id="investitionen">
      <div className="section-inner investment-grid">
        <Reveal>
          <p className="section-kicker">Investitionen</p>
          <h2>Smarte Investitionen für eine nachhaltige Zukunft.</h2>
          <blockquote>
            "Man trifft sich immer zweimal im Leben. Deshalb ist es essenziell,
            immer fair und freundlich miteinander umzugehen und mit Spaß und
            Motivation dabei zu sein."
            <cite>Holger Rumscheidt, Geschäftsführer der Toleo GmbH</cite>
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="investment-list">
            {investmentPoints.map((point) => (
              <div key={point}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Danke für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden.");
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="section-inner contact-grid">
        <Reveal>
          <div>
            <p className="section-kicker">Kontakt</p>
            <h2>Starten wir ein Gespräch über Markt, Struktur und Wachstum.</h2>
            <div className="contact-links">
              <a href="mailto:info@toleo.biz">
                <Mail size={18} aria-hidden="true" />
                info@toleo.biz
              </a>
              <a href="tel:+491702208778">
                <Phone size={18} aria-hidden="true" />
                +49 (170) 22 08 778
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Ritter-Hilprand Str. 9, 82024 Taufkirchen
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Vorname
                <input name="firstName" type="text" autoComplete="given-name" required />
              </label>
              <label>
                Nachname
                <input name="lastName" type="text" autoComplete="family-name" required />
              </label>
            </div>
            <label>
              E-Mail-Adresse
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Nachricht
              <textarea name="message" rows={5} minLength={10} required />
            </label>
            <button type="submit" disabled={status === "loading"}>
              <Send size={18} aria-hidden="true" />
              {status === "loading" ? "Wird gesendet..." : "Senden"}
            </button>
            <p className={`form-status ${status}`} aria-live="polite">
              {message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
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
