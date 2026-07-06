import {
  BriefcaseBusiness,
  LineChart,
  Scale,
  ShieldCheck,
  Target,
  Utensils
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Locale = "de" | "en";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  text: string;
  textMobile: string;
  icon: LucideIcon;
};

export type PortfolioTone = "blue" | "red" | "ink";

export type PortfolioItem = {
  title: string;
  image: string;
  tone: PortfolioTone;
};

export type ProcessPhase = {
  number: string;
  title: string;
  text: string;
};

export type ProjectPillar = {
  number: string;
  title: string;
  items: string[];
};

export type InvestmentPoint = {
  desktop: string;
  mobile: string;
};

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  language: {
    ariaLabel: string;
    options: Record<Locale, string>;
  };
  navigation: NavigationItem[];
  marquee: string[];
  header: {
    homeAria: string;
    navAria: string;
    mobileNavAria: string;
    openMenu: string;
    closeMenu: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryAction: string;
    secondaryAction: string;
  };
  profile: {
    kicker: string;
    title: string;
    paragraphs: string[];
    fields: string[];
    imageAlt: string;
  };
  services: {
    kicker: string;
    title: string;
    copy: string;
    navAria: string;
    items: Service[];
  };
  projects: {
    kicker: string;
    title: string;
    copy: string;
    pillars: ProjectPillar[];
  };
  process: {
    kicker: string;
    title: string;
    copy: string;
    phases: ProcessPhase[];
  };
  portfolio: {
    kicker: string;
    title: string;
    copy: string;
    items: PortfolioItem[];
  };
  investments: {
    kicker: string;
    title: string;
    quote: string;
    cite: string;
    points: InvestmentPoint[];
  };
  contact: {
    kicker: string;
    title: string;
    labels: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      company: string;
    };
    button: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    tagline: string;
    legal: string;
    legalHref: string;
    privacy: string;
    privacyHref: string;
    noTracking: string;
    navAria: string;
  };
};

export const languages: Array<{ locale: Locale; href: string }> = [
  { locale: "de", href: "/" },
  { locale: "en", href: "/en" }
];

const portfolioImages = {
  defence: "/images/portfolio-defence.jpg",
  marketing: "/images/portfolio-balloon.jpg",
  hospitality: "/images/portfolio-hospitality.jpg",
  franchise: "/images/portfolio-franchise.jpg"
};

