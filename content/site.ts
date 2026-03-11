export const siteConfig = {
  name: "Junaid Qureshi",
  title: "Junaid Qureshi — Software Architect & Fractional CTO",
  description:
    "High-performance system architecture, engineering leadership, and strategic delivery for scaling product teams.",
  url: "https://junaidqureshi.com",
  formspreeId: "mnjbrwrz",
  email: "hello@junaidqureshi.com",
  social: {
    linkedin: "https://www.linkedin.com/in/developer-junaid/",
    github: "https://github.com/developer-junaid",
    youtube: "https://youtube.com/@devnito",
    website: "https://junaidqureshi.com",
  },
};

export const founder = {
  name: "Junaid Qureshi",
  title:
    "Fractional CTO · Head of Engineering @ Stay Gold USA · Solution Architect",
  photo: "/dp.png",
  heroBio:
    "I build high-scale engineering systems for startups that can't afford technical debt. Currently leading engineering at Stay Gold (USA) and architecting production-grade platforms globally.",
  bio: "I’m Junaid — a senior technical leader and architect specialized in bridging the gap between complex business goals and high-performance engineering. With over 70 successful global deliveries, I bring executive-level strategy to every project. As Head of Engineering at Stay Gold (US), I lead high-scale architecture and delivery — at Devnito, I provide that same senior leadership to your product personally. No hand-offs, no middlemen — just direct collaboration with a partner who builds for scale.",
  heroHeadline: "Junaid Qureshi — Software Architect & Engineering Partner.",
  credentials: [
    "Head of Engineering",
    "Solution Architect",
    "70+ Successful Deliveries",
    "Product Strategist",
    "Global Delivery",
  ],
  // hourlyRate: Removed to favor value-based pricing and $3k+ monthly retainers
};

