"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

const SAMPLE = `SEC("xdp")
int xdp_drop_syn(struct xdp_md *ctx) {
  // educational pseudo-program — dry-run only
  void *data = (void *)(long)ctx->data;
  void *data_end = (void *)(long)ctx->data_end;
  if (data + 54 > data_end) return XDP_PASS;
  // pretend TCP SYN check
  return XDP_DROP;
}`;

export function EbpfScratchpad({ tool }: { tool: HubTool }) {
  const [code, setCode] = useState(SAMPLE);
  const [ran, setRan] = useState(false);

  const report = useMemo(() => {
    if (!ran) return null;
    const lines = code.split("\n").length;
    const hasSec = /SEC\s*\(/.test(code);
    const hasReturn = /return\s+XDP_/.test(code);
    const cycles = 120 + lines * 18 + (hasReturn ? 40 : 90);
    const verdict =
      hasSec && hasReturn
        ? "Verifier dry-run: ACCEPT (educational)"
        : "Verifier dry-run: REJECT — missing SEC() or XDP return";
    return { cycles, verdict, lines };
  }, [code, ran]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-gutter">
        <div className="lg:col-span-3 p-space-md rounded-xl bg-inverse-surface">
          <div className="flex items-center justify-between mb-2">
            <span className="font-caption text-caption text-surface-dim">xdp_scratch.bpf.c</span>
            <button
              type="button"
              className="px-space-md py-space-xs rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold"
              onClick={() => setRan(true)}
            >
              Dry-run
            </button>
          </div>
          <textarea
            className="w-full min-h-[280px] bg-transparent text-primary-fixed-dim font-mono text-[13px] leading-relaxed focus:outline-none resize-y"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setRan(false);
            }}
            spellCheck={false}
          />
        </div>
        <div className="lg:col-span-2 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
          <h2 className="font-title-lg text-title-lg font-bold text-on-surface">Dry-run report</h2>
          {report ? (
            <>
              <p className="font-body-md text-body-md text-on-surface">{report.verdict}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Est. instruction budget: <strong>{report.cycles}</strong> · Lines: {report.lines}
              </p>
              <p className="font-caption text-caption text-outline">
                This is a teaching stub — it does not invoke a real eBPF verifier or load bytecode.
              </p>
            </>
          ) : (
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Edit the pseudo-program and click Dry-run for an educational accept/reject hint.
            </p>
          )}
          <a
            href="/courses/linux-kernel-ebpf-observability"
            className="font-title-md text-title-md text-primary font-semibold inline-flex items-center gap-1"
          >
            Continue in Kernel course
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </ToolWorkbench>
  );
}
