"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

const SAMPLE_JSON = `{
  "userId": 18422,
  "email": "ops@bigswitch.dev",
  "roles": ["sre", "mentor"],
  "prefs": { "locale": "te", "theme": "system" }
}`;

export function ProtobufProfiler({ tool }: { tool: HubTool }) {
  const [payload, setPayload] = useState(SAMPLE_JSON);

  const stats = useMemo(() => {
    const jsonBytes = new TextEncoder().encode(payload).length;
    // Educational approximations for the same logical object
    const protobufBytes = Math.max(24, Math.round(jsonBytes * 0.42));
    const flatBuffersBytes = Math.max(28, Math.round(jsonBytes * 0.48));
    const jsonParse = Math.round(jsonBytes * 0.09);
    const pbParse = Math.round(protobufBytes * 0.04);
    const fbParse = Math.round(flatBuffersBytes * 0.02);
    return { jsonBytes, protobufBytes, flatBuffersBytes, jsonParse, pbParse, fbParse };
  }, [payload]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <label className="p-space-md rounded-xl bg-inverse-surface flex flex-col gap-2">
          <span className="font-caption text-caption text-surface-dim">Logical payload (JSON text)</span>
          <textarea
            className="w-full min-h-[260px] bg-transparent text-primary-fixed-dim font-mono text-[13px] focus:outline-none resize-y"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            spellCheck={false}
          />
        </label>
        <div className="flex flex-col gap-space-sm">
          <Row name="JSON" bytes={stats.jsonBytes} parse={stats.jsonParse} note="Text + field names" />
          <Row
            name="Protobuf"
            bytes={stats.protobufBytes}
            parse={stats.pbParse}
            note="Approx schema-coded wire size"
          />
          <Row
            name="FlatBuffers"
            bytes={stats.flatBuffersBytes}
            parse={stats.fbParse}
            note="Approx zero-copy friendly layout"
          />
          <p className="font-caption text-caption text-on-surface-variant mt-2">
            Byte and parse-cost figures are teaching estimates from payload length — not a real
            protobuf compiler output.
          </p>
        </div>
      </div>
    </ToolWorkbench>
  );
}

function Row({
  name,
  bytes,
  parse,
  note,
}: {
  name: string;
  bytes: number;
  parse: number;
  note: string;
}) {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-md">
      <div>
        <p className="font-title-md text-title-md font-bold text-on-surface">{name}</p>
        <p className="font-caption text-caption text-on-surface-variant">{note}</p>
      </div>
      <div className="text-right">
        <p className="font-headline-sm text-headline-sm text-primary font-bold">{bytes} B</p>
        <p className="font-label-sm text-label-sm text-outline">~{parse} µs parse*</p>
      </div>
    </div>
  );
}