export const navLinks = [
  { label: "Packages", href: "#packages" },
  { label: "Selected Work", href: "#work" },
  { label: "Expertise", href: "#proof" },
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
    title: "Technical Architecture Audit",
    tag: "2 weeks",
    oneLiner: "Fix your technical debt before it kills your growth.",
    bullets: [
      "Full system & performance audit",
      "Scalable infrastructure & DB design",
      "90-day technical execution roadmap",
    ],
    cta: "See Audit Details",
    modal: {
      whoItsFor:
        "Founders or CTOs who need a clear technical strategy before committing to a build. Ideal for modernizing legacy debt or ensuring a new product is built to scale from day one.",
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
    title: "End-to-End Product Delivery",
    tag: "6–10 weeks",
    oneLiner: "Senior engineering from MVP to high-scale production.",
    bullets: [
      "Senior full-stack web & mobile delivery",
      "AI-ready architecture & custom integrations",
      "Production-grade CI/CD & infrastructure",
    ],
    cta: "See Build Details",
    modal: {
      whoItsFor:
        "Product teams ready to ship a new product or overhaul a legacy system. Best for founders who want a product that isn't just 'finished,' but engineered for long-term stability.",
      deliverables: [
        "Production-ready web and/or mobile application",
        "Automated CI/CD pipelines & cloud setup",
        "High-performance API & database architecture",
        "Comprehensive technical documentation",
        "Rigorous QA and performance stress-testing",
        "30-day post-launch support & stability monitoring",
      ],
      timeline:
        "6–10 weeks depending on scope. We ship in milestones so you see progress every week.",
      whatINeed:
        "Product requirements or wireframes, a dedicated point of contact, and weekly strategy syncs.",
      outcome:
        "A high-performance product built on modern architecture, delivered with the engineering standards of a top-tier tech company.",
      pricing: "Projects start at $10,000",
    },
  },
  {
    id: "partner",
    title: "Fractional CTO Partnership",
    tag: "Monthly",
    oneLiner: "Dedicated technical leadership for your engineering team.",
    bullets: [
      "Ongoing Fractional CTO leadership",
      "Priorities, architecture, and code reviews",
      "Direct delivery with my senior engineering team",
    ],
    cta: "See Partnership Details",
    modal: {
      whoItsFor:
        "Growing startups and product companies that need consistent senior engineering leadership without the cost of a full-time hire. Ideal for teams shipping regularly.",
      deliverables: [
        "Fractional CTO / engineering leadership",
        "Sprint planning and priority management",
        "Architecture decisions and code reviews",
        "Team mentorship and process improvement",
        "Hands-on delivery when needed",
        "Monthly progress reports",
      ],
      timeline:
        "Monthly retainer with flexible commitment. Minimum 3-month engagement recommended for meaningful impact.",
      whatINeed:
        "Access to your team's tools and processes, a weekly sync, and openness to process improvements.",
      outcome:
        "Your engineering team operates with more clarity, ships with more confidence, and makes better architectural decisions — with a trusted partner guiding the way.",
      pricing: "Retainers start at $3,500/mo",
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
      "Architected a high-performance recruitment engine serving 1,800+ active listings. Focused on SEO-first delivery and sub-second faceted search.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "System Architecture"],
    image: "/menajobs.png",
    liveUrl: "https://menajobs.io",
    modal: {
      overview:
        "A high-traffic recruitment platform engineered for scale. The challenge was building a system that could handle massive job ingestion while maintaining SEO dominance and a frictionless candidate experience.",
      role: "Technical Lead & Architect. I defined the core system design, from the faceted search logic to the automated ingestion pipelines, ensuring the platform could scale without performance degradation.",
      keyDecisions: [
        "Architected a faceted search engine for sub-second filtering across thousands of records",
        "Built an automated job ingestion pipeline to synchronize bulk data from multiple sources",
        "Leveraged Next.js SSR to achieve 90+ Lighthouse SEO scores for organic discovery",
        "Designed a normalized PostgreSQL schema to maintain data integrity across multi-tenant employer profiles",
      ],
      results: [
        "Production system supporting 1,800+ active listings with zero downtime",
        "Achieved sub-second response times on complex, multi-filter searches",
        "SEO-driven architecture resulted in high organic candidate acquisition",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Vercel",
      ],
    },
  },
  {
    id: "clinic-management",
    name: "Mecare — Healthcare ERP & Mobile Suite",
    industry: "Healthcare / HealthTech",
    summary:
      "A mission-critical clinic management system digitizing the patient lifecycle. Features real-time doctor-patient synchronization across web and mobile.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "React Native"],
    image: "/ClinicSystem.png",
    gallery: [
      "/ClinicSystem.png",
      "/ClinicSystem 2.png",
      "/ClinicSystem 3.png",
      "/ClinicSystem 4.png",
      { src: "/ClinicSystem mobile.png", mobile: true },
    ],
    liveUrl: "https://mecare-three.vercel.app/dashboard",
    modal: {
      overview:
        "A complete healthcare platform built to digitize clinical operations — from patient intake to real-time doctor queues and automated prescriptions.",
      role: "Head of Engineering. I led the multi-platform architecture, ensuring a unified API served the web dashboard, mobile app, and staff portal with strict data security.",
      keyDecisions: [
        "Developed a real-time patient queue management system using WebSockets for instant updates",
        "Chose a modular NestJS architecture to allow for future healthcare provider integrations",
        "Implemented secure, server-side PDF generation for medical records and prescriptions",
        "Shared the NestJS API layer between web and React Native mobile apps to minimize duplication",
      ],
      results: [
        "Reduced patient processing time by 40% through digitized intake workflows",
        "Clinic fully paperless for intake, vitals, and visit records",
        "Successfully deployed across web and mobile with a unified backend",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "React Native",
        "Sanity CMS",
      ],
    },
  },
  {
    id: "carsaaz",
    name: "CarSaaz.pk — High-Performance E-commerce",
    industry: "E-commerce / Automotive",
    summary:
      "A conversion-optimized storefront for the automotive market. Built to handle nationwide traffic with a custom checkout flow and seamless mobile experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Performance Ops"],
    image: "/carsaaz.png",
    liveUrl: "https://carsaaz.pk",
    modal: {
      overview:
        "A premium automotive accessory platform focused on creating a high-end brand feel while optimizing for mobile users on varying network speeds.",
      role: "Full-Stack Lead. I handled the end-to-end delivery, focusing on image optimization for slow connections and a frictionless checkout flow to maximize conversion rates.",
      keyDecisions: [
        "Built a fast, SEO-friendly storefront with Next.js for organic product discovery",
        "Designed product catalog with series-based filtering (Leather, Metal) and brand categorization",
        "Implemented a hybrid payment gateway supporting both Stripe and local Cash on Delivery flows",
        "Optimized product images and page loads for performance on slower connections",
      ],
      results: [
        "Store live and processing orders nationwide with zero downtime",
        "Fast page loads with optimized product images driving conversion",
        "Smooth mobile shopping experience driving majority of traffic",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Vercel",
      ],
    },
  },
];

