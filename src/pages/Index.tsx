import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";

const StatsSection = lazy(() => import("@/components/StatsSection").then(m => ({ default: m.StatsSection || m.default })));
const OurFocusSection = lazy(() => import("@/components/OurFocusSection").then(m => ({ default: m.OurFocusSection || m.default })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection || m.default })));
const HowWeWorkSection = lazy(() => import("@/components/HowWeWorkSection").then(m => ({ default: m.HowWeWorkSection || m.default })));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(m => ({ default: m.PortfolioSection || m.default })));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection").then(m => ({ default: m.IndustriesSection || m.default })));
const PerformanceMarketingSection = lazy(() => import("@/components/PerformanceMarketingSection").then(m => ({ default: m.PerformanceMarketingSection || m.default })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection || m.default })));
const AIStrategySection = lazy(() => import("@/components/AIStrategySection").then(m => ({ default: m.AIStrategySection || m.default })));
const InstagramSection = lazy(() => import("@/components/InstagramSection").then(m => ({ default: m.InstagramSection || m.default })));
const CTASection = lazy(() => import("@/components/CTASection").then(m => ({ default: m.CTASection || m.default })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer || m.default })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
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
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
