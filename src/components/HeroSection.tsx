import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/ParticleField";
import { HeroSphere } from "@/components/HeroSphere";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-label="Hero - Digital Marketing Agency" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      <img
        src={heroBg}
        alt="Digivyral digital marketing agency background"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/4 via-transparent to-accent/4" />
      <ParticleField />

      {/* Ambient orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-[100px]"
      />
      <motion.div
        animate={{ y: [20, -30, 20], x: [10, -15, 10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full bg-accent/5 blur-[100px]"
      />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              #1 Digital Marketing & Web Development Agency
            </motion.span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-2 tracking-tight font-display"
            >
              We Make Brands
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight font-display"
            >
              <span className="text-gradient">Go Viral</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
          >
            From scroll-stopping content to conversion-crushing websites — we build digital
            experiences that turn heads and drive revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="glow text-base px-8 rounded-full group"
              onClick={() => scrollTo("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 rounded-full border-border/60 hover:bg-secondary/50 group"
              onClick={() => scrollTo("work")}
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-[280px] md:max-w-[500px] lg:max-w-none aspect-square"
        >
          <HeroSphere />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
