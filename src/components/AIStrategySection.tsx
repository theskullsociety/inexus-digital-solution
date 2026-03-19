import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, ArrowRight, ArrowLeft, Brain, Target, TrendingUp,
  Star, Rocket, BarChart3, Download, Mail, Phone, CheckCircle2,
  Zap, Globe, Users, DollarSign, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const industries = [
  "Healthcare", "Education", "Travel", "Real Estate",
  "E-commerce", "Law Firms", "Restaurants", "Other",
];

const budgets = [
  "$500 – $1,000", "$1,000 – $3,000", "$3,000 – $5,000", "$5,000+",
];

const goals = [
  "Generate Leads", "Increase Sales", "Book More Appointments",
  "Get More Website Traffic", "Improve Brand Awareness",
];

// ── strategy templates ──

const industryInsights: Record<string, string> = {
  Healthcare:
    "Healthcare businesses face strict ad compliance, high CPCs, and the challenge of building patient trust online. Most clinics underinvest in local SEO and miss out on appointment-driven campaigns.",
  Education:
    "EdTech and coaching institutes compete in an oversaturated digital space. Enrolment funnels often leak because of poor landing-page UX and lack of retargeting.",
  Travel:
    "Travel agencies must fight price-comparison sites and seasonal demand swings. Without dynamic ad strategies and SEO-optimised destination content, conversions stall.",
  "Real Estate":
    "Real estate marketing requires hyper-local targeting and high-quality lead qualification. Most agents waste budget on broad audiences without retargeting or CRM integration.",
  "E-commerce":
    "E-commerce brands battle rising CAC and cart abandonment. Without performance-driven ads, conversion-rate optimisation, and email flows, ROAS plateaus quickly.",
  "Law Firms":
    "Legal marketing is constrained by ethics regulations and expensive keywords. Firms that don't invest in thought-leadership content and local SEO lose to aggregators.",
  Restaurants:
    "Restaurants rely heavily on local discovery, reviews, and impulse-driven engagement. Without social-media presence and location-based ads, footfall declines.",
  Other:
    "Most businesses underutilise digital channels, relying on outdated tactics. A data-driven approach combining paid media, SEO, and conversion optimisation can unlock substantial growth.",
};

function getStrategies(industry: string, goal: string, budget: string) {
  const base = [
    { icon: Target, label: "Google Ads Strategy", desc: "Search & display campaigns targeting high-intent keywords in your niche." },
    { icon: Users, label: "Meta Ads Campaign", desc: "Lookalike & interest-based campaigns on Facebook & Instagram for rapid reach." },
    { icon: Globe, label: "Conversion Landing Page", desc: "High-converting, mobile-first landing pages tailored to your offer." },
    { icon: TrendingUp, label: "SEO Optimisation", desc: "On-page, technical, and local SEO to build organic traffic over time." },
    { icon: Zap, label: "Retargeting Campaigns", desc: "Re-engage visitors who didn't convert with dynamic remarketing ads." },
  ];
  if (goal === "Generate Leads" || goal === "Book More Appointments") {
    base.push({ icon: Phone, label: "Call-Tracking & CRM", desc: "Integrate call tracking and CRM automation to close more leads." });
  }
  if (goal === "Increase Sales" || goal === "Get More Website Traffic") {
    base.push({ icon: DollarSign, label: "Email & SMS Flows", desc: "Automated nurture sequences to maximise customer lifetime value." });
  }
  return base;
}

function getMetrics(budget: string) {
  const map: Record<string, { leads: string; conversion: string; channels: string }> = {
    "$500 – $1,000": { leads: "2–3×", conversion: "+15 %", channels: "Meta Ads, Local SEO" },
    "$1,000 – $3,000": { leads: "3–5×", conversion: "+25 %", channels: "Google Ads, Meta Ads, SEO" },
    "$3,000 – $5,000": { leads: "5–8×", conversion: "+35 %", channels: "Omni-channel (Google, Meta, SEO, Email)" },
    "$5,000+": { leads: "8–12×", conversion: "+50 %", channels: "Full-stack Performance Marketing" },
  };
  return map[budget] ?? map["$1,000 – $3,000"];
}

// ── components ──

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < current
                ? "bg-primary text-primary-foreground"
                : i === current
                ? "bg-primary/20 text-primary border border-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {i < current ? <CheckCircle2 size={16} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`w-8 h-0.5 ${i < current ? "bg-primary" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function TypingText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const id = setInterval(() => {
      idx.current += 1;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, 18);
    return () => clearInterval(id);
  }, [text]);
  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

