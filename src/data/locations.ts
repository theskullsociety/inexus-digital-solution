export interface LocationPage {
  slug: string;
  city: string;
  region: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  neighborhoods: string[];
  industries: { name: string; blurb: string }[];
  services: { name: string; description: string }[];
  whyChooseUs: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
}

export const locations: LocationPage[] = [
  {
    slug: "digital-marketing-agency-gurgaon",
    city: "Gurgaon",
    region: "Gurugram, Haryana",
    metaTitle:
      "Digital Marketing Agency in Gurgaon | SEO, Google Ads & Web Design — Digivyral",
    metaDescription:
      "Digivyral is a results-driven digital marketing agency in Gurgaon offering SEO, Google Ads, social media marketing, web development & branding for Cyber City, Golf Course Road & DLF businesses.",
    keywords:
      "digital marketing agency Gurgaon, SEO services Gurgaon, Google Ads agency Gurugram, social media marketing Gurgaon, web development Gurgaon, performance marketing Gurugram, best marketing agency Cyber City, Digivyral Gurgaon",
    heroTitle: "Digital Marketing Agency in Gurgaon",
    heroSubtitle:
      "SEO, Google Ads, web design & social media that turn Gurgaon traffic into pipeline.",
    intro:
      "Gurgaon is India's startup capital — over 250 Fortune 500 offices, a thriving D2C scene, and a buyer who scrolls Instagram on the Rapid Metro and Googles 'near me' from a Cyber Hub lunch. To win here, your brand needs to show up in those exact micro-moments. Digivyral is a Gurgaon-focused digital marketing agency that combines local SEO, paid media, and conversion-led web design to put your business in front of the right buyers across DLF, Golf Course Road, Sohna Road and beyond.",
    neighborhoods: [
      "Cyber City",
      "Cyber Hub",
      "Golf Course Road",
      "Golf Course Extension",
      "DLF Phase 1–5",
      "Sohna Road",
      "MG Road",
      "Sector 29",
      "Udyog Vihar",
      "New Gurgaon",
      "Manesar",
      "Sushant Lok",
    ],
    industries: [
      {
        name: "D2C & E-commerce",
        blurb:
          "Shopify builds, Meta Ads, influencer collabs and retention flows for the Gurgaon D2C wave.",
      },
      {
        name: "Real Estate & Interiors",
        blurb:
          "High-intent lead gen for builders, brokers and modular interior brands across DLF and Golf Course Road.",
      },
      {
        name: "Healthcare & Clinics",
        blurb:
          "Local SEO, Google Business Profile and review systems for clinics, dentists and aesthetic studios.",
      },
      {
        name: "B2B SaaS & IT",
        blurb:
          "ABM, LinkedIn Ads and SEO content engines for the Cyber City SaaS belt.",
      },
      {
        name: "Education & EdTech",
        blurb:
          "Performance marketing for coaching institutes, K-12 schools and online learning platforms.",
      },
      {
        name: "Restaurants & Hospitality",
        blurb:
          "Zomato/Swift optimisation, Reels-led local discovery and reservation funnels for Cyber Hub & Sector 29.",
      },
    ],
    services: [
      {
        name: "Local SEO Gurgaon",
        description:
          "Rank for 'best [service] in Gurgaon', dominate Google Maps, and own the 3-pack with optimised GBP, citations and review velocity.",
      },
      {
        name: "Google Ads & Performance Marketing",
        description:
          "Search, Performance Max and YouTube campaigns engineered around Gurgaon buying signals — targeted by pin code, intent and device.",
      },
      {
        name: "Social Media Marketing",
        description:
          "Reels-first content, paid Meta funnels and influencer partnerships built for Gurgaon's young, mobile-first audience.",
      },
      {
        name: "Web Design & Development",
        description:
          "Lightning-fast websites engineered for Core Web Vitals — built to convert traffic from Cyber City offices and Golf Course Road residents.",
      },
      {
        name: "Branding & Identity",
        description:
          "Premium brand systems for Gurgaon startups, real-estate brands and D2C labels that need to look the part on day one.",
      },
      {
        name: "AEO & Generative Search Optimisation",
        description:
          "Get cited inside ChatGPT, Perplexity, Google AI Overviews and AI Mode for queries your Gurgaon buyers already ask.",
      },
    ],
    whyChooseUs: [
      {
        title: "We know the Gurgaon buyer",
        body: "We've shipped campaigns for D2C, real estate and EdTech brands operating across DLF, Sohna Road and Manesar — we don't guess at the audience.",
      },
      {
        title: "ROI first, vanity metrics never",
        body: "Every dashboard ties spend to leads, qualified meetings and revenue — not impressions and likes.",
      },
      {
        title: "One team, every channel",
        body: "SEO, paid, content, design and dev under one roof — no agency ping-pong, no finger-pointing.",
      },
      {
        title: "On-ground proximity",
        body: "Strategy calls, brand workshops and shoot days happen in person across Gurgaon when you need them.",
      },
    ],
    stats: [
      { value: "250+", label: "Gurgaon-area campaigns shipped" },
      { value: "4.2x", label: "Average ROAS for D2C clients" },
      { value: "<2s", label: "Average page load on builds" },
      { value: "12+", label: "Industries served in NCR" },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Gurgaon?",
        a: "There is no single 'best' — there's a best fit for your stage and category. Digivyral is a strong fit for Gurgaon-based D2C, SaaS, real estate, healthcare and EdTech brands that want SEO, Google Ads, web development and branding under one roof, with transparent revenue-led reporting.",
      },
      {
        q: "How much does digital marketing cost in Gurgaon?",
        a: "Most Digivyral retainers in Gurgaon start at ₹40,000–₹60,000 per month for focused engagements (SEO or paid alone) and ₹1,00,000+ for full-stack growth (SEO + paid + content + creative). One-time projects like websites or brand identity are quoted per scope.",
      },
      {
        q: "Do you offer local SEO services in Gurgaon?",
        a: "Yes. We optimise your Google Business Profile, build NAP-consistent local citations, run review-generation systems, and produce locality-specific landing pages so you appear for 'near me' searches across Cyber City, Golf Course Road, DLF, Sohna Road and Sector 29.",
      },
      {
        q: "Can you handle both Google Ads and Meta Ads?",
        a: "Yes — and they're better together. Our paid team plans cross-channel funnels that catch high-intent search demand on Google and build category demand on Meta, with shared creative testing and unified attribution.",
      },
      {
        q: "Do you build websites or only run marketing?",
        a: "Both. Our in-house dev team ships marketing sites, Shopify stores, SaaS dashboards and bespoke web apps — all engineered for SEO, Core Web Vitals and conversion from day one.",
      },
      {
        q: "How long before I see results from SEO in Gurgaon?",
        a: "Local SEO (Google Maps and 'near me' queries) typically shows movement in 30–60 days. Competitive organic terms like 'digital marketing agency Gurgaon' or 'interior designer Gurgaon' usually take 4–6 months of consistent content and link work.",
      },
      {
        q: "Do you work with startups or only enterprise clients?",
        a: "Both. We have founder-led packages for early-stage Gurgaon startups and full-scope retainers for series-funded and enterprise brands.",
      },
      {
        q: "Can we meet your team in Gurgaon?",
        a: "Yes. We run strategy workshops, creative reviews and shoot days in person across Gurgaon and Delhi NCR.",
      },
    ],
    ctaLine:
      "Ready to grow in Gurgaon? Let's build a 90-day plan tailored to your category.",
  },
  {
    slug: "digital-marketing-agency-delhi-ncr",
    city: "Delhi NCR",
    region: "Delhi, Noida, Gurgaon, Faridabad, Ghaziabad",
    metaTitle:
      "Digital Marketing Agency in Delhi NCR | SEO, Ads & Web Design — Digivyral",
    metaDescription:
      "Digivyral is a top digital marketing agency in Delhi NCR — SEO, Google Ads, social media, web development and branding across Delhi, Noida, Gurgaon, Faridabad & Ghaziabad.",
    keywords:
      "digital marketing agency Delhi, digital marketing agency Delhi NCR, SEO services Delhi, Google Ads agency Noida, social media marketing Delhi NCR, web development Delhi, performance marketing agency NCR, best marketing company Delhi, Digivyral Delhi",
    heroTitle: "Digital Marketing Agency in Delhi NCR",
    heroSubtitle:
      "Full-stack growth — SEO, paid media, web & brand — for Delhi, Noida, Gurgaon, Faridabad and Ghaziabad businesses.",
    intro:
      "Delhi NCR is India's most competitive market — and its most rewarding. From Connaught Place boardrooms to Noida startups, Faridabad manufacturing to Ghaziabad retail, every category here is fought online before it's won offline. Digivyral is a Delhi NCR digital marketing agency that helps brands cut through the noise with sharp SEO, performance marketing, content and design — built around how NCR audiences actually search, scroll and buy.",
    neighborhoods: [
      "Connaught Place",
      "South Delhi",
      "Saket",
      "Hauz Khas",
      "Vasant Kunj",
      "Dwarka",
      "Rohini",
      "Pitampura",
      "Noida Sector 18",
      "Noida Sector 62",
      "Greater Noida",
      "Faridabad",
      "Ghaziabad",
      "Indirapuram",
      "Gurgaon",
    ],
    industries: [
      {
        name: "Retail & D2C",
        blurb:
          "End-to-end e-commerce growth — from Shopify builds to Meta + Google funnels and influencer marketing.",
      },
      {
        name: "Real Estate",
        blurb:
          "Lead generation for builders, channel partners and luxury brokers across Delhi, Noida and Gurgaon.",
      },
      {
        name: "Healthcare & Wellness",
        blurb:
          "Patient acquisition for hospitals, clinics, IVF centres and dermatology brands across NCR.",
      },
      {
        name: "Education & Coaching",
        blurb:
          "Admissions-led performance marketing for K-12, coaching institutes and EdTech startups.",
      },
      {
        name: "Manufacturing & B2B",
        blurb:
          "Account-based marketing, LinkedIn lead gen and SEO for NCR's manufacturing and industrial belt.",
      },
      {
        name: "Hospitality & Restaurants",
        blurb:
          "Local SEO, Reels marketing and reservation funnels for Delhi's restaurant and hotel scene.",
      },
    ],
    services: [
      {
        name: "SEO Services Delhi NCR",
        description:
          "Technical SEO, content engines, digital PR and local SEO that win for both 'in Delhi' and 'in Noida' style queries.",
      },
      {
        name: "Google Ads & Meta Ads",
        description:
          "Performance Max, Search, YouTube and Meta campaigns built around NCR's pin codes, languages and buyer signals.",
      },
      {
        name: "Social Media Marketing",
        description:
          "Reels-first creative, community management and paid social funnels for D2C, lifestyle and B2B brands.",
      },
      {
        name: "Web & App Development",
        description:
          "Marketing websites, Shopify stores, SaaS dashboards and mobile apps engineered for Core Web Vitals and conversion.",
      },
      {
        name: "Branding & Creative",
        description:
          "Brand strategy, identity systems, packaging and content production from our in-house creative studio.",
      },
      {
        name: "AEO & GEO (AI Search)",
        description:
          "Get your brand cited inside ChatGPT, Perplexity, Gemini and Google AI Overviews for the questions your NCR buyers actually ask.",
      },
    ],
    whyChooseUs: [
      {
        title: "Full-stack, in-house team",
        body: "Strategy, SEO, paid, content, design and dev — all under one roof. No subcontracting, no whisper-down-the-lane.",
      },
      {
        title: "Built around NCR buyer behaviour",
        body: "We localise creative for Delhi, Noida, Gurgaon, Faridabad and Ghaziabad rather than running one generic India campaign.",
      },
      {
        title: "Revenue-grade reporting",
        body: "Every weekly report ties spend to qualified leads, meetings booked and revenue closed — not vanity metrics.",
      },
      {
        title: "Speed, then scale",
        body: "We launch in weeks, learn fast, then double down on what's working — instead of disappearing for a 90-day 'strategy phase'.",
      },
    ],
    stats: [
      { value: "500+", label: "NCR campaigns shipped" },
      { value: "30+", label: "Brands actively scaled" },
      { value: "4.6/5", label: "Average client satisfaction" },
      { value: "15+", label: "Industries served" },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Delhi NCR?",
        a: "The right agency depends on your category, budget and growth stage. Digivyral is a strong fit for Delhi NCR brands that want SEO, paid media, web development and branding under one accountable roof, with transparent revenue-linked reporting.",
      },
      {
        q: "How much does a digital marketing agency in Delhi cost?",
        a: "Typical Digivyral engagements in Delhi NCR start at ₹40,000–₹75,000/month for single-channel work and ₹1,25,000+ for full-stack growth retainers. Project-based work like websites and brand identity is quoted to scope.",
      },
      {
        q: "Do you serve Noida, Gurgaon, Faridabad and Ghaziabad?",
        a: "Yes. We operate across the entire NCR — Delhi, Noida, Greater Noida, Gurgaon, Faridabad and Ghaziabad — with localised SEO, ads and content for each micro-market.",
      },
      {
        q: "Can you handle SEO for highly competitive Delhi keywords?",
        a: "Yes. We combine technical SEO, programmatic SEO, content clusters, digital PR backlinks and local SEO to compete for high-intent NCR terms like 'best dentist in South Delhi' or 'real estate broker in Noida'.",
      },
      {
        q: "Do you offer AI search / AEO services?",
        a: "Yes. We optimise your brand to be cited inside Google AI Overviews, AI Mode, ChatGPT Search, Perplexity and Gemini — the new battleground for organic traffic in 2026.",
      },
      {
        q: "Are you a full-service agency or specialist?",
        a: "Full-service. Strategy, SEO, performance marketing, social, content, design and engineering all sit in one in-house team — designed to ship integrated growth, not siloed deliverables.",
      },
      {
        q: "How quickly can we go live?",
        a: "Paid campaigns can launch within 7–10 days of kickoff. SEO foundations and content engines are typically live in 2–4 weeks. Custom websites range from 4 to 10 weeks depending on scope.",
      },
      {
        q: "Can we visit your office in Delhi NCR?",
        a: "Yes. We host strategy sessions, creative reviews and workshops in person across Delhi NCR — and remote when that's faster for your team.",
      },
    ],
    ctaLine:
      "Ready to dominate Delhi NCR? Let's map out a 90-day growth plan for your brand.",
  },
];

export const getLocationBySlug = (slug: string) =>
  locations.find((l) => l.slug === slug);
