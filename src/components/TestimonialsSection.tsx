import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    text: "Digivyral transformed our online presence completely. Our traffic increased by 300% in just 3 months.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, StyleHub",
    text: "The best agency we've ever worked with. They don't just deliver — they over-deliver every single time.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CMO, GreenLeaf",
    text: "Their creative approach to our brand identity was nothing short of brilliant. Truly world-class work.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-8 border border-border/30 bg-card/30 hover:bg-card/50 hover:border-primary/15 transition-all duration-500 relative group"
            >
              <Quote className="h-8 w-8 text-primary/10 mb-4" />

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary/80 text-primary/80" />
                ))}
              </div>

              <p className="text-foreground/75 leading-relaxed mb-6 text-sm">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary font-display">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
