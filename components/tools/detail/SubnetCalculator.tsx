"use client";

import { useMemo, useState } from "react";
import { ToolWorkbench } from "./ToolWorkbench";
import type { HubTool } from "@/components/tools/data";

function ipv4ToInt(ip: string): number | null {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) return null;
  const nums = parts.map((p) => Number(p));
  if (nums.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return null;
  return (((nums[0] << 24) >>> 0) + (nums[1] << 16) + (nums[2] << 8) + nums[3]) >>> 0;
}

function intToIpv4(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

export function SubnetCalculator({ tool }: { tool: HubTool }) {
  const [cidr, setCidr] = useState("10.0.0.0/22");

  const result = useMemo(() => {
    const [ipPart, prefixPart] = cidr.split("/");
    const prefix = Number(prefixPart);
    const base = ipv4ToInt(ipPart ?? "");
    if (base === null || !Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
      return null;
    }
    const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
    const network = (base & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const hostCount = prefix >= 31 ? 0 : broadcast - network - 1;
    return {
      network: intToIpv4(network),
      broadcast: intToIpv4(broadcast),
      mask: intToIpv4(mask),
      hostCount,
      first: prefix >= 31 ? "—" : intToIpv4(network + 1),
      last: prefix >= 31 ? "—" : intToIpv4(broadcast - 1),
    };
  }, [cidr]);

  return (
    <ToolWorkbench tool={tool}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <label className="flex flex-col gap-2 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
          <span className="font-title-md text-title-md font-semibold">CIDR input</span>
          <input
            className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low font-mono text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={cidr}
            onChange={(e) => setCidr(e.target.value)}
            placeholder="10.0.0.0/22"
          />
          <span className="font-caption text-caption text-on-surface-variant">
            Examples: 192.168.1.0/24, 172.16.0.0/12, 10.0.0.0/8
          </span>
        </label>
        <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm grid grid-cols-2 gap-space-md">
          {result ? (
            <>
              <Stat label="Network" value={result.network} />
              <Stat label="Broadcast" value={result.broadcast} />
              <Stat label="Netmask" value={result.mask} />
              <Stat label="Usable hosts" value={String(result.hostCount)} />
              <Stat label="First host" value={result.first} />
              <Stat label="Last host" value={result.last} />
            </>
          ) : (
            <p className="col-span-2 font-body-md text-body-md text-error">
              Enter a valid IPv4 CIDR (e.g. 10.0.0.0/22).
            </p>
          )}
        </div>
      </div>
    </ToolWorkbench>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-label-sm text-label-sm uppercase text-outline">{label}</p>
      <p className="font-title-md text-title-md font-mono text-on-surface mt-1">{value}</p>
    </div>
  );
}
