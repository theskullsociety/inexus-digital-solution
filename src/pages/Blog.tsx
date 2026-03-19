import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "10-digital-marketing-strategies-2026",
    title: "10 Digital Marketing Strategies That Will Dominate 2026",
    excerpt:
      "From agentic AI marketing to immersive AR experiences — discover the cutting-edge strategies top brands are deploying in 2026 to crush their competition.",
    category: "Digital Marketing",
    author: "Digivyral Team",
    date: "2026-02-05",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["marketing", "strategy", "AI agents", "2026 trends"],
  },
  {
    slug: "seo-checklist-rank-1-google-2026",
    title: "The Ultimate SEO Checklist to Rank #1 on Google in 2026",
    excerpt:
      "Google's AI Overviews changed everything. This 2026 SEO checklist covers AEO, E-E-A-T signals, and the new ranking factors that actually matter.",
    category: "SEO",
    author: "Digivyral Team",
    date: "2026-01-18",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    tags: ["SEO", "Google", "AEO", "AI Overviews"],
  },
  {
    slug: "social-media-growth-hacks-2026",
    title: "7 Social Media Growth Hacks for 2026 That Actually Work",
    excerpt:
      "Algorithm updates crushed your reach? These 2026 growth hacks helped our clients gain 10x followers and 5x engagement in just 90 days.",
    category: "Social Media",
    author: "Digivyral Team",
    date: "2026-01-10",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    tags: ["social media", "growth", "engagement", "2026"],
  },
  {
    slug: "website-design-trends-2026",
    title: "Top Website Design Trends in 2026 That Drive Conversions",
    excerpt:
      "AI-generated layouts, bento grids, and spatial design — these 2026 web design trends aren't just beautiful, they're built to convert.",
    category: "Web Development",
    author: "Digivyral Team",
    date: "2025-12-20",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    tags: ["web design", "2026 trends", "UX", "conversions"],
  },
  {
    slug: "ai-content-marketing-2026",
    title: "AI Content Marketing in 2026: The Complete Playbook",
    excerpt:
      "AI writes your content — but does it rank? Learn how to blend AI efficiency with human expertise for content that Google loves and readers trust.",
    category: "Content Marketing",
    author: "Digivyral Team",
    date: "2025-12-05",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["AI content", "content marketing", "2026", "automation"],
  },
  {
    slug: "brand-identity-2026-guide",
    title: "Building a Powerful Brand Identity in 2026: The New Rules",
    excerpt:
      "In the age of AI-generated everything, authentic brand identity matters more than ever. Here's how to build one that stands out in 2026.",
    category: "Brand Design",
    author: "Digivyral Team",
    date: "2025-11-20",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    tags: ["branding", "2026", "identity", "authenticity"],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium tracking-widest uppercase"
            >
              Insights & Resources
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mt-3 mb-6"
            >
              The Digivyral <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Expert tips, proven strategies, and actionable insights to grow
              your brand online. Learn from India's top digital marketing
              agency.
            </motion.p>
          </div>
        </section>

        {/* Featured post */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-primary text-xs font-medium tracking-widest uppercase mb-3">
                      {blogPosts[0].category} — Featured
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(blogPosts[0].date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>

        {/* Post grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post, i) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-primary text-xs font-medium tracking-widest uppercase mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
