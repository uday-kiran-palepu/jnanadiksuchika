export type CourseCategoryId =
  | "all"
  | "technical"
  | "ai"
  | "cloud"
  | "design"
  | "leadership"
  | "aptitude"
  | "gate";

export type CourseLevelId =
  | "all"
  | "foundational"
  | "intermediate"
  | "advanced";

export const categoryPills: {
  id: CourseCategoryId;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "All Courses", count: 28 },
  { id: "technical", label: "Technical", count: 11 },
  { id: "ai", label: "AI & Productivity", count: 5 },
  { id: "cloud", label: "Cloud & Infrastructure", count: 4 },
  { id: "design", label: "Design & UX Systems", count: 3 },
  { id: "leadership", label: "Professional & Leadership", count: 2 },
  { id: "aptitude", label: "Aptitude & Reasoning", count: 2 },
  { id: "gate", label: "Competitive Exams & GATE CS", count: 1 },
];

export type CatalogCourse = {
  id: string;
  slug: string;
  category: Exclude<CourseCategoryId, "all">;
  level: Exclude<CourseLevelId, "all">;
  trackLabel: string;
  levelBadge: string;
  levelBadgeClass: string;
  teluguTitle: string;
  subtitle: string;
  title: string;
  schedule: string;
  description: string;
  rating: string;
  ratingCount: string;
  instructor: string;
  price: string;
  priceStrike?: string;
  discountLabel?: string;
  priceNote: string;
  freeDiagnostic: boolean;
  imageAlt: string;
};

