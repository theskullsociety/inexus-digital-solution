import { Instagram } from "lucide-react";
import logoFull from "@/assets/digivyral-logo-dark.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-3">
              <img src={logoFull} alt="Digivyral — Ignite Your Growth" className="h-14 md:h-16 object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              India's #1 digital marketing & web development agency. We make brands go viral.
            </p>
            <div className="flex items-center gap-3 mt-4 relative z-10">
              <a
                href="https://www.instagram.com/digivyral"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors group cursor-pointer"
                aria-label="Follow Digivyral on Instagram"
              >
                <Instagram className="h-4 w-4 text-foreground/60" />
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="font-semibold text-foreground mb-4 text-sm font-display">Services</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors">Digital Marketing</li>
              <li className="hover:text-foreground transition-colors">Web Development</li>
              <li className="hover:text-foreground transition-colors">SEO & SEM</li>
              <li className="hover:text-foreground transition-colors">Social Media Marketing</li>
              <li className="hover:text-foreground transition-colors">Brand Design</li>
              <li className="hover:text-foreground transition-colors">E-Commerce Solutions</li>
              <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </nav>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm font-display">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="tel:+919306036161" className="hover:text-foreground transition-colors">+91 93060 36161</a></li>
              <li><a href="mailto:hello@digivyral.com" className="hover:text-foreground transition-colors">hello@digivyral.com</a></li>
              <li>Worldwide — Remote First</li>
            </ul>
          </div>
        </div>
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Digivyral. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Digital Marketing Agency · SEO · Web Development · Social Media
          </p>
        </div>
      </div>
    </footer>
  );
}
