import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, IndianRupee, Home, ChevronRight, Star, Target, Users, TrendingUp } from "lucide-react";

const BusinessManagerOpening = () => {
  const handleApply = () => {
    const message = encodeURIComponent(
      "Hi Digivyral! I'm interested in the Business Manager position. I'd like to apply and discuss the opportunity."
    );
    window.open(`https://wa.me/919306036161?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 md:p-8 border-b border-border/30">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Now Hiring
          </span>
          <span className="px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-xs font-medium">
            Full-Time
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Business Manager</h2>
        <p className="text-muted-foreground text-lg">Lead, strategize, and grow — own the entire business operations.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> On-site (Stay Provided)</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Full-Time</span>
          <span className="flex items-center gap-1.5"><IndianRupee className="h-4 w-4 text-primary" /> 50% Revenue Share</span>
          <span className="flex items-center gap-1.5"><Home className="h-4 w-4 text-primary" /> Accommodation Included</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-8">
        {/* About the Role */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" /> About the Role
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We're looking for a driven and experienced <strong className="text-foreground">Business Manager</strong> who can independently handle and grow the complete business operations at Digivyral. This isn't just a job — it's a partnership. You'll take ownership of the business, drive strategies, manage clients, lead teams, and scale revenue. In return, you'll receive <strong className="text-foreground">50% of the total business revenue</strong> along with fully provided accommodation.
          </p>
        </div>

        {/* What You'll Do */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" /> What You'll Do
          </h3>
          <ul className="space-y-3">
            {[
              "Own and manage the complete business operations end-to-end",
              "Develop and execute growth strategies to scale revenue and client base",
              "Handle client acquisition, retention, and relationship management",
              "Lead and manage internal teams across marketing, design, and development",
              "Create business proposals, pitch decks, and close high-value deals",
              "Monitor KPIs, P&L, and ensure profitability targets are met",
              "Build systems and processes for operational efficiency",
              "Represent Digivyral in meetings, events, and networking opportunities",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What We're Looking For */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" /> What We're Looking For
          </h3>
          <ul className="space-y-3">
            {[
              "Proven experience in business management, operations, or a leadership role",
              "Strong strategic thinking with hands-on execution ability",
              "Excellent communication, negotiation, and presentation skills",
              "Ability to work under pressure and handle high-stress situations with composure",
              "Deep understanding of digital marketing, sales funnels, and business growth tactics",
              "Self-motivated with an entrepreneurial mindset — you treat this as your own business",
              "Experience managing teams and driving them toward targets",
              "Financial acumen — ability to manage budgets, revenue tracking, and forecasting",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Perks */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> What You Get
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: IndianRupee, title: "50% Revenue Share", desc: "Earn half of the total business revenue — your growth is our growth." },
              { icon: Home, title: "Stay Provided", desc: "Fully furnished accommodation so you can focus entirely on building the business." },
              { icon: Users, title: "Full Ownership", desc: "Run the business like it's your own. Complete autonomy in decision-making." },
              { icon: TrendingUp, title: "Unlimited Growth", desc: "No salary cap. The more you grow the business, the more you earn." },
            ].map((perk, i) => (
              <div key={i} className="rounded-xl border border-border/30 bg-muted/30 p-4">
                <perk.icon className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm mb-1">{perk.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="pt-4 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-foreground font-semibold">Ready to lead and grow with us?</p>
              <p className="text-muted-foreground text-sm">Send us a message on WhatsApp to apply.</p>
            </div>
            <Button size="lg" onClick={handleApply} className="glow-sm">
              Apply Now via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Careers at Digivyral</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Join the Team That Makes Brands Go{" "}
              <span className="text-primary">Viral</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're building India's most impactful digital agency. If you're passionate, driven, and ready to own something big — we want you.
            </p>
          </motion.div>

          {/* Openings */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">Current Openings</h2>
            <BusinessManagerOpening />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
