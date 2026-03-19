import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

import logoFull from "@/assets/logo-full.png";

const scrollNavItems = ["Services", "Work", "Contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={logoFull} alt="Digivyral" className="h-8 md:h-10 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
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
            className="glow-sm rounded-full px-6"
          >
            Get Started
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
            className="md:hidden glass-strong border-t border-border/30"
          >
            <div className="flex flex-col gap-4 p-6">
              {scrollNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-left text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/careers" onClick={() => setMobileOpen(false)} className="text-left text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Button size="sm" onClick={() => scrollTo("contact")} className="glow-sm w-fit rounded-full px-6">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
