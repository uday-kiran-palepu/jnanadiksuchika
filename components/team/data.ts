export type CoreTeamMember = {
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
};

export type AssociateMentor = {
  id: string;
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
};

export const coreTeamMembers: CoreTeamMember[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export const associateMentors: AssociateMentor[] = [
  {
    id: "harsha",
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
  },
  {
    id: "sneha",
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
  },
  {
    id: "chaitanya",
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
  },
  {
    id: "ananya",
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
  },
];

export const domainFilters = [
  { id: "all", label: "All Domains (34)" },
  { id: "systems", label: "Systems & Web Dev (9)" },
  { id: "ai", label: "AI & Machine Learning (7)" },
  { id: "aptitude", label: "Aptitude & Algorithmic Reasoning (5)" },
  { id: "cloud", label: "Cloud & SRE (6)" },
  { id: "uiux", label: "UI/UX & Product Design (4)" },
  { id: "gate", label: "Competitive Exams & GATE CS (3)" },
] as const;

export type DomainFilterId = (typeof domainFilters)[number]["id"];
export type FormatFilter = "all" | "online" | "inperson";
