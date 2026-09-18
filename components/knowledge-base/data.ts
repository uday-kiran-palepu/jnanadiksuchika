export type KbCategoryId = "all" | "help" | "gate" | "career" | "telugu";

export const kbCategoryFilters: {
  id: KbCategoryId;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "All Resources", count: 9 },
  { id: "help", label: "Help & Platform Guides", count: 4 },
  { id: "gate", label: "GATE & Competitive Exams", count: 2 },
  { id: "career", label: "Systems Career Roadmaps", count: 2 },
  { id: "telugu", label: "Telugu Mental Models", count: 1 },
];

export type KbArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type KbArticle = {
  id: string;
  slug: string;
  category: Exclude<KbCategoryId, "all">;
  badge: string;
  readMinutes: number;
  topic: string;
  title: string;
  titleTe: string;
  excerpt: string;
  authorIcon: string;
  authorMeta: string;
  sections: KbArticleSection[];
  related?: { label: string; href: string }[];
};

export const RAFT_GUIDE_SLUG = "how-to-use-raft-consensus-split-brain-visualizer";

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
    sections: [],
    related: [
      { label: "Launch Raft visualizer", href: "/tools/raft-consensus-split-brain-visualizer" },
      { label: "Go & Raft course", href: "/courses/distributed-systems-go-raft" },
    ],
  },
  {
    id: "enrollment",
    slug: "enrollment-diagnostic-testbench-process",
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
    sections: [
      {
        heading: "What the diagnostic measures",
        paragraphs: [
          "The entrance diagnostic is not a trivia quiz. It samples how you reason about failure modes: timeouts, partial writes, and incomplete logs. Scores unlock recommended tracks — they never auto-charge a seat.",
        ],
        bullets: [
          "Systems intuition: partitions, retries, idempotency",
          "Code reading: short Go/C snippets with intentional bugs",
          "Communication: explain a trade-off in under three minutes",
        ],
      },
      {
        heading: "Provisioning after you pass",
        paragraphs: [
          "Ops validates your Git identity, collects an SSH public key, and provisions either a course workspace or a workshop lab station. You receive a checklist email — nothing is marked paid until finance confirms offline.",
        ],
      },
      {
        heading: "If you need a retake",
        paragraphs: [
          "Failed diagnostics can be retaken after a seven-day cool-down with a mentor-reviewed study pack. Corporate cohorts can schedule private diagnostics via Services.",
        ],
      },
    ],
    related: [
      { label: "Contact enrollment ops", href: "/contact" },
      { label: "Browse courses", href: "/courses" },
    ],
  },
  {
    id: "lab-reservation",
    slug: "hybrid-cohort-bare-metal-lab-reservation",
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
    sections: [
      {
        heading: "Station types",
        paragraphs: [
          "Hyderabad offers dual-monitor kernel benches, FPGA loaner desks, and remote serial consoles for hybrid attendees. Bengaluru hosts overflow FPGA weekends.",
        ],
        bullets: [
          "Kernel bench: root SSH + dual monitors",
          "FPGA desk: Lattice kits + UART adapters",
          "Remote console: 4K stream with shared keyboard policy",
        ],
      },
      {
        heading: "How to reserve",
        paragraphs: [
          "After cohort registration, pick a station window in the ops form. Cancellations within 48 hours release the seat to the waitlist. No-shows lose priority for the next module.",
        ],
      },
    ],
    related: [
      { label: "Open workshops", href: "/workshops" },
      { label: "Contact infra lab", href: "/contact" },
    ],
  },
  {
    id: "ebpf-kernels",
    slug: "ephemeral-linux-kernels-ebpf-tracepoints",
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
    sections: [
      {
        heading: "Why ephemeral kernels",
        paragraphs: [
          "Students need root without owning a fleet. Ephemeral labs boot a verified kernel image, expose a constrained eBPF toolchain, and wipe state after the session.",
        ],
      },
      {
        heading: "Safety rails",
        paragraphs: [
          "The verifier rejects unsafe programs. Network namespaces keep XDP experiments off the campus uplink. Chaos injections are rate-limited and logged.",
        ],
        bullets: [
          "No out-of-tree modules",
          "Map size caps and instruction budgets",
          "Session expiry with automatic teardown",
        ],
      },
      {
        heading: "Try the scratchpad",
        paragraphs: [
          "Use the eBPF Tracepoint & XDP Scratchpad for dry-runs before claiming a physical bench. Pair with the Linux Kernel course when you want graded labs.",
        ],
      },
    ],
    related: [
      { label: "eBPF scratchpad tool", href: "/tools/ebpf-tracepoint-xdp-scratchpad" },
      { label: "Kernel course", href: "/courses/linux-kernel-ebpf-observability" },
    ],
  },
  {
    id: "gate-blueprint",
    slug: "gate-cs-deep-systems-revision-blueprint",
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
    sections: [
      {
        heading: "Revision priorities",
        paragraphs: [
          "Spend disproportionate time on OS concurrency, networking reliability, and DBMS serializability — they separate recall from reasoning under pressure.",
        ],
        bullets: [
          "Week A: processes, scheduling, virtual memory",
          "Week B: TCP, congestion vs flow control",
          "Week C: locking, 2PL, conflict serializability",
        ],
      },
      {
        heading: "Bilingual practice",
        paragraphs: [
          "Explain each concept aloud in Telugu first, then write the exam-English definition. The switch exposes gaps that silent reading hides.",
        ],
      },
    ],
    related: [
      { label: "GATE CS course", href: "/courses/algorithmic-problem-solving-gate-cs" },
      { label: "Amdahl speedup bench", href: "/tools/amdahls-law-speedup-bench" },
    ],
  },
  {
    id: "tier23-career",
    slug: "tier-2-3-to-systems-infrastructure-roadmap",
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
    sections: [
      {
        heading: "A 12-month spine",
        paragraphs: [
          "Months 1–3: Linux + networking labs. Months 4–6: one systems language deeply (Go or Rust). Months 7–9: open-source contributions with reviewable diffs. Months 10–12: workshop cohort + interview defenses.",
        ],
      },
      {
        heading: "Portfolio that hiring managers trust",
        paragraphs: [
          "Prefer one durable artifact — a mini Raft, an eBPF tracer, or a storage engine — over ten CRUD clones. Document failure modes, not just happy paths.",
        ],
      },
    ],
    related: [
      { label: "Meet mentors", href: "/team" },
      { label: "Salary rubric article", href: "/knowledge-base/systems-engineer-salary-progression-rubric" },
    ],
  },
  {
    id: "telugu-glossary",
    slug: "telugu-systems-mental-models-glossary",
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
    sections: [
      {
        heading: "How to use this glossary",
        paragraphs: [
          "Search a term, read the Telugu analogy, then restate the RFC definition. The tool version supports quick look-ups during labs.",
        ],
        bullets: [
          "Quorum → పంచాయతీ మెజారిటీ",
          "WAL → చిట్టా పద్దు",
          "Backpressure → కాలువ నిండి ఉప్పొంగడం",
        ],
      },
      {
        heading: "Contribute",
        paragraphs: [
          "Faculty accepts analogy PRs that stay precise. Marketing metaphors without technical grounding are rejected.",
        ],
      },
    ],
    related: [
      { label: "Glossary quick-look tool", href: "/tools/telugu-systems-glossary" },
      { label: "Knowledge base home", href: "/knowledge-base" },
    ],
  },
  {
    id: "isro-barc",
    slug: "isro-barc-scientist-engineer-interview-prep",
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
    sections: [
      {
        heading: "Interview shape",
        paragraphs: [
          "Expect deep fundamentals: digital logic, OS scheduling, fault tolerance, and the ability to reason about telemetry under constraints — not leetcode speedruns.",
        ],
      },
      {
        heading: "Practice loop",
        paragraphs: [
          "Alternate written GATE-style sets with oral defenses. Record yourself explaining watchdog timers and ECC memory in both Telugu and English.",
        ],
      },
    ],
    related: [
      { label: "Faculty: Dr. Murthy", href: "/team/dr-s-k-murthy" },
      { label: "RISC-V workshop", href: "/workshops/riscv-fpga-bringup" },
    ],
  },
  {
    id: "salary-rubric",
    slug: "systems-engineer-salary-progression-rubric",
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
    sections: [
      {
        heading: "How to read the bands",
        paragraphs: [
          "Bands below are directional midpoints for systems/SRE/platform roles as of late 2024 hiring conversations — not offers. Always verify with current market data.",
        ],
        bullets: [
          "SDE-1 / SRE-1 (India metros): focus on ownership of a service slice",
          "Senior: multi-service incidents + design docs that ship",
          "Staff+: org-level reliability strategy and mentoring leverage",
        ],
      },
      {
        heading: "Competencies that move levels",
        paragraphs: [
          "Promotion packets reward production evidence: outage write-ups, capacity plans, and mentorship — not course certificates alone.",
        ],
      },
    ],
    related: [
      { label: "Career roadmap article", href: "/knowledge-base/tier-2-3-to-systems-infrastructure-roadmap" },
      { label: "Talk to mentors", href: "/team" },
    ],
  },
];

export const kbArticleSlugs = kbArticles.map((a) => a.slug);

export function getKbArticle(slug: string): KbArticle | undefined {
  return kbArticles.find((a) => a.slug === slug);
}
