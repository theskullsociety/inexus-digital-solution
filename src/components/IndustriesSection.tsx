import { useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Star, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const industries = [
  {
    id: "medical",
    label: "Medical & Healthcare",
    icon: "🏥",
    description: "Healthcare marketing demands trust, compliance, and patient-first messaging. We help clinics and hospitals cut through the noise with ethical, high-converting campaigns.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Multi-Specialty Clinic",
      problem: "Low patient footfall despite heavy offline advertising. Zero digital presence and no trackable lead pipeline.",
      strategy: "Built a full-funnel Meta + Google Ads campaign with optimized landing pages and WhatsApp follow-up automation.",
      results: [
        { metric: "4X", label: "ROAS" },
        { metric: "300%", label: "Lead Growth" },
        { metric: "70%", label: "Lower CPL" },
      ],
    },
    testimonial: {
      text: "Digivyral completely transformed our patient acquisition. We went from struggling to fill appointments to having a 2-week waitlist within 3 months.",
      name: "Dr. Priya Sharma",
      role: "Director, HealthFirst Clinic",
      rating: 5,
    },
  },
  {
    id: "education",
    label: "Education & EdTech",
    icon: "🎓",
    description: "The education space is fiercely competitive. From coaching institutes to EdTech platforms, we drive enrollments with precision-targeted campaigns and nurture sequences.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Online Coaching Institute",
      problem: "High cost per enrollment and poor lead quality from generic ad campaigns across platforms.",
      strategy: "Implemented lookalike audience targeting, webinar funnels, and automated WhatsApp drip sequences.",
      results: [
        { metric: "5X", label: "Enrollment Rate" },
        { metric: "200%", label: "Webinar Signups" },
        { metric: "60%", label: "Lower CPA" },
      ],
    },
    testimonial: {
      text: "Our enrollments skyrocketed after partnering with Digivyral. Their funnel strategy was a game-changer for our coaching business.",
      name: "Rahul Mehta",
      role: "Founder, LearnPro Academy",
      rating: 5,
    },
  },
  {
    id: "travel",
    label: "Travel & Tourism",
    icon: "✈️",
    description: "Travel brands need aspirational content and instant booking conversions. We create scroll-stopping campaigns that turn wanderlust into bookings.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Luxury Travel Agency",
      problem: "Low online bookings with most revenue dependent on walk-ins and referrals only.",
      strategy: "Launched visual-first Instagram & Facebook campaigns with seamless WhatsApp booking integration.",
      results: [
        { metric: "350%", label: "Online Bookings" },
        { metric: "6X", label: "ROAS" },
        { metric: "45%", label: "Repeat Customers" },
      ],
    },
    testimonial: {
      text: "Digivyral made our tours go viral. We're now fully booked for the next two seasons — something we never imagined possible.",
      name: "Ankit Verma",
      role: "CEO, WanderLux Travels",
      rating: 5,
    },
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: "🏢",
    description: "Real estate marketing needs hyper-local targeting and trust building. We generate qualified buyer and investor leads through performance-driven digital strategies.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Premium Real Estate Developer",
      problem: "Expensive leads with low conversion rates from traditional portals and newspaper ads.",
      strategy: "Deployed geo-targeted Google Ads, virtual tour landing pages, and AI-powered lead scoring with CRM integration.",
      results: [
        { metric: "8X", label: "ROAS" },
        { metric: "400%", label: "Qualified Leads" },
        { metric: "55%", label: "Lower CPL" },
      ],
    },
    testimonial: {
      text: "We sold out an entire tower in 4 months. Digivyral's lead gen strategy is absolutely world-class.",
      name: "Vikram Singh",
      role: "MD, Skyline Properties",
      rating: 5,
    },
  },
  {
    id: "ecommerce",
    label: "E-commerce & D2C",
    icon: "🛒",
    description: "D2C brands need scroll-stopping creatives and conversion-optimized funnels. We build revenue machines from first click to repeat purchase.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "D2C Skincare Brand",
      problem: "High cart abandonment rates and unsustainable customer acquisition costs eating into margins.",
      strategy: "Implemented retargeting funnels, UGC-driven ad creatives, and post-purchase WhatsApp upsell automation.",
      results: [
        { metric: "5X", label: "Revenue Growth" },
        { metric: "40%", label: "Lower CAC" },
        { metric: "3X", label: "Repeat Purchases" },
      ],
    },
    testimonial: {
      text: "Digivyral helped us scale from ₹2L to ₹15L monthly revenue in just 5 months. Their ROAS is unmatched.",
      name: "Sneha Kapoor",
      role: "Founder, GlowNaturals",
      rating: 5,
    },
  },
  {
    id: "restaurants",
    label: "Restaurants & Hospitality",
    icon: "🍽️",
    description: "Restaurants thrive on local visibility and craveable content. We drive footfall and online orders with hyper-local campaigns and mouth-watering creatives.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Fine Dining Restaurant Chain",
      problem: "Empty tables on weekdays and low online ordering despite great food quality and reviews.",
      strategy: "Created geo-targeted social media campaigns, Google My Business optimization, and Zomato/Swiggy ad integration.",
      results: [
        { metric: "250%", label: "Footfall Increase" },
        { metric: "180%", label: "Online Orders" },
        { metric: "4.8★", label: "Google Rating" },
      ],
    },
    testimonial: {
      text: "Our weekday tables are now fully booked. Digivyral's local marketing strategy is phenomenal.",
      name: "Chef Arjun Bhatia",
      role: "Owner, Spice Theory",
      rating: 5,
    },
  },
  {
    id: "law",
    label: "Law Firms",
    icon: "⚖️",
    description: "Legal marketing demands authority and trust. We position law firms as thought leaders while generating high-intent consultation requests.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Corporate Law Firm",
      problem: "Zero digital presence with all clients coming through word-of-mouth, limiting growth potential.",
      strategy: "Built authority through LinkedIn content strategy, Google Ads for high-intent keywords, and consultation booking funnels.",
      results: [
        { metric: "500%", label: "Consultation Requests" },
        { metric: "35", label: "Retainer Clients" },
        { metric: "10X", label: "LinkedIn Reach" },
      ],
    },
    testimonial: {
      text: "We went from relying solely on referrals to getting 15+ qualified consultation requests weekly. Incredible ROI.",
      name: "Adv. Neha Gupta",
      role: "Partner, Gupta & Associates",
      rating: 5,
    },
  },
  {
    id: "personal",
    label: "Personal Brands",
    icon: "🎤",
    description: "Influencers and personal brands need viral content strategy and monetization funnels. We turn followers into revenue and build lasting digital empires.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "Lifestyle Influencer",
      problem: "Large following but no monetization strategy. Brand deals were inconsistent and undervalued.",
      strategy: "Created a personal brand funnel with course launches, email sequences, and strategic brand collaboration outreach.",
      results: [
        { metric: "₹25L", label: "Monthly Revenue" },
        { metric: "200K", label: "New Followers" },
        { metric: "12", label: "Brand Deals/Month" },
      ],
    },
    testimonial: {
      text: "Digivyral helped me turn my Instagram following into a real business. I now earn more from my brand than my 9-5 ever paid.",
      name: "Kavya Iyer",
      role: "Lifestyle Creator",
      rating: 5,
    },
  },
  {
    id: "startups",
    label: "Startups & SaaS",
    icon: "🚀",
    description: "Startups need rapid, measurable growth on tight budgets. We build scalable acquisition engines that turn signups into paying customers.",
    services: ["Meta Ads Strategy", "Google Ads Management", "Funnel Building", "Landing Page Optimization", "Lead Generation Automation", "CRM Integration", "WhatsApp Marketing", "Social Media Branding"],
    caseStudy: {
      clientType: "B2B SaaS Platform",
      problem: "High churn rate and expensive paid acquisition with poor trial-to-paid conversion rates.",
      strategy: "Implemented product-led growth funnels, retargeting campaigns, and onboarding email sequences with demo booking automation.",
      results: [
        { metric: "3X", label: "Trial Conversions" },
        { metric: "65%", label: "Lower CAC" },
        { metric: "150%", label: "MRR Growth" },
      ],
    },
    testimonial: {
      text: "From struggling to get demos to having a pipeline full of qualified leads. Digivyral understands SaaS growth like no one else.",
      name: "Rohan Desai",
      role: "Co-Founder, CloudStack AI",
      rating: 5,
    },
  },
];

