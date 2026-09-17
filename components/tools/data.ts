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
  { id: "all", label: "All Tools", count: 12 },
  { id: "distributed", label: "Distributed Protocols", count: 4 },
  { id: "kernel", label: "Linux & eBPF", count: 3 },
  { id: "memory", label: "Memory & Bits", count: 2 },
  { id: "gate", label: "GATE CS Systems", count: 2 },
  { id: "runtime", label: "WebAssembly Runtimes", count: 1 },
];

export type HubTool = {
  id: string;
  slug?: string;
  categories: string; // space-separated for filter match
  variant: "raft-hero" | "standard" | "wide" | "half";
};

export const RAFT_VISUALIZER_SLUG = "raft-consensus-split-brain-visualizer";

export const toolSlugs = [RAFT_VISUALIZER_SLUG];

export const hubTools: HubTool[] = [
  {
    id: "raft",
    slug: RAFT_VISUALIZER_SLUG,
    categories: "distributed runtime",
    variant: "raft-hero",
  },
  { id: "ebpf", categories: "kernel", variant: "standard" },
  { id: "subnet", categories: "distributed memory", variant: "standard" },
  { id: "lsm", categories: "distributed gate", variant: "standard" },
  { id: "ieee754", categories: "memory", variant: "standard" },
  { id: "amdahl", categories: "gate", variant: "half" },
  { id: "glossary", categories: "distributed kernel", variant: "half" },
  { id: "protobuf", categories: "distributed memory runtime", variant: "wide" },
];
