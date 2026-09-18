import type { WorkshopCohort } from "@/components/workshops/data";
import { workshopCohorts } from "@/components/workshops/data";

export type WorkshopDetailContent = {
  slug: string;
  overview: string;
  outcomes: string[];
  weekPlan: { label: string; focus: string; deliverable: string }[];
  prerequisites: string[];
  faqs: { q: string; a: string }[];
};

const bySlug: Record<string, Omit<WorkshopDetailContent, "slug">> = {
  "full-stack-distributed-systems": {
    overview:
      "Eight weekend sprints building event-driven services that survive backpressure, partition, and schema evolution. You will ship Go services, Kafka fabrics, gRPC contracts, and CDC pipelines under load — then defend latency budgets in staff-style reviews.",
    outcomes: [
      "Design a 100k RPS-oriented service boundary with honest SLOs",
      "Operate Kafka topics with durability and consumer-lag discipline",
      "Prove gRPC contracts with golden tests and protobuf compatibility checks",
      "Wire PostgreSQL partitioning with real-time CDC into analytics paths",
    ],
    weekPlan: [
      {
        label: "Weeks 1–2",
        focus: "Go service foundations & load harness",
        deliverable: "Instrumented HTTP/gRPC service with p99 dashboard",
      },
      {
        label: "Weeks 3–4",
        focus: "Kafka event fabrics",
        deliverable: "Producer/consumer with idempotent writes and lag alerts",
      },
      {
        label: "Weeks 5–6",
        focus: "Contracts & CDC",
        deliverable: "Versioned protobuf APIs + Postgres CDC stream",
      },
      {
        label: "Weeks 7–8",
        focus: "Failure drills & defense",
        deliverable: "Partition/outage runbook + live architecture defense",
      },
    ],
    prerequisites: [
      "Comfortable writing Go or willing to complete the 7-day Go bridge pack",
      "Basic SQL and Docker experience",
      "Laptop capable of running a local Docker Compose stack",
    ],
    faqs: [
      {
        q: "Is the 5-node swarm required locally?",
        a: "No. We provision a shared Docker swarm for load labs. Local Compose covers day-to-day iteration.",
      },
      {
        q: "Can my whole team join?",
        a: "Yes — corporate seats are available via /services/corporate. Private cohorts keep your stack private.",
      },
    ],
  },
  "linux-kernel-ebpf": {
    overview:
      "Five weekend intensives at the Hyderabad Innovation Node. Write XDP filters, chase scheduler jitter, and inject controlled chaos while reading kernel telemetry on dual-monitor lab stations.",
    outcomes: [
      "Ship verifier-safe eBPF programs for packet and scheduler paths",
      "Produce differential flame graphs that isolate lock contention",
      "Run a Chaos Mesh experiment with a documented rollback",
      "Leave with a personal eBPF toolkit repo and lab notes",
    ],
    weekPlan: [
      {
        label: "Weekend 1",
        focus: "Lab station bring-up & verifier basics",
        deliverable: "Working kprobe + map on assigned kernel",
      },
      {
        label: "Weekend 2",
        focus: "XDP fast path",
        deliverable: "SYN-drop filter with cycle cost report",
      },
      {
        label: "Weekend 3",
        focus: "Scheduler & locks",
        deliverable: "Flame graph pair explaining a contention bug",
      },
      {
        label: "Weekend 4–5",
        focus: "Chaos & defense",
        deliverable: "Live incident narrative before faculty",
      },
    ],
    prerequisites: [
      "C literacy and Linux CLI comfort",
      "Prior SRE/backend experience preferred",
      "Ability to attend in-person weekends in Hyderabad",
    ],
    faqs: [
      {
        q: "Can I join remotely?",
        a: "This cohort is in-person for hardware stations. Remote alternatives live under the eBPF course and tools scratchpad.",
      },
      {
        q: "What if I miss one weekend?",
        a: "Recordings and catch-up office hours are provided, but seat priority goes to engineers who attend live labs.",
      },
    ],
  },
  "riscv-fpga-bringup": {
    overview:
      "Three weekends synthesizing a softcore RISC-V onto Lattice FPGA, from Verilog essentials through UART bring-up. Optional courier kits keep remote engineers on the same silicon path as the Bengaluru lab.",
    outcomes: [
      "Author synthesizable SystemVerilog for a minimal CPU datapath",
      "Run Yosys/NextPNR flows without vendor lock-in myths",
      "Flash and debug a softcore over UART with a documented log",
      "Explain FPGA timing closure failures with actionable fixes",
    ],
    weekPlan: [
      {
        label: "Weekend 1",
        focus: "HDL essentials & open toolchains",
        deliverable: "Simulated ALU/register file with testbench",
      },
      {
        label: "Weekend 2",
        focus: "Softcore synthesis",
        deliverable: "Bitstream for Lattice iCE40 target",
      },
      {
        label: "Weekend 3",
        focus: "Bring-up & debug",
        deliverable: "UART hello-world + postmortem notes",
      },
    ],
    prerequisites: [
      "Digital logic basics (muxes, FSMs, clocks)",
      "Willingness to learn Verilog/SystemVerilog quickly",
      "Optional: purchase or borrow Lattice iCE40 kit",
    ],
    faqs: [
      {
        q: "Is the FPGA kit mandatory?",
        a: "Lab loaners cover in-person seats. Remote participants can courier a kit or simulate until bring-up weekend.",
      },
      {
        q: "Will we cover ASIC flows?",
        a: "No — this intensive stays FPGA-focused. ASIC topics appear in advanced hardware electives.",
      },
    ],
  },
};

export function getWorkshopDetail(
  slug: string
): (WorkshopCohort & WorkshopDetailContent) | undefined {
  const base = workshopCohorts.find((c) => c.slug === slug);
  if (!base) return undefined;
  const extra = bySlug[slug];
  if (!extra) return undefined;
  return { ...base, slug, ...extra };
}
