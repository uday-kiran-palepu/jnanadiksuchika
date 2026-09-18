"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

export function AmdahlBench({ tool }: { tool: HubTool }) {
  const [serial, setSerial] = useState(0.2);
  const [cores, setCores] = useState(8);

  const speedup = useMemo(() => {
    const s = Math.min(0.99, Math.max(0.01, serial));
    const n = Math.max(1, cores);
    return 1 / (s + (1 - s) / n);
  }, [serial, cores]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">
          <label className="flex flex-col gap-2">
            <span className="font-title-md text-title-md font-semibold">
              Serial fraction (s): {(serial * 100).toFixed(0)}%
            </span>
            <input
              type="range"
              min={0.01}
              max={0.9}
              step={0.01}
              value={serial}
              onChange={(e) => setSerial(Number(e.target.value))}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-title-md text-title-md font-semibold">
              Parallel workers (N): {cores}
            </span>
            <input
              type="range"
              min={1}
              max={64}
              step={1}
              value={cores}
              onChange={(e) => setCores(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface flex flex-col justify-center">
          <p className="font-label-md text-label-md uppercase text-secondary-fixed">Speedup</p>
          <p className="font-display-hero text-[48px] font-extrabold text-surface-bright mt-2">
            {speedup.toFixed(2)}×
          </p>
          <p className="mt-space-md font-body-sm text-body-sm text-surface-dim leading-relaxed">
            S(N) = 1 / (s + (1 − s)/N). As N grows, speedup asymptotes toward 1/s. Use this to
            argue for reducing serial work before buying more cores.
          </p>
        </div>
      </div>
    </ToolWorkbench>
  );
}
