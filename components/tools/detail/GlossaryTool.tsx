"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

const ENTRIES = [
  {
    term: "Quorum",
    te: "పంచాయతీ మెజారిటీ",
    blurb: "Majority agreement required before a value is considered committed.",
  },
  {
    term: "WAL",
    te: "చిట్టా పద్దు",
    blurb: "Write-ahead log: durable intent recorded before applying state mutations.",
  },
  {
    term: "Backpressure",
    te: "కాలువ నిండి ఉప్పొంగడం",
    blurb: "Slow consumers force producers to pause or shed load instead of buffering unboundedly.",
  },
  {
    term: "Jitter",
    te: "సమయ హెచ్చుతగ్గులు",
    blurb: "Variance in latency or timer firing that destabilizes protocols if ignored.",
  },
  {
    term: "LSM-Tree",
    te: "పొరలుగా రాసే చెట్టు",
    blurb: "Log-structured merge tree optimized for writes via batched, leveled compaction.",
  },
  {
    term: "Two-Phase Commit",
    te: "రెండు దశల ఒప్పందం",
    blurb: "Coordinator asks prepare, then commit/abort — classic distributed atomicity protocol.",
  },
  {
    term: "Split-brain",
    te: "రెండు నాయకులు",
    blurb: "Partition causes two groups to believe they are independently authoritative.",
  },
  {
    term: "Idempotency",
    te: "మళ్లీ చేసినా ఒకటే ఫలితం",
    blurb: "Repeating an operation yields the same effect — essential for safe retries.",
  },
];

export function GlossaryTool({ tool }: { tool: HubTool }) {
  const [q, setQ] = useState("");
  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return ENTRIES;
    return ENTRIES.filter(
      (e) =>
        e.term.toLowerCase().includes(needle) ||
        e.te.includes(needle) ||
        e.blurb.toLowerCase().includes(needle)
    );
  }, [q]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="flex flex-col gap-space-md">
        <input
          className="w-full max-w-xl px-space-md py-space-sm rounded-lg bg-surface-container-lowest shadow-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search quorum, WAL, jitter..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {visible.map((e) => (
            <article
              key={e.term}
              className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm"
            >
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{e.term}</h2>
              <p className="font-caption text-caption text-secondary font-semibold mt-1">{e.te}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                {e.blurb}
              </p>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="font-body-md text-body-md text-on-surface-variant">No matches.</p>
        )}
        <Link
          href="/knowledge-base/telugu-systems-mental-models-glossary"
          className="font-title-md text-title-md text-primary font-semibold inline-flex items-center gap-1 w-fit"
        >
          Read the full glossary article
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </ToolWorkbench>
  );
}
