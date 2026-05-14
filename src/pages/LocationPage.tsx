import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLocationBySlug } from "@/data/locations";
import { useSEO } from "@/hooks/use-seo";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  useSEO({
    title: location?.metaTitle ?? "Local Digital Marketing | Digivyral",
    description:
      location?.metaDescription ??
      "Digivyral local digital marketing services across India.",
    keywords: location?.keywords,
    canonical: location ? `/${location.slug}` : "/",
    ogType: "website",
    jsonLd: location
      ? [
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Digivyral — Digital Marketing Agency in ${location.city}`,
            description: location.metaDescription,
            url: `https://digivyral.com/${location.slug}`,
            areaServed: location.region,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.city,
              addressRegion: "Haryana / Delhi",
              addressCountry: "IN",
            },
            telephone: "+91-00000-00000",
            priceRange: "₹₹",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: location.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://digivyral.com/" },
              { "@type": "ListItem", position: 2, name: location.city, item: `https://digivyral.com/${location.slug}` },
            ],
          },
        ]
      : undefined,
  });

  if (!location) return <Navigate to="/" replace />;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--glow-accent))]/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase"
            >
              <MapPin className="h-4 w-4" /> Serving {location.region}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6 max-w-4xl"
            >
              {location.heroTitle.split(location.city)[0]}
              <span className="text-gradient">{location.city}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-lg max-w-2xl mb-8"
            >
              {location.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Button onClick={scrollToContact} className="rounded-full px-6">
                Get a free strategy call <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Link to="/services">
                <Button variant="outline" className="rounded-full px-6">
                  See all services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {location.stats.map((s) => (
                <div
                  key={s.label}
                  className="surface-glass rounded-xl p-5 border border-border/40"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Why {location.city} brands choose Digivyral
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {location.intro}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Services we offer in {location.city}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              A connected growth stack — built for {location.city} buyer
              behaviour and competitive intensity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {location.services.map((s) => (
                <div
                  key={s.name}
                  className="surface-glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-colors"
                >
                  <Sparkles className="h-5 w-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Industries we serve in {location.city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {location.industries.map((i) => (
                <div
                  key={i.name}
                  className="rounded-2xl p-6 border border-border/40 bg-card/40"
                >
                  <h3 className="text-lg font-semibold mb-2">{i.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {i.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why we win in {location.city}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {location.whyChooseUs.map((w) => (
                <div
                  key={w.title}
                  className="flex gap-4 surface-glass p-6 rounded-2xl border border-border/40"
                >
                  <div className="shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas covered */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Areas we cover across {location.city}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Local SEO, ads and creative tuned to each micro-market.
            </p>
            <div className="flex flex-wrap gap-2">
              {location.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground bg-card/40"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {location.city} digital marketing FAQs
            </h2>
            <p className="text-muted-foreground mb-8">
              Answers to the questions {location.city} founders ask us most.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {location.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
                  <AccordionTrigger className="text-left text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="surface-glass rounded-3xl p-10 md:p-14 border border-border/40 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {location.ctaLine}
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your brand and we'll respond within one business day.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="rounded-full px-8"
              >
                Book a free consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