export function AIStrategySection() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const canNext = [
    () => !!industry,
    () => !!businessType && !!location,
    () => !!budget && !!goal,
  ];

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 3000);
  };

  const reset = () => {
    setStep(0);
    setIndustry("");
    setBusinessType("");
    setLocation("");
    setBudget("");
    setGoal("");
    setShowResult(false);
    setTypingDone(false);
  };

  const strategies = getStrategies(industry, goal, budget);
  const metrics = getMetrics(budget);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="ai-strategy"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* bg effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(260,80%,60%)]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Brain size={16} className="animate-pulse" />
            AI-Powered Tool
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Free{" "}
            <span className="text-gradient">AI-Powered Marketing Strategy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tell us about your business and instantly discover how Digivyral can
            help you generate more leads, sales, and growth.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── LOADING ── */}
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto text-center py-20"
            >
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                <div className="absolute inset-0 rounded-full border-2 border-t-primary animate-spin" />
                <Brain
                  size={32}
                  className="absolute inset-0 m-auto text-primary animate-pulse"
                />
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">
                Analysing your business…
              </p>
              <p className="text-muted-foreground">
                Our AI is crafting a personalised growth plan for your{" "}
                <span className="text-primary">{industry}</span> business.
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── FORM ── */}
          {!loading && !showResult && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="glass rounded-2xl p-8 md:p-10">
                <StepIndicator current={step} total={3} />

                <AnimatePresence mode="wait">
                  {/* step 0 */}
                  {step === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Building2 size={20} className="text-primary" />
                        Tell us about your industry
                      </h3>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Industry
                        </label>
                        <Select value={industry} onValueChange={setIndustry}>
                          <SelectTrigger className="bg-muted/50 border-border">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((i) => (
                              <SelectItem key={i} value={i}>
                                {i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* step 1 */}
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Globe size={20} className="text-primary" />
                        Business &amp; Location
                      </h3>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Business Type
                        </label>
                        <Input
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          placeholder="e.g. Clinic, Coaching Institute, Online Store"
                          className="bg-muted/50 border-border"
                          maxLength={120}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Target Location
                        </label>
                        <Input
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. USA, Canada, India, Local City"
                          className="bg-muted/50 border-border"
                          maxLength={120}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* step 2 */}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <BarChart3 size={20} className="text-primary" />
                        Budget &amp; Goals
                      </h3>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Monthly Marketing Budget
                        </label>
                        <Select value={budget} onValueChange={setBudget}>
                          <SelectTrigger className="bg-muted/50 border-border">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Primary Goal
                        </label>
                        <Select value={goal} onValueChange={setGoal}>
                          <SelectTrigger className="bg-muted/50 border-border">
                            <SelectValue placeholder="Select your primary goal" />
                          </SelectTrigger>
                          <SelectContent>
                            {goals.map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* nav buttons */}
                <div className="flex justify-between mt-10">
                  <Button
                    variant="ghost"
                    onClick={() => setStep((s) => s - 1)}
                    disabled={step === 0}
                    className="gap-2"
                  >
                    <ArrowLeft size={16} /> Back
                  </Button>

                  {step < 2 ? (
                    <Button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext[step]()}
                      className="gap-2 glow-sm"
                    >
                      Next <ArrowRight size={16} />
                    </Button>
                  ) : (
                    <Button
                      onClick={generate}
                      disabled={!canNext[2]()}
                      className="gap-2 glow"
                    >
                      <Sparkles size={16} /> Generate My AI Strategy
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── RESULTS ── */}
          {!loading && showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* heading */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
                  <Sparkles size={16} /> Strategy Ready
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                  Your Personalised{" "}
                  <span className="text-gradient">Growth Plan</span>
                </h3>
                <p className="text-muted-foreground mt-2">
                  For a <span className="text-primary font-medium">{businessType}</span> in{" "}
                  <span className="text-primary font-medium">{location}</span>
                </p>
              </div>

              {/* A – Industry Insights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Brain size={20} className="text-primary" />
                  Industry Insights — {industry}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {typingDone ? (
                    industryInsights[industry] ?? industryInsights.Other
                  ) : (
                    <TypingText
                      text={industryInsights[industry] ?? industryInsights.Other}
                      onDone={() => setTypingDone(true)}
                    />
                  )}
                </p>
              </motion.div>

              {/* B – Recommended Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
                  <Target size={20} className="text-primary" />
                  Recommended Strategy by Digivyral
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {strategies.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="rounded-xl bg-muted/40 border border-border/50 p-4 hover:border-primary/40 transition-colors"
                    >
                      <s.icon size={20} className="text-primary mb-2" />
                      <p className="font-medium text-foreground text-sm">{s.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* C – Estimated Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
                  <TrendingUp size={20} className="text-primary" />
                  Estimated Growth Opportunity
                </h4>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  {[
                    { label: "Potential Lead Growth", value: metrics.leads },
                    { label: "Est. Conversion Improvement", value: metrics.conversion },
                    { label: "Suggested Channels", value: metrics.channels },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-muted/40 border border-border/50 p-5"
                    >
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* D – Why Digivyral */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Rocket size={20} className="text-primary" />
                  Why Digivyral
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Digivyral specialises in performance marketing and data-driven
                  growth strategies. We combine creative storytelling with
                  advanced analytics to help businesses like yours achieve
                  measurable results — from lead generation to revenue growth.
                  Every campaign is tailored, tracked, and optimised for maximum
                  ROI.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass rounded-2xl p-8 md:p-10 text-center"
              >
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Ready to Implement This Strategy?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Let Digivyral turn this plan into real results for your
                  business.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Button
                    size="lg"
                    className="glow gap-2"
                    onClick={() => scrollTo("contact")}
                  >
                    Book a Free Strategy Call <ArrowRight size={16} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    onClick={() =>
                      window.open(
                        "https://wa.me/919039040086?text=" +
                          encodeURIComponent(
                            `Hi Digivyral! I just used the AI Strategy tool on your website. I run a ${businessType} in ${location} (${industry}). I'd love to discuss my personalised growth plan.`
                          ),
                        "_blank"
                      )
                    }
                  >
                    <Mail size={16} /> Talk to Digivyral Experts
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400" /> 5-Star Client
                    Results
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 size={14} className="text-primary" /> Proven Growth
                    Strategies
                  </span>
                  <span className="flex items-center gap-1">
                    <Rocket size={14} className="text-primary" /> Performance
                    Marketing Experts
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="mt-6 text-muted-foreground"
                  onClick={reset}
                >
                  ← Start Over
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
