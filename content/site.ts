import type { Locale } from "@/i18n/routing";

export const siteConfig = {
  name: "Devnito",
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

export interface FounderContent {
  name: string;
  title: string;
  photo: string;
  bio: string;
  credentials: string[];
}

export const founder: Record<Locale, FounderContent> = {
  en: {
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
  },
  ar: {
    name: "Junaid Qureshi",
    title:
      "المؤسس في Devnito · مدير تقني جزئي (Fractional CTO) · رئيس الهندسة في Stay Gold (الولايات المتحدة)",
    photo: "/dp.png",
    bio: "أنا جنيد — أقود فريقًا هندسيًا أول يصمم ويبني أنظمة قابلة للتوسع من الألف إلى الياء. بفضل أكثر من 70 عملية تسليم ناجحة حول العالم، أجمع بين الاستراتيجية على مستوى تنفيذي والتنفيذ العملي المباشر في كل مشروع. بصفتي رئيس الهندسة في Stay Gold (الولايات المتحدة)، أقود التصميم المعماري عالي التوسع والتسليم — وفي Devnito، أقدّم لمنتجك نفس القيادة العليا وفريقًا مخصصًا. بلا طبقات وسيطة، وبلا تسليم لمهندسين مبتدئين — تعاون مباشر مع مهندسين أوائل يبنون للتوسع.",
    credentials: [
      "رئيس الهندسة",
      "مهندس حلول معماري",
      "فريق Full-Stack أول",
      "أكثر من 70 عملية تسليم ناجحة",
      "تسليم عالمي",
    ],
  },
};

export const navLinks: { key: "packages" | "work" | "proof" | "testimonials" | "contact"; href: string }[] = [
  { key: "packages", href: "#packages" },
  { key: "work", href: "#work" },
  { key: "proof", href: "#proof" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
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

export const packages: Record<Locale, PackageItem[]> = {
  en: [
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
  ],
  ar: [
    {
      id: "blueprint",
      title: "المخطط المعماري",
      tag: "أسبوعان",
      oneLiner: "الأساس التقني الذي تحتاجه للبناء بثقة.",
      bullets: [
        "تدقيق كامل للنظام ومراجعة الأداء",
        "تصميم بنية تحتية وقواعد بيانات قابلة للتوسع",
        "خارطة طريق تنفيذية تقنية لمدة 90 يومًا",
        "خطة لتحسين التكلفة والموارد",
      ],
      cta: "عرض تفاصيل المخطط",
      modal: {
        whoItsFor:
          "المؤسسون أو قادة المنتجات الذين يحتاجون استراتيجية تقنية واضحة قبل الالتزام بالبناء. مثالي لتحديث الأنظمة القديمة أو لضمان بناء منتج جديد قابل للتوسع منذ اليوم الأول.",
        deliverables: [
          "تدقيق معمّق للنظام وقاعدة الشيفرة البرمجية",
          "وثيقة توصيات معمارية شاملة",
          "تصميم مخطط قاعدة البيانات والبنية التحتية",
          "اختيار مُحسّن لمجموعة التقنيات",
          "خارطة طريق استراتيجية للتسليم على مراحل خلال 90 يومًا",
          "تقييم الأمان والتخفيف من المخاطر",
        ],
        timeline: "أسبوعان من الانطلاق وحتى التسليم النهائي.",
        whatINeed:
          "الوصول إلى قاعدة الشيفرة الحالية (إن وجدت)، وورشة اكتشاف مدتها 60 دقيقة، وأهداف العمل للعام القادم.",
        outcome:
          "خارطة طريق واضحة على مستوى الخبراء تزيل الغموض التقني. ستحصل على مخطط يمكن لأي فريق أول تنفيذه بكل وضوح.",
        pricing: "تبدأ من 2,500 دولار",
      },
    },
    {
      id: "build",
      title: "البناء / إعادة البناء",
      tag: "6–10 أسابيع",
      oneLiner: "نتولى مسؤولية منتجك بالكامل — من التصميم المعماري وحتى الإنتاج.",
      bullets: [
        "تسليم Full-Stack أول للويب والموبايل",
        "تصميم معماري جاهز للذكاء الاصطناعي وتكاملات مخصصة",
        "بنية تحتية وCI/CD بمستوى الإنتاج",
        "معايير هندسية تضع الأداء أولاً",
      ],
      cta: "عرض تفاصيل البناء",
      modal: {
        whoItsFor:
          "الفرق الجاهزة لإطلاق منتج جديد أو إعادة هيكلة نظام قديم. الأنسب للمؤسسين الذين يريدون منتجًا ليس 'منتهيًا' فقط، بل مصممًا هندسيًا للاستقرار والتوسع على المدى الطويل.",
        deliverables: [
          "تطبيقات ويب وموبايل جاهزة للإنتاج",
          "خطوط CI/CD آلية وإعداد سحابي",
          "تصميم معماري عالي الأداء لواجهات البرمجة وقواعد البيانات",
          "توثيق تقني شامل",
          "ضمان جودة صارم واختبارات ضغط للأداء",
          "دعم لمدة 30 يومًا بعد الإطلاق ومراقبة الاستقرار",
        ],
        timeline: "6–10 أسابيع. نسلّم على مراحل حتى ترى التقدم أسبوعيًا.",
        whatINeed:
          "متطلبات المنتج أو المخططات الأولية، وجهة تواصل مخصصة، واجتماعات استراتيجية أسبوعية.",
        outcome:
          "منتج عالي الأداء مبني على تصميم معماري حديث، يسلّمه فريقنا الهندسي الأول من الألف إلى الياء بمعايير شركات التقنية الكبرى.",
        pricing: "تبدأ مشاريع البناء بمستوى الإنتاج من 10,000+ دولار",
      },
    },
    {
      id: "partner",
      title: "مدير تقني جزئي / شريك",
      tag: "شهري",
      oneLiner: "قيادة استراتيجية وتنفيذ لمنتجات مصممة للتوسع.",
      bullets: [
        "قيادة هندسية واستراتيجية جزئية",
        "تصميم معماري، وأمان، ومراجعات للشيفرة البرمجية",
        "تسليم Full-Stack مع فريقي الأول",
        "خارطة طريق لتكامل الذكاء الاصطناعي والأتمتة",
      ],
      cta: "عرض تفاصيل الشراكة",
      modal: {
        whoItsFor:
          "الشركات الناشئة بعد مرحلة الـ MVP وشركات المنتجات التي تحتاج قيادة تقنية أولى وتنفيذًا دون تكلفة توظيف تنفيذي بدوام كامل تتجاوز 200,000 دولار.",
        deliverables: [
          "إشراف استراتيجي بمستوى المدير التقني وخارطة طريق تقنية",
          "تصميم معماري للنظام وتخطيط بنية تحتية عالية التوسع",
          "تخطيط سباقات (sprints) كل أسبوعين وإدارة الأولويات",
          "مراجعات صارمة للشيفرة وضوابط هندسية",
          "تكامل الذكاء الاصطناعي والأتمتة (n8n، نماذج اللغة الكبيرة، واجهات برمجة مخصصة)",
          "إدارة مباشرة لدورة حياة التطوير",
        ],
        timeline:
          "اشتراك شهري مستمر. يُنصح بالتزام لا يقل عن 3 أشهر لترسيخ الأنظمة والتوسع.",
        whatINeed:
          "وصول مباشر إلى المؤسس/أصحاب المصلحة، والوصول إلى قاعدة الشيفرة الحالية، ومقعد في أدوات التواصل لديكم (Slack/Discord).",
        outcome:
          "راحة بال تامة. يتوسع منتجك بشكل موثوق، ويتبع فريقك الهندسي معايير أولى، وتتفرغ بالكامل لنمو أعمالك.",
        pricing: "اشتراكات مخصصة تبدأ من 3,000 دولار شهريًا",
      },
    },
  ],
};

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

export const projects: Record<Locale, ProjectItem[]> = {
  en: [
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
      name: "Mecare — Healthcare ERP & Mobile Suite",
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
      name: "MenaJobs — Scalable Job Board Ecosystem",
      industry: "Recruitment / HR Tech",
      summary:
        "Architected a high-performance recruitment engine serving 1,800+ active listings. Focused on SEO-first delivery and sub-second faceted search.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "System Architecture"],
      image: "/menajobs.png",
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
  ],
  ar: [
    {
      id: "venture-operations-platform",
      name: "منصة عمليات استثمارية سرية",
      industry: "رأس المال الجريء / عمليات الاستثمار",
      summary:
        "منصة عمليات استثمارية لإدارة الشركات، وجهات الاتصال، والمستندات، والملاحظات، ونشاط خط الصفقات، ورؤية شاملة للمحفظة الاستثمارية ضمن نظام موحّد واحد.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      image: "/venture-operations-platform.png",
      modal: {
        overview:
          "منصة شاملة لإدارة العمليات الاستثمارية والمحافظ، بُنيت لتحل محل الأدوات المتفرقة بنظام مركزي لإدارة الشركات والعلاقات والمستندات والملاحظات الداخلية وسير عمل الاستثمار. يجمع المنتج بين قدرات شبيهة بأنظمة إدارة علاقات العملاء (CRM) وتتبع خط الصفقات ورؤية المحفظة، ضمن تصميم واجهة أمامية حديثة وقابلة للتوسع.",
        role: "قائد الواجهة الأمامية. عملت على النظام الحالي وعلى الأساس الجديد للواجهة الأمامية من الجيل القادم، مع التركيز على قابلية التوسع، واتساق الواجهة، وتحسين سير العمل التشغيلي المعقد عبر الشركات وجهات الاتصال والمستندات وعروض المحفظة.",
        keyDecisions: [
          "إعادة هيكلة الواجهة إلى مكونات معيارية قابلة لإعادة الاستخدام لدعم التوسع طويل المدى",
          "بناء أنماط متسقة عبر عروض القوائم والجداول ولوحات Kanban وصفحات التفاصيل",
          "إدخال Tailwind CSS وStorybook لترسيخ سير عمل لنظام تصميم قابل للتوسع",
          "تحسين هندسة المعلومات لسير العمل الاستثماري المعقد بما يشمل الشركات وجهات الاتصال والمستندات",
        ],
        results: [
          "تحسين اتساق الواجهة عبر وحدات متعددة من المنتج",
          "تسريع تطوير الميزات عبر بنية مكونات قابلة لإعادة الاستخدام",
          "تقليل التعقيد التشغيلي عبر أنماط تجربة مستخدم أوضح وأكثر تنظيمًا",
          "إرساء أساس قوي لتوسيع الواجهة الأمامية للمنتج",
        ],
        stack: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Storybook",
          "تصميم قائم على المكونات",
        ],
      },
    },
    {
      id: "ai-companion-mobile-app",
      name: "تطبيق رفيق ذكاء اصطناعي سري",
      industry: "الذكاء الاصطناعي / تطبيقات الموبايل الاستهلاكية",
      summary:
        "تطبيق موبايل لرفيق ذكاء اصطناعي يركّز على المحادثة، وذكاء العلاقات، وتدفقات التفاعل اللحظي، مُحسّن للأداء وتجربة مستخدم موبايل متقنة.",
      tags: ["React Native", "Expo", "Reanimated", "AI UX"],
      image: "/ai-companion-mobile-app.png",
      modal: {
        overview:
          "تطبيق موبايل لرفيق ذكاء اصطناعي صُمم لمساعدة المستخدمين على البقاء على تواصل، والحصول على اقتراحات، والتفاعل عبر تدفقات محادثة ذكية. جمع المنتج بين المراسلة المدعومة بالذكاء الاصطناعي، وتجارب مدركة لجهات الاتصال، وأنماط واجهة موبايل تفاعلية للغاية لخلق تجربة متقنة وجاهزة للإنتاج.",
        role: "مهندس واجهة أمامية. ركّزت على تجربة المستخدم على الموبايل، وتدفقات التفاعل في محادثات الذكاء الاصطناعي، وتجارب bottom sheet، وتحسين أداء الواجهة الأمامية للمساعدة في تجهيز التطبيق لإطلاق بارز.",
        keyDecisions: [
          "تحديث حزمة React Native وExpo لتحسين التوافق، وسرعة التطوير، وقابلية الصيانة طويلة المدى",
          "بناء وصقل تدفقات محادثة الذكاء الاصطناعي التفاعلية وbottom sheet بإيماءات سلسة ورسوم متحركة وسلوك نقاط التثبيت",
          "تحسين تجارب المراسلة والإشعارات وجهات الاتصال والملف الشخصي لتبدو متقنة وسريعة الاستجابة عبر التطبيق",
          "إعادة هيكلة بنية الواجهة الأمامية لتقليل التعقيد أمام تكاملات الذكاء الاصطناعي والخلفية البرمجية المستقبلية",
        ],
        results: [
          "تسليم تجربة رفيق ذكاء اصطناعي أكثر سلاسة وجاهزية للإنتاج على الموبايل",
          "تحسين الاستجابة والأداء الملموس عبر شاشات المحادثة والتغذية والشاشات التفاعلية",
          "تعزيز أساس الواجهة الأمامية للتوسع المستقبلي في الميزات والجاهزية للإطلاق",
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
      name: "Mecare — نظام ERP صحي وحزمة تطبيقات موبايل",
      industry: "الرعاية الصحية / التقنية الصحية",
      summary:
        "نظام حيوي لإدارة العيادات يُحوّل دورة حياة المريض بالكامل إلى رقمية. يتميز بمزامنة لحظية بين الطبيب والمريض عبر الويب والموبايل.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "React Native"],
      image: "/clinic-management.png",
      gallery: [
        "/ClinicSystem.png",
        "/ClinicSystem 2.png",
        "/ClinicSystem 3.png",
        "/ClinicSystem 4.png",
        { src: "/ClinicSystem mobile.png", mobile: true },
      ],
      modal: {
        overview:
          "منصة صحية متكاملة بُنيت لرقمنة العمليات السريرية — من استقبال المرضى إلى طوابير الأطباء اللحظية والوصفات الطبية الآلية.",
        role: "رئيس الهندسة. قدت التصميم المعماري متعدد المنصات، مع ضمان أن واجهة برمجة تطبيقات موحدة تخدم لوحة تحكم الويب وتطبيق الموبايل وبوابة الموظفين بأمان بيانات صارم.",
        keyDecisions: [
          "تطوير نظام لإدارة طابور المرضى اللحظي باستخدام WebSockets لتحديثات فورية",
          "اعتماد تصميم معماري معياري بـ NestJS لإتاحة تكاملات مستقبلية مع مزودي الرعاية الصحية",
          "تنفيذ توليد آمن لملفات PDF من جهة الخادم للسجلات الطبية والوصفات",
          "مشاركة طبقة واجهة برمجة التطبيقات NestJS بين تطبيقي الويب وReact Native لتقليل الازدواجية",
        ],
        results: [
          "تقليل زمن معالجة المرضى بنسبة 40% عبر سير عمل استقبال رقمي",
          "عيادة خالية تمامًا من الأوراق في الاستقبال والمؤشرات الحيوية وسجلات الزيارات",
          "نشر ناجح عبر الويب والموبايل بخلفية برمجية موحّدة",
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
      name: "منصة تجارة وعمليات السجلات",
      industry: "التجارة الإلكترونية / تقنية العمليات",
      summary:
        "منصة بمستوى الإنتاج تجمع بين التجارة الإلكترونية والتقديمات المنظمة وسير عمل الخدمات اللوجستية لإدارة دورة الحياة الكاملة لخدمات السجلات المادية.",
      tags: ["Next.js", "TypeScript", "Node.js", "Stripe", "AWS"],
      image: "/record-commerce-operations-platform.png",
      modal: {
        overview:
          "منصة Full-Stack بُنيت لعمل خدمي متخصص قائم على السجلات، تتيح للمستخدمين تقديم عناصر مادية (مثل أسطوانات الفينيل وأقراص CD) عبر سير عمل منظم. يتجاوز النظام التجارة الإلكترونية التقليدية بدمج تدفقات التقديم، والتسعير الديناميكي، وتتبع دورة الحياة، والعمليات التشغيلية الداخلية مثل المعالجة، والتصنيف، والتغليف، والشحن. يربط النظام تجارب واجهة العميل بعمليات لوجستية خلفية معقدة ضمن نظام موحّد.",
        role: "مهندس Full Stack (بتركيز على الواجهة الأمامية). عملت على سير العمل الأساسي للمنتج بما يشمل أنظمة التقديم، ومنطق السلة والدفع، وواجهات تتبع دورة الحياة، مع ضمان الاتساق بين تجارب العميل وأنظمة التشغيل الداخلية.",
        keyDecisions: [
          "تصميم معماري يقدّم التقديم أولًا بدلًا من نموذج التجارة الإلكترونية التقليدي القائم على SKU",
          "تنفيذ منطق تسعير ديناميكي يجمع الخدمات والشحن والإضافات ضمن تدفق دفع موحّد",
          "بناء سير عمل منظم يربط التقديمات والطلبات وحالات دورة الحياة الداخلية",
          "مواءمة تصميم الواجهة الأمامية مع الأنظمة الخلفية والتشغيلية للحفاظ على اتساق البيانات عبر المنصة",
        ],
        results: [
          "تسليم منصة مستقرة وجاهزة للإنتاج لعمل خدمي معقد",
          "توحيد سير العمل المتفرق في نظام واحد يغطي التقديم والدفع والمعالجة والتنفيذ",
          "تحسين الشفافية للمستخدمين مع تمكين عمليات داخلية فعالة",
          "إرساء أساس قابل للتوسع للنمو المستقبلي والأتمتة وتوسيع الميزات",
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
      name: "MenaJobs — منظومة لوحة وظائف قابلة للتوسع",
      industry: "التوظيف / تقنية الموارد البشرية",
      summary:
        "صممت محرك توظيف عالي الأداء يخدم أكثر من 1,800 إعلان وظيفي نشط. بتركيز على التسليم الذي يضع تحسين محركات البحث (SEO) أولًا وبحث مُصنّف بأقل من ثانية.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "System Architecture"],
      image: "/menajobs.png",
      modal: {
        overview:
          "منصة توظيف عالية الزيارات مصممة هندسيًا للتوسع. كان التحدي بناء نظام يتحمل استيعاب أعداد ضخمة من الوظائف مع الحفاظ على تفوق في تحسين محركات البحث وتجربة سلسة للمتقدمين.",
        role: "القائد التقني والمهندس المعماري. حددت تصميم النظام الأساسي، من منطق البحث المُصنّف إلى خطوط الاستيعاب الآلية، لضمان قدرة المنصة على التوسع دون تراجع في الأداء.",
        keyDecisions: [
          "تصميم محرك بحث مُصنّف لتصفية بأقل من ثانية عبر آلاف السجلات",
          "بناء خط استيعاب وظائف آلي لمزامنة بيانات ضخمة من مصادر متعددة",
          "الاستفادة من العرض من جهة الخادم في Next.js لتحقيق درجات Lighthouse تتجاوز 90 في تحسين محركات البحث للوصول العضوي",
          "تصميم مخطط PostgreSQL مُطبّع للحفاظ على سلامة البيانات عبر ملفات أصحاب عمل متعددي المستأجرين",
        ],
        results: [
          "نظام إنتاجي يدعم أكثر من 1,800 إعلان نشط دون أي توقف",
          "تحقيق أزمنة استجابة أقل من ثانية في عمليات بحث معقدة متعددة المرشحات",
          "أدى التصميم القائم على تحسين محركات البحث إلى استقطاب عضوي مرتفع للمتقدمين",
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
  ],
};

export const stats: Record<Locale, { value: string; label: string }[]> = {
  en: [
    { value: "70+", label: "Client Engagements" },
    { value: "Senior", label: "Engineering Team" },
    { value: "$10M+", label: "Scale Supported" },
    { value: "100%", label: "Founder-Led" },
    { value: "Global", label: "Tech Partner" },
  ],
  ar: [
    { value: "+70", label: "مشروع تعاون مع عملاء" },
    { value: "فريق أول", label: "فريق هندسي" },
    { value: "+10 مليون دولار", label: "حجم أعمال مدعوم" },
    { value: "100%", label: "بقيادة المؤسس" },
    { value: "عالمي", label: "شريك تقني" },
  ],
};

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

export const testimonials: Record<Locale, TestimonialItem[]> = {
  en: [
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
        "Junaid was a key partner in rebuilding the tech stack for my company. His work encompassed front and back-end functionality, and he was an excellent thought partner in thinking through the operational implications based on technical decision points.",
      name: "Jeremy Downs",
      title: "CEO, Audio Media Grading (USA)",
      avatar: "/testimonials/jeremy.jpeg",
    },
    {
      id: "t02",
      quote:
        "Junaid is one of the most reliable and capable engineers I’ve worked with. He delivers high-quality work, communicates clearly, and takes real ownership of projects. He’s fast, detail-oriented, and great at turning ideas into scalable solutions. Highly recommended.",
      name: "Vincent Higgins",
      title: "CEO, Stay Gold (USA)",
      avatar: "/testimonials/vincent.jpeg",
    },
    {
      id: "t03",
      quote:
        "Incredibly reliable team. Great communication, easy to work with, and everything is handled with precision and intention.",
      name: "Kelsey Glassman",
      title: "Owner, Graphic Design Agency (USA)",
      avatar: "/testimonials/kelsey.png",
    },
    {
      id: "t04",
      quote:
        "The communication was exceptional. Junaid is a real professional who deeply understands software engineering, far beyond others in the market. The final result exceeded all expectations.",
      name: "Ayoub",
      title: "CEO, Strategic Agency (Algeria)",
      avatar: "/testimonials/ayoub.jpeg",
    },
    {
      id: "t05",
      quote:
        "Very, very excited to have found Junaid. He is an incredible Developer and has so much talent — now trying to convince him to work full time for us. I seriously recommend him for any high-level project.",
      name: "Tayler",
      title: "Manager, Sandero Cloud (USA)",
    },
    {
      id: "t06",
      quote:
        "From my very first message to last, the communication was excellent. Junaid asked all the right questions, focusing on technical logic from the start. The code is clean, easy to maintain, and exactly what we needed to scale.",
      name: "Ahmed",
      title: "Founder, Agency (UK)",
    },
  ],
  ar: [
    {
      id: "t00",
      quote:
        "أنظمة قابلة للتوسع وعالية الأداء مع اهتمام كبير بالتفاصيل. الشيفرة البرمجية تطابق التصميم باستمرار مع حاجة ضئيلة لضمان الجودة.",
      name: "Drew Sima",
      title: "شريك مؤسس، Bread and Butter Designs (الولايات المتحدة)",
      avatar: "/testimonials/drew.png",
    },
    {
      id: "t01",
      quote:
        "كان جنيد شريكًا أساسيًا في إعادة بناء الحزمة التقنية لشركتي. شمل عمله وظائف الواجهة الأمامية والخلفية، وكان شريك تفكير ممتازًا في دراسة الانعكاسات التشغيلية المترتبة على القرارات التقنية.",
      name: "Jeremy Downs",
      title: "الرئيس التنفيذي، Audio Media Grading (الولايات المتحدة)",
      avatar: "/testimonials/jeremy.jpeg",
    },
    {
      id: "t02",
      quote:
        "جنيد واحد من أكثر المهندسين موثوقية وكفاءة الذين عملت معهم. يقدّم عملاً عالي الجودة، ويتواصل بوضوح، ويتحمل مسؤولية حقيقية عن المشاريع. سريع، ودقيق في التفاصيل، وبارع في تحويل الأفكار إلى حلول قابلة للتوسع. أوصي به بشدة.",
      name: "Vincent Higgins",
      title: "الرئيس التنفيذي، Stay Gold (الولايات المتحدة)",
      avatar: "/testimonials/vincent.jpeg",
    },
    {
      id: "t03",
      quote:
        "فريق موثوق بشكل استثنائي. تواصل ممتاز، وسهولة في العمل معه، وكل شيء يُدار بدقة ووضوح في الهدف.",
      name: "Kelsey Glassman",
      title: "مالكة، وكالة تصميم جرافيك (الولايات المتحدة)",
      avatar: "/testimonials/kelsey.png",
    },
    {
      id: "t04",
      quote:
        "كان التواصل استثنائيًا. جنيد محترف حقيقي يفهم هندسة البرمجيات بعمق يتجاوز الكثيرين في السوق. النتيجة النهائية فاقت كل التوقعات.",
      name: "Ayoub",
      title: "الرئيس التنفيذي، وكالة استراتيجية (الجزائر)",
      avatar: "/testimonials/ayoub.jpeg",
    },
    {
      id: "t05",
      quote:
        "متحمس جدًا جدًا لأنني وجدت جنيد. إنه مطور رائع ويملك موهبة كبيرة — والآن أحاول إقناعه بالعمل معنا بدوام كامل. أوصي به بجدية لأي مشروع رفيع المستوى.",
      name: "Tayler",
      title: "مدير، Sandero Cloud (الولايات المتحدة)",
    },
    {
      id: "t06",
      quote:
        "من أول رسالة إلى آخرها، كان التواصل ممتازًا. طرح جنيد كل الأسئلة الصحيحة، مركزًا على المنطق التقني منذ البداية. الشيفرة البرمجية نظيفة وسهلة الصيانة وبالضبط ما احتجناه للتوسع.",
      name: "Ahmed",
      title: "مؤسس، وكالة (المملكة المتحدة)",
    },
  ],
};

export interface VideoTestimonialItem {
  id: string;
  youtubeId: string;
  title: string;
  label: string;
}

export const videoTestimonials: Record<Locale, VideoTestimonialItem[]> = {
  en: [
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
  ],
  ar: [
    {
      id: "vt1",
      youtubeId: "drdJtIfbm-g",
      title: "من تصميم المنتج إلى التعاون في التطوير",
      label: "شهادة عميل",
    },
    {
      id: "vt2",
      youtubeId: "ew2Q1K_yZ6Q",
      title: "شراكة هندسية طويلة الأمد (أكثر من 5 سنوات، أكثر من 10 مشاريع)",
      label: "شهادة عميل",
    },
  ],
};
