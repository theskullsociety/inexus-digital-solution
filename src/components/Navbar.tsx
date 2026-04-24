import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

import logoFull from "@/assets/digivyral-logo-dark.png";

const scrollNavItems = ["Work", "Contact"];

const serviceColumns = [
  {
    title: "DEVELOPMENT",
    items: [
      { label: "Web Development" },
      { label: "Web Application Development" },
      { label: "Ecommerce Development" },
      { label: "CMS Development" },
      { label: "Mobile App Development" },
      { label: "Landing Pages" },
      { label: "Wireframes & Prototypes" },
    ],
  },
  {
    title: "DESIGN & BRANDING",
    items: [
      { label: "UI/UX Design" },
      { label: "Graphic Design" },
      { label: "Brand Systems", soon: true },
    ],
  },
  {
    title: "MARKETING & GROWTH",
    items: [
      { label: "SEO Services" },
      { label: "Local SEO & GMB" },
      { label: "Social Media Marketing" },
      { label: "PPC Ads" },
      { label: "Email Marketing" },
      { label: "Web Analytics", soon: true },
    ],
  },
  {
    title: "HOSTING & SECURITY",
    items: [
      { label: "Managed Hosting" },
      { label: "Domain Registration" },
      { label: "DNS Management" },
      { label: "Security" },
      { label: "Website Maintenance" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id.toLowerCase()}`;
      return;
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={logoFull} alt="Digivyral — Ignite Your Growth" className="h-9 md:h-11 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Services with mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => {
                setServicesOpen((v) => !v);
                scrollTo("services");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <>
                  {/* Hover bridge */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full h-4 w-[80vw] max-w-[1100px]" />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] w-[min(1100px,90vw)] rounded-2xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl p-8"
                  >
                    {/* Diamond pointer */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-background/95 border-l border-t border-border/40" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                      {serviceColumns.map((col) => (
                        <div key={col.title}>
                          <div className="flex items-center gap-2 mb-5">
                            <span className="block w-1 h-3 rounded-sm bg-gradient-to-b from-primary to-[hsl(var(--glow-accent))]" />
                            <h4 className="text-[11px] font-semibold tracking-[0.14em] text-foreground/90">
                              {col.title}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {col.items.map((it) => (
                              <li key={it.label}>
                                <button
                                  onClick={() => scrollTo("services")}
                                  className={`text-left text-sm leading-snug transition-colors ${
                                    it.soon
                                      ? "text-muted-foreground/50 cursor-default"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                  disabled={it.soon}
                                >
                                  {it.label}
                                  {it.soon && (
                                    <span className="ml-1 text-muted-foreground/50">(soon)</span>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {scrollNavItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
            Careers
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="rounded-full px-6 border border-border/60 bg-transparent text-foreground hover:bg-accent group"
            variant="outline"
          >
            Get Started
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30"
          >
            <div className="flex flex-col gap-4 p-6">
              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pl-3 border-l border-border/40 space-y-4">
                        {serviceColumns.map((col) => (
                          <div key={col.title}>
                            <h5 className="text-[10px] font-semibold tracking-[0.14em] text-foreground/80 mb-2">
                              {col.title}
                            </h5>
                            <ul className="space-y-1.5">
                              {col.items.map((it) => (
                                <li
                                  key={it.label}
                                  className={`text-sm ${
                                    it.soon ? "text-muted-foreground/50" : "text-muted-foreground"
                                  }`}
                                >
                                  {it.label}
                                  {it.soon && " (soon)"}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {scrollNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/careers" onClick={() => setMobileOpen(false)} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Button size="sm" onClick={() => scrollTo("contact")} className="w-fit rounded-full px-6 border border-border/60 bg-transparent text-foreground hover:bg-accent" variant="outline">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