export const catalogCourses: CatalogCourse[] = [
  {
    id: "go-raft",
    slug: "distributed-systems-go-raft",
    category: "technical",
    level: "advanced",
    trackLabel: "Technical • Systems",
    levelBadge: "Advanced",
    levelBadgeClass: "bg-secondary-container text-on-tertiary",
    teluguTitle: "గో మరియు రాఫ్ట్ తో డిస్ట్రిబ్యూటెడ్ ఆర్కిటెక్చర్",
    subtitle: "Consensus & Partition Tolerance",
    title: "Distributed Systems Architecture with Go & Raft",
    schedule: "10 Weeks • 40 Hours Self-Paced + 4 Live Defenses",
    description:
      "Implement a fault-tolerant KV store surviving partition splits. RFC 679 compliant quorum engines and peer state machines.",
    rating: "4.9",
    ratingCount: "1,240 engineers",
    instructor: "By Venkatesh Rao",
    price: "₹7,999",
    priceStrike: "₹11,999",
    discountLabel: "33% OFF",
    priceNote: "Free Diagnostic Tier Available",
    freeDiagnostic: true,
    imageAlt: "Distributed consensus nodes engineering illustration",
  },
  {
    id: "ebpf",
    slug: "linux-kernel-ebpf-observability",
    category: "technical",
    level: "advanced",
    trackLabel: "Technical • Kernel",
    levelBadge: "Advanced",
    levelBadgeClass: "bg-secondary-container text-on-tertiary",
    teluguTitle: "లైనక్స్ కెర్నల్ మరియు eBPF అబ్జర్వబిలిటీ",
    subtitle: "Bare-Metal Root Tracing",
    title: "Linux Kernel Internals, eBPF & Observability",
    schedule: "8 Weeks • Bare-Metal Labs Included",
    description:
      "Hook tracepoints, inspect socket drops, and generate CPU flame graphs without adding kernel crash panics.",
    rating: "4.95",
    ratingCount: "880 engineers",
    instructor: "By Priya Ramaswamy",
    price: "₹8,499",
    priceStrike: "₹12,499",
    priceNote: "Bilingual Debugging Sessions",
    freeDiagnostic: false,
    imageAlt: "Kernel telemetry and eBPF flame graphs",
  },
  {
    id: "llvm",
    slug: "compiler-construction-llvm-cpp",
    category: "technical",
    level: "advanced",
    trackLabel: "Technical • Compilers",
    levelBadge: "Intermediate / Adv",
    levelBadgeClass: "bg-surface-container-high text-primary",
    teluguTitle: "కంపైలర్ కన్‌స్ట్రక్షన్ మరియు LLVM బైట్‌కోడ్",
    subtitle: "JIT Pipeline Engineering",
    title: "Compiler Construction & LLVM Bytecode in C++",
    schedule: "12 Weeks • 48 Hours Hands-On",
    description:
      "Build a custom lexer, AST, optimization passes, and a JIT execution pipeline targeting x86-64 architectures.",
    rating: "4.8",
    ratingCount: "510 engineers",
    instructor: "Dr. K. Radhakrishna",
    price: "₹6,999",
    priceStrike: "₹9,999",
    priceNote: "Free Diagnostic Tier Available",
    freeDiagnostic: true,
    imageAlt: "Compiler syntax tree and LLVM bytecode",
  },
  {
    id: "llm",
    slug: "production-ml-llm-quantization",
    category: "ai",
    level: "intermediate",
    trackLabel: "AI & Productivity",
    levelBadge: "Intermediate",
    levelBadgeClass: "bg-surface-container-high text-primary",
    teluguTitle: "ప్రొడక్షన్ మెషిన్ లెర్నింగ్ మరియు LLM క్వాంటైజేషన్",
    subtitle: "vLLM & AWQ Optimization",
    title: "Production ML & LLM Quantization at Scale",
    schedule: "6 Weeks • GPU Cloud Notebooks",
    description:
      "Fine-tune and quantize Llama models for 4-bit edge inference with vLLM, TensorRT-LLM, and memory paged attention.",
    rating: "4.9",
    ratingCount: "1,420 engineers",
    instructor: "Sneha Ananth (Staff ML)",
    price: "₹9,499",
    priceStrike: "₹14,999",
    priceNote: "Free Diagnostic Tier Available",
    freeDiagnostic: true,
    imageAlt: "GPU cluster LLM quantization visualization",
  },
  {
    id: "design-wasm",
    slug: "enterprise-design-systems-wasm",
    category: "design",
    level: "intermediate",
    trackLabel: "Design & UX Systems",
    levelBadge: "Intermediate",
    levelBadgeClass: "bg-surface-container-high text-primary",
    teluguTitle: "ఎంటర్‌ప్రైజ్ డిజైన్ సిస్టమ్స్ మరియు వెబ్‌అసెంబ్లీ",
    subtitle: "Mathematical Token Engines",
    title: "Enterprise Design Systems & WebAssembly Runtimes",
    schedule: "6 Weeks • Figma to Rust/Wasm",
    description:
      "Build mathematical design token engines and high-fps interactive canvas components embedded into live web runtimes.",
    rating: "4.85",
    ratingCount: "640 designers",
    instructor: "Divya Kulkarni",
    price: "₹5,999",
    priceStrike: "₹8,999",
    priceNote: "Free Diagnostic Tier Available",
    freeDiagnostic: true,
    imageAlt: "Design tokens and WebAssembly modules",
  },
  {
    id: "gate-cs",
    slug: "algorithmic-problem-solving-gate-cs",
    category: "gate",
    level: "foundational",
    trackLabel: "GATE CS • Algorithms",
    levelBadge: "Foundational",
    levelBadgeClass: "bg-primary-fixed text-on-primary-fixed",
    teluguTitle: "ఆల్గోరిథమిక్ సమస్యల పరిష్కారం & గేట్ సిలబస్",
    subtitle: "Graph Theory & Architecture",
    title: "Algorithmic Problem Solving & GATE CS Core",
    schedule: "16 Weeks • 120 Hours Total",
    description:
      "Master master theorem proofs, dynamic programming state formulation, and pipeline CPU hazards.",
    rating: "4.9",
    ratingCount: "2,100 students",
    instructor: "K. Chaitanya (AIR 14)",
    price: "₹4,999",
    priceStrike: "₹7,999",
    priceNote: "Free Diagnostic Tier Available",
    freeDiagnostic: true,
    imageAlt: "Algorithm and GATE CS visualization",
  },
];

export const TOTAL_CATALOG_COUNT = 28;
