import {
  BriefcaseBusiness,
  LineChart,
  Scale,
  ShieldCheck,
  Target,
  Utensils
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type PortfolioTone = "blue" | "red" | "ink";

export type PortfolioItem = {
  title: string;
  image: string;
  tone: PortfolioTone;
};

export const navigation: NavigationItem[] = [
  { label: "Profil", href: "#profil" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" }
];

export const services: Service[] = [
  {
    title: "Markteintritt & Strategie",
    text: "Analyse, Positionierung und operative Begleitung für nationale und internationale Markteintritte.",
    icon: Target
  },
  {
    title: "Vertrieb & Marketing",
    text: "Vertriebsunterstützung, Markenführung, Marketingpläne und Audits für anspruchsvolle Wachstumsphasen.",
    icon: LineChart
  },
  {
    title: "Sicherheit & Verteidigung",
    text: "Beratung für Kommunikations-, Sicherheits- und Verteidigungslösungen im rechtlichen Rahmen.",
    icon: ShieldCheck
  },
  {
    title: "Finanzen & Controlling",
    text: "Geschäftsplanung, Revision, Controlling und finanzielle Strukturen für belastbare Entscheidungen.",
    icon: BriefcaseBusiness
  },
  {
    title: "Recht & Regulierung",
    text: "Unterstützung bei Vorschriften, Exportthemen und Compliance-Fragen in komplexen Märkten.",
    icon: Scale
  },
  {
    title: "Hospitality & Franchise",
    text: "Expansion bestehender Restaurantkonzepte und internationaler Aufbau von Franchise-Systemen.",
    icon: Utensils
  }
];

export const projectAreas = [
  "Neue Technologien und Anwendungen",
  "Informations- und Kommunikationstechnologien",
  "Sichere Kommunikation und Cyber Defense",
  "Lösungen für Sicherheit und Verteidigung",
  "Restaurant- und Gastgewerbe",
  "Implementierung von Franchise-Systemen"
];

export const projectMethods = [
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

export const portfolio: PortfolioItem[] = [
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

export const investmentPoints = [
  "Erfahrung in Produktplatzierung, Vertriebsunterstützung, Marketing und Finanzen.",
  "Investitionen in nationale und internationale Hospitality-Märkte, Restaurantkonzepte und Gastronomie-Unternehmen.",
  "Unterstützung nationaler und internationaler Marktführer beim Erreichen operativer und finanzieller Ziele.",
  "Klare Prozesse, um Unternehmen von nationalen Strukturen in internationale Märkte weiterzuentwickeln."
];

export const tickerItems = [
  "Strategie",
  "Kapital",
  "Sicherheit",
  "Hospitality",
  "Markteintritt",
  "Franchise",
  "Operations"
];

export type ProcessPhase = {
  number: string;
  title: string;
  text: string;
};

export const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Analyse",
    text: "Marktpotenziale, Wettbewerbsumfeld und regulatorische Rahmenbedingungen werden systematisch bewertet. Klare Faktenlage als Grundlage jeder Entscheidung."
  },
  {
    number: "02",
    title: "Strategie",
    text: "Positionierung, Geschäftsmodell und Marktzugangsstrategie werden präzise entwickelt. Strategische Exzellenz mit operativer Umsetzbarkeit als Maßstab."
  },
  {
    number: "03",
    title: "Markteintritt",
    text: "Operative Begleitung beim nationalen und internationalen Markteintritt. Netzwerk, Compliance-Wissen und lokale Expertise im direkten Einsatz."
  },
  {
    number: "04",
    title: "Umsetzung",
    text: "Management-Unterstützung, Vertrieb, Marketing und Controlling aus einer Hand. Konsequente Bodenhaftung in jeder Phase der Realisierung."
  },
  {
    number: "05",
    title: "Beteiligung",
    text: "Langfristige Partnerschaften, Beteiligungen und nachhaltige Investitionen. Wertsteigerung durch Struktur, Kapital und kontinuierliche Expertise."
  }
];
