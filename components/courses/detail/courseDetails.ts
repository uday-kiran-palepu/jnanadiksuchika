import type { CatalogCourse } from "@/components/courses/data";
import { catalogCourses } from "@/components/courses/data";

export type CourseModule = {
  week: string;
  title: string;
  bullets: string[];
};

export type CourseDetailContent = {
  slug: string;
  audience: string[];
  outcomes: string[];
  modules: CourseModule[];
  stack: string[];
  faqs: { q: string; a: string }[];
  longDescription: string;
};

const bySlug: Record<string, Omit<CourseDetailContent, "slug">> = {
  "linux-kernel-ebpf-observability": {
    longDescription:
      "Trace production latency at the kernel boundary. You will write eBPF programs, attach them safely through the verifier, and turn packet drops and scheduler jitter into actionable flame graphs — without crashing lab hosts.",
    audience: [
      "SREs and platform engineers who own Linux production fleets",
      "Backend engineers debugging mysterious latency and socket drops",
      "Kernel-curious developers ready for bare-metal labs",
    ],
    outcomes: [
      "Author XDP and kprobe programs that pass the eBPF verifier",
      "Produce differential flame graphs for CPU and lock contention",
      "Operate a safe chaos injection loop against ephemeral kernels",
    ],
    stack: ["Linux 6.x", "clang/LLVM", "libbpf", "bpftrace", "perf"],
    modules: [
      {
        week: "Weeks 1–2",
        title: "Kernel observability foundations",
        bullets: [
          "Syscall path, interrupt context, and safe probe points",
          "Verifier constraints and map design",
          "Lab: attach a hello-world kprobe without panics",
        ],
      },
      {
        week: "Weeks 3–4",
        title: "XDP and packet telemetry",
        bullets: [
          "XDP actions, early drop, and redirect patterns",
          "Synthetic pcap workloads and cycle budgets",
          "Lab: drop SYN floods with measured CPU cost",
        ],
      },
      {
        week: "Weeks 5–6",
        title: "Scheduler and lock tracing",
        bullets: [
          "runqlat, softirq, and mutex contention profiles",
          "Differential flame graphs before/after fixes",
          "Lab: isolate a noisy-neighbor scheduling bug",
        ],
      },
      {
        week: "Weeks 7–8",
        title: "Chaos and production posture",
        bullets: [
          "Safe fault injection with Chaos Mesh patterns",
          "Runbook templates for on-call handoff",
          "Capstone defense: live incident narrative",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need kernel module experience?",
        a: "No. Comfort with C, Linux userspace, and reading man pages is enough. We start from verifier-safe eBPF, not out-of-tree modules.",
      },
      {
        q: "Are labs remote-friendly?",
        a: "Yes. Each engineer gets an ephemeral Ubuntu lab with root SSH. Optional Hyderabad bench time is available for hybrid cohorts.",
      },
    ],
  },
  "compiler-construction-llvm-cpp": {
    longDescription:
      "Build a real compiler pipeline in C++: lexer, parser, AST, IR lowering, and a JIT that executes on x86-64. You will reason about optimization passes the way production compiler engineers do — with tests, not slides.",
    audience: [
      "Engineers targeting compiler, runtime, or language tooling roles",
      "Systems programmers who want deeper LLVM intuition",
      "GATE/advanced CS learners who need construction, not memorization",
    ],
    outcomes: [
      "Ship a working language front-end with typed AST",
      "Lower IR through LLVM and execute via JIT",
      "Explain optimization legality with concrete counterexamples",
    ],
    stack: ["C++20", "LLVM", "CMake", "GoogleTest", "x86-64"],
    modules: [
      {
        week: "Weeks 1–3",
        title: "Lexing, parsing, and AST",
        bullets: [
          "Recursive-descent and Pratt parsing trade-offs",
          "Error recovery that keeps the compiler usable",
          "Lab: parse a mini expression language with tests",
        ],
      },
      {
        week: "Weeks 4–6",
        title: "Semantic analysis and IR",
        bullets: [
          "Symbol tables, types, and control-flow graphs",
          "SSA intuition before touching LLVM APIs",
          "Lab: lower AST into a custom IR",
        ],
      },
      {
        week: "Weeks 7–9",
        title: "LLVM and codegen",
        bullets: [
          "LLVM IR builders, passes, and verification",
          "Calling conventions and stack frames",
          "Lab: JIT execute compiled functions",
        ],
      },
      {
        week: "Weeks 10–12",
        title: "Optimizations and defense",
        bullets: [
          "Constant folding, DCE, and simple loop opts",
          "Miscompile hunting with differential fuzzing",
          "Capstone: present your pipeline to faculty",
        ],
      },
    ],
    faqs: [
      {
        q: "Is prior compiler coursework required?",
        a: "Helpful but not required. Strong C++ and data-structure fluency matters more than having taken a compilers elective.",
      },
      {
        q: "Will we use Clang plugins?",
        a: "We focus on building your own pipeline first. Clang/LLVM tooling appears after your front-end works end-to-end.",
      },
    ],
  },
  "production-ml-llm-quantization": {
    longDescription:
      "Take open-weight LLMs from notebook demos to deployable inference. Quantize, serve with vLLM, measure memory and tokens/sec, and document trade-offs honest enough for a staff review.",
    audience: [
      "ML engineers moving models into production serving",
      "Platform teams owning GPU capacity and cost",
      "Backend engineers integrating LLM APIs with SLOs",
    ],
    outcomes: [
      "Quantize models to 4-bit with measurable quality deltas",
      "Serve with vLLM / TensorRT-LLM style paging patterns",
      "Publish a cost-vs-latency report for a fixed QPS target",
    ],
    stack: ["PyTorch", "vLLM", "Hugging Face", "CUDA", "Python"],
    modules: [
      {
        week: "Weeks 1–2",
        title: "Serving baselines",
        bullets: [
          "KV cache, batching, and paged attention intuition",
          "Benchmark harness for tokens/sec and p99 latency",
          "Lab: serve a small model with honest metrics",
        ],
      },
      {
        week: "Weeks 3–4",
        title: "Quantization craft",
        bullets: [
          "AWQ / GPTQ trade-offs and calibration sets",
          "Quality evaluation beyond perplexity",
          "Lab: 4-bit deploy with regression dashboard",
        ],
      },
      {
        week: "Weeks 5–6",
        title: "Scale and operations",
        bullets: [
          "Multi-GPU placement and failure modes",
          "Autoscaling and cold-start realities",
          "Capstone: design a production serving runbook",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a personal GPU?",
        a: "No. Cloud notebooks and shared GPU pools are included for labs. A local CUDA box speeds iteration but is optional.",
      },
      {
        q: "Is this a research paper course?",
        a: "No. We prioritize deployable systems: serving, quantization, and operational metrics over novel architecture papers.",
      },
    ],
  },
  "enterprise-design-systems-wasm": {
    longDescription:
      "Connect design tokens to high-performance UI runtimes. You will model tokens mathematically, ship accessible components, and embed interactive canvases via WebAssembly without sacrificing frame budgets.",
    audience: [
      "Design systems engineers and product designers who code",
      "Frontend engineers owning design-token pipelines",
      "Teams building data-dense canvases and dashboards",
    ],
    outcomes: [
      "Author a token engine with lintable contracts",
      "Ship accessible components with documented states",
      "Embed a Wasm canvas module with stable FPS budgets",
    ],
    stack: ["Figma", "TypeScript", "React", "Rust/Wasm", "Storybook"],
    modules: [
      {
        week: "Weeks 1–2",
        title: "Token mathematics",
        bullets: [
          "Spacing, type, and color scales as code",
          "Theme contracts and breaking-change policy",
          "Lab: generate CSS variables from a token graph",
        ],
      },
      {
        week: "Weeks 3–4",
        title: "Component systems",
        bullets: [
          "Interaction states without card clutter",
          "WCAG checks wired into CI",
          "Lab: button/input primitives with Storybook",
        ],
      },
      {
        week: "Weeks 5–6",
        title: "Wasm performance surfaces",
        bullets: [
          "Rust → Wasm toolchain for canvas work",
          "JS bridge patterns and memory ownership",
          "Capstone: interactive diagram at 60fps target",
        ],
      },
    ],
    faqs: [
      {
        q: "Do designers need Rust?",
        a: "Not for the first half. Rust/Wasm appears in the final module with pair programming support from faculty.",
      },
      {
        q: "Will this replace our existing design system?",
        a: "It teaches patterns you can adopt incrementally — tokens, CI a11y, and performance budgets — without a big-bang rewrite.",
      },
    ],
  },
  "algorithmic-problem-solving-gate-cs": {
    longDescription:
      "Build durable intuition for GATE CS systems topics and interview-grade algorithms. Dynamic programming, graphs, OS, and networks are taught with bilingual mental models and timed practice — not rote dumps.",
    audience: [
      "GATE CS aspirants targeting systems-heavy papers",
      "College students moving from syntax to problem formulation",
      "Engineers refreshing fundamentals for infrastructure interviews",
    ],
    outcomes: [
      "Formulate DP and graph states under time pressure",
      "Explain OS and networking questions with diagrams",
      "Sit a diagnostic mock with a scored improvement plan",
    ],
    stack: ["C/C++ or Python", "Discrete math", "OS notes", "Networks"],
    modules: [
      {
        week: "Weeks 1–4",
        title: "Algorithms core",
        bullets: [
          "Complexity, master theorem, and recurrence practice",
          "DP patterns: knapsack, paths, intervals",
          "Graphs: BFS/DFS, shortest paths, MSTs",
        ],
      },
      {
        week: "Weeks 5–8",
        title: "Systems subjects",
        bullets: [
          "Process scheduling, virtual memory, concurrency",
          "TCP flow control and reliable delivery",
          "DB serializability and indexing intuition",
        ],
      },
      {
        week: "Weeks 9–12",
        title: "Architecture & mocks",
        bullets: [
          "Pipelining hazards and cache hierarchies",
          "Full-length timed mocks with review clinics",
          "Capstone: personalized weak-topic plan",
        ],
      },
      {
        week: "Weeks 13–16",
        title: "Polish and defense",
        bullets: [
          "Rapid revision cards (EN + TE)",
          "Peer teaching drills",
          "Final diagnostic and faculty office hours",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this only for GATE?",
        a: "GATE is the spine, but the same fundamentals power systems interviews. We keep both exam timing and interview explanation practice.",
      },
      {
        q: "Is Telugu delivery available?",
        a: "Yes. Conceptual breakdowns use Telugu mental models; formal notation and exam English remain standard.",
      },
    ],
  },
};

export function getCourseDetail(slug: string): (CatalogCourse & CourseDetailContent) | undefined {
  const base = catalogCourses.find((c) => c.slug === slug);
  if (!base) return undefined;
  const extra = bySlug[slug];
  if (!extra) return undefined;
  return { ...base, slug, ...extra };
}

export function courseDetailSlugs(): string[] {
  return Object.keys(bySlug);
}
