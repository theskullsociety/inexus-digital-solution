import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { StatsSection } from "@/components/StatsSection";
import { OurFocusSection } from "@/components/OurFocusSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PerformanceMarketingSection } from "@/components/PerformanceMarketingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AIStrategySection } from "@/components/AIStrategySection";
import { InstagramSection } from "@/components/InstagramSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <StatsSection />
        <OurFocusSection />
        <ServicesSection />
        <HowWeWorkSection />
        <PortfolioSection />
        <IndustriesSection />
        <PerformanceMarketingSection />
        <TestimonialsSection />
        <AIStrategySection />
        <InstagramSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
