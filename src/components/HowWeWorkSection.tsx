import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We deep-dive into your brand, audience, and goals to build a tailored roadmap for growth.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "Strategy",
    description: "Data-driven planning across channels — SEO, ads, social, and content — for maximum impact.",
    icon: Target,
  },
  {
    num: "03",
    title: "Execution",
    description: "Our creative and technical teams bring the strategy to life with precision and speed.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Growth",
    description: "Continuous optimization, reporting, and scaling to keep your brand ahead of the competition.",
    icon: BarChart3,
  },
];

export function HowWeWorkSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0" />
        <div className="section-divider absolute bottom-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            See How We <span className="text-gradient">Make It Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl p-8 group border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-500 relative overflow-hidden text-center"
            >
              <div className="absolute -top-6 -right-4 text-[7rem] font-black text-primary/[0.03] leading-none select-none pointer-events-none font-display">
                {step.num}
              </div>

              <div className="relative z-10">
                <span className="text-primary/60 text-4xl font-black block mb-4 font-display">{step.num}</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 mx-auto group-hover:glow-sm transition-all duration-500">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300 font-display">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
