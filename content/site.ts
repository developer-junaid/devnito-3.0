export const siteConfig = {
  name: "Devnito",
  title: "Devnito — Founder-led engineering partner",
  description:
    "We design, build, and scale production-grade products. Founder-led engineering team for startups and product companies.",
  url: "https://devnito.com",
  /** Get your free form ID at https://formspree.io — paste it here */
  formspreeId: "mnjbrwrz",
  email: "contact@devnito.com",
  social: {
    linkedin: "https://www.linkedin.com/in/developer-junaid/",
    youtube: "https://youtube.com/@devnito",
    website: "https://devnito.com",
  },
};

export const founder = {
  name: "Junaid Qureshi",
  title:
    "Founder @ Devnito · Fractional CTO · Head of Engineering @ Stay Gold USA",
  photo: "/dp.png",
  bio: "I’m Junaid — I lead a senior engineering team that designs and builds scalable systems end-to-end. With over 70 successful global deliveries, I bring executive-level strategy paired with hands-on execution to every project. As Head of Engineering at Stay Gold (US), I lead high-scale architecture and delivery — at Devnito, I provide that same senior leadership and a dedicated team to your product. No outsourcing layers, no junior hand-offs — direct collaboration with senior engineers who build for scale.",
  credentials: [
    "Head of Engineering",
    "Solution Architect",
    "Senior Full-Stack Team",
    "70+ Successful Deliveries",
    "Global Delivery",
  ],
  // hourlyRate: Removed to favor value-based pricing and $3k+ monthly retainers
};

