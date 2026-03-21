import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.webp";
import insta1 from "@/assets/insta-1.webp";
import insta2 from "@/assets/insta-2.webp";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const posts = [
  { image: insta1, likes: 124, comments: 18, caption: "Custom Website Development — responsive, SEO-optimized & high converting 💻" },
  { image: insta2, likes: 89, comments: 12, caption: "From Invisible to Unstoppable — the power of digital marketing strategy 💡" },
  { image: insta3, likes: 156, comments: 24, caption: "Web development showcase — modern & fast ⚡" },
  { image: insta4, likes: 201, comments: 31, caption: "Brand identity design that stands out 🎨" },
  { image: insta5, likes: 178, comments: 22, caption: "Performance marketing results that speak 💹" },
  { image: insta6, likes: 143, comments: 19, caption: "E-commerce solutions built to convert 🛒" },
];

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Instagram</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            Follow Our <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Instagram handle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-11 h-11 rounded-full bg-card/60 border border-border/40 flex items-center justify-center overflow-hidden">
            <img src={logoIcon} alt="Digivyral" className="w-7 h-7 object-contain" />
          </div>
          <div className="text-left">
            <a
              href="https://www.instagram.com/digivyral"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:text-primary transition-colors text-sm"
            >
              @digivyral
            </a>
            <p className="text-muted-foreground text-xs">Digital Marketing Agency</p>
          </div>
          <Button
            size="sm"
            className="ml-3 glow-sm rounded-full px-5"
            onClick={() => window.open("https://www.instagram.com/digivyral", "_blank", "noopener,noreferrer")}
          >
            <Instagram className="h-3.5 w-3.5 mr-1.5" />
            Follow
          </Button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/digivyral"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
                    <Heart className="h-4 w-4 fill-primary text-primary" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs text-center px-4 line-clamp-2 max-w-[180px]">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-border/40 hover:bg-card/50 hover:border-primary/30 text-foreground group rounded-full"
            onClick={() => window.open("https://www.instagram.com/digivyral", "_blank", "noopener,noreferrer")}
          >
            <Instagram className="h-4 w-4 mr-2 text-primary" />
            Follow @digivyral
            <ExternalLink className="h-3.5 w-3.5 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