export const stats = [
  { value: "70+", label: "Global Deliveries" },
  { value: "Senior", label: "Engineering Team" },
  { value: "$10M+", label: "Capital Managed" },
  { value: "99.9%", label: "System Uptime" },
  { value: "Founder", label: "Led Oversight" },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Junaid and his team are highly skilled, dedicated to work, very much responsive and delivering on-time. Very much satisfied and highly recommended. Thank you.",
    name: "Aman",
    title: "Founder, Boloot LMS (Pakistan)",
    initials: "A",
  },
  {
    id: "t2",
    quote:
      "Very very excited to have found Junaid, He is an incredible Developer and has so much talent - now trying to convince him to work full time for us. Seriously recommend him.",
    name: "Tayler",
    title: "Manager, Sandero Cloud (USA)",
    initials: "T",
  },
  {
    id: "t3",
    quote:
      "From my very first message to last, the seller communicated everything clearly and asked all the right questions unlike others asking for budget. The code is very clean (easy to maintain and good commenting). Very quick delivery, ill be ordering again soon. Thanks again!",
    name: "Ahmed",
    title: "Founder, Agency (UK)",
    initials: "A",
  },
  {
    id: "t4",
    quote:
      "This developer is the one of a kind with great communication skills!",
    name: "Denzel",
    title: "CEO, Firefighting Solutions (Poland)",
    initials: "D",
  },
  {
    id: "t5",
    quote:
      "Very professional and know what he is doing, will be working with you again in the future!",
    name: "Walid",
    title: "Founder, POS System (Belgium)",
    initials: "OH",
  },
  {
    id: "t6",
    quote:
      "Great communication skills, very good english and easy to work with! thanks for the excellent work and I hope we will work together in the future again!",
    name: "Leo Matter",
    title: "Product Manager, E-commerce",
    initials: "Italy",
  },
  {
    id: "t7",
    quote:
      "Junaid is a really professional, kind and effective programmer. He not only is a knowledgeable programmer specialized in the newest technologies (React, Gatsby.js, Next.js) but also a perfect communicator. It really means a lot to me, since I care about friendly atmosphere and being productive during any project I am involved. And that's how our cooperation looked like – effective, kind and I didn't have any doubts about skills and felt secure about the quality of the project Junaid will deliver. Totally recommend him because he is not only a great programmer but also an awesome human being :)",
    name: "Kuba",
    title: "Founder, Agency (Poland)",
    initials: "K",
  },
  {
    id: "t8",
    quote: "great attention and patience! great experience.",
    name: "Luke",
    title: "Founder, Agency (Argentina)",
    initials: "L",
  },
  {
    id: "t9",
    quote:
      "Junaid exceeded my expectations as always, I will definitely use his services again 5/5",
    name: "Micheal",
    title: "Founder, Agency (Malta)",
    initials: "M",
  },
  {
    id: "t10",
    quote: "Delivered quickly as per my request and it works well. Thanks",
    name: "Sathya Moorthy V",
    title: "Founder, Agency (Canada)",
    initials: "SM",
  },

  {
    id: "t11",
    quote:
      "Service was so great ! The Communication was amazing , this guy is a real preofessional web dev who know what he's doing not like others out there ! final result was better than expected ! cant wait to work on the next project with him ! really worth it !",
    name: "Ayoub",
    title: "Founder, Agency (France)",
    initials: "A",
  },
];

export interface VideoTestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  /** Path to video file in /public (e.g. "/testimonials/alex.mp4") */
  videoUrl?: string;
}

export const videoTestimonials: VideoTestimonialItem[] = [
  {
    id: "vt1",
    name: "Alex R.",
    title: "Product Lead",
    company: "SaaS Company",
    initials: "AR",
    videoUrl: "/testimonials/alex.mp4",
  },
  {
    id: "vt2",
    name: "Sarah M.",
    title: "Founder",
    company: "Startup",
    initials: "SM",
    videoUrl: "/testimonials/sarah.mp4",
  },
  {
    id: "vt3",
    name: "David K.",
    title: "Project Manager",
    company: "Agency",
    initials: "DK",
    videoUrl: "/testimonials/david.mp4",
  },
  {
    id: "vt4",
    name: "Maria L.",
    title: "CTO",
    company: "Fintech Startup",
    initials: "ML",
    videoUrl: "/testimonials/maria.mp4",
  },
  {
    id: "vt5",
    name: "Omar H.",
    title: "VP Engineering",
    company: "HealthTech",
    initials: "OH",
    videoUrl: "/testimonials/alex.mp4",
  },
  {
    id: "vt6",
    name: "Lisa T.",
    title: "Product Manager",
    company: "E-commerce",
    initials: "LT",
    videoUrl: "/testimonials/sarah.mp4",
  },
  {
    id: "vt7",
    name: "Ryan P.",
    title: "Co-Founder",
    company: "EdTech Startup",
    initials: "RP",
    videoUrl: "/testimonials/david.mp4",
  },
  {
    id: "vt8",
    name: "Nina W.",
    title: "Engineering Lead",
    company: "Media Company",
    initials: "NW",
    videoUrl: "/testimonials/maria.mp4",
  },
];