function MetricCounter({ value, inView }: { value: string; inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numMatch = value.match(/^([₹]?)(\d+)(.*)/);

  useEffect(() => {
    if (!inView || !ref.current || !numMatch) return;
    const prefix = numMatch[1];
    const target = parseInt(numMatch[2]);
    const suffix = numMatch[3];

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return controls.stop;
  }, [inView]);

  if (!numMatch) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>0</span>;
}

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState("medical");
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-50px" });
  const tabsRef = useRef<HTMLDivElement>(null);

  const current = industries.find((i) => i.id === activeIndustry)!;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Industries We Serve</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Industries We <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Tailored Digital Growth Strategies for High-Impact Industries
          </p>
        </motion.div>

        {/* Industry Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div
            ref={tabsRef}
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap snap-start transition-all duration-300 border ${
                  activeIndustry === ind.id
                    ? "bg-primary/15 border-primary/40 text-primary glow-sm"
                    : "glass border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                <span>{ind.icon}</span>
                {ind.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Industry Content */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          {/* Description + Services */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Industry Description */}
            <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {current.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{current.label}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{current.description}</p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <Target className="h-4 w-4" />
                  <span>Industry-Specific Challenges We Solve</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  <span>What We Do For {current.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.services.map((service, i) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-foreground/80 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study + Testimonial */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Case Study Card */}
            <div className="lg:col-span-3 glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Case Study</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{current.caseStudy.clientType}</h4>

                <div className="space-y-4 mt-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">The Problem</span>
                    <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{current.caseStudy.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Our Strategy</span>
                    <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{current.caseStudy.strategy}</p>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-8" ref={metricsRef}>
                  {current.caseStudy.results.map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gradient">
                        <MetricCounter value={r.metric} inView={metricsInView} />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{r.label}</div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="mt-8 group/btn border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary"
                  onClick={() => scrollTo("contact")}
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="lg:col-span-2 glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-6xl text-primary/10 font-serif leading-none mb-4">"</div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: current.testimonial.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm mb-8">
                  "{current.testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{current.testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{current.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Dominate <span className="text-gradient">Your Industry?</span>
          </h3>
          <Button
            size="lg"
            className="glow text-base px-10 py-6 group"
            onClick={() => scrollTo("contact")}
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
