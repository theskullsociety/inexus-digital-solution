import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Set SEO meta tags
  useEffect(() => {
    if (!service) return;
    document.title = `${service.name} | Digivyral`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", service.metaDescription);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/services/${service.slug}`);
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <article className="pt-28 pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                to="/services"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mb-10"
            >
              <span className="text-primary text-xs font-medium tracking-widest uppercase mb-3 inline-flex items-center gap-2">
                {service.category}
                {service.comingSoon && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px]">
                    Coming Soon
                  </span>
                )}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {service.brief}
              </p>
            </motion.header>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl overflow-hidden mb-12 aspect-[21/9] max-w-5xl"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl">
              {/* Article body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {service.intro}
                </p>

                {service.sections.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      {section.heading}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}

                {/* CTA */}
                <div className="glass rounded-2xl p-8 mt-8">
                  <h3 className="text-xl font-bold mb-3">
                    Ready to launch your{" "}
                    <span className="text-gradient">{service.name}</span> project?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Talk to a Digivyral specialist — get a tailored proposal within 24 hours.
                  </p>
                  <Link to="/#contact">
                    <Button className="glow group">
                      Get a Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-8"
              >
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    What you get
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {related.length > 0 && (
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                      Related services
                    </h4>
                    <ul className="space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            to={`/services/${r.slug}`}
                            className="group flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <span>{r.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
