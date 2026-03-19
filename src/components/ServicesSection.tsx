import { motion } from "framer-motion";
import { Globe, TrendingUp, Palette, Search, Share2, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven campaigns across social, search, and display that deliver measurable ROI.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Blazing-fast, responsive websites built with modern tech stacks that convert visitors.",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Dominate search rankings with our proven optimization strategies and paid search mastery.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Community building and viral content strategies that amplify your brand presence.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Bold visual identities that make your brand unforgettable and instantly recognizable.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "End-to-end online stores with seamless UX, payment integration, and growth optimization.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We combine creativity with data to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group rounded-2xl p-8 border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.02]" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:glow-sm transition-all duration-500">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient transition-all duration-300 font-display">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>

                <div className="mt-5 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
