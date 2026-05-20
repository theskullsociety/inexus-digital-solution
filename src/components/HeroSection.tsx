import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSphere = lazy(() => import("@/components/HeroSphere").then(m => ({ default: m.HeroSphere })));

export function HeroSection() {
  const [brandUrl, setBrandUrl] = useState("");
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollTo("contact");
  };

  return (
    <section
      aria-label="Hero - Digital Marketing Agency"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      {/* Background ornamental glows */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--glow-accent)/0.05)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow badge with ping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                #1 Digital Marketing Agency
              </span>
            </motion.div>

            {/* Massive headline */}
            <div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.9] tracking-tighter font-display text-foreground"
                >
                  We Make Brands
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.9] tracking-tighter font-display"
                >
                  <span className="text-gradient drop-shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    Go Viral.
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-xl text-lg md:text-xl text-foreground/70 leading-relaxed font-light"
            >
              From scroll-stopping content to conversion-crushing campaigns — we build digital
              experiences that turn heads and drive revenue. You won't go back.
            </motion.p>

            {/* Lead capture: glass capsule input + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative max-w-2xl"
            >
              <form
                onSubmit={handleSubmit}
                className="p-1.5 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-md flex flex-col md:flex-row gap-3 shadow-2xl shadow-black/40"
              >
                <div className="flex-1 flex items-center px-4 gap-3">
                  <Link2 className="w-5 h-5 text-primary shrink-0" />
                  <input
                    type="url"
                    value={brandUrl}
                    onChange={(e) => setBrandUrl(e.target.value)}
                    placeholder="Enter your brand's URL"
                    aria-label="Your brand URL"
                    className="w-full bg-transparent border-none text-foreground placeholder:text-foreground/30 focus:ring-0 py-4 outline-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-[hsl(var(--glow-accent))] transition-all duration-300 text-primary-foreground font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 group whitespace-nowrap font-display"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Trust avatars row */}
              <div className="mt-4 flex items-center gap-4 text-sm text-foreground/50 px-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/20" />
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/30" />
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/40" />
                </div>
                <span>Trusted by 500+ hyper-growth brands globally</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Column — phone mockup with floating bubbles + metric badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-card rounded-[3rem] border-[8px] border-secondary shadow-[0_0_100px_hsl(var(--primary)/0.12)]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary rounded-b-2xl z-20" />

              {/* Screen content */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-gradient-to-b from-card to-background">
                {!isMobile && (
                  <Suspense fallback={<div className="w-full h-full" />}>
                    <HeroSphere />
                  </Suspense>
                )}
                {isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/35 via-primary/20 to-transparent blur-2xl" />
                  </div>
                )}
              </div>

              {/* Floating chat bubbles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -left-8 sm:-left-12 top-[22%] p-3 sm:p-4 rounded-2xl bg-primary text-primary-foreground font-bold shadow-2xl animate-bounce-slow z-30"
              >
                <p className="text-xs sm:text-sm font-display">Absolutely! 🚀</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute -right-10 sm:-right-16 top-[48%] p-3 sm:p-4 rounded-2xl bg-secondary border border-primary/30 text-foreground shadow-2xl animate-float max-w-[180px] z-30"
              >
                <p className="text-xs sm:text-sm opacity-60 mb-1 font-medium">Ready to grow your brand?</p>
                <div className="h-1 w-full bg-primary rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="absolute -right-4 sm:-right-8 bottom-[22%] p-3 sm:p-4 rounded-2xl bg-card border border-foreground/10 text-foreground shadow-2xl z-30"
              >
                <p className="text-xs font-medium">Let's make it go viral!</p>
              </motion.div>

              {/* Metric badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -left-4 sm:-left-10 bg-background border border-primary/40 p-4 sm:p-5 rounded-3xl shadow-2xl backdrop-blur-xl z-30"
              >
                <div className="text-primary text-2xl sm:text-3xl font-bold font-display leading-none">
                  +428%
                </div>
                <div className="text-foreground/60 text-[10px] sm:text-xs font-medium uppercase tracking-widest mt-1">
                  Avg Conversion Lift
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
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
