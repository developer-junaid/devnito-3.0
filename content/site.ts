export const siteConfig = {
  name: "Junaid Qureshi",
  title: "Junaid Qureshi — Full-Stack Engineer & Solution Architect",
  description:
    "Architecture, web & mobile engineering, and long-term partnership for product teams. Founder-led delivery.",
  url: "https://junaidqureshi.com",
  /** Get your free form ID at https://formspree.io — paste it here */
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
    "Head of Engineering @ Stay Gold USA · Full-Stack Engineer & Solution Architect",
  photo: "/dp.jpg",
  /** Short bio for hero (above the fold). Full bio used in "More about me" section. */
  heroBio:
    "I'm a senior full-stack engineer and technical leader with 4+ years of experience. As Head of Engineering at Stay Gold (US), I lead architecture, delivery, and team leadership — and every engagement is led by me personally, with no hand-offs.",
  bio: "I'm Junaid — a senior full-stack engineer and technical leader with 4+ years of hands-on experience across architecture, delivery, and team leadership. As Head of Engineering at Stay Gold (US), I've led everything from solution architecture and engineering strategy to shipping production-grade platforms. Every engagement is led by me personally — no hand-offs, no middlemen — just direct collaboration with someone who's been in the trenches building at scale.",
  /** Headline for hero (personal, outcome-focused). */
  heroHeadline:
    "Hi, I'm Junaid — your full-stack partner for shipping real products.",
  credentials: [
    "70+ Client Engagements",
    "Head of Engineering",
    "Solution Architect",
    "Fiverr Level One Seller",
    "Global Delivery",
  ],
  hourlyRate: "$60",
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
    oneLiner: "Get clarity before you build or rebuild.",
    bullets: [
      "System review + performance audit",
      "Scalable architecture plan",
      "90-day delivery roadmap",
    ],
    cta: "See Blueprint Details",
    modal: {
      whoItsFor:
        "Founders or CTOs who need a clear technical direction before committing to a build or rebuild. Ideal if you have an existing product that needs modernization or a new idea that needs the right foundation.",
      deliverables: [
        "Full system and codebase review",
        "Performance and scalability audit",
        "Architecture recommendation document",
        "Technology stack recommendations",
        "90-day phased delivery roadmap",
        "Risk assessment and mitigation plan",
      ],
      timeline: "2 weeks from kickoff to final deliverable.",
      whatINeed:
        "Access to your current codebase (if applicable), a 60-minute kickoff call, and clarity on your business goals for the next 6–12 months.",
      outcome:
        "You walk away with a clear, actionable architecture plan that any senior engineering team can execute — whether that's us or someone else.",
      pricing: "Starts at $1,500",
    },
  },
  {
    id: "build",
    title: "Build / Rebuild",
    tag: "6–10 weeks",
    oneLiner: "From concept or redesign to production-ready delivery.",
    bullets: [
      "Web & mobile delivery (as needed)",
      "CI/CD + QA process",
      "Modern stack + best practices",
    ],
    cta: "See Build Details",
    modal: {
      whoItsFor:
        "Product teams ready to build a new product from scratch or rebuild an existing one with modern architecture. Best for teams who need senior technical leadership alongside execution.",
      deliverables: [
        "Production-ready web and/or mobile application",
        "CI/CD pipeline setup",
        "Automated testing and QA process",
        "Technical documentation",
        "Performance optimization",
        "Post-launch support period",
      ],
      timeline:
        "6–10 weeks depending on scope. We define milestones together before starting.",
      whatINeed:
        "Clear product requirements or wireframes, a dedicated product owner or decision-maker, and weekly check-in availability.",
      outcome:
        "A production-ready product built on solid architecture, with the processes in place for your team to maintain and scale it.",
      pricing: "Projects start at $6,000",
    },
  },
  {
    id: "partner",
    title: "Engineering Partner",
    tag: "Monthly",
    oneLiner: "Ongoing leadership + execution for growing teams.",
    bullets: [
      "Fractional engineering leadership",
      "Priorities, architecture, code reviews",
      "Delivery with my in-house team",
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
      pricing: "Retainers start at $2,500/mo",
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
    name: "MenaJobs — Job Board Platform",
    industry: "Recruitment / HR Tech",
    summary:
      "Architected and delivered a full-featured job board platform with advanced search, filtering, and employer posting — serving 1,800+ job listings across the MENA region.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    image: "/menajobs.png",
    liveUrl: "https://menajobs.io",
    modal: {
      overview:
        "A modern job board platform built to connect talent with opportunities across the MENA region. Features include advanced multi-filter job search (category, type, salary range), employer job posting, company profiles, and a clean candidate-facing experience designed for high conversion.",
      role: "Led the full technical architecture and delivery — from database schema design and API layer to the frontend search experience. Made all key technology decisions and oversaw the team through production launch.",
      keyDecisions: [
        "Designed a faceted search system with real-time filtering across category, job type, and salary range",
        "Built a scalable job ingestion pipeline supporting both manual employer posts and bulk imports",
        "Chose Next.js for SSR to ensure job listing pages are SEO-friendly and fast-loading",
        "Implemented salary range filtering with popular value presets for quick discovery",
        "Created a clean, minimal UI focused on reducing friction in the job search flow",
        "Built role-based access for employers (post/manage jobs) and candidates (search/apply)",
      ],
      results: [
        "Platform live with 1,800+ active job listings",
        "Employers onboarded and actively posting jobs",
        "Sub-second search and filter response times",
        "SEO-optimized pages driving organic job seeker traffic",
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
    id: "mentorjunaid",
    name: "MentorJunaid — Mentorship Platform",
    industry: "EdTech / Education",
    summary:
      "Architected and building a structured learning platform with guided roadmaps, progress tracking, and real-world projects to help developers go from beginner to pro.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    status: "In Progress",
    image: "/mentorjunaid.webp",
    liveUrl: "https://mentorjunaid.com",
    modal: {
      overview:
        "A structured learning platform designed to help aspiring developers master web development through expert-curated roadmaps, interactive progress tracking, badges, and real-world projects. The platform covers front-end, back-end, and full-stack development paths — making quality mentorship accessible to learners at every level.",
      role: "Conceived and leading the full product and technical vision — from information architecture and UX design to engineering decisions and delivery. Hands-on with core platform development including the roadmap engine, progress tracking system, and content management.",
      keyDecisions: [
        "Designed a roadmap-first learning model where each path is structured step-by-step with clear milestones",
        "Built an interactive progress tracking system with lesson completion, badges, and a visual dashboard",
        "Chose Next.js for SSR and SEO to ensure roadmap pages rank well organically",
        "Implemented a mobile-responsive design so learners can progress from any device",
        "Planned for future live mentorship sessions and certificate generation",
        "Structured content to be modular and easily extendable as new technologies are added",
      ],
      results: [
        "Platform live and actively onboarding early learners",
        "200+ websites developed through guided projects",
        "60+ happy clients and learners served globally",
        "Positive testimonials from developers who landed their first jobs",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Vercel",
      ],
    },
  },
  {
    id: "clinic-management",
    name: "Mecare — Clinic Management System",
    industry: "Healthcare",
    summary:
      "Architected and delivered a full-stack clinic management system digitizing patient intake, doctor workflows, and visit history across web and mobile.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "React Native"],
    status: "In Progress",
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
        "A complete clinic management platform built to digitize day-to-day clinical operations — from patient intake and vitals recording by staff, to real-time doctor queues, medical notes, prescriptions, and printable visit summaries. Includes a public landing site, a secure role-based web application, and a mobile app for on-the-go access.",
      role: "Led the full technical architecture and delivery across all three surfaces — landing site, management web app, and mobile app. Made all key technology decisions, designed the role-based access system, and oversaw the team through production launch.",
      keyDecisions: [
        "Designed a role-based architecture with distinct workflows for staff, doctors, and patients",
        "Built a real-time patient queue system so doctors see intake updates instantly",
        "Chose NestJS for the backend to ensure a scalable, modular API layer",
        "Implemented server-side PDF generation for printable visit summaries and prescriptions",
        "Used Sanity CMS for the public landing site so the clinic team can update content independently",
        "Shared the NestJS API layer between web and React Native mobile apps to minimize duplication",
      ],
      results: [
        "System live and handling daily patient flow for the clinic",
        "Staff onboarded with zero technical training required",
        "Patient visit processing time reduced significantly",
        "Clinic fully paperless for intake, vitals, and visit records",
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
    name: "CarSaaz.pk — Car Accessories Store",
    industry: "E-commerce / Automotive",
    summary:
      "Built a premium e-commerce storefront for car accessories with product catalog, brand filtering, and a seamless checkout experience — serving customers nationwide in Pakistan.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    status: "In Progress",
    image: "/carsaaz.png",
    liveUrl: "https://carsaaz.pk",
    modal: {
      overview:
        "A modern e-commerce platform for premium car keychains and accessories, featuring leather and metal series across major automotive brands (Honda, Toyota, Suzuki). The store includes product search, category and series filtering, launch offers, and a complete cart-to-checkout flow with cash on delivery and online payment support.",
      role: "Led the full technical delivery — from storefront design and product catalog architecture to payment integration and order management. Made all key decisions around the commerce stack and ensured a fast, conversion-optimized shopping experience.",
      keyDecisions: [
        "Built a fast, SEO-friendly storefront with Next.js for organic product discovery",
        "Designed product catalog with series-based filtering (Leather, Metal) and brand categorization",
        "Implemented a streamlined cart and checkout flow optimized for mobile shoppers",
        "Added support for Cash on Delivery alongside online payments for the Pakistani market",
        "Created a promotional system for launch offers and percentage-based discounts",
        "Optimized product images and page loads for performance on slower connections",
      ],
      results: [
        "Store live and processing orders nationwide",
        "Clean, premium brand presentation matching the product quality",
        "Fast page loads with optimized product images",
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
  { value: "70+", label: "Client Engagements" },
  { value: "10+", label: "Engineers" },
  { value: "100+", label: "Projects Delivered" },
  { value: "$60", label: "Per Hour" },
  { value: "Global", label: "Delivery" },
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
