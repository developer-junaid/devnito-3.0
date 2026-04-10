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
    id: "venture-operations-platform",
    name: "Confidential Venture Operations Platform",
    industry: "Venture Capital / Investment Operations",
    summary:
      "A venture operations platform for managing companies, contacts, documents, notes, pipeline activity, and portfolio visibility in a single unified system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    image: "/venture-operations-platform.png",
    modal: {
      overview:
        "A comprehensive venture operations and portfolio management platform built to replace fragmented tools with a centralized system for managing companies, relationships, documents, internal notes, and investment workflows. The product combines CRM-like capabilities with pipeline tracking and portfolio visibility, all within a scalable, modern frontend architecture.",
      role: "Frontend Lead. I worked across both the existing system and the next-generation frontend foundation, focusing on scalability, UI consistency, and improving complex operational workflows across companies, contacts, documents, and portfolio views.",
      keyDecisions: [
        "Refactored UI into reusable, modular components to support long-term scalability",
        "Structured consistent patterns across list, table, Kanban, and detail-based views",
        "Introduced Tailwind CSS and Storybook to establish a scalable design system workflow",
        "Improved information architecture for complex venture workflows including companies, contacts, and documents",
      ],
      results: [
        "Improved UI consistency across multiple product modules",
        "Enabled faster feature development through reusable component architecture",
        "Reduced operational complexity with clearer and more structured UX patterns",
        "Established a strong foundation for scaling the product frontend",
      ],
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Storybook",
        "Component-Driven Architecture",
      ],
    },
  },
  {
    id: "ai-companion-mobile-app",
    name: "Confidential AI Companion App",
    industry: "AI / Consumer Mobile",
    summary:
      "An AI companion mobile app focused on conversation, relationship intelligence, and real-time interaction flows, optimized for performance and polished mobile UX.",
    tags: ["React Native", "Expo", "Reanimated", "AI UX"],
    image: "/ai-companion-mobile-app.png",
    modal: {
      overview:
        "A mobile AI companion app designed to help users stay connected, get suggestions, and interact through intelligent conversation flows. The product combined AI-driven messaging, contact-aware experiences, and highly interactive mobile UI patterns to create a polished, production-ready experience.",
      role: "Frontend Engineer. I focused on mobile UX, AI chat interaction flows, bottom sheet experiences, and frontend performance optimization to help prepare the app for a high-visibility release.",
      keyDecisions: [
        "Upgraded the React Native and Expo stack to improve compatibility, development speed, and long-term maintainability",
        "Built and refined interactive AI chat and bottom sheet flows with smooth gestures, animations, and snap-point behavior",
        "Improved messaging, notifications, contact, and profile experiences to feel polished and responsive across the app",
        "Refactored frontend structure to reduce friction for future AI and backend integrations",
      ],
      results: [
        "Delivered a smoother and more production-ready AI companion experience on mobile",
        "Improved responsiveness and perceived performance across chat, feed, and interactive screens",
        "Strengthened the frontend foundation for future feature expansion and release readiness",
      ],
      stack: [
        "React Native",
        "Expo",
        "NativeWind",
        "Gluestack",
        "React Navigation",
        "Reanimated",
        "Gesture Handler",
        "REST APIs",
      ],
    },
  },
  {
    id: "clinic-management",
    name: "Mecare \u2014 Healthcare ERP & Mobile Suite",
    industry: "Healthcare / HealthTech",
    summary:
      "A mission-critical clinic management system digitizing the patient lifecycle. Features real-time doctor-patient synchronization across web and mobile.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "React Native"],
    image: "/clinic-management.png",
    gallery: [
      "/ClinicSystem.png",
      "/ClinicSystem 2.png",
      "/ClinicSystem 3.png",
      "/ClinicSystem 4.png",
      { src: "/ClinicSystem mobile.png", mobile: true },
    ],
    // liveUrl: "https://mecare-three.vercel.app/dashboard",
    modal: {
      overview:
        "A complete healthcare platform built to digitize clinical operations \u2014 from patient intake to real-time doctor queues and automated prescriptions.",
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
    id: "record-commerce-operations-platform",
    name: "Record Commerce & Operations Platform",
    industry: "E-commerce / Operations Tech",
    summary:
      "A production-grade platform combining e-commerce, structured submissions, and logistics workflows to manage the end-to-end lifecycle of physical record-based services.",
    tags: ["Next.js", "TypeScript", "Node.js", "Stripe", "AWS"],
    image: "/record-commerce-operations-platform.png",
    modal: {
      overview:
        "A full-stack platform built for a specialized record-based service business, enabling users to submit physical items (e.g. vinyl, CDs) through structured workflows. The system extends beyond traditional e-commerce by integrating submission flows, dynamic pricing, lifecycle tracking, and internal operational processes such as processing, labeling, packaging, and shipping. It connects customer-facing experiences with complex backend logistics in a unified system.",
      role: "Full Stack Engineer (Frontend-focused). I worked on core product workflows including submission systems, cart and checkout logic, and lifecycle tracking interfaces, ensuring consistency between user-facing experiences and internal operational systems.",
      keyDecisions: [
        "Designed a submission-first architecture instead of a traditional SKU-based e-commerce model",
        "Implemented dynamic pricing logic combining services, shipping, and add-ons within a unified checkout flow",
        "Built structured workflows connecting submissions, orders, and internal lifecycle states",
        "Aligned frontend architecture with backend and operational systems to maintain data consistency across the platform",
      ],
      results: [
        "Delivered a stable, production-ready platform for a complex service-based business",
        "Unified fragmented workflows into a single system covering submission, payment, processing, and fulfillment",
        "Improved transparency for users while enabling efficient internal operations",
        "Established a scalable foundation for future growth, automation, and feature expansion",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Stripe",
        "AWS S3",
        "Sanity CMS",
        "Tailwind CSS",
      ],
    },
  },
  {
    id: "menajobs",
    name: "MenaJobs \u2014 Scalable Job Board Ecosystem",
    industry: "Recruitment / HR Tech",
    summary:
      "Architected a high-performance recruitment engine serving 1,800+ active listings. Focused on SEO-first delivery and sub-second faceted search.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "System Architecture"],
    image: "/menajobs.png",
    // liveUrl: "https://menajobs.io",
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
  // {
  //   id: "carsaaz",
  //   name: "CarSaaz.pk \u2014 High-Performance E-commerce",
  //   industry: "E-commerce / Automotive",
  //   summary:
  //     "A conversion-optimized storefront for the automotive market. Built to handle nationwide traffic with a custom checkout flow and seamless mobile experience.",
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Performance Ops"],
  //   image: "/carsaaz.png",
  //   // liveUrl: "https://carsaaz.pk",
  //   modal: {
  //     overview:
  //       "A premium automotive accessory platform focused on creating a high-end brand feel while optimizing for mobile users on varying network speeds.",
  //     role: "Full-Stack Lead. I handled the end-to-end delivery, focusing on image optimization for slow connections and a frictionless checkout flow to maximize conversion rates.",
  //     keyDecisions: [
  //       "Built a fast, SEO-friendly storefront with Next.js for organic product discovery",
  //       "Designed product catalog with series-based filtering (Leather, Metal) and brand categorization",
  //       "Implemented a hybrid payment gateway supporting both Stripe and local Cash on Delivery flows",
  //       "Optimized product images and page loads for performance on slower connections",
  //     ],
  //     results: [
  //       "Store live and processing orders nationwide with zero downtime",
  //       "Fast page loads with optimized product images driving conversion",
  //       "Smooth mobile shopping experience driving majority of traffic",
  //     ],
  //     stack: [
  //       "Next.js",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "Node.js",
  //       "MongoDB",
  //       "Vercel",
  //     ],
  //   },
  // },
  // {
  //   id: "asset-management-platform",
  //   name: "Confidential Asset Management Platform",
  //   industry: "FinTech / WealthTech",
  //   summary:
  //     "A production-grade asset management platform for tracking diversified portfolios, document workflows, and secure onboarding across multiple entities.",
  //   tags: ["Next.js", "TypeScript", "TanStack Query", "WebAuthn"],
  //   image: "/dedicate-cover.png",
  //   modal: {
  //     overview:
  //       "A mobile-first web application built for organizations and families to track, manage, and report on valuable assets across categories such as real estate, equities, crypto, collectibles, and more. The product combines portfolio visibility, document management, and secure onboarding into a unified platform.",
  //     role: "Frontend Lead. I led the customer-facing product UI, built scalable frontend architecture, and drove implementation of key user flows across portfolio views, onboarding, navigation, and document experiences.",
  //     keyDecisions: [
  //       "Built the application on Next.js App Router with a feature-based architecture for long-term scalability",
  //       "Implemented a BFF-style API layer under /api to keep frontend integrations structured and secure",
  //       "Designed mobile-first navigation and responsive screen patterns for tablet and desktop expansion",
  //       "Integrated secure onboarding flows including email OTP, passkey setup, and entity-aware access patterns",
  //     ],
  //     results: [
  //       "Delivered a production-ready frontend foundation for a complex asset management platform",
  //       "Enabled rich portfolio, document vault, and onboarding experiences across breakpoints",
  //       "Established a scalable component and feature structure to support future roadmap expansion",
  //     ],
  //     stack: [
  //       "Next.js 16",
  //       "React 19",
  //       "TypeScript",
  //       "Tailwind CSS v4",
  //       "TanStack Query",
  //       "React Hook Form",
  //       "Zod",
  //       "Framer Motion",
  //       "Recharts",
  //     ],
  //   },
  // },
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
