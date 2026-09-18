export type ToolCategoryId =
  | "all"
  | "distributed"
  | "kernel"
  | "memory"
  | "gate"
  | "runtime";

export const categoryFilters: {
  id: ToolCategoryId;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "All Tools", count: 8 },
  { id: "distributed", label: "Distributed Protocols", count: 3 },
  { id: "kernel", label: "Linux & eBPF", count: 1 },
  { id: "memory", label: "Memory & Bits", count: 2 },
  { id: "gate", label: "GATE CS Systems", count: 1 },
  { id: "runtime", label: "WebAssembly Runtimes", count: 1 },
];

export type HubTool = {
  id: string;
  slug: string;
  categories: string;
  variant: "raft-hero" | "standard" | "wide" | "half";
  title: string;
  titleTe: string;
  summary: string;
  cta: string;
};

export const RAFT_VISUALIZER_SLUG = "raft-consensus-split-brain-visualizer";

export const hubTools: HubTool[] = [
  {
    id: "raft",
    slug: RAFT_VISUALIZER_SLUG,
    categories: "distributed runtime",
    variant: "raft-hero",
    title: "Raft Consensus & Split-Brain Visualizer",
    titleTe: "రాఫ్ట్ కన్సెన్సస్ మరియు స్ప్లిట్-బ్రెయిన్ సిమ్యులేటర్",
    summary:
      "Simulate 3 to 7 node Raft clusters, inject asymmetric network partitions, force leader elections, and observe heartbeat log commits in real-time.",
    cta: "Launch Simulator",
  },
  {
    id: "ebpf",
    slug: "ebpf-tracepoint-xdp-scratchpad",
    categories: "kernel",
    variant: "standard",
    title: "eBPF Tracepoint & XDP Scratchpad",
    titleTe: "eBPF ట్రేస్‌పాయింట్ మరియు ఫిల్టర్ స్క్రాచ్‌ప్యాడ్",
    summary:
      "Write, compile, and dry-run clang/eBPF bytecode filters against synthetic pcap streams with live CPU cycle estimations.",
    cta: "Open Scratchpad",
  },
  {
    id: "subnet",
    slug: "subnet-cidr-masking-calculator",
    categories: "distributed memory",
    variant: "standard",
    title: "Subnet & CIDR RFC 1918 Masking",
    titleTe: "సబ్‌నెట్ మరియు నెట్‌వర్క్ మాస్కింగ్ కాలిక్యులేటర్",
    summary:
      "Deconstruct IPv4 CIDR blocks, broadcast boundaries, and host counts with binary bit-level grouping.",
    cta: "Calculate Subnet",
  },
  {
    id: "lsm",
    slug: "lsm-btree-write-amplification",
    categories: "distributed gate",
    variant: "standard",
    title: "LSM-Tree vs B+Tree Write Amplification",
    titleTe: "స్టోరేజ్ ఇంజిన్ రైట్ యాంప్లిఫికేషన్ కాలిక్యులేటర్",
    summary:
      "Estimate write amplification, read penalties, and compaction cost across LSM and B+Tree shaped workloads.",
    cta: "Run Analysis",
  },
  {
    id: "ieee754",
    slug: "ieee754-floating-point-inspector",
    categories: "memory",
    variant: "standard",
    title: "IEEE 754 Floating-Point Inspector",
    titleTe: "ఫ్లోటింగ్ పాయింట్ మరియు బిట్-లెవల్ ఇన్స్‌పెక్టర్",
    summary:
      "Decompose 32-bit single precision into sign, exponent, and mantissa — including NaN and denormal edges.",
    cta: "Inspect Bits",
  },
  {
    id: "amdahl",
    slug: "amdahls-law-speedup-bench",
    categories: "gate",
    variant: "half",
    title: "Amdahl's Law & Speedup Modeling Bench",
    titleTe: "అమ్‌డాల్స్ లా మరియు స్పీడప్ బెంచ్‌మార్క్",
    summary:
      "Model parallel speedup limits as serial fraction and core count change — exam-ready intuition.",
    cta: "Model Speedup",
  },
  {
    id: "glossary",
    slug: "telugu-systems-glossary",
    categories: "distributed kernel",
    variant: "half",
    title: "Telugu Technical Mental Models Glossary",
    titleTe: "తెలుగు సాంకేతిక పదకోశం",
    summary:
      "Searchable index of systems concepts illuminated through precise Telugu analogies.",
    cta: "Search Glossary",
  },
  {
    id: "protobuf",
    slug: "json-protobuf-flatbuffers-profiler",
    categories: "distributed memory runtime",
    variant: "wide",
    title: "JSON vs Protobuf vs FlatBuffers Payload Profiler",
    titleTe: "JSON vs Protobuf vs FlatBuffers ప్రొఫైలర్",
    summary:
      "Compare approximate byte footprint and parse cost across common wire formats for the same logical payload.",
    cta: "Profile Payload",
  },
];

export const toolSlugs = hubTools.map((t) => t.slug);

export function getHubTool(slug: string): HubTool | undefined {
  return hubTools.find((t) => t.slug === slug);
}
