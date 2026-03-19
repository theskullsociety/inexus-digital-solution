import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const text = `Hi, I'm ${name.trim()} (${email.trim()}).%0A%0A${encodeURIComponent(message.trim())}`;
    const whatsappUrl = `https://wa.me/919306036161?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete sending your message on WhatsApp.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-strong rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-display">
                Ready to Go{" "}
                <span className="text-gradient">Viral?</span>
              </h2>
              <p className="text-muted-foreground text-base mb-10 leading-relaxed">
                Let's create something extraordinary together. Reach out and let's discuss your next big move.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@digivyral.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">hello@digivyral.com</span>
                </motion.a>
                <motion.a
                  href="tel:+919306036161"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">+91 93060 36161</span>
                </motion.a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Worldwide — Remote First</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                className="w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 resize-none transition-all text-sm"
              />
              <Button type="submit" size="lg" className="glow w-full group text-sm rounded-xl">
                <Send className="mr-2 h-4 w-4" />
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
