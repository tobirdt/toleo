"use client";

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

type LocalizedHomeProps = {
  locale: Locale;
};

export function LocalizedHome({ locale }: LocalizedHomeProps) {
  const content = getSiteContent(locale);

  return (
    <main>
      <ScrollProgress />
      <Header
        locale={locale}
        navigation={content.navigation}
        copy={content.header}
        language={content.language}
      />
      <HeroSection content={content.hero} />
      <ProfileSection content={content.profile} />
      <ServicesSection content={content.services} />
      <ProjectsSection content={content.projects} />
      <ProcessSection content={content.process} />
      <PortfolioSection content={content.portfolio} />
      <InvestmentsSection content={content.investments} />
      <ContactSection content={content.contact} locale={locale} />
      <Footer navigation={content.navigation} content={content.footer} />
    </main>
  );
}
