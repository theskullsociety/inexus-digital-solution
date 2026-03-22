import { motion } from "framer-motion";

const marqueeItems = [
  "Digital Marketing",
  "Web Development",
  "SEO Strategy",
  "Brand Identity",
  "Social Media",
  "E-Commerce",
  "Content Creation",
  "UI/UX Design",
];

export function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="py-8 overflow-hidden relative">
      <div className="section-divider" />
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap py-6"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-bold text-foreground/[0.06] hover:text-foreground/15 transition-colors duration-500 font-display flex items-center gap-12"
          >
            {item}
            <span className="text-primary/20 text-lg">◆</span>
          </span>
        ))}
      </motion.div>
      <div className="section-divider" />
    </div>
  );
}
