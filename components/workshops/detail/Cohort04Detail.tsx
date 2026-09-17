import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { RegistrationCard } from "./RegistrationCard";

const faqs = [
  {
    q: "Can I attend if I don't know Rust yet?",
    a:
      'Yes, provided you have strong familiarity with pointers and memory in C, C++, Go, or modern Java. Enrolled candidates receive our 10-day intensive preparatory package ("Rust for Systems Programmers") covering ownership, lifetimes, and traits prior to Day 1.',
  },
  {
    q: "How are Telugu and English blended during lectures?",
    a:
      "All architectural concepts, cognitive analogies, and real-time lab debriefs are delivered in natural, technical Telugu to eliminate cognitive friction. Terminal commands, code bases, whitepapers, RFC documentation, and capstone defenses are conducted entirely in industry-standard English.",
  },
  {
    q: "What physical hardware do I need to bring to the lab?",
    a:
      "A modern laptop (macOS, Linux, or Windows with WSL2) with SSH client capabilities and a web browser for telemetry consoles. All heavy compilation, memory profiling, and cluster tests execute directly on your assigned bare-metal lab station in Hyderabad.",
  },
  {
    q: "What is the refund policy and money-back baseline audit?",
    a:
      "We uphold a strict 100% money-back guarantee. If you complete the diagnostic and attend Module 01 (Week 1) and determine the depth does not match your rigorous engineering expectations, notify the team before Module 02 begins for a complete refund—no questions asked.",
  },
];

