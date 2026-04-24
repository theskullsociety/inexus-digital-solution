export interface Service {
  slug: string;
  name: string;
  category: "Development" | "Design & Branding" | "Marketing & Growth" | "Hosting & Security";
  brief: string; // 1-2 sentences — used in mega menu / cards
  metaDescription: string; // for SEO <meta>
  intro: string; // opening paragraph on detail page
  sections: { heading: string; body: string }[];
  benefits: string[];
  image: string;
  comingSoon?: boolean;
}

export const services: Service[] = [
  // ============= DEVELOPMENT =============
  {
    slug: "web-development",
    name: "Web Development",
    category: "Development",
    brief:
      "Lightning-fast, SEO-ready websites built with modern stacks that convert visitors into customers.",
    metaDescription:
      "Custom web development services by Digivyral — fast, secure, SEO-optimized websites built with React, Next.js, and headless CMS for measurable growth.",
    intro:
      "Your website is your most important employee — it works 24/7, never takes a day off, and is often the first impression a customer has of your brand. At Digivyral, we engineer websites that load in under two seconds, rank on Google, and turn passive visitors into paying customers.",
    sections: [
      {
        heading: "What we build",
        body: "Marketing sites, SaaS platforms, corporate websites, portfolios, and bespoke web experiences. Every site we ship is responsive across devices, accessible (WCAG-compliant), and engineered for Core Web Vitals so you outrank competitors before a single ad rupee is spent.",
      },
      {
        heading: "Our tech stack",
        body: "React, Next.js, Vite, TypeScript, Tailwind CSS, Node.js, and headless CMS like Sanity, Contentful and Strapi. We choose the right tool for your goals — never the trendiest one.",
      },
      {
        heading: "What you get",
        body: "Pixel-perfect implementation of your designs, built-in SEO foundations (semantic HTML, structured data, sitemaps), analytics integration, performance budgets, and a documented codebase your in-house team can maintain.",
      },
    ],
    benefits: [
      "Sub-2-second load times",
      "Mobile-first responsive design",
      "Built-in SEO and schema markup",
      "Lifetime ownership of your code",
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    category: "Development",
    brief:
      "Scalable SaaS, dashboards, and internal tools — engineered to grow with your business.",
    metaDescription:
      "Build custom web applications with Digivyral — secure, scalable SaaS platforms, admin dashboards, and internal tools using React, Node.js, and Postgres.",
    intro:
      "When an off-the-shelf tool can't do what you need, we build the application that can. From customer portals to multi-tenant SaaS platforms, our web apps are architected to handle real users, real data, and real growth.",
    sections: [
      {
        heading: "Where we shine",
        body: "Multi-tenant SaaS, admin dashboards, customer portals, marketplace platforms, booking systems, and AI-powered internal tools. We sweat the details that matter — auth, role-based access, audit logs, and observability.",
      },
      {
        heading: "How we build",
        body: "TypeScript end-to-end, Postgres with Row-Level Security, edge functions for low-latency APIs, and integrated analytics. Every app ships with monitoring, error tracking, and CI/CD pipelines from day one.",
      },
      {
        heading: "Built to scale",
        body: "Architecture decisions are made for the next 100,000 users — not just the first 100. We design for horizontal scaling, caching strategies, and graceful failure modes so your app never breaks at the worst moment.",
      },
    ],
    benefits: [
      "Production-grade auth and security",
      "Real-time data and notifications",
      "API-first, integration-ready",
      "Cloud-native deployment",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    category: "Development",
    brief:
      "Conversion-obsessed online stores on Shopify, WooCommerce, and headless stacks.",
    metaDescription:
      "Ecommerce development by Digivyral — high-converting Shopify, WooCommerce, and headless commerce stores built to maximize AOV, retention, and revenue.",
    intro:
      "Most ecommerce stores leak money at every step — slow load times, clunky checkouts, broken mobile flows. We build stores that recover that lost revenue and turn one-time buyers into loyal customers.",
    sections: [
      {
        heading: "Platforms we master",
        body: "Shopify, Shopify Plus, WooCommerce, BigCommerce, and headless commerce with Medusa or Saleor. We pick the platform that fits your catalogue size, payment flows, and growth plans.",
      },
      {
        heading: "Conversion engineering",
        body: "One-page checkout, smart upsells, abandoned cart recovery, dynamic pricing, and product recommendation engines powered by behavioural data. Every change we ship is A/B tested.",
      },
      {
        heading: "Integrations",
        body: "Razorpay, Stripe, Shiprocket, Delhivery, Klaviyo, WhatsApp Business, ERP systems, and custom inventory tools. Your store talks to every system in your business.",
      },
    ],
    benefits: [
      "1-click checkout flows",
      "Cart abandonment recovery",
      "Multi-currency and multi-language",
      "PCI-DSS-compliant payments",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
  {
    slug: "cms-development",
    name: "CMS Development",
    category: "Development",
    brief:
      "Custom and headless CMS solutions that give your team full content control without developer bottlenecks.",
    metaDescription:
      "CMS development services from Digivyral — custom WordPress, Sanity, Strapi, and headless CMS implementations that empower your team to publish without code.",
    intro:
      "A great CMS makes your marketing team unstoppable. We design and develop content systems that match how your team actually works — not the other way around.",
    sections: [
      {
        heading: "Headless or traditional",
        body: "Sanity, Strapi, Contentful, Payload, and Directus for headless. WordPress and Webflow when traditional makes more sense. Whatever the stack, content modeling is tailored to your editorial workflows.",
      },
      {
        heading: "What we deliver",
        body: "Custom content types, drag-and-drop page builders, multi-language support, scheduled publishing, role-based permissions, and preview environments so editors can see changes before going live.",
      },
      {
        heading: "Built for marketers",
        body: "We train your team and write documentation so non-technical staff can publish, edit, and launch campaigns without raising a developer ticket every time.",
      },
    ],
    benefits: [
      "Visual page editing",
      "Multi-language and multi-site support",
      "SEO-friendly URL and schema control",
      "Editor training and docs included",
    ],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Development",
    brief:
      "Native-quality iOS and Android apps built once with React Native and Flutter.",
    metaDescription:
      "Mobile app development by Digivyral — cross-platform iOS and Android apps using React Native and Flutter, with native performance and App Store launch support.",
    intro:
      "Mobile is no longer the second screen — it is the screen. We build cross-platform mobile apps that feel native, perform brilliantly offline, and ship to both stores from a single codebase.",
    sections: [
      {
        heading: "Cross-platform expertise",
        body: "React Native and Flutter let us build for iOS and Android in parallel — cutting your time-to-market in half without sacrificing performance or polish.",
      },
      {
        heading: "Features that delight",
        body: "Push notifications, in-app purchases, offline mode, biometric auth, deep linking, social login, real-time chat, and location services — all wired up and tested across devices.",
      },
      {
        heading: "Launch support",
        body: "We handle App Store and Play Store submissions, ASO (App Store Optimization), screenshots, store copy, and post-launch analytics so your app gets discovered and downloaded.",
      },
    ],
    benefits: [
      "iOS + Android from one codebase",
      "Offline-first architecture",
      "App Store and Play Store launch",
      "Crash reporting and analytics",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    category: "Development",
    brief:
      "High-converting landing pages designed and built in days — perfect for campaigns and product launches.",
    metaDescription:
      "Conversion-optimized landing page design and development by Digivyral — perfect for ad campaigns, product launches, and lead generation. Live in 5 days.",
    intro:
      "A landing page has one job — convert. We design and ship landing pages that consistently outperform industry benchmarks, with clear messaging, frictionless forms, and persuasive copy.",
    sections: [
      {
        heading: "What you get",
        body: "Custom design, copywriting, mobile responsiveness, A/B test variants, lead capture integrations (HubSpot, Mailchimp, Zapier), and real-time analytics dashboards.",
      },
      {
        heading: "Speed of delivery",
        body: "Most landing pages go live within 5 working days. For campaign launches with tight deadlines, we offer 48-hour rush builds with the same quality bar.",
      },
      {
        heading: "Conversion rate optimization",
        body: "Heatmaps, session recordings, and funnel analytics from day one. We iterate weekly based on real user data — not gut feel.",
      },
    ],
    benefits: [
      "Live in 5 days or less",
      "Built-in A/B testing",
      "Form integrations (HubSpot, Mailchimp, etc.)",
      "Heatmaps and session replays",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    slug: "wireframes-prototypes",
    name: "Wireframes & Prototypes",
    category: "Development",
    brief:
      "Validate ideas before writing code — interactive wireframes and clickable prototypes that de-risk your build.",
    metaDescription:
      "Wireframing and prototyping services from Digivyral — turn ideas into clickable, testable Figma prototypes before committing to development.",
    intro:
      "The most expensive code is the code you never should have shipped. We help founders and product teams visualize, test, and refine ideas before a single line of code is written.",
    sections: [
      {
        heading: "Low to high fidelity",
        body: "From whiteboard sketches to pixel-perfect Figma prototypes — we work at the right level of fidelity for the question you're trying to answer.",
      },
      {
        heading: "User testing",
        body: "We recruit target users, run unmoderated and moderated tests, and synthesize findings into actionable design changes. Most projects go through 2-3 testing rounds before development.",
      },
      {
        heading: "Developer handoff",
        body: "Every prototype ships with a complete design system, component library, and developer-ready specs — so your engineering team can hit the ground running.",
      },
    ],
    benefits: [
      "Validate before you build",
      "User testing included",
      "Production-ready design specs",
      "Reduces development cost by 30%+",
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
  },

  // ============= DESIGN & BRANDING =============
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Design & Branding",
    brief:
      "Beautiful, intuitive interfaces grounded in user research and conversion psychology.",
    metaDescription:
      "UI/UX design services by Digivyral — research-driven product design that combines beautiful aesthetics with proven conversion principles.",
    intro:
      "Great design is invisible. It guides users effortlessly toward their goals — and yours. Our UI/UX team blends user research, behavioural psychology, and modern design systems to create interfaces that delight and convert.",
    sections: [
      {
        heading: "Our process",
        body: "Discovery workshops, user interviews, competitive audits, information architecture, wireframing, visual design, and design system creation. Every decision is backed by research, not opinion.",
      },
      {
        heading: "Design systems",
        body: "We build scalable design systems in Figma with documented components, tokens, and guidelines — so your product looks consistent as it grows and your design and engineering teams stay in sync.",
      },
      {
        heading: "Accessibility first",
        body: "Every interface we design meets WCAG 2.2 AA standards. Inclusive design isn't just ethical — it expands your addressable market by 15-20%.",
      },
    ],
    benefits: [
      "User research and testing",
      "Scalable design system",
      "WCAG 2.2 AA accessibility",
      "Figma files with dev handoff",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    category: "Design & Branding",
    brief:
      "On-brand creatives for ads, social, print, and packaging — designed to stop the scroll.",
    metaDescription:
      "Professional graphic design services from Digivyral — social media creatives, ad designs, brochures, packaging, and print materials that elevate your brand.",
    intro:
      "Average creatives get average results. Our design team produces scroll-stopping graphics for every channel you need — at the speed modern marketing demands.",
    sections: [
      {
        heading: "What we design",
        body: "Social media posts and reels, performance ad creatives, brochures, pitch decks, packaging, infographics, email graphics, banners, and event collateral.",
      },
      {
        heading: "Speed and consistency",
        body: "With templated systems and dedicated designers, we can ship 50+ creatives a week without losing brand consistency. Your team gets a steady stream of fresh, on-brand assets.",
      },
      {
        heading: "Performance creatives",
        body: "Our ad creatives are tested against engagement benchmarks before going live. We iterate based on real ad performance data — not subjective design preferences.",
      },
    ],
    benefits: [
      "50+ creatives per week capacity",
      "On-brand templates and systems",
      "Performance-tested ad creatives",
      "Print + digital + packaging",
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
  },
  {
    slug: "brand-systems",
    name: "Brand Systems",
    category: "Design & Branding",
    comingSoon: true,
    brief:
      "End-to-end brand identity systems — from strategy to logo to motion guidelines.",
    metaDescription:
      "Comprehensive brand identity systems by Digivyral — strategy, naming, logo, typography, and motion guidelines for brands built to last.",
    intro:
      "A brand is not a logo. It's the sum of every interaction your customers have with you. We build complete brand systems — strategy, identity, voice, and motion — that scale across every touchpoint.",
    sections: [
      {
        heading: "What's included",
        body: "Brand strategy, positioning, naming, logo design, typography system, color palette, photography direction, illustration style, motion principles, and a comprehensive brand book.",
      },
      {
        heading: "Built for scale",
        body: "Modern brands need to live across 50+ touchpoints — from app icons to billboards. Our systems are built modular, with clear rules for adaptation across every context.",
      },
      {
        heading: "Coming soon",
        body: "We're refining our brand systems offering and will launch it formally in Q3 2026. Get in touch now to be the first to access early-bird pricing.",
      },
    ],
    benefits: [
      "Complete brand strategy",
      "Logo + typography + color system",
      "Motion and voice guidelines",
      "Scalable across every touchpoint",
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80",
  },

  // ============= MARKETING & GROWTH =============
  {
    slug: "seo-services",
    name: "SEO Services",
    category: "Marketing & Growth",
    brief:
      "Rank #1 on Google with technical SEO, content strategy, and AI Overview optimization.",
    metaDescription:
      "SEO services by Digivyral — technical SEO, content strategy, AEO and AI Overview optimization that drives compounding organic traffic and revenue.",
    intro:
      "SEO is no longer about gaming algorithms — it's about earning authority. Our SEO process combines deep technical audits, content strategy, and the new science of Answer Engine Optimization to put your brand at the top of Google and inside AI Overviews.",
    sections: [
      {
        heading: "Technical SEO",
        body: "Site speed optimization, Core Web Vitals, crawlability, indexability, schema markup, internal linking architecture, and AI crawler control. The foundation everything else stands on.",
      },
      {
        heading: "Content strategy",
        body: "Topical authority maps, content cluster planning, keyword research with search intent mapping, and a publishing calendar tied to business goals — not vanity metrics.",
      },
      {
        heading: "AEO & link building",
        body: "Answer Engine Optimization to get cited in Google AI Overviews and ChatGPT answers. Strategic digital PR and link building from genuinely authoritative sources.",
      },
    ],
    benefits: [
      "Compounding organic traffic",
      "AI Overview citations",
      "Authority backlinks",
      "Monthly performance reports",
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
  },
  {
    slug: "local-seo-gmb",
    name: "Local SEO & GMB",
    category: "Marketing & Growth",
    brief:
      "Dominate Google Maps and 'near me' searches with optimized Google Business Profile and local citations.",
    metaDescription:
      "Local SEO and Google Business Profile management by Digivyral — rank #1 in Google Maps, win 'near me' searches, and drive foot traffic to your business.",
    intro:
      "If your customers find you locally, local SEO is the highest-ROI channel you have. We turn your Google Business Profile into a lead-generating machine and dominate the local map pack for every search that matters.",
    sections: [
      {
        heading: "GMB optimization",
        body: "Profile completeness, category optimization, weekly Google Posts, photo strategy, Q&A management, attribute optimization, and review response automation.",
      },
      {
        heading: "Local citations",
        body: "Consistent NAP (Name, Address, Phone) across 100+ relevant directories. We clean up duplicates, fix inconsistencies, and build new citations on high-authority local sites.",
      },
      {
        heading: "Review generation",
        body: "Automated review request flows via WhatsApp, SMS, and email — turning every happy customer into a 5-star review. We also manage reputation across Google, Justdial, Sulekha, and industry sites.",
      },
    ],
    benefits: [
      "Top 3 in Google Maps",
      "Automated review generation",
      "100+ local citations",
      "Foot traffic tracking",
    ],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Marketing & Growth",
    brief:
      "Build a loyal audience with content that stops the scroll and converts followers into customers.",
    metaDescription:
      "Social media marketing services from Digivyral — content strategy, organic growth, community management, and influencer collaborations across Instagram, LinkedIn, YouTube, and X.",
    intro:
      "Social media is where your customers spend hours every day. We help brands show up consistently with content that builds community, drives engagement, and converts followers into customers.",
    sections: [
      {
        heading: "Channels we manage",
        body: "Instagram, LinkedIn, YouTube, X (Twitter), Facebook, Threads, WhatsApp Channels, and YouTube Shorts. We pick the platforms where your audience actually lives.",
      },
      {
        heading: "Content production",
        body: "Monthly content calendars, in-house production for reels and shorts, professional copywriting, community management, and performance reporting — handled end-to-end.",
      },
      {
        heading: "Growth strategy",
        body: "Organic growth tactics, hashtag and SEO optimization, collaboration networks with creators, and paid amplification strategy when it makes sense.",
      },
    ],
    benefits: [
      "End-to-end content production",
      "Community management",
      "Reels and shorts at scale",
      "Monthly performance reports",
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  },
  {
    slug: "ppc-ads",
    name: "PPC Ads",
    category: "Marketing & Growth",
    brief:
      "Profitable Google, Meta, and YouTube ad campaigns managed by performance specialists.",
    metaDescription:
      "PPC advertising by Digivyral — profitable Google Ads, Meta Ads, YouTube Ads, and LinkedIn Ads managed by performance marketers focused on ROAS, not vanity metrics.",
    intro:
      "Most agencies optimize for clicks. We optimize for profit. Our PPC team manages crores in ad spend across Google, Meta, YouTube, and LinkedIn — with one goal: maximize your return on ad spend.",
    sections: [
      {
        heading: "Platforms we run",
        body: "Google Search, Performance Max, YouTube, Meta (Facebook + Instagram), LinkedIn Ads, X Ads, and programmatic display. Each platform managed by specialists, not generalists.",
      },
      {
        heading: "Creative + targeting",
        body: "We pair sharp targeting with platform-native creatives. Every campaign launches with 5-10 creative variants for rapid testing, and we kill underperformers within 72 hours.",
      },
      {
        heading: "Tracking and attribution",
        body: "Server-side tracking, conversion API integrations, and proper attribution modeling — so you know exactly which rupee made you money. No more flying blind.",
      },
    ],
    benefits: [
      "Performance-focused (ROAS, CPA)",
      "Server-side conversion tracking",
      "Creative production included",
      "Weekly optimization reports",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    category: "Marketing & Growth",
    brief:
      "Email and WhatsApp automations that recover lost revenue and turn buyers into repeat customers.",
    metaDescription:
      "Email and WhatsApp marketing automation by Digivyral — abandoned cart flows, welcome series, retention campaigns, and segmentation that drive 30%+ of total revenue.",
    intro:
      "Email is the highest-ROI marketing channel — if you do it right. We build email and WhatsApp automation systems that consistently drive 30%+ of total revenue for our ecommerce and SaaS clients.",
    sections: [
      {
        heading: "Tools we work with",
        body: "Klaviyo, Mailchimp, HubSpot, Brevo, ActiveCampaign, and Customer.io for email. WATI, Interakt, and AiSensy for WhatsApp Business. We integrate them with your store, CRM, and analytics.",
      },
      {
        heading: "Flows we build",
        body: "Welcome series, abandoned cart and browse abandonment, post-purchase nurture, win-back campaigns, birthday and anniversary flows, and product recommendation engines.",
      },
      {
        heading: "Segmentation and testing",
        body: "Behavioural segmentation, RFM analysis, predictive lifetime value modelling, and rigorous A/B testing — so every email is sent to the right person at the right time.",
      },
    ],
    benefits: [
      "Abandoned cart recovery",
      "WhatsApp automation included",
      "Behavioural segmentation",
      "30%+ revenue from email",
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
  },
  {
    slug: "web-analytics",
    name: "Web Analytics",
    category: "Marketing & Growth",
    comingSoon: true,
    brief:
      "Server-side tracking, attribution modeling, and dashboards that finally show what's actually working.",
    metaDescription:
      "Web analytics and attribution services by Digivyral — server-side tracking, GA4 and PostHog setup, and custom dashboards that reveal true marketing ROI.",
    intro:
      "If you can't measure it, you can't grow it. Our analytics team builds proper measurement systems — server-side tracking, multi-touch attribution, and dashboards your leadership team will actually use.",
    sections: [
      {
        heading: "Stack we deploy",
        body: "GA4, PostHog, Mixpanel, Amplitude, Looker Studio, Metabase, and custom warehouses on BigQuery or Snowflake. Server-side tracking via GTM Server, Stape, or custom infrastructure.",
      },
      {
        heading: "Attribution and dashboards",
        body: "Multi-touch attribution modelling, customer journey mapping, cohort analysis, and executive dashboards refreshed in real-time. Finally know which channels are actually driving revenue.",
      },
      {
        heading: "Coming soon",
        body: "We're rolling out our managed analytics service in Q2 2026. Drop us a line if you want to be on the early-access list.",
      },
    ],
    benefits: [
      "Server-side tracking setup",
      "Multi-touch attribution",
      "Executive dashboards",
      "Privacy-compliant by default",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },

  // ============= HOSTING & SECURITY =============
  {
    slug: "managed-hosting",
    name: "Managed Hosting",
    category: "Hosting & Security",
    brief:
      "Blazing-fast managed hosting with 99.99% uptime, automated backups, and 24/7 support.",
    metaDescription:
      "Managed hosting services by Digivyral — fast, secure, scalable hosting on AWS, Vercel, and Cloudflare with automated backups and 24/7 monitoring.",
    intro:
      "Cheap hosting costs you customers. We provide enterprise-grade managed hosting on AWS, Vercel, Cloudflare, and Google Cloud — with the performance and reliability your business demands.",
    sections: [
      {
        heading: "Infrastructure",
        body: "AWS, Vercel, Cloudflare, Google Cloud, and DigitalOcean. We pick the platform that matches your stack, traffic patterns, and budget — and we manage everything end-to-end.",
      },
      {
        heading: "Performance",
        body: "CDN setup, image optimization, caching strategies, edge deployments, and HTTP/3. Most sites we migrate see 40-60% faster load times within 48 hours.",
      },
      {
        heading: "Reliability and support",
        body: "99.99% uptime SLA, automated daily backups, 24/7 monitoring with alerts, and human support over WhatsApp and email. No support tickets that disappear into the void.",
      },
    ],
    benefits: [
      "99.99% uptime SLA",
      "Automated daily backups",
      "Global CDN included",
      "24/7 human support",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  },
  {
    slug: "domain-registration",
    name: "Domain Registration",
    category: "Hosting & Security",
    brief:
      "Register, transfer, and manage domains with privacy protection and free DNS hosting.",
    metaDescription:
      "Domain registration and management by Digivyral — register .com, .in, .ai, and 500+ TLDs with WHOIS privacy, free DNS hosting, and renewal management.",
    intro:
      "Your domain is your digital real estate. We help you find, register, and protect the perfect domain — across 500+ TLDs — with privacy protection, free DNS hosting, and renewal management included.",
    sections: [
      {
        heading: "What's included",
        body: "Domain search and brokerage, registration across .com, .in, .co, .ai, and 500+ TLDs, free WHOIS privacy, free DNS hosting, and email forwarding setup.",
      },
      {
        heading: "Domain strategy",
        body: "We help you choose the right TLD for your market, secure defensive registrations to protect your brand, and acquire premium domains via brokerage when needed.",
      },
      {
        heading: "Migration support",
        body: "Transferring domains from GoDaddy, Hostinger, BigRock, or anywhere else? We handle the technical transfer with zero downtime — and most transfers are free.",
      },
    ],
    benefits: [
      "500+ TLDs available",
      "Free WHOIS privacy",
      "Free DNS hosting",
      "Renewal management",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
  },
  {
    slug: "dns-management",
    name: "DNS Management",
    category: "Hosting & Security",
    brief:
      "Lightning-fast DNS with global anycast routing, DNSSEC, and zero-downtime migrations.",
    metaDescription:
      "Managed DNS services by Digivyral — global anycast DNS with DNSSEC, GeoDNS, traffic steering, and zero-downtime migrations on Cloudflare and Route 53.",
    intro:
      "DNS is the most overlooked layer of your stack — until it breaks. We provide managed DNS on enterprise-grade infrastructure with global anycast, DNSSEC, and instant propagation.",
    sections: [
      {
        heading: "Infrastructure",
        body: "Cloudflare, Route 53, NS1, and Google Cloud DNS. Global anycast routing with sub-30ms response times worldwide.",
      },
      {
        heading: "Advanced features",
        body: "DNSSEC, GeoDNS, traffic steering, weighted load balancing, health checks with automatic failover, and detailed query analytics.",
      },
      {
        heading: "Zero-downtime migrations",
        body: "Migrating DNS providers without breaking email, websites, or services takes care. We plan and execute migrations with zero downtime — even for high-traffic domains.",
      },
    ],
    benefits: [
      "Global anycast routing",
      "DNSSEC enabled",
      "Health checks and failover",
      "Zero-downtime migrations",
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
  },
  {
    slug: "security",
    name: "Security",
    category: "Hosting & Security",
    brief:
      "Web application firewall, DDoS protection, SSL, and continuous security monitoring.",
    metaDescription:
      "Web security services by Digivyral — WAF, DDoS protection, SSL, malware scanning, and continuous security monitoring to protect your website and customers.",
    intro:
      "Cyberattacks are getting smarter and more frequent. We protect your web properties with enterprise-grade security — WAF, DDoS protection, SSL, and continuous monitoring — so you can focus on growth, not breaches.",
    sections: [
      {
        heading: "What we protect against",
        body: "OWASP Top 10 attacks, DDoS, brute-force login attempts, bot traffic, malware injection, data exfiltration, and zero-day vulnerabilities.",
      },
      {
        heading: "Tools we deploy",
        body: "Cloudflare WAF and Bot Management, AWS Shield, SSL via Let's Encrypt and DigiCert, Sucuri for malware scanning, and Snyk for dependency vulnerability monitoring.",
      },
      {
        heading: "Compliance",
        body: "GDPR, DPDP Act 2023, PCI-DSS, SOC 2, and ISO 27001 readiness. We help you meet the compliance requirements relevant to your business and customers.",
      },
    ],
    benefits: [
      "Enterprise WAF and DDoS",
      "SSL setup and renewal",
      "Malware scanning and removal",
      "GDPR + DPDP compliance support",
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80",
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    category: "Hosting & Security",
    brief:
      "Ongoing updates, security patches, content changes, and performance tuning — handled by us.",
    metaDescription:
      "Website maintenance plans by Digivyral — ongoing updates, security patches, content changes, performance tuning, and 24/7 monitoring.",
    intro:
      "A website is a living thing. It needs updates, patches, content changes, and constant care. Our maintenance plans handle all of it — so your site stays fast, secure, and current without you lifting a finger.",
    sections: [
      {
        heading: "What's covered",
        body: "Core and plugin updates, security patches, daily backups, uptime monitoring, broken link checks, performance audits, content updates, and minor design tweaks — all included monthly.",
      },
      {
        heading: "Plans for every size",
        body: "From small business sites to high-traffic ecommerce stores. Plans start at ₹4,999/month and scale up based on traffic, complexity, and the number of changes you need.",
      },
      {
        heading: "Real humans",
        body: "Ticketing, WhatsApp support, and a dedicated account manager. Most update requests are handled within 24 hours — not weeks.",
      },
    ],
    benefits: [
      "Daily backups + monitoring",
      "Unlimited content updates*",
      "Security patches included",
      "WhatsApp + email support",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
];

export const serviceCategories = [
  "Development",
  "Design & Branding",
  "Marketing & Growth",
  "Hosting & Security",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]) {
  return services.filter((s) => s.category === category);
}
