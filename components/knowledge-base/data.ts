export type KbCategoryId = "all" | "help" | "gate" | "career" | "telugu";

export const kbCategoryFilters: {
  id: KbCategoryId;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "All Resources", count: 42 },
  { id: "help", label: "Help & Platform Guides", count: 18 },
  { id: "gate", label: "GATE & Competitive Exams", count: 9 },
  { id: "career", label: "Systems Career Roadmaps", count: 8 },
  { id: "telugu", label: "Telugu Mental Models", count: 7 },
];

export type KbArticle = {
  id: string;
  slug?: string;
  category: Exclude<KbCategoryId, "all">;
  badge: string;
  readMinutes: number;
  topic: string;
  title: string;
  titleTe: string;
  excerpt: string;
  authorIcon: string;
  authorMeta: string;
};

export const RAFT_GUIDE_SLUG = "how-to-use-raft-consensus-split-brain-visualizer";

export const kbArticleSlugs = [RAFT_GUIDE_SLUG];

export const kbArticles: KbArticle[] = [
  {
    id: "raft-guide",
    slug: RAFT_GUIDE_SLUG,
    category: "help",
    badge: "Platform Guides • Interactive Tools",
    readMinutes: 8,
    topic: "WAL Logs & Consensus",
    title: "How to use the client-side Raft Consensus & Split-Brain Visualizer",
    titleTe: "రాఫ్ట్ కన్సెన్సస్ మరియు స్ప్లిట్-బ్రెయిన్ విజువలైజర్ వాడే విధానం",
    excerpt:
      "Step-by-step telemetry drill showing how to trigger artificial network splits, observe term elections, scrutinize WAL commits, and inject asymmetric partitions in your browser.",
    authorIcon: "verified_user",
    authorMeta: "Arch Team • Oct 2024",
  },
  {
    id: "enrollment",
    category: "help",
    badge: "Help Guides • Diagnostic SOP",
    readMinutes: 11,
    topic: "Evaluation & Credentials",
    title: "End-to-End Enrollment & Diagnostic Testbench Process",
    titleTe: "ఎన్‌రోల్‌మెంట్ మరియు డయాగ్నస్టిక్ టెస్ట్‌బెంచ్ పూర్తి మార్గదర్శి",
    excerpt:
      "Walkthrough of our automated entrance diagnostic test, Git pull-request review bot, SSH key provisioning, and workspace setup.",
    authorIcon: "developer_mode",
    authorMeta: "Systems Ops • Nov 2024",
  },
  {
    id: "lab-reservation",
    category: "help",
    badge: "Platform Guides • Bare-Metal",
    readMinutes: 6,
    topic: "Hyderabad Hub • Hardware Reservation",
    title: "Registering for Hybrid Cohorts & Bare-Metal Lab Station Reservation",
    titleTe: "హైబ్రిడ్ కోహోర్ట్స్ మరియు బేర్-మెటల్ ల్యాబ్ స్టేషన్ రిజర్వేషన్ గైడ్",
    excerpt:
      "Reserving rack space, remote 4K serial consoles, and on-premise hardware benches at our Hyderabad Innovation Node.",
    authorIcon: "dns",
    authorMeta: "Infra Lab • Dec 2024",
  },
  {
    id: "ebpf-kernels",
    category: "help",
    badge: "Help Guides • Kernel eBPF",
    readMinutes: 14,
    topic: "Browser Sandbox • XDP Bytecode",
    title: "Setting up Ephemeral Linux Kernels with eBPF Tracepoints",
    titleTe: "eBPF ట్రేస్‌పాయింట్లతో ఎఫెమెరల్ లినక్స్ కెర్నల్ సెటప్",
    excerpt:
      "How our WebAssembly/KVM emulation container executes custom C programs and eBPF maps for real-time packet tracing in the browser.",
    authorIcon: "memory",
    authorMeta: "Kernel Fellow • Jan 2025",
  },
  {
    id: "gate-blueprint",
    category: "gate",
    badge: "GATE • Competitive Exams",
    readMinutes: 22,
    topic: "GATE CS Systems Core",
    title: "GATE Computer Science Deep-Systems Revision Blueprint",
    titleTe: "గేట్ కంప్యూటర్ సైన్స్: డీప్-సిస్టమ్స్ రివిజన్ బ్లూప్రింట్",
    excerpt:
      "Operating Systems, TCP/IP flow control, and serializability with bilingual Telugu conceptual breakdowns.",
    authorIcon: "auto_stories",
    authorMeta: "AIR 12 Contributor • Dec 2024",
  },
  {
    id: "tier23-career",
    category: "career",
    badge: "Career Roadmap • Systems",
    readMinutes: 15,
    topic: "Engineering Mobility",
    title: "Transitioning from Tier-2/3 Engineering Colleges to Systems & Infrastructure",
    titleTe: "టైర్-2/3 కాలేజీల నుండి సిస్టమ్స్ ఇంజనీరింగ్ కెరీర్ మార్గం",
    excerpt:
      "Move past boilerplate web development into Linux networking, async I/O, socket programming, and open source contributions.",
    authorIcon: "military_tech",
    authorMeta: "Staff Infra Lead • Jan 2025",
  },
  {
    id: "telugu-glossary",
    category: "telugu",
    badge: "Telugu Mental Models",
    readMinutes: 18,
    topic: "Arch Dictionary • 500+ Concepts",
    title: "Telugu Systems Mental Models: Visual Glossary of 500+ Architecture Terms",
    titleTe: "తెలుగు సిస్టమ్స్ మెంటల్ మోడల్స్: 500+ పదాల సమగ్ర నిఘంటువు",
    excerpt:
      "Quorum, Jitter, LSM-Trees, Two-Phase Commit, and cache coherency through Telugu analogies.",
    authorIcon: "menu_book",
    authorMeta: "Faculty Board • Updated Daily",
  },
  {
    id: "isro-barc",
    category: "gate",
    badge: "Exam Preparation • ISRO / BARC",
    readMinutes: 19,
    topic: "Aerospace Computing • Fault Tolerance",
    title: "ISRO & BARC Scientist/Engineer SC Technical Interview Preparation Strategy",
    titleTe: "ఇస్రో & బార్క్ సైంటిస్ట్ టెక్నికల్ ఇంటర్వ్యూ ప్రిపరేషన్ విధానం",
    excerpt:
      "Mission-critical telemetry, radiation-hardened memory, and RTOS scheduling strategies for government research boards.",
    authorIcon: "rocket_launch",
    authorMeta: "Ex-ISRO Fellow • Nov 2024",
  },
  {
    id: "salary-rubric",
    category: "career",
    badge: "Career Roadmap • Compensation",
    readMinutes: 13,
    topic: "IC Ladder • SDE-1 to Principal",
    title: "Systems Engineer Salary & Staff-Level Progression Rubric (India & Global Remote)",
    titleTe: "సిస్టమ్స్ ఇంజనీర్ సాలరీ మరియు స్టాఫ్-లెవల్ ప్రమోషన్ సూత్రాలు",
    excerpt:
      "Transparent benchmarks across Hyderabad, Bengaluru, and US remote roles with reliability competency expectations.",
    authorIcon: "payments",
    authorMeta: "Industry Panel • Dec 2024",
  },
];
