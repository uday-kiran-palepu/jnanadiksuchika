"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categoryFilters, hubTools, type ToolCategoryId } from "./data";
import { RaftClusterMiniSvg } from "./RaftClusterMiniSvg";

import { pick, useLocale } from "@/lib/i18n/LanguageProvider";
import { RAFT_VISUALIZER_SLUG } from "./data";

function toolHref(id: string) {
  const tool = hubTools.find((t) => t.id === id);
  return tool ? `/tools/${tool.slug}` : "/tools";
}

const activePill =
  "px-space-md py-space-xs rounded-lg font-title-md text-title-md bg-primary-container text-on-primary-container shadow-sm transition-all flex items-center gap-space-xs";
const inactivePill =
  "px-space-md py-space-xs rounded-lg font-title-md text-title-md text-on-surface-variant hover:bg-surface-container-high transition-all flex items-center gap-space-xs";

const toolSearchBlob: Record<string, string> = {
  raft: "raft consensus split brain cluster",
  ebpf: "ebpf xdp kernel tracepoint",
  subnet: "subnet cidr ipv4 masking",
  lsm: "lsm b+tree rocksdb amplification",
  ieee754: "ieee floating point bits",
  amdahl: "amdahl speedup gate parallel",
  glossary: "telugu glossary quorum wal",
  protobuf: "json protobuf flatbuffers wire",
};

