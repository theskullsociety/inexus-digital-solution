import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { serviceCategories, getServicesByCategory } from "@/data/services";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Digivyral — Web, Design, Marketing & Hosting";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Explore Digivyral's full-stack services — web & app development, UI/UX design, SEO, performance marketing, hosting, and security. One agency, every digital channel.",
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium tracking-widest uppercase"
            >
              What We Do
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mt-3 mb-6"
            >
              Digivyral <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From the first wireframe to the last conversion — we own every
              pixel, packet, and pipeline in your digital growth stack.
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-24">
          <div className="container mx-auto px-6 space-y-20">
            {serviceCategories.map((category, ci) => {
              const items = getServicesByCategory(category);
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: ci * 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="block w-1.5 h-6 rounded-sm bg-gradient-to-b from-primary to-[hsl(var(--glow-accent))]" />
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {category}
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((s, i) => (
                      <Link key={s.slug} to={`/services/${s.slug}`}>
                        <motion.article
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                          className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-500 h-full flex flex-col"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold group-hover:text-gradient transition-all">
                              {s.name}
                            </h3>
                            {s.comingSoon && (
                              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                Soon
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                            {s.brief}
                          </p>
                          <span className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </span>
                        </motion.article>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
