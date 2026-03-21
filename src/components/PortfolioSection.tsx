import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2, Palette, Globe, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioDental from "@/assets/portfolio-dental.webp";
import portfolioTravel from "@/assets/portfolio-travel.webp";

const filters = [
  { id: "all", label: "All", icon: null },
  { id: "design", label: "Graphic Design", icon: Palette },
  { id: "web", label: "Website Development", icon: Globe },
  { id: "marketing", label: "Performance Marketing", icon: BarChart3 },
];

const projects = [
  {
    id: 1,
    title: "Dental Clinic Flyer Design Campaign",
    category: "Healthcare Marketing",
    filterTag: "design",
    type: "Creative + Lead Generation",
    image: portfolioDental,
    description:
      "Designed a high-converting promotional flyer for a dental clinic campaign focused on appointment bookings. The design emphasized trust, hygiene, offer clarity, and strong CTA placement.",
    results: [
      "Increased walk-in inquiries",
      "Improved brand trust",
      "Higher appointment booking rate",
    ],
    cta: { label: "View Project", href: "#contact", external: false },
  },
  {
    id: 2,
    title: "Sky Routes Travel Website Development",
    category: "Travel Industry",
    filterTag: "web",
    type: "Website Design + Conversion Optimization",
    image: portfolioTravel,
    description:
      "Designed and developed a modern, conversion-focused website for Sky Routes Travel targeting international flight bookings from the USA market.",
    features: [
      "Call-first landing structure",
      "Optimized for Meta Ads traffic",
      "Fast loading & mobile responsive",
      "Lead-focused CTA buttons",
    ],
    results: [
      "Improved call conversions",
      "Higher user engagement",
      "Better ad landing experience",
    ],
    cta: { label: "Visit Live Website", href: "https://skyroutestravel.com", external: true },
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.filterTag === activeFilter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Our Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Real Projects. Real Results. Real Growth.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 overflow-x-auto pb-4 mb-12 md:justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                activeFilter === f.id
                  ? "bg-primary/15 border-primary/40 text-primary glow-sm"
                  : "glass border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/20"
              }`}
            >
              {f.icon && <f.icon className="h-4 w-4" />}
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              layout
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 40px hsl(175 85% 50% / 0.05), 0 0 30px hsl(175 85% 50% / 0.08)" }}
              />

              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} by Digivyral`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary/15 backdrop-blur-md border border-primary/20 text-primary text-xs font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-secondary/80 backdrop-blur-md border border-border/50 text-muted-foreground text-xs font-medium">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features (if present) */}
                {"features" in project && project.features && (
                  <div className="mb-5">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 block">Key Features</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-foreground/70 text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 block">Results</span>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((r) => (
                      <span key={r} className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-primary text-xs font-medium">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="group/btn border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary"
                  onClick={() => {
                    if ((project.cta as any).external) {
                      window.open(project.cta.href, "_blank", "noopener,noreferrer");
                    } else {
                      scrollTo(project.cta.href);
                    }
                  }}
                >
                  {project.cta.label}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-20 text-lg"
          >
            More projects coming soon in this category.
          </motion.p>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Want Results <span className="text-gradient">Like These?</span>
          </h3>
          <Button
            size="lg"
            className="glow text-base px-10 py-6 group"
            onClick={() => scrollTo("contact")}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
