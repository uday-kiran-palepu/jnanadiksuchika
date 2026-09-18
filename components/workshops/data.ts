export type TrackFilterId =
  | "all"
  | "distributed"
  | "kernel"
  | "cloud"
  | "wasm"
  | "riscv";

export const trackFilters: { id: TrackFilterId; label: string }[] = [
  { id: "all", label: "All Tracks (4)" },
  { id: "distributed", label: "Distributed Systems (2)" },
  { id: "kernel", label: "Linux & Kernel Internals (1)" },
  { id: "cloud", label: "Cloud, K8s & SRE (0)" },
  { id: "wasm", label: "WebAssembly & High-Perf UI (0)" },
  { id: "riscv", label: "Embedded & RISC-V (1)" },
];

export type DeliveryMode = "all" | "offline" | "live";

export type WorkshopCohort = {
  id: string;
  slug: string;
  deliveryBadge: string;
  deliveryIcon: string;
  urgencyBadge: string;
  urgencyIcon: string;
  urgencyStyle: "error" | "secondary" | "default";
  title: string;
  dateRange: string;
  pace: string;
  mentorInitial: string;
  mentorName: string;
  mentorBio: string;
  modules: string[];
  envNote: string;
  envIcon: string;
  envTag: string;
  price: string;
  priceStrike?: string;
  priceNote: string;
  secondaryLinkLabel: string;
};

export const workshopCohorts: WorkshopCohort[] = [
  {
    id: "cohort-04",
    slug: "systems-programming-distributed-storage",
    deliveryBadge: "HYBRID NODE • HYDERABAD & ONLINE",
    deliveryIcon: "location_city",
    urgencyBadge: "11 SEATS LEFT • CLOSING MAY 12",
    urgencyIcon: "timer",
    urgencyStyle: "error",
    title: "Cohort 04: Systems Programming & Distributed Storage",
    dateRange: "May 18 – June 29, 2025",
    pace: "6 Weeks (Sat & Sun • 4 hrs/day)",
    mentorInitial: "M",
    mentorName: "Dr. S. K. Murthy",
    mentorBio: "ex-ISRO Principal OS Architect • 24y Aerospace Systems",
    modules: [
      "Rust Memory Safety & Concurrency",
      "Raft Consensus Engine From Scratch",
      "LSM-Tree Key-Value Storage Architecture",
      "Custom epoll Non-Blocking Event Loops",
    ],
    envNote:
      "Dedicated bare-metal Ubuntu 24.04 instance per engineer with root SSH access.",
    envIcon: "dns",
    envTag: "SSH Ready",
    price: "₹14,999",
    priceStrike: "₹22,500",
    priceNote: "Zero-Cost EMI ₹2,499/mo • Transparent Fee",
    secondaryLinkLabel: "Syllabus",
  },
  {
    id: "cohort-02",
    slug: "full-stack-distributed-systems",
    deliveryBadge: "LIVE SYNCHRONOUS ONLINE",
    deliveryIcon: "videocam",
    urgencyBadge: "EARLY ADMISSION • 18 SEATS LEFT",
    urgencyIcon: "bolt",
    urgencyStyle: "secondary",
    title: "Cohort 02: Full-Stack Distributed Systems & Event Streaming",
    dateRange: "June 7 – August 2, 2025",
    pace: "8 Weeks (Weekend Sprints + Lab Office Hours)",
    mentorInitial: "V",
    mentorName: "Venkatesh Rao",
    mentorBio:
      "Principal Infrastructure Fellow • Author & Distributed Architect",
    modules: [
      "Go Microservices at 100k RPS",
      "Kafka Event-Driven High-Durability Fabrics",
      "gRPC Contract Testing & Protobuf",
      "PostgreSQL Partitioning & Real-Time CDC",
    ],
    envNote:
      "Provisioned 5-node distributed Docker swarm with automated 100k RPS traffic injector.",
    envIcon: "hub",
    envTag: "Cluster Ready",
    price: "₹18,500",
    priceStrike: "₹26,000",
    priceNote: "All inclusive • Open Source Tooling License",
    secondaryLinkLabel: "Schedule",
  },
  {
    id: "cohort-03",
    slug: "linux-kernel-ebpf",
    deliveryBadge: "IN-PERSON • HYDERABAD INNOVATION NODE",
    deliveryIcon: "apartment",
    urgencyBadge: "CAPACITY: 20 • ONLY 6 LEFT",
    urgencyIcon: "chair",
    urgencyStyle: "error",
    title: "Cohort 03: Linux Kernel Diagnostics & eBPF Telemetry",
    dateRange: "June 21 – July 26, 2025",
    pace: "5 Weeks (Weekend Intensive Labs)",
    mentorInitial: "P",
    mentorName: "Priya Ramaswamy",
    mentorBio: "Senior Staff SRE • Chaos Engineering Lead",
    modules: [
      "Writing eBPF XDP Fast Network Filters",
      "Tracing Scheduler Jitter & Lock Contention",
      "Differential Flame Graphs & CPU Profiles",
      "Chaos Mesh Kernel Injections Live",
    ],
    envNote:
      "Dual-monitor physical terminal stations at Gachibowli Lab with kernel probe rigs.",
    envIcon: "memory",
    envTag: "Lab Station",
    price: "₹16,500",
    priceStrike: "₹24,000",
    priceNote: "Hardware stations included • Physical cohort",
    secondaryLinkLabel: "Specs",
  },
  {
    id: "riscv-fpga",
    slug: "riscv-fpga-bringup",
    deliveryBadge: "HYBRID • BENGALURU LAB + HD STREAM",
    deliveryIcon: "devices",
    urgencyBadge: "INAUGURAL • ADMISSIONS OPEN",
    urgencyIcon: "new_releases",
    urgencyStyle: "default",
    title: "Weekend Intensive: RISC-V Hardware Synthesis & FPGA Bring-up",
    dateRange: "July 12 – July 27, 2025",
    pace: "3 Weekends (Saturdays & Sundays)",
    mentorInitial: "A",
    mentorName: "Aarav Sandilya",
    mentorBio: "Head of Hardware Testbenches • FPGA Silicon Synthesis",
    modules: [
      "Verilog/SystemVerilog Hardware Essentials",
      "Open-Source Toolchains (Yosys & NextPNR)",
      "Softcore 32-bit RISC-V Synthesis",
      "Flashing & UART Debug on Lattice FPGA",
    ],
    envNote:
      "Optional Lattice iCE40 FPGA development board courier option for remote participants.",
    envIcon: "developer_board",
    envTag: "FPGA Kit",
    price: "₹12,000",
    priceStrike: "₹18,000",
    priceNote: "Hardware kit option available • Lab loaner",
    secondaryLinkLabel: "Kit Details",
  },
];
