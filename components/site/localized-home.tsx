import { ScrollProgress } from "@/components/motion";
import {
  ContactSection,
  HeroSection,
  InvestmentsSection,
  PortfolioSection,
  ProcessSection,
  ProfileSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/sections";
import { getSiteContent, type Locale } from "@/lib/site-content";
import { Footer } from "./footer";
import { Header } from "./header";
import { ScrollManager } from "./scroll-manager";

type LocalizedHomeProps = {
  locale: Locale;
};

export function LocalizedHome({ locale }: LocalizedHomeProps) {
  const content = getSiteContent(locale);

  return (
    <main id="main-content">
      <ScrollManager />
      <ScrollProgress />
      <Header
        locale={locale}
        navigation={content.navigation}
        copy={content.header}
        language={content.language}
      />
      <HeroSection content={content.hero} />
      <ProfileSection content={content.profile} />
      <PortfolioSection content={content.portfolio} />
      <ServicesSection content={content.services} />
      <ProjectsSection content={content.projects} />
      <ProcessSection content={content.process} />
      <InvestmentsSection content={content.investments} />
      <ContactSection content={content.contact} locale={locale} />
      <Footer locale={locale} content={content.footer} />
    </main>
  );
}
