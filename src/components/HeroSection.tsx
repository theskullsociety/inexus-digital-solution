import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSphere = lazy(() => import("@/components/HeroSphere").then(m => ({ default: m.HeroSphere })));

const clientLogos = ["Flipkart", "Swiggy", "Zomato", "PhonePe", "CRED"];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-label="Hero - Digital Marketing Agency" className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg">
      {/* Subtle radial glow behind the 3D object */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.08] text-primary text-xs font-medium tracking-wide mb-8 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              #1 Digital Marketing Agency
            </motion.span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight font-display text-foreground"
            >
              We Make Brands
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight font-display text-faded"
            >
              Go Viral.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
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
              className="text-base px-8 rounded-full group bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
              onClick={() => scrollTo("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 rounded-full border-border/60 text-foreground hover:bg-accent group"
              onClick={() => scrollTo("work")}
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Right: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-[280px] md:max-w-[500px] lg:max-w-none aspect-square"
        >
          <Suspense fallback={<div className="w-full h-full" />}>
            <HeroSphere />
          </Suspense>
        </motion.div>
      </div>

      {/* Bottom section: Testimonial + Client logos */}
      <div className="relative z-10 container mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col lg:flex-row items-stretch gap-4"
        >
          {/* Testimonial card */}
          <div className="glass-strong rounded-2xl p-6 flex flex-col justify-center max-w-xs">
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground italic mb-4">
              "Incredible"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                DV
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Happy Client</p>
                <p className="text-xs text-muted-foreground">Founder, Brand Co.</p>
              </div>
            </div>
          </div>

          {/* Client logos row */}
          <div className="flex-1 glass rounded-2xl p-6 flex items-center justify-center">
            <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm md:text-base font-medium text-muted-foreground/60 tracking-widest uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
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
