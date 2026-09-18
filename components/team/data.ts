export type CoreTeamMember = {
  id: string;
  slug: string;
  name: string;
  badge: string;
  experience: string;
  title: string;
  role: string;
  bio: string;
  tags: string[];
  labTrack: string;
  hours: string;
  alt: string;
  focus: string[];
  teaching: string[];
};

export type AssociateMentor = {
  id: string;
  slug: string;
  name: string;
  role: string;
  fellowType: string;
  format: "online" | "inperson";
  formatLabel: string;
  formatIcon: "videocam" | "apartment";
  domains: string[];
  bio: string;
  tags: string[];
  nextSession: string;
  alt: string;
  focus: string[];
};

export const coreTeamMembers: CoreTeamMember[] = [
  {
    id: "murthy",
    slug: "dr-s-k-murthy",
    name: "Dr. S. K. Murthy",
    badge: "Full-Time • Hyderabad Lab",
    experience: "FOUNDING DEAN • 24 YRS PRODUCTION EXP",
    title: "Dr. S. K. Murthy",
    role: "Lead Systems Architect & Kernel Chair",
    bio:
      "Former ISRO Satellite Control Center mission specialist. Authored critical real-time operating kernels and telemetry drivers. Guides low-level C, Rust runtime structures, and bare-metal deterministic execution.",
    tags: ["#RealTimeKernels", "#RustSystems", "#ISROTelemetry"],
    labTrack: "OS Kernel & Bare-Metal Rust",
    hours: "Weekly Office Hours: Mon-Fri",
    alt: "Dr. S. K. Murthy in avionics laboratory",
    focus: [
      "Real-time kernels and deterministic scheduling",
      "Telemetry driver craft for constrained environments",
      "Rust ownership patterns for systems code",
    ],
    teaching: [
      "Cohort 04: Systems Programming & Distributed Storage",
      "Office hours for kernel and embedded tracks",
    ],
  },
  {
    id: "venkatesh",
    slug: "venkatesh-rao",
    name: "Venkatesh Rao",
    badge: "Full-Time • Hyderabad Lab",
    experience: "INFRASTRUCTURE FELLOW • 14 YRS EXP",
    title: "Venkatesh Rao",
    role: "Principal Distributed Infrastructure Lead",
    bio:
      "Pioneered bilingual Telugu technical pedagogy for distributed networking. Designed BGP mesh fabrics handling 40Gbps+ routing for telecom operators and high-concurrency Go engines.",
    tags: ["#GolangScale", "#BGPProtocols", "#TeluguTechPedagogy"],
    labTrack: "Distributed Networking in Go",
    hours: "Weekly Lab Sprint: Tue-Sat",
    alt: "Venkatesh Rao at glass whiteboard",
    focus: [
      "Go services under high concurrency",
      "Consensus and partition drills",
      "Telugu-first mental models for networking",
    ],
    teaching: [
      "Distributed Systems Architecture with Go & Raft",
      "Cohort 02: Full-Stack Distributed Systems",
    ],
  },
  {
    id: "priya",
    slug: "priya-ramaswamy",
    name: "Priya Ramaswamy",
    badge: "Full-Time • Bengaluru Lab",
    experience: "LAB DIRECTOR • 12 YRS EXP",
    title: "Priya Ramaswamy",
    role: "Senior Staff SRE & Chaos Engineering Lead",
    bio:
      "Spearheaded zero-downtime multi-region financial ledger migrations at scale. Specializes in eBPF dynamic kernel tracing, latency mitigation, and automated chaos experiments.",
    tags: ["#eBPF", "#ChaosEngineering", "#ZeroDowntime"],
    labTrack: "eBPF Telemetry & Chaos Labs",
    hours: "Weekly SRE Clinic: Wed & Sat",
    alt: "Priya Ramaswamy in cloud lab",
    focus: [
      "eBPF observability in production fleets",
      "Chaos experiments with rollback discipline",
      "Multi-region migration playbooks",
    ],
    teaching: [
      "Linux Kernel Internals, eBPF & Observability",
      "Cohort 03: Linux Kernel Diagnostics & eBPF",
    ],
  },
  {
    id: "aarav",
    slug: "aarav-sandilya",
    name: "Aarav Sandilya",
    badge: "Full-Time • Hyderabad Lab",
    experience: "HARDWARE CHAIR • 10 YRS EXP",
    title: "Aarav Sandilya",
    role: "Head of Hardware Testbenches & Embedded Systems",
    bio:
      "Silicon architect specializing in RISC-V open architecture synthesis, custom FPGA accelerators, and hard real-time sensor loops. Leads our physical silicon bring-up benches.",
    tags: ["#RISCV", "#FPGA", "#BareMetalC"],
    labTrack: "RISC-V Silicon & FPGA Synthesis",
    hours: "Silicon Desk: Mon & Thu",
    alt: "Aarav Sandilya with RISC-V PCB",
    focus: [
      "RISC-V softcore synthesis",
      "FPGA bring-up and UART debug",
      "Hardware/software co-design for labs",
    ],
    teaching: ["Weekend Intensive: RISC-V Hardware Synthesis & FPGA Bring-up"],
  },
  {
    id: "divya",
    slug: "divya-kulkarni",
    name: "Divya Kulkarni",
    badge: "Full-Time • Bengaluru Lab",
    experience: "PRODUCT ARCHITECT • 11 YRS EXP",
    title: "Divya Kulkarni",
    role: "Principal UX Systems & WebAssembly Lead",
    bio:
      "Bridges native compilation and browser runtimes via WebAssembly (Wasm). Author of high-throughput canvas rendering engines and strictly verified accessible component systems.",
    tags: ["#WebAssembly", "#DesignSystems", "#WasmDOM"],
    labTrack: "Wasm Runtimes & Canvas UX",
    hours: "Studio Critique: Fridays",
    alt: "Divya Kulkarni reviewing design systems",
    focus: [
      "Design token engines as code",
      "Accessible component contracts",
      "Wasm canvas performance budgets",
    ],
    teaching: ["Enterprise Design Systems & WebAssembly Runtimes"],
  },
  {
    id: "radhakrishna",
    slug: "dr-k-radhakrishna",
    name: "Dr. K. Radhakrishna",
    badge: "Full-Time • Hyderabad Lab",
    experience: "THEORY FELLOW • 18 YRS EXP",
    title: "Dr. K. Radhakrishna",
    role: "Academic Director & Compiler Theory Lead",
    bio:
      "Specialist in LLVM Intermediate Representation (IR), formal type theory verification, and code generation optimizations. Former visiting fellow at Indian Institute of Science.",
    tags: ["#LLVM", "#FormalVerification", "#CompilerIR"],
    labTrack: "LLVM Compilers & Type Theory",
    hours: "Theory Hours: Saturdays",
    alt: "Dr. K. Radhakrishna at chalkboard",
    focus: [
      "LLVM IR and optimization legality",
      "Type systems and formal intuition",
      "Compiler construction pedagogy",
    ],
    teaching: ["Compiler Construction & LLVM Bytecode in C++"],
  },
];

