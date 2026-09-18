"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

function floatToBits(value: number): { bits: string; sign: string; exp: string; mant: string; kind: string } {
  const buf = new ArrayBuffer(4);
  new Float32Array(buf)[0] = value;
  const u = new Uint32Array(buf)[0];
  const bits = u.toString(2).padStart(32, "0");
  const sign = bits[0];
  const exp = bits.slice(1, 9);
  const mant = bits.slice(9);
  let kind = "normal";
  if (exp === "00000000") kind = mant === "0".repeat(23) ? "zero" : "denormal";
  if (exp === "11111111") kind = mant === "0".repeat(23) ? "infinity" : "NaN";
  return { bits, sign, exp, mant, kind };
}

export function IeeeInspector({ tool }: { tool: HubTool }) {
  const [input, setInput] = useState("0.1");
  const num = Number(input);
  const parsed = useMemo(() => {
    if (!Number.isFinite(num) && input.trim().toLowerCase() !== "nan") {
      if (input.trim().toLowerCase() === "infinity" || input.trim() === "∞") {
        return floatToBits(Infinity);
      }
      return null;
    }
    return floatToBits(Number.isNaN(num) ? NaN : num);
  }, [input, num]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <label className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
          <span className="font-title-md text-title-md font-semibold">Decimal / special value</span>
          <input
            className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low font-mono focus:outline-none focus:ring-2 focus:ring-primary"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="0.1, -2, NaN, Infinity"
          />
          <span className="font-caption text-caption text-on-surface-variant">
            Inspects IEEE-754 binary32 (single precision).
          </span>
        </label>
        <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
          {parsed ? (
            <div className="flex flex-col gap-space-md">
              <BitRow label="Sign (1)" value={parsed.sign} color="bg-error" />
              <BitRow label="Exponent (8)" value={parsed.exp} color="bg-primary" />
              <BitRow label="Mantissa (23)" value={parsed.mant} color="bg-secondary-container" />
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Classification: <strong className="text-on-surface">{parsed.kind}</strong>
              </p>
              <p className="font-mono text-[12px] break-all text-on-surface-variant">{parsed.bits}</p>
            </div>
          ) : (
            <p className="font-body-md text-body-md text-error">Enter a finite number, NaN, or Infinity.</p>
          )}
        </div>
      </div>
    </ToolWorkbench>
  );
}

function BitRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="font-label-sm text-label-sm uppercase text-outline mb-1">{label}</p>
      <div className="flex flex-wrap gap-0.5">
        {value.split("").map((b, i) => (
          <span
            key={`${label}-${i}`}
            className={`w-5 h-6 text-[11px] font-mono flex items-center justify-center rounded-sm text-white ${color} ${
              b === "0" ? "opacity-40" : "opacity-100"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
