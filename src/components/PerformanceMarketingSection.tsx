import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Target,
  BarChart3,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  LineChart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "healthcare",
    icon: "🏥",
    label: "Healthcare & Medical",
    problem:
      "Clinics and hospitals often struggle with low appointment bookings, poor local visibility, and ineffective digital advertising.",
    strategy:
      "Implement Google Ads for high-intent searches, local SEO optimization, conversion-focused landing pages, and Meta Ads targeting nearby patients.",
    results:
      "Increased patient appointments, stronger local search rankings, and reduced cost per lead.",
  },
  {
    id: "education",
    icon: "🎓",
    label: "Education & Coaching Institutes",
    problem:
      "Education institutes face seasonal admissions, low-quality leads, and high competition in advertising platforms.",
    strategy:
      "Create lead generation funnels, run Meta and Google Ads for admissions, build enrollment landing pages, and automate follow-ups using WhatsApp.",
    results:
      "Higher quality student inquiries, increased enrollments, and lower cost per admission.",
  },
  {
    id: "travel",
    icon: "✈️",
    label: "Travel & Tourism",
    problem:
      "Travel agencies struggle with high competition in ads and low website conversion rates.",
    strategy:
      "Build conversion-focused travel websites, run Google flight booking ads, launch call-only campaigns, and use retargeting ads for visitors.",
    results:
      "More booking inquiries, increased phone call conversions, and improved return on ad spend.",
  },
  {
    id: "realestate",
    icon: "🏢",
    label: "Real Estate",
    problem:
      "Real estate developers often face expensive leads and poor lead nurturing systems.",
    strategy:
      "Launch Facebook lead generation campaigns, build property landing pages, integrate CRM systems, and use WhatsApp automation for follow-ups.",
    results:
      "Higher quality property leads, more site visits, and improved deal closures.",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    label: "E-commerce & D2C Brands",
    problem:
      "Online stores often face low conversion rates and high cart abandonment.",
    strategy:
      "Run Meta Ads and Google Shopping campaigns, implement retargeting ads, optimize product pages, and automate email and WhatsApp marketing.",
    results:
      "Higher ROAS, increased online sales, and better customer retention.",
  },
  {
    id: "law",
    icon: "⚖️",
    label: "Law Firms",
    problem:
      "Law firms struggle to generate qualified legal inquiries online.",
    strategy:
      "Run Google Search Ads for legal keywords, optimize local SEO, create consultation landing pages, and improve online reputation.",
    results:
      "Consistent legal consultation leads and increased local search visibility.",
  },
  {
    id: "restaurants",
    icon: "🍽️",
    label: "Restaurants & Hospitality",
    problem:
      "Restaurants often face low weekday footfall and weak social media engagement.",
    strategy:
      "Launch location-based social media ads, create food-focused creatives, optimize Google Maps listings, and collaborate with influencers.",
    results:
      "Increased dine-in customers, higher reservations, and stronger social media reach.",
  },
];