function MetaItem({
  icon,
  label,
  title,
  sub,
  secondary,
}: {
  icon: string;
  label: string;
  title: string;
  sub: string;
  secondary?: boolean;
}) {
  return (
    <div className="flex items-start gap-space-sm">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          secondary ? "bg-secondary-fixed text-secondary" : "bg-primary/10 text-primary"
        }`}
      >
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-label-sm text-label-sm uppercase text-outline">
          {label}
        </span>
        <span className="font-title-md text-title-md text-on-surface font-semibold">
          {title}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {sub}
        </span>
      </div>
    </div>
  );
}

export function Cohort04Detail() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low/70 py-space-sm shadow-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-space-sm text-body-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs text-on-surface-variant font-body-sm"
          >
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px] text-outline">
              chevron_right
            </span>
            <Link
              className="hover:text-primary transition-colors"
              href="/workshops"
            >
              Workshops &amp; Bootcamps
            </Link>
            <span className="material-symbols-outlined text-[16px] text-outline">
              chevron_right
            </span>
            <span className="font-semibold text-primary truncate max-w-[260px] sm:max-w-none">
              Cohort 04: Systems Programming &amp; Distributed Storage
            </span>
          </nav>
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-tertiary font-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              GRID TELEMETRY: HYD-NODE-04 ACTIVE
            </span>
            <span className="text-caption font-caption text-outline hidden md:inline">
              UTC+05:30 • IST
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-surface-container-low/50 via-surface-container-lowest to-surface pt-space-lg pb-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-primary/10 text-primary font-label-md">
              <span className="material-symbols-outlined text-[16px] text-primary">
                satellite_alt
              </span>
              HYBRID LAB NODE • HYDERABAD (17.3850° N) + 4K HD STREAM
            </div>
            <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-secondary-fixed text-secondary font-label-md shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                hourglass_top
              </span>
              11 SEATS LEFT • APPLICATIONS CLOSE MAY 12
            </div>
            <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-tertiary font-label-md">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                memory
              </span>
              BARE-METAL CLUSTER LAB
            </div>
          </div>

          <div className="flex flex-col gap-space-xs max-w-4xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Cohort 04: Systems Programming &amp; Distributed Storage
            </h1>
            <p className="font-headline-sm text-headline-sm text-primary/90 font-medium">
              సిస్టమ్స్ ప్రోగ్రామింగ్ &amp; డిస్ట్రిబ్యూటెడ్ స్టోరేజ్ ఇంక్యుబేటర్
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant pt-space-xs leading-relaxed">
              An unsparing 6-week intensive engineering incubator. Implement Raft
              consensus from scratch, construct LSM-Tree key-value engines with
              Write-Ahead Logs (WAL), benchmark Linux epoll loops, and trace cache
              coherence under network partitions.
            </p>
          </div>

          <div className="w-full mt-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm grid grid-cols-1 lg:grid-cols-4 gap-space-md">
            <MetaItem
              icon="calendar_month"
              label="Timeline & Cadence"
              title="May 18 – June 29, 2025"
              sub="6 Weeks • Sat & Sun (4 hrs/day)"
            />
            <MetaItem
              icon="hub"
              label="Delivery Mode"
              title="Dual Synchronous Hybrid"
              sub="Gachibowli Lab + 4K HD Stream"
            />
            <MetaItem
              icon="terminal"
              label="Hardware Rig"
              title="Bare-Metal Ubuntu 24.04"
              sub="Dedicated Root SSH + Logic Analyzer"
            />
            <MetaItem
              icon="translate"
              label="Instruction Dialect"
              title="Telugu + English Terminals"
              sub="Dual-Script Whitepapers & RFCs"
              secondary
            />
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-xl">
              <CurriculumSection />
              <AudienceSection />
              <FacultySection />
              <LabTelemetrySection />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-space-lg">
              <RegistrationCard />
              <div className="p-space-md rounded-xl bg-surface-container shadow-xs flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">
                    UI State Matrix
                  </span>
                  <span className="font-caption text-caption text-primary">
                    Responsive Testbench
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-primary/10 flex items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      timer
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        State C: Slot Provisionally Held
                      </span>
                      <span className="font-caption text-caption text-on-surface-variant">
                        Station #13 reserved for 14:59 mins
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-primary text-on-primary font-mono text-[11px] font-bold">
                    14:59
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-caption font-caption flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-medium">
                    State A: Initial Blank
                  </span>
                  <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-medium">
                    State B: Error Flagged
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-medium">
                    State C: Success
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LabSpecsSection />
      <SiblingAndFaqSection faqs={faqs} />

      <section className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary py-space-lg shadow-inner">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-on-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">explore</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-lg text-title-lg font-bold">
                Have Specific Architecture Questions?
              </span>
              <span className="font-body-sm text-body-sm text-on-primary/90">
                Talk directly with our lead lab mentors before confirming your
                station.
              </span>
            </div>
          </div>
          <Link
            className="px-space-lg py-space-sm rounded-lg bg-surface-container-lowest text-primary font-title-md text-title-md font-bold shadow-md hover:bg-surface-container-high transition-colors"
            href="/contact"
          >
            Schedule Mentor Call
          </Link>
        </div>
      </section>
    </div>
  );
}

function CurriculumSection() {
  const modules = [
    {
      num: "01",
      weeks: "Weeks 01 – 02",
      title: "Bare-Metal Memory Models & Rust Concurrency",
      tag: "Core Engine",
      tagClass: "bg-primary-fixed text-on-primary-fixed",
      body:
        "Memory layout of primitive types, CPU cache line alignment, False Sharing avoidance, SIMD vectorization, and atomics. You will construct lock-free SPMC and MPMC ring buffers without mutexes.",
      terminal: {
        cmd: "cargo bench --bench ring_buffer",
        meta: "valgrind --tool=cachegrind OK",
        out: "> throughput: 28,491,204 ops/sec | l1-dcache-misses: 0.04% | zero locks",
        outClass: "text-primary-fixed-dim",
      },
    },
    {
      num: "02",
      weeks: "Weeks 03 – 04",
      title: "Storage Engines & Write-Ahead Logs (WAL)",
      tag: "LSM-Tree",
      tagClass: "bg-surface-container-high text-tertiary",
      body:
        "Architecting an LSM-Tree storage engine from scratch in Rust. Memory tables (SkipList), append-only Write-Ahead Logging with checksum verification, tiered SSTable disk compactions, and Bloom filters for fast non-existence queries.",
      terminal: {
        cmd: "fio --filename=/data/wal.log --direct=1",
        meta: "fsync: 4.1us latency",
        out: "> Compaction tier: 4 SSTables merged into L1 in 14.8ms with zero page stalls.",
        outClass: "text-secondary-container",
      },
    },
    {
      num: "03",
      weeks: "Weeks 05 – 06",
      title: "Distributed Consensus & Network Partitions (Raft)",
      tag: "Consensus",
      tagClass: "bg-secondary-fixed text-on-secondary-fixed",
      body:
        "The Raft state machine replication algorithm. Leader elections, log heartbeats, commit index preservation, and cluster membership changes. Introduce synthetic latency and split-brain network failures with iptables and eBPF drop filters.",
      terminal: {
        cmd: "jepsen-test --nodes 5 --fault split_brain",
        meta: "Linearizability: PASSED",
        out: "> Node 3 elected Term 8 Leader in 142ms after partition isolation.",
        outClass: "text-primary-fixed-dim",
      },
    },
  ];

  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between flex-wrap gap-space-sm">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
            PRACTICAL TELEMETRY
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Curriculum &amp; Kernel Benchmarks
          </h2>
        </div>
        <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-tertiary">
          6 WEEKS • 48 LAB HOURS
        </span>
      </div>
      <div className="space-y-space-md">
        {modules.map((m) => (
          <div
            key={m.num}
            className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-8 h-8 rounded bg-primary text-on-primary font-bold font-title-md flex items-center justify-center">
                  {m.num}
                </span>
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase">
                    {m.weeks}
                  </span>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                    {m.title}
                  </h3>
                </div>
              </div>
              <span
                className={`px-2 py-0.5 rounded font-caption text-caption uppercase ${m.tagClass}`}
              >
                {m.tag}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
              {m.body}
            </p>
            <div className="mt-space-sm p-space-sm rounded-lg bg-inverse-surface text-inverse-on-surface font-mono text-[12px] leading-relaxed overflow-x-auto">
              <div className="flex items-center justify-between text-outline text-[11px] pb-1">
                <span>{m.terminal.cmd}</span>
                <span className="text-secondary-fixed-dim">{m.terminal.meta}</span>
              </div>
              <p className={m.terminal.outClass}>{m.terminal.out}</p>
            </div>
          </div>
        ))}
        <div className="p-space-md rounded-xl bg-primary/5 shadow-sm flex items-start gap-space-md">
          <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">military_tech</span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-title-md text-title-md text-primary font-bold">
              Live Capstone Defense Panel
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface">
              Week 06 concludes with an open architecture defense. You run your
              3-node distributed KV engine against a fault-injection suite while
              defending trade-offs before senior engineers and architects from ISRO
              and high-scale consumer tech platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudienceSection() {
  return (
    <div className="flex flex-col gap-space-md">
      <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
        CANDIDATE CALIBRATION
      </span>
      <h2 className="font-headline-md text-headline-md text-on-surface">
        Audience Filter &amp; Requirements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
            <span className="material-symbols-outlined text-primary">
              check_circle
            </span>
            Ideal Candidates
          </div>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
            {[
              "Backend/Software Engineers (1–6 yrs) aiming to transition into Systems, Cloud Infrastructure, or DB Engineering.",
              "SREs and DevOps leads who want deeper Linux kernel, socket multiplexing, and eBPF observability mastery.",
              "Engineers exhausted by high-level toy framework bootcamps seeking real bit-level telemetry.",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">
                  arrow_right
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs text-error font-title-md text-title-md font-bold">
            <span className="material-symbols-outlined text-error">cancel</span>
            Not Suitable For
          </div>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
            {[
              "Absolute beginners who have never programmed or executed shell commands in Linux or macOS.",
              "Candidates looking solely for web frontend (React, UI/CSS) or shallow CRUD REST APIs.",
              "Individuals unable to commit 8 hours/weekend plus 4 hours mid-week debugging time.",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-error mt-1">
                  close
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FacultySection() {
  return (
    <div className="flex flex-col gap-space-md">
      <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
        FACULTY &amp; MENTORSHIP
      </span>
      <h2 className="font-headline-md text-headline-md text-on-surface">
        Guided by Aerospace &amp; Infra Architects
      </h2>
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row gap-space-lg">
        <ImagePlaceholder
          className="w-24 h-24 rounded-xl object-cover"
          alt="Portrait of Dr S K Murthy"
        />
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-xs">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Dr. S. K. Murthy
            </h3>
            <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-caption text-caption font-semibold">
              Ex-ISRO Principal Architect
            </span>
          </div>
          <p className="font-label-md text-label-md text-tertiary">
            24 Years in Aerospace Flight Systems, Real-Time OS &amp; High-Reliability
            Telemetry
          </p>
          <blockquote className="font-body-md text-body-md text-on-surface-variant italic mt-space-xs pl-space-sm border-l-2 border-secondary-container">
            &quot;We teach software engineering the way aerospace mechanics teach flight
            dynamics: zero simulated toys. You will break real Linux clusters and
            diagnose the root cause until the invariants hold.&quot;
          </blockquote>
        </div>
      </div>
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row gap-space-lg">
        <ImagePlaceholder
          className="w-24 h-24 rounded-xl object-cover"
          alt="Portrait of Venkatesh Rao"
        />
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-xs">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Venkatesh Rao
            </h3>
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-caption text-caption font-semibold">
              Principal Infrastructure Fellow
            </span>
          </div>
          <p className="font-label-md text-label-md text-tertiary">
            Author of high-throughput Go BGP mesh daemons, ex-Fintech Core Lead
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            Conducts weekly live code teardowns, examining thread dumps, epoll
            starvation edge-cases, and Rust lifetime borrow-checker ergonomics.
          </p>
        </div>
      </div>
    </div>
  );
}

function LabTelemetrySection() {
  const strip = [
    { label: "LAB RIG 01", alt: "Logic analyzer on lab bench" },
    { label: "RAFT PROOFS", alt: "Whiteboard with Raft diagrams" },
    { label: "PEER SPRINT", alt: "Students collaborating in lab" },
  ];

  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
            LAB TELEMETRY ARCHIVE
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Cohort 03 Live Teardown Session
          </h2>
        </div>
        <span className="material-symbols-outlined text-primary text-[28px]">
          videocam
        </span>
      </div>
      <div className="relative rounded-2xl overflow-hidden bg-inverse-surface aspect-video shadow-md flex items-center justify-center group">
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-50 transition-opacity"
          alt="Lab classroom at night with terminals and flame graphs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/60 to-transparent" />
        <div className="relative z-10 w-16 h-16 rounded-full bg-secondary-container text-on-tertiary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[36px]">play_arrow</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-10 p-space-sm rounded-lg bg-inverse-surface/90 backdrop-blur-md flex items-center justify-between gap-space-sm text-inverse-on-surface text-body-sm font-mono">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
            <span className="text-secondary-fixed-dim">[18:42]</span>
            <span className="truncate">
              Debugging Split-Brain Network Partitions in Telugu with Dr. Murthy
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-container/20 text-caption font-caption text-surface-dim shrink-0">
            4K REC
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-space-sm">
        {strip.map((item) => (
          <div
            key={item.label}
            className="relative rounded-lg overflow-hidden h-24 bg-surface-container shadow-xs"
          >
            <ImagePlaceholder className="w-full h-full object-cover" alt={item.alt} />
            <span className="absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-[10px] text-surface-dim font-mono">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LabSpecsSection() {
  const cards = [
    {
      icon: "dns",
      title: "Node Hardware",
      body:
        "AMD EPYC 16-Core bare-metal instance, 64GB DDR5 ECC RAM, dual NVMe arrays configured for raw io_uring asynchronous system calls.",
    },
    {
      icon: "settings_ethernet",
      title: "Network Topology",
      body:
        "Dedicated 10Gbps local bridge per 3-node cluster. Integrated programmable netem delays and packet loss emulation hooks for Raft partition tests.",
    },
    {
      icon: "query_stats",
      title: "Observability Stack",
      body:
        "Pre-wired bpftrace scripts, flame graph visualizers, perf stat event counters, and Prometheus/Grafana real-time metrics dashboards.",
    },
  ];

  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-1 max-w-2xl">
            <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider font-semibold">
              HYDERABAD LAB SPECIFICATIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight">
              The Bare-Metal Workbench
            </h2>
            <p className="font-body-md text-body-md text-surface-dim">
              Every enrolled engineer receives an uncompromising hardware allocation.
              No abstracted container throttles, no shared micro-VM noisy neighbors.
            </p>
          </div>
          <span className="px-space-md py-space-sm rounded-lg bg-tertiary/40 text-surface-bright font-mono text-[13px]">
            KERNEL: Linux 6.8.0-generic (eBPF JIT Enabled)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {cards.map((c) => (
            <div
              key={c.title}
              className="p-space-md rounded-xl bg-tertiary/20 flex flex-col gap-space-xs"
            >
              <span className="material-symbols-outlined text-[32px] text-primary-fixed-dim">
                {c.icon}
              </span>
              <h3 className="font-title-lg text-title-lg text-surface-bright font-bold">
                {c.title}
              </h3>
              <p className="font-body-sm text-body-sm text-surface-dim">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiblingAndFaqSection({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-md">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
              DIRECTIONAL PATHWAYS
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Upcoming Specialized Cohorts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-tertiary">
                    Starts July 2025
                  </span>
                  <span className="font-label-sm text-primary font-semibold">
                    Cohort 05
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  Kernel Hacking: Linux Network Subsystem &amp; XDP
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Write native eBPF programs, hook sk_buff lifecycle events, and bypass
                  the TCP stack with AF_XDP for multi-million packet filtering.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-title-md text-title-md text-primary font-semibold">
                View Syllabus &amp; Prerequisites
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-tertiary">
                    Starts August 2025
                  </span>
                  <span className="font-label-sm text-primary font-semibold">
                    Cohort 06
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  Database Engine Internals: B+Trees, MVCC &amp; Query Planners
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Build a relational execution engine with Volcano query processing,
                  buffer pool managers, latch crabbing, and Serializable Snapshot
                  Isolation.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-title-md text-title-md text-primary font-semibold">
                View Syllabus &amp; Prerequisites
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-space-md">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
              CLARIFICATIONS
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-space-sm">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm group"
              >
                <summary className="font-title-md text-title-md text-on-surface font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs border-t border-surface-container-high leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
