export type ServiceSlug =
  | "recruitment"
  | "staffing"
  | "digital-marketing"
  | "web-software"
  | "support"
  | "projects"
  | "corporate";

export type Service = {
  slug: ServiceSlug;
  title: string;
  titleTe: string;
  short: string;
  shortTe: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "recruitment",
    title: "Technical Recruitment",
    titleTe: "టెక్నికల్ రిక్రూట్‌మెంట్",
    short: "Hire engineers who can debug production, not just pass quizzes.",
    shortTe: "క్విజ్‌లు కాకుండా ప్రొడక్షన్ డీబగ్ చేసే ఇంజనీర్లను నియమించండి.",
    description:
      "Role design, technical screens grounded in systems thinking, and hiring loops that respect both candidate time and bar quality.",
    outcomes: [
      "Scorecards aligned to real on-call and design skills",
      "Structured loops for backend, platform, and full-stack roles",
      "Optional bilingual screening for regional teams",
    ],
    icon: "person_search",
  },
  {
    slug: "staffing",
    title: "Engineering Staffing",
    titleTe: "ఇంజనీరింగ్ స్టాఫింగ్",
    short: "Embedded talent for sprints, platforms, and reliability work.",
    shortTe: "స్ప్రింట్‌లు, ప్లాట్‌ఫామ్‌లు, రిలయబిలిటీ పనికి ఎంబెడెడ్ టాలెంట్.",
    description:
      "Contract and project staffing with engineers who ship documentation, tests, and operable systems — not just tickets.",
    outcomes: [
      "Short-list within days for common stacks",
      "Clear SOW and ramp plans",
      "Knowledge transfer built into every engagement",
    ],
    icon: "groups",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    titleTe: "డిజిటల్ మార్కెటింగ్",
    short: "Growth campaigns that speak engineer and buyer language.",
    shortTe: "ఇంజనీర్ మరియు బయ్యర్ భాషలో గ్రోత్ క్యాంపెయిన్‌లు.",
    description:
      "Content, SEO, and paid programs for education and B2B tech brands — measured on qualified pipeline, not vanity metrics.",
    outcomes: [
      "Technical content systems and landing pages",
      "Campaign ops with honest attribution",
      "Telugu + English audience plays where relevant",
    ],
    icon: "campaign",
  },
  {
    slug: "web-software",
    title: "Web & Software Delivery",
    titleTe: "వెబ్ & సాఫ్ట్‌వేర్ డెలివరీ",
    short: "Product engineering with production-grade defaults.",
    shortTe: "ప్రొడక్షన్-గ్రేడ్ డిఫాల్ట్‌లతో ప్రొడక్ట్ ఇంజనీరింగ్.",
    description:
      "From marketing sites to internal tools and APIs — Next.js, TypeScript, and operable backends with observability from day one.",
    outcomes: [
      "Discovery → MVP → harden cycles",
      "Accessibility and performance budgets",
      "Handoff docs your team can own",
    ],
    icon: "code",
  },
  {
    slug: "support",
    title: "Support & Reliability",
    titleTe: "సపోర్ట్ & రిలయబిలిటీ",
    short: "On-call posture, runbooks, and customer-facing support design.",
    shortTe: "ఆన్-కాల్, రన్‌బుక్‌లు, కస్టమర్ సపోర్ట్ డిజైన్.",
    description:
      "We help you define SLOs, escalation paths, and support UX so incidents become learning — not theater.",
    outcomes: [
      "Runbook and status-page patterns",
      "Support triage playbooks",
      "Training for first-line responders",
    ],
    icon: "support_agent",
  },
  {
    slug: "projects",
    title: "Fixed-Scope Projects",
    titleTe: "ఫిక్స్‌డ్-స్కోప్ ప్రాజెక్ట్‌లు",
    short: "Time-boxed builds with crisp acceptance criteria.",
    shortTe: "స్పష్టమైన అంగీకార ప్రమాణాలతో టైమ్-బాక్స్‌డ్ బిల్డ్‌లు.",
    description:
      "Migrations, visualizers, internal portals, and training platforms — scoped tightly, delivered with demos you can click.",
    outcomes: [
      "Written scope and exit criteria",
      "Weekly demos",
      "Optional retainers after launch",
    ],
    icon: "task_alt",
  },
  {
    slug: "corporate",
    title: "Corporate Learning",
    titleTe: "కార్పొరేట్ లెర్నింగ్",
    short: "Private cohorts for teams that need systems depth fast.",
    shortTe: "సిస్టమ్స్ లోతు అవసరమైన టీమ్‌ల కోసం ప్రైవేట్ కోహోర్ట్‌లు.",
    description:
      "Custom workshops and multi-week tracks for platform, SRE, and backend orgs — including bilingual delivery when needed.",
    outcomes: [
      "Curriculum mapped to your stack",
      "Lab environments and assessments",
      "Manager-facing progress reports",
    ],
    icon: "corporate_fare",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
