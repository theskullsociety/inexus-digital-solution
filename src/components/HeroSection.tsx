import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSphere = lazy(() => import("@/components/HeroSphere").then(m => ({ default: m.HeroSphere })));

export function HeroSection() {
  const [brandUrl, setBrandUrl] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Hero - Digital Marketing Agency"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
        {/* Left: Text content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.08] text-primary text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              #1 Digital Marketing Agency
            </span>
          </motion.div>

          {/* Main headline — bold, massive */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold leading-[1.0] tracking-tight font-display text-foreground"
            >
              We Make Brands
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold tracking-tight font-display text-foreground"
            >
              Go{" "}
              <span className="text-gradient">Viral.</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            From scroll-stopping content to conversion-crushing campaigns — we build digital
            experiences that turn heads and drive revenue. You won't go back.
          </motion.p>

          {/* URL Input + CTA — matching the reference style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0"
          >
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <input
                type="url"
                value={brandUrl}
                onChange={(e) => setBrandUrl(e.target.value)}
                placeholder="Enter your brand's URL"
                className="w-full h-14 pl-11 pr-4 rounded-xl bg-secondary/80 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>
            <Button
              size="lg"
              className="h-14 px-8 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group whitespace-nowrap"
              onClick={() => scrollTo("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Right: 3D Visual in a device frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-[320px] md:max-w-[480px] lg:max-w-[540px]"
        >
          <div className="relative">
            {/* Device frame */}
            <div className="relative rounded-3xl border border-border/40 bg-card/50 p-2 shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-background">
                <Suspense fallback={<div className="w-full h-full" />}>
                  <HeroSphere />
                </Suspense>
              </div>
              {/* Device notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-border/40" />
            </div>

            {/* Floating chat bubbles — animated like the reference */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -right-4 top-[20%] glass-strong rounded-2xl rounded-br-sm px-4 py-2.5 shadow-lg max-w-[180px]"
            >
              <p className="text-xs font-medium text-foreground">Ready to grow your brand?</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute -left-4 top-[45%] bg-primary text-primary-foreground rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg max-w-[160px]"
            >
              <p className="text-xs font-semibold">Absolutely! 🚀</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="absolute -right-4 top-[65%] glass-strong rounded-2xl rounded-br-sm px-4 py-2.5 shadow-lg max-w-[200px]"
            >
              <p className="text-xs font-medium text-foreground">Let's make it go viral!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="absolute -left-2 bottom-[15%] bg-card border border-border/40 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-green-400">Campaign live ✓</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
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
