import { motion } from "framer-motion";
import { Zap, Eye, Users } from "lucide-react";

const focuses = [
  {
    icon: Zap,
    title: "Smart Strategy",
    description: "No more guesswork. Every click should count — data-driven decisions that deliver real ROI.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Eye,
    title: "Online Visibility",
    description: "Be found before your competitors are — dominate search, social, and every digital touchpoint.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: Users,
    title: "Quality Leads",
    description: "Reach the right audience, not just any audience — conversions that actually matter to your business.",
    accent: "from-primary/15 to-accent/10",
  },
];

export function OurFocusSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Our Focus</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            What Drives <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.03] to-transparent" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${focus.accent} flex items-center justify-center mb-6 mx-auto group-hover:glow-sm transition-all duration-500`}
                >
                  <focus.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300 font-display">
                  {focus.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{focus.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