export const siteContent: Record<Locale, SiteContent> = {
  de: {
    locale: "de",
    meta: {
      title: "Toleo GmbH | Smart Investments",
      description:
        "Familienholding und Beratungsboutique für Strategie, Markteintritt, Beteiligungen und operative Umsetzung.",
      ogLocale: "de_DE"
    },
    language: {
      ariaLabel: "Sprache wechseln",
      options: {
        de: "DE",
        en: "EN"
      }
    },
    navigation: [
      { label: "Profil", href: "#profil" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Projekte", href: "#projekte" },
      { label: "Prozess", href: "#prozess" },
      { label: "Kontakt", href: "#kontakt" }
    ],
    marquee: [
      "Strategie",
      "Markteintritt",
      "Vertrieb & Marketing",
      "Finanzen & Controlling",
      "Recht & Compliance",
      "Sicherheit & Verteidigung",
      "Hospitality & Franchise",
      "Langfristige Beteiligungen"
    ],
    header: {
      homeAria: "Toleo Startseite",
      navAria: "Hauptnavigation",
      mobileNavAria: "Mobile Navigation",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Familienholding · seit 2019",
      title: "Beratung und Beteiligungen mit Weitblick.",
      copy: "Strategie, Marktzugang und Umsetzung in spezialisierten Märkten.",
      primaryAction: "Leistungen",
      secondaryAction: "Portfolio"
    },
    profile: {
      kicker: "Firmenprofil",
      title: "Eine Holding für Wachstum, Marktzugang und belastbare Umsetzung.",
      paragraphs: [
        "Die Toleo GmbH wurde im Juli 2019 als Familienholding sowie Dienstleistungs- und Beratungsgesellschaft gegründet. Gründer und Geschäftsführer sind Nicole und Holger Rumscheidt.",
        "Die Gesellschaft berät, gründet, erwirbt und verwaltet Beteiligungen im In- und Ausland. Der Fokus liegt auf klaren Strukturen, belastbarer Umsetzung und nachhaltigem Wachstum."
      ],
      fields: ["Neugründung", "Erwerb", "Verwaltung", "Beratung"],
      imageAlt: "Handschlag in einem Besprechungsraum"
    },
    services: {
      kicker: "Dienstleistungen",
      title: "Strategische Beratung mit operativer Bodenhaftung.",
      copy:
        "Toleo verbindet Strategie mit Umsetzung – von Markteintritt und Positionierung bis zu Vertrieb, Finanzen und Compliance.",
      navAria: "Leistungs-Navigation",
      items: [
        {
          title: "Markteintritt & Strategie",
          text: "Analyse, Positionierung und operative Begleitung für nationale und internationale Markteintritte.",
          textMobile: "Analyse, Positionierung und operative Begleitung.",
          icon: Target
        },
        {
          title: "Vertrieb & Marketing",
          text: "Vertriebsunterstützung, Markenführung, Marketingpläne und Audits für anspruchsvolle Wachstumsphasen.",
          textMobile: "Vertrieb, Markenführung und Marketing-Audits.",
          icon: LineChart
        },
        {
          title: "Sicherheit & Verteidigung",
          text: "Beratung für Kommunikations-, Sicherheits- und Verteidigungslösungen im rechtlichen Rahmen.",
          textMobile: "Sicherheits- und Verteidigungslösungen im rechtlichen Rahmen.",
          icon: ShieldCheck
        },
        {
          title: "Finanzen & Controlling",
          text: "Geschäftsplanung, Revision, Controlling und finanzielle Strukturen für belastbare Entscheidungen.",
          textMobile: "Geschäftsplanung, Controlling und Revision.",
          icon: BriefcaseBusiness
        },
        {
          title: "Recht & Regulierung",
          text: "Unterstützung bei Vorschriften, Exportthemen und Compliance-Fragen in komplexen Märkten.",
          textMobile: "Vorschriften, Export und Compliance.",
          icon: Scale
        },
        {
          title: "Hospitality & Franchise",
          text: "Expansion bestehender Restaurantkonzepte und internationaler Aufbau von Franchise-Systemen.",
          textMobile: "Restaurant-Expansion und Franchise-Aufbau.",
          icon: Utensils
        }
      ]
    },
    projects: {
      kicker: "Projekte",
      title: "Von der Machbarkeit bis zum Management.",
      copy:
        "Toleo begleitet Projekte in Sicherheits-, Verteidigungs-, Gastronomie- und Hospitality-Märkten – von Gründung bis Konzernstruktur.",
      pillars: [
        {
          number: "01",
          title: "Technologie & Sicherheit",
          items: [
            "Neue Technologien und Anwendungen",
            "Informations- und Kommunikationstechnologien",
            "Sichere Kommunikation & Cyber Defense",
            "Sicherheits- und Verteidigungslösungen"
          ]
        },
        {
          number: "02",
          title: "Hospitality & Franchise",
          items: [
            "Restaurant- und Gastgewerbe",
            "Aufbau und Entwicklung von Franchise-Systemen"
          ]
        },
        {
          number: "03",
          title: "Projektsteuerung",
          items: [
            "Machbarkeit, Geschäftsplanung und Konzept",
            "Marke, Marketing und Projektentwicklung",
            "Finanzen, Audits, Richtlinien und Recruiting"
          ]
        }
      ]
    },
    process: {
      kicker: "Vorgehensweise",
      title: "Von der Analyse zur Beteiligung.",
      copy:
        "Ein klarer Ablauf für fundierte Entscheidungen, belastbare Umsetzung und langfristige Partnerschaften.",
      phases: [
        {
          number: "01",
          title: "Analyse",
          text: "Marktpotenzial, Wettbewerb und Regulierung werden bewertet. So entsteht eine klare Faktenbasis."
        },
        {
          number: "02",
          title: "Strategie",
          text: "Positionierung, Geschäftsmodell und Marktzugang werden präzise entwickelt."
        },
        {
          number: "03",
          title: "Markteintritt",
          text: "Netzwerk, Compliance-Wissen und lokale Expertise begleiten den Eintritt in neue Märkte."
        },
        {
          number: "04",
          title: "Umsetzung",
          text: "Management, Vertrieb, Marketing und Controlling werden operativ verbunden."
        },
        {
          number: "05",
          title: "Beteiligung",
          text: "Langfristige Partnerschaften und Investitionen schaffen strukturiertes Wachstum."
        }
      ]
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Beteiligungen und Beratung in spezialisierten Märkten.",
      copy:
        "Toleo verbindet spezialisierte Märkte mit klaren Strukturen, belastbaren Prozessen und einem Netzwerk für nachhaltige Expansion.",
      items: [
        {
          title: "Sicherheits- und Verteidigungsindustrie",
          image: portfolioImages.defence,
          tone: "blue"
        },
        {
          title: "Vertrieb und Marketing",
          image: portfolioImages.marketing,
          tone: "red"
        },
        {
          title: "Gastronomie und F&B",
          image: portfolioImages.hospitality,
          tone: "ink"
        },
        {
          title: "Franchise-Systeme",
          image: portfolioImages.franchise,
          tone: "blue"
        }
      ]
    },
    investments: {
      kicker: "Investitionen",
      title: "Gezielte Investitionen. Langfristige Partnerschaften.",
      quote:
        "„Man trifft sich immer zweimal im Leben. Deshalb ist es entscheidend, immer fair und freundlich miteinander umzugehen und mit Freude und Überzeugung dabei zu sein.“",
      cite: "Holger Rumscheidt, Geschäftsführer der Toleo GmbH",
      points: [
        {
          desktop:
            "Langjährige Erfahrung in Produktplatzierung, Vertriebsunterstützung, Marketing und Finanzen.",
          mobile: "Produktplatzierung, Vertrieb, Marketing und Finanzen."
        },
        {
          desktop:
            "Investitionen in nationale und internationale Hospitality-Märkte, Restaurantkonzepte und Gastronomie-Unternehmen.",
          mobile: "Hospitality, Restaurantkonzepte und Gastronomie."
        },
        {
          desktop:
            "Unterstützung etablierter Unternehmen beim Erreichen operativer und finanzieller Ziele – national wie international.",
          mobile: "Operative und finanzielle Ziele für etablierte Unternehmen."
        },
        {
          desktop:
            "Strukturierte Begleitung beim Eintritt in internationale Märkte und beim Aufbau neuer Geschäftsfelder.",
          mobile: "Internationale Entwicklung mit klaren Prozessen."
        }
      ]
    },
    contact: {
      kicker: "Kontakt",
      title: "Starten wir ein Gespräch über Markt, Struktur und Wachstum.",
      labels: {
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail-Adresse",
        message: "Nachricht",
        company: "Firma"
      },
      button: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Danke für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
      error: "Die Nachricht konnte nicht gesendet werden."
    },
    footer: {
      tagline: "Strategische Beratung und Beteiligungen seit 2019.",
      legal: "Impressum",
      legalHref: "/impressum",
      privacy: "Datenschutz",
      privacyHref: "/datenschutz",
      noTracking: "Keine Tracking-Cookies. Kein Analysepixel.",
      navAria: "Footer Navigation"
    }
  },
  en: {
    locale: "en",
    meta: {
      title: "Toleo GmbH | Advisory & Investments",
      description:
        "Family holding and advisory boutique for strategy, market entry, investments and operational execution.",
      ogLocale: "en_US"
    },
    language: {
      ariaLabel: "Switch language",
      options: {
        de: "DE",
        en: "EN"
      }
    },
    navigation: [
      { label: "Profile", href: "#profil" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Services", href: "#leistungen" },
      { label: "Projects", href: "#projekte" },
      { label: "Process", href: "#prozess" },
      { label: "Contact", href: "#kontakt" }
    ],
    marquee: [
      "Strategy",
      "Market Entry",
      "Sales & Marketing",
      "Finance & Controlling",
      "Legal & Compliance",
      "Security & Defence",
      "Hospitality & Franchise",
      "Long-term Investments"
    ],
    header: {
      homeAria: "Toleo home",
      navAria: "Main navigation",
      mobileNavAria: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Family holding · since 2019",
      title: "Advisory and investments with long-term perspective.",
      copy: "Strategy, market access and execution in specialized markets.",
      primaryAction: "Services",
      secondaryAction: "Portfolio"
    },
    profile: {
      kicker: "Company Profile",
      title: "A holding company for growth, market access and reliable execution.",
      paragraphs: [
        "Toleo GmbH was founded in July 2019 as a family holding company and advisory services firm. Nicole and Holger Rumscheidt are its founders and managing directors.",
        "The company advises, establishes, acquires and manages investments in Germany and abroad. Its focus is clear structures, reliable execution and sustainable growth."
      ],
      fields: ["Formation", "Acquisition", "Management", "Advisory"],
      imageAlt: "Handshake in a meeting room"
    },
    services: {
      kicker: "Services",
      title: "Strategic advisory with operational discipline.",
      copy:
        "Toleo connects strategy with execution – from market entry and positioning to sales, finance and compliance.",
      navAria: "Services navigation",
      items: [
        {
          title: "Market Entry & Strategy",
          text: "Analysis, positioning and operational support for national and international market entries.",
          textMobile: "Analysis, positioning and hands-on support.",
          icon: Target
        },
        {
          title: "Sales & Marketing",
          text: "Sales support, brand management, marketing plans and audits for demanding growth phases.",
          textMobile: "Sales, brand management and marketing audits.",
          icon: LineChart
        },
        {
          title: "Security & Defence",
          text: "Advisory for communications, security and defence solutions within the relevant legal framework.",
          textMobile: "Security and defence solutions within the legal framework.",
          icon: ShieldCheck
        },
        {
          title: "Finance & Controlling",
          text: "Business planning, audit, controlling and financial structures for resilient decisions.",
          textMobile: "Business planning, controlling and audit.",
          icon: BriefcaseBusiness
        },
        {
          title: "Legal & Regulatory",
          text: "Support with regulations, export topics and compliance questions in complex markets.",
          textMobile: "Regulations, export and compliance.",
          icon: Scale
        },
        {
          title: "Hospitality & Franchise",
          text: "Expansion of established restaurant concepts and international development of franchise systems.",
          textMobile: "Restaurant expansion and franchise development.",
          icon: Utensils
        }
      ]
    },
    projects: {
      kicker: "Projects",
      title: "From feasibility to management.",
      copy:
        "Toleo supports projects in security, defence, gastronomy and hospitality, from founding teams to established corporate structures.",
      pillars: [
        {
          number: "01",
          title: "Technology & Security",
          items: [
            "New technologies and applications",
            "Information and communications technology",
            "Secure communications & cyber defence",
            "Security and defence solutions"
          ]
        },
        {
          number: "02",
          title: "Hospitality & Franchise",
          items: [
            "Restaurants and hospitality",
            "Development of franchise systems"
          ]
        },
        {
          number: "03",
          title: "Project Governance",
          items: [
            "Feasibility, business planning and concept",
            "Brand, marketing and project development",
            "Finance, audits, procedures and recruiting"
          ]
        }
      ]
    },
    process: {
      kicker: "Approach",
      title: "From analysis to investment.",
      copy:
        "A clear sequence for informed decisions, reliable execution and long-term partnerships.",
      phases: [
        {
          number: "01",
          title: "Analysis",
          text: "Market potential, competition and regulation are evaluated to create a clear factual basis."
        },
        {
          number: "02",
          title: "Strategy",
          text: "Positioning, business model and market access are developed with precision."
        },
        {
          number: "03",
          title: "Market Entry",
          text: "Network access, compliance knowledge and local expertise support entry into new markets."
        },
        {
          number: "04",
          title: "Execution",
          text: "Management, sales, marketing and controlling are connected operationally."
        },
        {
          number: "05",
          title: "Investment",
          text: "Long-term partnerships and investments create structured growth."
        }
      ]
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Investments and advisory in specialized markets.",
      copy:
        "Toleo connects specialized markets with clear structures, reliable processes and a network for sustainable expansion.",
      items: [
        {
          title: "Security and Defence Industry",
          image: portfolioImages.defence,
          tone: "blue"
        },
        {
          title: "Sales and Marketing",
          image: portfolioImages.marketing,
          tone: "red"
        },
        {
          title: "Gastronomy and F&B",
          image: portfolioImages.hospitality,
          tone: "ink"
        },
        {
          title: "Franchise Systems",
          image: portfolioImages.franchise,
          tone: "blue"
        }
      ]
    },
    investments: {
      kicker: "Investments",
      title: "Targeted investments. Long-term partnerships.",
      quote:
        "“You always meet twice in life. That is why it is essential to treat people fairly and kindly, and to work with joy and conviction.”",
      cite: "Holger Rumscheidt, Managing Director of Toleo GmbH",
      points: [
        {
          desktop: "Extensive experience in product placement, sales support, marketing and finance.",
          mobile: "Product placement, sales, marketing and finance."
        },
        {
          desktop:
            "Investments in national and international hospitality markets, restaurant concepts and gastronomy businesses.",
          mobile: "Hospitality, restaurant concepts and gastronomy."
        },
        {
          desktop:
            "Support for established companies in achieving operational and financial goals, nationally and internationally.",
          mobile: "Operational and financial goals for established companies."
        },
        {
          desktop:
            "Structured support for entering international markets and building new business areas.",
          mobile: "International development with clear processes."
        }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Let us start a conversation about market access, structure and growth.",
      labels: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        message: "Message",
        company: "Company"
      },
      button: "Send message",
      sending: "Sending…",
      success: "Thank you for your message. We will get back to you shortly.",
      error: "The message could not be sent."
    },
    footer: {
      tagline: "Strategic advisory and investments since 2019.",
      legal: "Legal Notice",
      legalHref: "/en/legal-notice",
      privacy: "Privacy Policy",
      privacyHref: "/en/privacy",
      noTracking: "No tracking cookies. No analytics pixels.",
      navAria: "Footer navigation"
    }
  }
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getLocaleHref(locale: Locale) {
  return locale === "de" ? "/" : "/en";
}
