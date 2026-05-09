import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ForWhomSection from "@/components/ForWhomSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import CasesSection from "@/components/CasesSection";
import FaqSection from "@/components/FaqSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ForWhomSection />
      <HowWeWorkSection />
      <PricingSection />
      <ComparisonSection />
      <CasesSection />
      <FaqSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
