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
import { Footer, Header, Ticker } from "@/components/site";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <HeroSection />
      <Ticker />
      <ProfileSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <PortfolioSection />
      <InvestmentsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