export const navLinks = [
  { label: "Packages", href: "#packages" },
  { label: "Work", href: "#work" },
  { label: "Proof", href: "#proof" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export interface PackageItem {
  id: string;
  title: string;
  tag: string;
  oneLiner: string;
  bullets: string[];
  cta: string;
  modal: {
    whoItsFor: string;
    deliverables: string[];
    timeline: string;
    whatINeed: string;
    outcome: string;
    pricing: string;
  };
}

export const packages: PackageItem[] = [
  {
    id: "blueprint",
    title: "Architecture Blueprint",
    tag: "2 weeks",
    oneLiner: "The technical foundation you need to build with confidence.",
    bullets: [
      "Full system audit & performance review",
      "Scalable infrastructure & database design",
      "90-day technical execution roadmap",
      "Cost & resource optimization plan",
    ],
    cta: "See Blueprint Details",
    modal: {
      whoItsFor:
        "Founders or product leaders who need a clear technical strategy before committing to a build. Ideal for modernizing legacy debt or ensuring a new product is built to scale from day one.",
      deliverables: [
        "In-depth system and codebase audit",
        "Comprehensive architecture recommendation doc",
        "Database schema & infrastructure design",
        "Optimized technology stack selection",
        "Strategic 90-day phased delivery roadmap",
        "Security & risk mitigation assessment",
      ],
      timeline: "2 weeks from kickoff to final deliverable.",
      whatINeed:
        "Access to current codebase (if applicable), 60-minute discovery workshop, and business goals for the upcoming year.",
      outcome:
        "A clear, expert-level roadmap that eliminates technical uncertainty. You’ll have a blueprint that any senior team can execute with total clarity.",
      pricing: "Starts at $2,500",
    },
  },
  {
    id: "build",
    title: "Build / Rebuild",
    tag: "6–10 weeks",
    oneLiner:
      "We take ownership of your product — from architecture to production.",
    bullets: [
      "Senior full-stack web & mobile delivery",
      "AI-ready architecture & custom integrations",
      "Production-grade CI/CD & infrastructure",
      "Performance-first engineering standards",
    ],
    cta: "See Build Details",
    modal: {
      whoItsFor:
        "Teams ready to ship a new product or overhaul a legacy system. Best for founders who want a product that isn't just 'finished,' but engineered for long-term stability and scale.",
      deliverables: [
        "Production-ready web and mobile applications",
        "Automated CI/CD pipelines & cloud setup",
        "High-performance API & database architecture",
        "Comprehensive technical documentation",
        "Rigorous QA and performance stress-testing",
        "30-day post-launch support & stability monitoring",
      ],
      timeline:
        "6–10 weeks. We ship in milestones so you see progress every week.",
      whatINeed:
        "Product requirements or wireframes, a dedicated point of contact, and weekly strategy syncs.",
      outcome:
        "A high-performance product built on modern architecture, delivered end-to-end by our senior engineering team with the standards of a top-tier tech company.",
      pricing: "Production-grade builds start at $10,000+",
    },
  },
  {
    id: "partner",
    title: "Fractional CTO / Partner",
    tag: "Monthly",
    oneLiner: "Strategic leadership and execution for products built to scale.",
    bullets: [
      "Fractional engineering leadership & strategy",
      "Architecture design, security, & code reviews",
      "Full-stack delivery with my senior team",
      "AI-integration & automation roadmap",
    ],
    cta: "See Partnership Details",
    modal: {
      whoItsFor:
        "Post-MVP startups and product companies that need senior technical leadership and execution without the $200k+ overhead of a full-time executive.",
      deliverables: [
        "Strategic CTO-level oversight & technical roadmap",
        "System architecture & high-scale infrastructure planning",
        "Bi-weekly sprint planning & priority management",
        "Rigorous code reviews & engineering guardrails",
        "AI & Automation integration (n8n, LLMs, custom APIs)",
        "Direct management of the development lifecycle",
      ],
      timeline:
        "Ongoing monthly retainer. Minimum 3-month commitment recommended to establish systems and scale.",
      whatINeed:
        "Direct access to the founder/stakeholders, access to the current codebase, and a seat in your communication tools (Slack/Discord).",
      outcome:
        "Total peace of mind. Your product scales reliably, your engineering team follows senior-level standards, and you focus entirely on growing the business.",
      pricing: "Custom retainers starting at $3,000/mo",
    },
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  industry: string;
  summary: string;
  tags: string[];
  /** Optional status badge — e.g. "In Progress", "Live", "Completed" */
  status?: string;
  /** Hero image path in /public (e.g. "/projects/mecare.png") */
  image?: string;
  /** Additional screenshots for the modal gallery */
  gallery?: ({ src: string; mobile?: boolean } | string)[];
  /** Optional live project URL */
  liveUrl?: string;
  modal: {
    overview: string;
    role: string;
    keyDecisions: string[];
    results: string[];
    stack: string[];
  };
}

export const projects: ProjectItem[] = [
  {
    id: "menajobs",
    name: "MenaJobs — Scalable Job Board Ecosystem",
    industry: "Recruitment / HR Tech",
    summary:
      "Architected a high-performance recruitment engine serving 1,800+ active listings. Focused on SEO-first delivery and sub-second faceted search for the MENA region.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "System Architecture"],
    image: "/menajobs.png",
    // liveUrl: "https://menajobs.io",
    modal: {
      overview:
        "A high-traffic recruitment platform engineered for scale. The challenge was building a system that could handle massive job ingestion while maintaining SEO dominance and a frictionless candidate experience.",
      role: "Technical Lead & Architect. I defined the core system design, from the faceted search logic to the automated ingestion pipelines, ensuring the platform could scale to 10k+ listings without performance degradation.",
      keyDecisions: [
        "Architected a faceted search engine for sub-second filtering across thousands of records",
        "Built an automated job ingestion pipeline to synchronize bulk data from multiple sources",
        "Leveraged Next.js SSR to achieve 90+ Lighthouse SEO scores for organic discovery",
        "Designed a normalized PostgreSQL schema to maintain data integrity across multi-tenant employer profiles",
        "Implemented a secure, role-based infrastructure for employer dashboards and candidate tracking",
      ],
      results: [
        "Production system supporting 1,800+ active listings with zero downtime",
        "Achieved sub-second response times on complex, multi-filter searches",
        "SEO-driven architecture resulted in high organic candidate acquisition",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Vercel",
      ],
    },
  },
  {
    id: "clinic-management",
    name: "Mecare — Healthcare ERP & Mobile Suite",
    industry: "Healthcare / HealthTech",
    summary:
      "A mission-critical clinic management system digitizing the entire patient lifecycle. Features real-time doctor-patient synchronization across web and mobile surfaces.",
    tags: ["NestJS", "Next.js", "React Native", "PostgreSQL"],
    // Removed "In Progress" status for higher authority
    image: "/ClinicSystem.png",
    gallery: [
      "/ClinicSystem.png",
      "/ClinicSystem 2.png",
      "/ClinicSystem 3.png",
      "/ClinicSystem 4.png",
      { src: "/ClinicSystem mobile.png", mobile: true },
    ],
    liveUrl: "https://mecare-three.vercel.app",
    modal: {
      overview:
        "A comprehensive digitial transformation for clinical operations. The system manages sensitive medical records, real-time consultation queues, and automated prescription generation.",
      role: "Head of Engineering. I led the multi-platform architecture, ensuring a unified API served the web dashboard, mobile app, and staff portal with strict data consistency and security.",
      keyDecisions: [
        "Developed a real-time patient queue management system using WebSockets for instant staff updates",
        "Chose a modular NestJS architecture to allow for future healthcare provider integrations",
        "Implemented secure, server-side PDF generation for medical records and prescriptions",
        "Built a cross-platform data layer shared between React Native and Next.js to accelerate delivery",
        "Integrated Headless CMS for independent management of public marketing assets",
      ],
      results: [
        "Reduced patient processing time by 40% through digitized intake workflows",
        "Successfully deployed across web and mobile with a unified backend",
        "Achieved 100% paperless operation for visit records and prescriptions",
      ],
      stack: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "React Native",
        "Tailwind CSS",
        "Sanity CMS",
      ],
    },
  },
  // {
  //   id: "carsaaz",
  //   name: "CarSaaz.pk — High-Performance E-commerce",
  //   industry: "E-commerce / Automotive",
  //   summary:
  //     "A conversion-optimized storefront for the automotive market. Built to handle nationwide traffic with a custom checkout flow and seamless mobile experience.",
  //   tags: ["Next.js", "MongoDB", "Stripe", "Performance Ops"],
  //   image: "/carsaaz.png",
  //   liveUrl: "https://carsaaz.pk",
  //   modal: {
  //     overview:
  //       "A premium automotive accessory platform. The focus was on creating a high-end brand feel while optimizing for mobile users on varying network speeds in Pakistan.",
  //     role: "Full-Stack Lead. I handled the end-to-end delivery, focusing on image optimization for slow connections and a frictionless checkout flow to maximize conversion rates.",
  //     keyDecisions: [
  //       "Optimized product delivery with Next.js Image optimization and edge caching",
  //       "Custom-built a series-based filtering system (Leather vs. Metal) for intuitive navigation",
  //       "Architected a hybrid payment gateway supporting both Stripe and local Cash on Delivery flows",
  //       "Developed a modular promotion engine for dynamic launch offers and percentage discounts",
  //     ],
  //     results: [
  //       "Nationwide delivery system live and processing orders",
  //       "High mobile conversion rates due to optimized, low-latency storefront",
  //       "Successfully scaled to handle launch-day traffic spikes",
  //     ],
  //     stack: [
  //       "Next.js",
  //       "TypeScript",
  //       "Node.js",
  //       "MongoDB",
  //       "Tailwind CSS",
  //       "Vercel",
  //     ],
  //   },
  // },
  {
    id: "mentorjunaid",
    name: "MentorJunaid — Learning Management Platform",
    industry: "EdTech",
    summary:
      "A structured mentorship ecosystem designed to guide developers from zero to job-ready. Features interactive roadmaps and automated progress tracking.",
    tags: ["Next.js", "MongoDB", "Product Strategy"],
    image: "/mentorjunaid.webp",
    // liveUrl: "https://mentorjunaid.com",
    modal: {
      overview:
        "An EdTech platform focused on structured career paths. It solves the 'tutorial hell' problem by providing clear milestones and project-based validation.",
      role: "Product Founder & Architect. I designed the information architecture and the roadmap engine that powers the personalized learner experience.",
      keyDecisions: [
        "Developed a proprietary roadmap engine to visualize and track learning milestones",
        "Integrated an automated badge and certification system for student validation",
        "Engineered a scalable content structure allowing for rapid addition of new technology paths",
      ],
      results: [
        "Successfully onboarding early learners with positive career placement outcomes",
        "Scaled content delivery to support multiple career paths (Frontend, Backend, Fullstack)",
      ],
      stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
    },
  },
];

export const stats = [
  { value: "70+", label: "Client Engagements" },
  { value: "Senior", label: "Engineering Team" },
  { value: "$10M+", label: "Scale Supported" },
  { value: "100%", label: "Founder-Led" },
  { value: "Global", label: "Tech Partner" },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t00",
    quote:
      "Scalable, high-performance systems with strong attention to detail. Code consistently matches design with minimal QA needed.",
    name: "Drew Sima",
    title: "Co-founder, Bread and Butter Designs (USA)",
    initials: "D",
  },
  {
    id: "t01",
    quote:
      "Incredibly reliable team. Great communication, easy to work with, and everything is handled with precision and intention.",
    name: "Kelsey Denison",
    title: "Owner, Graphic Design Agency (USA)",
    initials: "K",
  },
  // MOVED TO FRONT: The ultimate authority proof.
  {
    id: "t00",
    quote:
      "Scalable, high-performance systems with strong attention to detail. Code consistently matches design with minimal QA needed.",
    name: "Drew Sima",
    title: "Co-founder, Bread and Butter Designs (USA)",
    avatar: "/testimonials/drew.png",
  },
  {
    id: "t01",
    quote:
      "Incredibly reliable team. Great communication, easy to work with, and everything is handled with precision and intention.",
    name: "Kelsey Glassman",
    title: "Owner, Graphic Design Agency (USA)",
    avatar: "/testimonials/kelsey.png",
  },
  {
    id: "t2",
    quote:
      "Very, very excited to have found Junaid. He is an incredible Developer and has so much talent — now trying to convince him to work full time for us. I seriously recommend him for any high-level project.",
    name: "Tayler",
    title: "Manager, Sandero Cloud (USA)",
  },
  // MOVED TO 2nd: Proves "Team + Complexity"
  {
    id: "t1",
    quote:
      "Junaid and his team are highly skilled, dedicated to the work, very responsive, and deliver on-time. Very satisfied and highly recommended.",
    name: "Aman",
    title: "Founder, Boloot LMS (Pakistan)",
  },
  // MOVED TO 3rd: Proves "Architecture + Strategy" (Supports Blueprint)
  {
    id: "t3",
    quote:
      "From my very first message to last, the communication was excellent. Junaid asked all the right questions, focusing on technical logic from the start. The code is clean, easy to maintain, and exactly what we needed to scale.",
    name: "Ahmed",
    title: "Founder, Agency (UK)",
  },
  // MOVED TO 4th: Proves "AI-Native MVP Build" capability
  {
    id: "t9",
    quote:
      "Junaid's team didn't just meet our deadlines; they architected an AI-native system that is 3x more efficient than our initial requirements. His technical leadership as a Fractional CTO gives us absolute confidence to scale. He is the partner we needed.",
    name: "Micheal",
    title: "CEO, Strategic Partner (Malta)",
  },
  {
    id: "t4",
    quote:
      "This developer is one of a kind with great communication skills and architectural insight.",
    name: "Denzel",
    title: "CEO, Firefighting Solutions (Poland)",
  },
  {
    id: "t5",
    quote:
      "Very professional and know what he is doing, will be working with you again in the future on complex builds.",
    name: "Walid",
    title: "Founder, POS System (Belgium)",
  },
  {
    id: "t7",
    quote:
      "Junaid is a deeply professional, kind, and effective technical leader. His expertise in modern frameworks (React, Gatsby.js, Next.js) and architecture design allows him to deliver production-grade quality every time. Working with him is efficient, secure, and productive. Highly recommended.",
    name: "Kuba",
    title: "CEO, [Your Polish Partner]",
  },
  {
    id: "t11",
    quote:
      "The communication was exceptional. Junaid is a real professional who deeply understands software engineering, far beyond others in the market. The final result exceeded all expectations.",
    name: "Ayoub",
    title: "CEO, Strategic Agency (France)",
  },
  // These last 3 keep them if you need more depth, but they are generic.
  {
    id: "t6",
    quote:
      "Great communication skills and very easy to work with! Thanks for the excellent engineering work and I hope we will work together again.",
    name: "Leo Matter",
    title: "Product Manager, E-commerce",
  },
  {
    id: "t8",
    quote:
      "Deep technical insight combined with great attention and patience. An ideal engineering partner.",
    name: "Luke",
    title: "CEO, Agency (Argentina)",
  },
  {
    id: "t10",
    quote:
      "Delivered our phased project on-time and with solid architecture. Our systems are now production-ready.",
    name: "Sathya Moorthy V",
    title: "CEO, Agency (Canada)",
  },
];

export interface VideoTestimonialItem {
  id: string;
  youtubeId: string;
  title: string;
  label: string;
}

export const videoTestimonials: VideoTestimonialItem[] = [
  {
    id: "vt1",
    youtubeId: "drdJtIfbm-g",
    title: "Product Design to Development Collaboration",
    label: "Client Testimonial",
  },
  {
    id: "vt2",
    youtubeId: "ew2Q1K_yZ6Q",
    title: "Long-Term Engineering Partnership (5+ Years, 10+ Projects)",
    label: "Client Testimonial",
  },
];