export function ToolsHub() {
  const { locale } = useLocale();
  const [filter, setFilter] = useState<ToolCategoryId>("all");
  const [search, setSearch] = useState("");

  const visibleIds = useMemo(() => {
    const q = search.trim().toLowerCase();
    return hubTools
      .filter((t) => {
        const matchCat =
          filter === "all" || t.categories.split(" ").includes(filter);
        if (!matchCat) return false;
        if (!q) return true;
        const blob = `${t.id} ${t.categories} ${toolSearchBlob[t.id] ?? ""}`;
        return blob.includes(q);
      })
      .map((t) => t.id);
  }, [filter, search]);

  const show = (id: string) => visibleIds.includes(id);

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <div
          aria-hidden
          className="absolute top-48 right-10 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-space-md lg:pt-space-xl pb-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
            >
              <Link
                className="hover:text-primary transition-colors flex items-center gap-space-xs"
                href="/"
              >
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Home</span>
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-semibold">
                Free Diagnostic &amp; Engineering Tools
              </span>
            </nav>
            <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/80 text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm backdrop-blur-md flex-wrap">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span className="font-semibold tracking-wide">ONLINE UTILITIES</span>
              <span className="text-outline-variant">|</span>
              <span className="text-on-surface-variant">LAT 17.3850° N, 78.4867° E</span>
              <span className="text-outline-variant hidden sm:inline">|</span>
              <span className="text-secondary font-semibold hidden sm:inline">
                ZERO SIGN-UP REQUIRED
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="px-space-sm py-space-xs rounded bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold tracking-wider uppercase">
                Bare-Metal Diagnostics
              </span>
              <span className="font-caption text-caption text-secondary font-bold tracking-widest uppercase">
                {pick(locale, "BENCHMARK SUITE", "బెంచ్‌మార్క్ సూట్")}
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl">
              Precision Engineering Tools &amp;{" "}
              <span className="text-primary">Mental Model Simulators</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-xs leading-relaxed">
              Free, open-source architectural diagnostics, interactive protocol
              visualizers, and systems calculators engineered for practicing software
              builders and students. No paywalls, zero telemetry traps, completely
              client-side.
            </p>
          </div>
          <TrustStrip />
          <Link
            href="/tools/system-states"
            className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-lowest border border-primary-fixed/40 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
              <div>
                <span className="font-title-md text-title-md text-on-surface font-semibold block">
                  {pick(
                    locale,
                    "System States, Error Resiliency & Fallback Archetypes",
                    "సిస్టమ్ స్థితులు & ఫాల్‌బ్యాక్ ఆర్కిటైప్‌లు"
                  )}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {pick(locale, "404, empty states, skeletons, form failover — RFC spec", "404, ఖాళీ స్థితులు, స్కెలిటన్ లోడింగ్")}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <div className="pt-space-xl flex items-center justify-between gap-space-md flex-wrap">
            <div
              className="flex items-center gap-space-xs flex-wrap p-space-xs rounded-xl bg-surface-container-low shadow-sm"
              id="categoryFilterBar"
            >
              {categoryFilters.map((cat) => (
                <button
                  key={cat.id}
                  className={filter === cat.id ? activePill : inactivePill}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-space-xs py-0.5 rounded-full font-label-sm text-label-sm ${
                      filter === cat.id
                        ? "bg-surface-container-lowest/30 text-on-primary"
                        : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative flex items-center w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px] pointer-events-none">
                filter_list
              </span>
              <input
                className="w-full pl-10 pr-4 py-space-xs rounded-lg bg-surface-container-lowest text-on-surface text-body-sm font-body-sm shadow-sm focus:outline-none placeholder:text-on-surface-variant/70"
                id="toolSearchInput"
                placeholder="Filter by keyword (e.g. Raft, eBPF)..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter" id="toolsGrid">
          {show("raft") && <RaftHeroCard />}
          {show("ebpf") && <EbpfCard />}
          {show("subnet") && <SubnetCard />}
          {show("lsm") && <LsmCard />}
          {show("ieee754") && <IeeeCard />}
          {show("amdahl") && <AmdahlCard />}
          {show("glossary") && <GlossaryCard />}
          {show("protobuf") && <ProtobufCard />}
        </div>
      </div>

      <ViewportStrip />
      <OssBanner />
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: "memory", bg: "bg-primary-fixed text-primary", t: "Bare-Metal Wasm", s: "100% Client-Side Evaluation" },
    { icon: "shield", bg: "bg-secondary-fixed text-secondary", t: "Zero Telemetry", s: "No trackers, no storage logs" },
    { icon: "verified", bg: "bg-tertiary-fixed text-tertiary", t: "RFC-Compliant", s: "Strict specs & deterministic state" },
    { icon: "translate", bg: "bg-surface-container-high text-primary", t: "Dual Dialect", s: "English + తెలుగు Explanations" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-lg">
      {items.map((item) => (
        <div
          key={item.t}
          className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg}`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-on-surface font-semibold">
              {item.t}
            </span>
            <span className="font-caption text-caption text-on-surface-variant">
              {item.s}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function RaftHeroCard() {
  return (
    <div
      className="tool-card lg:col-span-8 group rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
      data-category="distributed runtime"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary-container" />
      <div>
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="px-space-sm py-space-xs rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold tracking-wide">
              Featured Tool
            </span>
            <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-tertiary-fixed font-label-sm text-label-sm">
              WebAssembly Engine
            </span>
            <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
              Interactive Cluster
            </span>
          </div>
          <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">
            LATENCY: 0.18ms
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Raft Consensus &amp; Split-Brain Visualizer
                </h2>
                <p className="font-caption text-caption text-secondary font-semibold">
                  రాఫ్ట్ కన్సెన్సస్ మరియు స్ప్లిట్-బ్రెయిన్ సిమ్యులేటర్
                </p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs leading-relaxed">
              Simulate 3 to 7 node Raft clusters, inject asymmetric network partitions,
              force leader elections, and observe heartbeat log commits in real-time.
            </p>
          </div>
          <div className="lg:col-span-5 p-space-md rounded-xl bg-surface-container flex flex-col items-center justify-center">
            <RaftClusterMiniSvg />
            <div className="flex items-center justify-between w-full pt-space-xs font-caption text-caption text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                Term 44 Leader
              </span>
              <span className="text-error font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-error" />
                Partition Active
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-lg mt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
        <div className="flex items-center gap-space-md text-on-surface-variant font-caption text-caption flex-wrap">
          <span className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">lan</span>
            RFC Raft #0.2
          </span>
          <span className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">
              sync_alt
            </span>
            Deterministic Heartbeats
          </span>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md shadow-sm hover:bg-secondary transition-all hover:translate-x-0.5"
          href={`/tools/${RAFT_VISUALIZER_SLUG}`}
        >
          <span>Launch Simulator</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function ToolCardShell({
  colSpan,
  children,
  footer,
  category,
}: {
  colSpan: string;
  category: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div
      className={`tool-card ${colSpan} group rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between`}
      data-category={category}
    >
      <div>{children}</div>
      <div className="pt-space-md flex items-center justify-between">{footer}</div>
    </div>
  );
}

function EbpfCard() {
  return (
    <ToolCardShell
      category="kernel"
      colSpan="lg:col-span-4"
      footer={
        <>
          <span className="font-caption text-caption text-on-surface-variant">
            eBPF Verifier AST
          </span>
          <Link
            href={toolHref("ebpf")}
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-primary group-hover:text-secondary transition-colors"
          >
            Open Scratchpad
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </>
      }
    >
      <div className="flex items-center justify-between gap-space-xs pb-space-sm">
        <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
          Linux 6.8 Verified
        </span>
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[20px]">terminal</span>
        </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
        eBPF Tracepoint &amp; XDP Scratchpad
      </h3>
      <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
        eBPF ట్రేస్‌పాయింట్ మరియు ఫిల్టర్ స్క్రాచ్‌ప్యాడ్
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Write, compile, and dry-run clang/eBPF bytecode filters against synthetic pcap
        streams with live CPU cycle estimations.
      </p>
      <div className="mt-space-md p-space-sm rounded-lg bg-inverse-surface text-inverse-on-surface font-mono text-[12px] space-y-1">
        <div className="flex items-center justify-between text-surface-dim font-caption text-caption">
          <span>xdp_drop_syn.bpf.c</span>
          <span className="text-secondary-fixed">WASM Clang</span>
        </div>
        <p className="text-primary-fixed-dim">SEC(&quot;xdp&quot;) int filter(...) {"{"}</p>
        <p className="pl-3 text-secondary-fixed">if (tcp) return XDP_DROP;</p>
        <p className="text-primary-fixed-dim">{"}"}</p>
      </div>
    </ToolCardShell>
  );
}

function SubnetCard() {
  return (
    <ToolCardShell
      category="distributed memory"
      colSpan="lg:col-span-4"
      footer={
        <>
          <span className="font-caption text-caption text-on-surface-variant">
            RFC 1918 / RFC 4632
          </span>
          <Link
            href={toolHref("subnet")}
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-primary group-hover:text-secondary transition-colors"
          >
            Calculate Subnet
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </>
      }
    >
      <BadgeRow badge="Instant Bitwise Engine" icon="hub" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
        Subnet &amp; CIDR RFC 1918 Masking
      </h3>
      <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
        సబ్‌నెట్ మరియు నెట్‌వర్క్ మాస్కింగ్ కాలిక్యులేటర్
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Deconstruct IPv4/IPv6 CIDR blocks, broadcast boundaries, and VPC route table
        partitions with binary bit-level color grouping.
      </p>
      <BitBar />
    </ToolCardShell>
  );
}

function LsmCard() {
  return (
    <ToolCardShell
      category="distributed gate"
      colSpan="lg:col-span-4"
      footer={
        <>
          <span className="font-caption text-caption text-on-surface-variant">
            Calculates IOPS Budget
          </span>
          <Link
            href={toolHref("lsm")}
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-primary group-hover:text-secondary transition-colors"
          >
            Run Analysis
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </>
      }
    >
      <BadgeRow badge="Storage Telemetry" icon="layers" secondary />
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
        LSM-Tree vs B+Tree Write Amplification
      </h3>
      <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
        స్టోరేజ్ ఇంజిన్ రైట్ యాంప్లిఫికేషన్ కాలిక్యులేటర్
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Calculate write amplification factor (WAF), read latency penalties, and
        compactions cost across RocksDB vs InnoDB workloads.
      </p>
      <div className="grid grid-cols-2 gap-space-xs mt-space-md">
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
          <span className="font-caption text-caption text-on-surface-variant">
            LSM (LevelDB)
          </span>
          <span className="font-headline-sm text-headline-sm text-primary font-bold">
            WAF 8.4x
          </span>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
          <span className="font-caption text-caption text-on-surface-variant">
            B+Tree (InnoDB)
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
            WAF 32.1x
          </span>
        </div>
      </div>
    </ToolCardShell>
  );
}

function IeeeCard() {
  return (
    <ToolCardShell
      category="memory"
      colSpan="lg:col-span-4"
      footer={
        <>
          <span className="font-caption text-caption text-on-surface-variant">
            Denormal &amp; NaN Detector
          </span>
          <Link
            href={toolHref("ieee754")}
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-primary group-hover:text-secondary transition-colors"
          >
            Inspect Bits
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </>
      }
    >
      <BadgeRow badge="Binary Diagnostics" icon="find_replace" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
        IEEE 754 Floating-Point Inspector
      </h3>
      <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
        ఫ్లోటింగ్ పాయింట్ మరియు బిట్-లెవల్ ఇన్స్‌పెక్టర్
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Visually decompose 32-bit single and 64-bit double precision mantissa, exponent
        biases, and denormalized zero edge cases.
      </p>
    </ToolCardShell>
  );
}

function AmdahlCard() {
  return (
    <div
      className="tool-card lg:col-span-6 group rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
      data-category="gate"
    >
      <div>
        <BadgeRow badge="Theoretical CS Benchmark" icon="speed" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
          Amdahl&apos;s Law &amp; Speedup Modeling Bench
        </h3>
        <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
          అమ్‌డాల్స్ లా మరియు స్పీడప్ బెంచ్‌మార్క్
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Model parallel processing speedup limits, pipelining hazards, and cache miss
          penalties with instantaneous interactive asymptotic curves.
        </p>
      </div>
      <div className="pt-space-lg flex items-center justify-between">
        <span className="font-caption text-caption text-on-surface-variant">
          Instruction Pipeline Hazards
        </span>
        <Link
          href={toolHref("amdahl")}
          className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-all"
        >
          Model Speedup
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function GlossaryCard() {
  return (
    <div
      className="tool-card lg:col-span-6 group rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
      data-category="distributed kernel"
    >
      <div>
        <BadgeRow badge="Bilingual Pedagogy" icon="auto_stories" secondary />
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
          Telugu Technical Mental Models Glossary Quick-Look
        </h3>
        <p className="font-caption text-caption text-secondary font-semibold pb-space-xs">
          తెలుగు సాంకేతిక పదకోశం &amp; గ్రామీణ సారూప్య భావనలు
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Searchable index of 500+ systems concepts illuminated through relatable Telugu
          analogies.
        </p>
        <div className="mt-space-md flex flex-wrap gap-space-xs">
          {["Quorum (పంచాయతీ మెజారిటీ)", "WAL (చిట్టా పద్దు)", "Backpressure"].map(
            (t) => (
              <span
                key={t}
                className="px-space-sm py-space-xs rounded-md bg-surface-container text-on-surface font-label-md text-label-md"
              >
                {t}
              </span>
            )
          )}
        </div>
      </div>
      <div className="pt-space-lg flex items-center justify-between">
        <span className="font-caption text-caption text-on-surface-variant">
          500+ Curated Idiomatic Cards
        </span>
        <Link
          className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md hover:bg-secondary transition-all"
          href={toolHref("glossary")}
        >
          Search Glossary
          <span className="material-symbols-outlined text-[18px]">search</span>
        </Link>
      </div>
    </div>
  );
}

function ProtobufCard() {
  return (
    <div
      className="tool-card lg:col-span-12 group rounded-xl bg-surface-container-lowest p-space-lg shadow-md hover:shadow-xl transition-all flex flex-col lg:flex-row items-center justify-between gap-space-lg"
      data-category="distributed memory runtime"
    >
      <div className="flex items-start gap-space-md max-w-3xl">
        <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined text-[28px]">compress</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            JSON vs Protobuf vs FlatBuffers Payload Profiler
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Compare byte footprint, wire serialization delays, and parsing CPU cycles
            across raw JSON, FlatBuffers, and gRPC Protobuf payloads.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
        <div className="p-space-sm rounded-lg bg-surface-container-low text-center min-w-[140px]">
          <span className="font-caption text-caption text-on-surface-variant block">
            Avg Footprint Reduction
          </span>
          <span className="font-headline-sm text-headline-sm text-secondary font-extrabold">
            -68.4%
          </span>
        </div>
        <Link
          href={toolHref("protobuf")}
          className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-all"
        >
          Profile Payload
          <span className="material-symbols-outlined text-[18px]">bolt</span>
        </Link>
      </div>
    </div>
  );
}

function BadgeRow({
  badge,
  icon,
  secondary,
}: {
  badge: string;
  icon: string;
  secondary?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-space-xs pb-space-sm">
      <span
        className={`px-space-sm py-space-xs rounded-full font-label-sm text-label-sm font-semibold ${
          secondary
            ? "bg-secondary-fixed text-on-secondary-fixed"
            : "bg-primary-fixed text-primary"
        }`}
      >
        {badge}
      </span>
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          secondary ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
        }`}
      >
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </span>
    </div>
  );
}

function BitBar() {
  return (
    <div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
      <div className="flex justify-between font-caption text-caption text-on-surface-variant">
        <span>10.0.0.0 / 22 (1,022 Hosts)</span>
        <span className="font-semibold text-primary">255.255.252.0</span>
      </div>
      <div className="grid grid-cols-8 gap-0.5 pt-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-2 rounded-xs bg-primary" />
        ))}
        <div className="h-2 rounded-xs bg-secondary-container" />
        <div className="h-2 rounded-xs bg-outline-variant" />
      </div>
    </div>
  );
}

function ViewportStrip() {
  return (
    <div className="w-full bg-surface-container-high/60 py-space-sm border-0">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm font-caption text-caption text-on-surface-variant flex-wrap">
          <span className="flex items-center gap-1 text-primary font-semibold">
            <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
            Viewing Desktop Grid (1200px+)
          </span>
        </div>
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-secondary-container" />
          Wasm Execution Engine: 64-bit Thread Isolated
        </div>
      </div>
    </div>
  );
}

function OssBanner() {
  return (
    <div className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-start gap-space-md max-w-2xl">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold">
                Community-Driven Pedagogy
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                Have an engineering utility or simulator to share?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every Jnana Diksuchika utility is open-source, deterministic, and
                executes strictly on-device in the user&apos;s browser.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto shrink-0">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container shadow-sm transition-all"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
              Explore on GitHub
            </a>
            <Link
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-high text-on-tertiary-fixed font-title-md text-title-md hover:bg-surface-container-highest transition-all"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[20px]">edit_document</span>
              Suggest a Tool via RFC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