export const associateMentors: AssociateMentor[] = [
  {
    id: "harsha",
    slug: "harshavardhan-reddy",
    name: "Harshavardhan Reddy",
    role: "Staff SRE @ Stripe",
    fellowType: "Part-Time Fellow",
    format: "online",
    formatLabel: "Online Masterclass Series",
    formatIcon: "videocam",
    domains: ["cloud", "systems"],
    bio:
      "Conducts deep-dive weekend labs into high-throughput payment transaction pipelines, distributed Kafka partitions, and multi-cloud database consistency.",
    tags: ["#Kafka", "#PostgresHA", "#SystemDesign"],
    nextSession: "Next Guest Session: July 12",
    alt: "Harshavardhan Reddy portrait",
    focus: [
      "Payment pipeline reliability patterns",
      "Kafka partition strategy under load",
      "Postgres HA failure drills",
    ],
  },
  {
    id: "sneha",
    slug: "sneha-ananth",
    name: "Sneha Ananth",
    role: "Staff ML Engineer @ Databricks",
    fellowType: "Part-Time Fellow",
    format: "online",
    formatLabel: "Online Masterclass Series",
    formatIcon: "videocam",
    domains: ["ai"],
    bio:
      "Specialist in quantizing open-weights Large Language Models for low-power edge deployment and fine-tuning domain-specific Telugu NLP encoders.",
    tags: ["#LLMQuantization", "#TeluguNLP", "#PyTorch"],
    nextSession: "Next Guest Session: June 28",
    alt: "Sneha Ananth portrait",
    focus: [
      "LLM quantization for edge budgets",
      "Serving metrics that matter",
      "Telugu NLP fine-tuning labs",
    ],
  },
  {
    id: "chaitanya",
    slug: "k-chaitanya-varma",
    name: "K. Chaitanya Varma",
    role: "GATE CS AIR 14 & Competitive Lead",
    fellowType: "Part-Time Fellow",
    format: "inperson",
    formatLabel: "In-Person Weekend Node (Hyderabad)",
    formatIcon: "apartment",
    domains: ["aptitude", "gate"],
    bio:
      "Deconstructs dynamic programming recurrence relations and algorithmic graph proof strategies into rapid intuitive Telugu mental models.",
    tags: ["#GraphTheory", "#DynamicProgramming", "#GateCS"],
    nextSession: "Next Lab Sprint: July 05",
    alt: "K. Chaitanya Varma portrait",
    focus: [
      "GATE systems revision sprints",
      "DP and graph formulation clinics",
      "Bilingual exam explanation drills",
    ],
  },
  {
    id: "ananya",
    slug: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Lead Product Designer @ Razorpay",
    fellowType: "Part-Time Fellow",
    format: "online",
    formatLabel: "Online Masterclass Series",
    formatIcon: "videocam",
    domains: ["uiux"],
    bio:
      "Teaches tokenized design systems, design-to-code pipelines in React, and strict mathematical spatial harmony for complex enterprise web applications.",
    tags: ["#DesignTokens", "#WCAG22", "#SpatialGrids"],
    nextSession: "Next Guest Session: July 19",
    alt: "Ananya Deshmukh portrait",
    focus: [
      "Tokenized design systems",
      "Design-to-code pipelines",
      "WCAG-backed component reviews",
    ],
  },
];

export const domainFilters = [
  { id: "all", label: "All Domains (10)" },
  { id: "systems", label: "Systems & Web Dev" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "aptitude", label: "Aptitude & Algorithmic Reasoning" },
  { id: "cloud", label: "Cloud & SRE" },
  { id: "uiux", label: "UI/UX & Product Design" },
  { id: "gate", label: "Competitive Exams & GATE CS" },
] as const;

export type DomainFilterId = (typeof domainFilters)[number]["id"];
export type FormatFilter = "all" | "online" | "inperson";

export function getTeamMember(slug: string) {
  const core = coreTeamMembers.find((m) => m.slug === slug);
  if (core) return { kind: "core" as const, member: core };
  const associate = associateMentors.find((m) => m.slug === slug);
  if (associate) return { kind: "associate" as const, member: associate };
  return undefined;
}

export const teamSlugs = [
  ...coreTeamMembers.map((m) => m.slug),
  ...associateMentors.map((m) => m.slug),
];