const services = [
  {
    icon: Megaphone,
    label: "Meta Ads Management",
    description: "Strategic Facebook & Instagram ad campaigns with advanced audience targeting, lookalike audiences, and A/B tested creatives to maximize ROAS.",
    stats: { value: "4.2X", label: "Avg. ROAS" },
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: Target,
    label: "Google Ads Campaigns",
    description: "High-intent search, display, and Performance Max campaigns optimized for conversions with smart bidding strategies and negative keyword refinement.",
    stats: { value: "68%", label: "Lower CPC" },
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: MousePointerClick,
    label: "Conversion-Focused Landing Pages",
    description: "Speed-optimized, mobile-first landing pages with persuasive copy, social proof elements, and clear CTAs engineered for maximum conversion rates.",
    stats: { value: "3.8X", label: "Conv. Rate" },
    gradient: "from-purple-500/20 to-violet-500/10",
  },
  {
    icon: Zap,
    label: "Lead Generation Funnels",
    description: "End-to-end funnel architecture from awareness to conversion, with automated nurture sequences via email, SMS, and WhatsApp drip campaigns.",
    stats: { value: "250%", label: "More Leads" },
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: RefreshCw,
    label: "Retargeting Campaigns",
    description: "Dynamic retargeting across Meta, Google Display, and YouTube to re-engage warm audiences and recover lost conversions with personalized creatives.",
    stats: { value: "5X", label: "Re-engagement" },
    gradient: "from-rose-500/20 to-pink-500/10",
  },
  {
    icon: LineChart,
    label: "Analytics & Conversion Tracking",
    description: "Full-stack analytics with GA4, Meta Pixel, server-side tracking, and custom dashboards for real-time performance visibility and attribution modeling.",
    stats: { value: "99.9%", label: "Data Accuracy" },
    gradient: "from-cyan-500/20 to-sky-500/10",
  },
  {
    icon: BarChart3,
    label: "Continuous Campaign Optimization",
    description: "Weekly performance audits, creative refresh cycles, bid adjustments, and audience refinement to ensure campaigns consistently improve over time.",
    stats: { value: "40%", label: "MoM Growth" },
    gradient: "from-primary/20 to-accent/10",
  },
];

function IndustryCard({
  industry,
  isOpen,
  onToggle,
  index,
}: {
  industry: (typeof industries)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div
        onClick={onToggle}
        className={`glass rounded-2xl cursor-pointer transition-all duration-300 group hover:border-primary/40 ${
          isOpen ? "border-primary/30 shadow-[0_0_30px_hsl(175_85%_50%/0.08)]" : ""
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {industry.label}
            </h3>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
          />
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 grid md:grid-cols-3 gap-4">
                {[
                  { title: "The Problem", content: industry.problem, color: "from-red-500/20 to-red-500/5" },
                  { title: "Our Strategy", content: industry.strategy, color: "from-primary/20 to-primary/5" },
                  { title: "Results", content: industry.results, color: "from-emerald-500/20 to-emerald-500/5" },
                ].map((section) => (
                  <div
                    key={section.title}
                    className={`rounded-xl p-5 bg-gradient-to-br ${section.color} border border-border/30`}
                  >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      {section.title}
                    </span>
                    <p className="text-foreground/80 text-sm mt-2 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function PerformanceMarketingSection() {
  const [openId, setOpenId] = useState<string | null>("healthcare");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="performance-marketing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[hsl(260,80%,50%/0.04)] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Performance Marketing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
            We build industry-specific performance marketing strategies that generate measurable business growth.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="max-w-4xl mx-auto space-y-4 mb-24">
          {industries.map((ind, i) => (
            <IndustryCard
              key={ind.id}
              industry={ind}
              isOpen={openId === ind.id}
              onToggle={() => setOpenId(openId === ind.id ? null : ind.id)}
              index={i}
            />
          ))}
        </div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold">
              Our Performance Marketing <span className="text-gradient">Approach</span>
            </h3>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              At Digivyral, we focus on performance marketing strategies that deliver measurable results. Every campaign is optimized for leads, conversions, and revenue growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.article
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient leading-none">{service.stats.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{service.stats.label}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* JSON-LD for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                provider: {
                  "@type": "Organization",
                  name: "Digivyral",
                  url: "https://digivyral.com",
                },
                name: "Performance Marketing Services",
                description:
                  "Industry-specific performance marketing strategies including Meta Ads, Google Ads, landing page optimization, lead generation funnels, retargeting, and analytics-driven campaign optimization.",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Performance Marketing Services",
                  itemListElement: services.map((s, i) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: s.label,
                      description: s.description,
                    },
                    position: i + 1,
                  })),
                },
              }),
            }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-[hsl(260,80%,50%/0.05)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Scale <span className="text-gradient">Your Business?</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let our performance marketing experts build a growth strategy tailored for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="glow text-base px-10 py-6 group"
                onClick={() => scrollTo("contact")}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-10 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary"
                onClick={() => scrollTo("portfolio")}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
