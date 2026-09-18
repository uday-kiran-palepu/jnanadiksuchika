"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

export function LsmAnalyzer({ tool }: { tool: HubTool }) {
  const [writesGb, setWritesGb] = useState(100);
  const [levels, setLevels] = useState(5);
  const [fanout, setFanout] = useState(10);

  const result = useMemo(() => {
    // Educational approximation: LSM WAF ≈ levels * write factor; B+Tree random update WAF higher
    const lsmWaf = Math.max(2, levels * Math.log10(fanout + 1) * 1.8);
    const btreeWaf = Math.max(8, 20 + writesGb / 25);
    const lsmBytes = writesGb * lsmWaf;
    const btreeBytes = writesGb * btreeWaf;
    return { lsmWaf, btreeWaf, lsmBytes, btreeBytes };
  }, [writesGb, levels, fanout]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
          <Slider
            label={`Logical writes: ${writesGb} GB`}
            min={10}
            max={1000}
            value={writesGb}
            onChange={setWritesGb}
          />
          <Slider
            label={`LSM levels: ${levels}`}
            min={2}
            max={8}
            value={levels}
            onChange={setLevels}
          />
          <Slider
            label={`Level fanout: ${fanout}`}
            min={4}
            max={16}
            value={fanout}
            onChange={setFanout}
          />
        </div>
        <div className="grid grid-cols-2 gap-space-sm">
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
            <p className="font-label-sm text-label-sm text-outline uppercase">LSM (approx WAF)</p>
            <p className="font-headline-md text-headline-md text-primary font-bold mt-2">
              {result.lsmWaf.toFixed(1)}×
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              ~{result.lsmBytes.toFixed(0)} GB physical writes
            </p>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
            <p className="font-label-sm text-label-sm text-outline uppercase">B+Tree (approx WAF)</p>
            <p className="font-headline-md text-headline-md text-on-surface font-bold mt-2">
              {result.btreeWaf.toFixed(1)}×
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              ~{result.btreeBytes.toFixed(0)} GB physical writes
            </p>
          </div>
          <p className="col-span-2 font-caption text-caption text-on-surface-variant">
            Model is pedagogical — production RocksDB/InnoDB WAF depends on compaction policy,
            cache hit rate, and update patterns.
          </p>
        </div>
      </div>
    </ToolWorkbench>
  );
}

function Slider({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-title-md text-title-md font-semibold">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
