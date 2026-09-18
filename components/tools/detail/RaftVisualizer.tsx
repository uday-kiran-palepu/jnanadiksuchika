"use client";

import Link from "next/link";
import { forwardRef, useCallback, useRef, useState } from "react";

type LogLine = { html: string; className: string };

type WalRow = {
  index: number;
  term: number;
  command: string;
  quorum: string;
  committed: string;
};

const initialWal: WalRow[] = [
  {
    index: 140,
    term: 3,
    command: "INIT_CLUSTER (peers=5)",
    quorum: "5/5 ACKs",
    committed: "YES",
  },
  {
    index: 141,
    term: 4,
    command: "SET lock=true",
    quorum: "5/5 ACKs",
    committed: "YES",
  },
  {
    index: 142,
    term: 4,
    command: "SET x = 42",
    quorum: "3/5 ACKs",
    committed: "YES",
  },
];

const initialLogs: LogLine[] = [
  {
    className: "text-surface-dim",
    html:
      '[00:14.281] <span class="text-secondary-fixed">Node C [LEADER]:</span> Heartbeat sent to all peers (Term: 4)',
  },
  {
    className: "text-surface-dim",
    html:
      '[00:14.285] <span class="text-primary-fixed">Node A, B, D, E</span> responded with AppendEntriesResponse (success: true)',
  },
  {
    className: "text-secondary-container",
    html: "[00:14.410] Quorum reached on log index #142 across nodes [A, B, C]",
  },
  {
    className: "text-primary-fixed-dim",
    html:
      "[00:14.412] State machine applied log #142 in 0.42ms (client ack sent)",
  },
];

function timestamp() {
  const now = new Date();
  return `[00:${now.getSeconds().toString().padStart(2, "0")}.${now
    .getMilliseconds()
    .toString()
    .padStart(3, "0")}]`;
}

export function RaftVisualizer() {
  const [term, setTerm] = useState(4);
  const [logIndex, setLogIndex] = useState(142);
  const [isPartitioned, setIsPartitioned] = useState(false);
  const [isLeaderAlive, setIsLeaderAlive] = useState(true);
  const [teluguAudio, setTeluguAudio] = useState(true);
  const [wal, setWal] = useState<WalRow[]>(initialWal);
  const [logs, setLogs] = useState<LogLine[]>(initialLogs);
  const streamRef = useRef<HTMLDivElement>(null);

  const addLog = useCallback((msg: string, type: "dim" | "warn" | "err" | "info") => {
    const className =
      type === "warn"
        ? "text-secondary-container"
        : type === "err"
          ? "text-error"
          : type === "info"
            ? "text-primary-fixed-dim"
            : "text-surface-dim";
    setLogs((prev) => [...prev, { className, html: `${timestamp()} ${msg}` }]);
    requestAnimationFrame(() => {
      if (streamRef.current) {
        streamRef.current.scrollTop = streamRef.current.scrollHeight;
      }
    });
  }, []);

  const resetTopology = () => {
    setIsPartitioned(false);
    setIsLeaderAlive(true);
    setTerm(4);
    setLogIndex(142);
    setWal(initialWal);
    setLogs(initialLogs);
    addLog("[TOPOLOGY RESET] Cluster initialized to baseline state (Term 4, 5 Nodes Up)", "info");
  };

  const togglePartition = () => {
    const next = !isPartitioned;
    setIsPartitioned(next);
    if (next) {
      addLog(
        "[CHAOS NETSPLIT] Network severed! Nodes {A, B} isolated from Quorum {C, D, E}",
        "warn"
      );
      addLog(
        "[TELUGU] నెట్‌వర్క్ విభజించబడింది. A, B నోడ్లు మైనారిటీలో ఉన్నాయి.",
        "info"
      );
    } else {
      addLog("[RECOVERY] Network partition healed. Cluster rejoined to 5/5 peers.", "info");
    }
  };

  const toggleKillLeader = () => {
    const next = !isLeaderAlive;
    setIsLeaderAlive(next);
    if (!next) {
      addLog("[FATAL] Node C crashed (SIGKILL). Heartbeat pulse expired!", "err");
      addLog("[ELECTION TICK] Followers election timer incrementing...", "warn");
    } else {
      addLog(`[HEAL] Node C recovered as Leader under Term ${term}`, "info");
    }
  };

  const proposeKv = () => {
    if (!isLeaderAlive) {
      addLog("[REJECTED] Client write failed: No active leader in cluster!", "err");
      return;
    }
    const nextIndex = logIndex + 1;
    setLogIndex(nextIndex);
    const val = Math.floor(Math.random() * 1000);
    setWal((prev) => [
      ...prev,
      {
        index: nextIndex,
        term,
        command: `SET val_${nextIndex} = ${val}`,
        quorum: isPartitioned ? "3/5 ACKs (Majority)" : "5/5 ACKs",
        committed: "YES",
      },
    ]);
    addLog(`[PROPOSAL] Client issued AppendEntries for Index #${nextIndex}`, "dim");
    addLog(
      `[QUORUM] Commit satisfied: ${isPartitioned ? "Nodes C, D, E (3/5)" : "All 5 nodes acknowledged"}`,
      "warn"
    );
    addLog(`[STATE MACHINE] Applied index #${nextIndex} to KV Store`, "info");
  };

  const electionTimeout = () => {
    const t = term + 1;
    setTerm(t);
    addLog(`[TIMEOUT] Election timer fired! Advancing to Term ${t}`, "warn");
    addLog(`[VOTE] RequestVote broadcast. Term ${t} accepted by Quorum.`, "info");
  };

  const exportState = () => {
    const state = {
      cluster: "Big Switch Raft Engine v2.4",
      term,
      leader: isLeaderAlive ? "Node C" : null,
      commitIndex: logIndex,
      partitioned: isPartitioned,
      nodes: ["Node A", "Node B", "Node C", "Node D", "Node E"],
    };
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `raft-cluster-state-term-${term}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addLog("[EXPORT] Cluster configuration state dumped to JSON.", "info");
  };

  const partitionBadgeClass = isPartitioned
    ? "font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-semibold"
    : "font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-medium";

  return (
    <div className="flex flex-col w-full">
      <BreadcrumbBar />
      <MetaBar
        teluguAudio={teluguAudio}
        onReset={resetTopology}
        onExport={exportState}
        onToggleAudio={() => {
          setTeluguAudio((v) => !v);
          addLog(
            `[AUDIO] Telugu narration ${!teluguAudio ? "ACTIVE" : "MUTED"}`,
            "info"
          );
        }}
      />
      <ExplainerSection term={term} isLeaderAlive={isLeaderAlive} />
      <section className="w-full py-space-lg">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-md">
          <div className="relative w-full rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden p-space-md lg:p-space-lg">
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="font-title-md text-title-md text-on-surface">
                  Dynamic Mesh Topology Simulator
                </span>
                <span className={partitionBadgeClass} id="partition-status-badge">
                  {isPartitioned
                    ? "Split-Brain Partition Active: {A,B} vs {C,D,E}"
                    : "Network: Unified (No Partition)"}
                </span>
              </div>
            </div>
            <div
              className="relative w-full h-[400px] lg:h-[420px] rounded-xl bg-surface-container-low flex items-center justify-center overflow-hidden"
              id="topology-stage"
            >
              <TopologyGrid />
              {isPartitioned && (
                <div
                  className="absolute inset-y-0 left-[38%] w-1 flex flex-col items-center justify-center z-20 pointer-events-none"
                  id="split-brain-divider"
                >
                  <div className="h-full w-0.5 bg-error border-l-2 border-dashed border-error" />
                  <div className="absolute top-4 px-space-sm py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm shadow-md whitespace-nowrap">
                    ⚡ Partition Barrier (Split-Brain Cut)
                  </div>
                </div>
              )}
              <NodeCard
                className={`left-[14%] top-[18%] ${isPartitioned ? "opacity-60" : ""}`}
                id="node-a"
                label="Node A"
                role="Follower"
              />
              <NodeCard
                className={`left-[14%] top-[62%] ${isPartitioned ? "opacity-60" : ""}`}
                id="node-b"
                label="Node B"
                role="Follower"
              />
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-space-md rounded-2xl bg-surface-container-lowest shadow-xl z-30 flex flex-col gap-space-xs transition-all ${
                  !isLeaderAlive ? "grayscale opacity-40" : ""
                }`}
                id="node-c"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isLeaderAlive && (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-container" />
                      </span>
                    )}
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Node C
                    </span>
                  </div>
                  {isLeaderAlive ? (
                    <span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      LEADER
                    </span>
                  ) : (
                    <span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold">
                      CRASHED
                    </span>
                  )}
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  Heartbeat Broadcaster • 10.0.0.3
                </div>
                <div className="flex items-center justify-between text-body-sm font-body-sm bg-surface-container-low px-space-xs py-1 rounded-lg">
                  <span>
                    Term: <strong className="text-secondary font-bold">{term}</strong>
                  </span>
                  <span>Committed: #{logIndex}</span>
                </div>
              </div>
              <NodeCard
                className="right-[14%] top-[18%]"
                id="node-d"
                label="Node D"
                role="Follower"
              />
              <NodeCard
                className="right-[14%] top-[62%]"
                id="node-e"
                label="Node E"
                role="Follower"
              />
            </div>
            <ChaosControls
              onElection={electionTimeout}
              onKillLeader={toggleKillLeader}
              onKv={proposeKv}
              onPartition={togglePartition}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            <WalPanel logIndex={logIndex} wal={wal} />
            <TerminalPanel logs={logs} ref={streamRef} onClear={() => setLogs([])} />
          </div>
        </div>
      </section>
      <RelatedSection />
    </div>
  );
}

function BreadcrumbBar() {
  return (
    <section className="w-full bg-surface-container-low py-space-sm">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-wrap items-center justify-between gap-y-space-xs text-on-surface-variant font-label-md text-label-md">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs">
            <Link className="hover:text-primary transition-colors flex items-center gap-space-xs" href="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline">/</span>
            <Link className="hover:text-primary transition-colors" href="/tools">
              Tools
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold truncate max-w-[220px] sm:max-w-none">
              Raft Consensus &amp; Split-Brain Visualizer
            </span>
          </nav>
          <div className="flex items-center gap-space-sm text-caption font-caption bg-surface-container px-space-sm py-space-xs rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Interactive Canvas v2.4.0 • Distributed Simulation Sandbox</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaBar({
  teluguAudio,
  onToggleAudio,
  onReset,
  onExport,
}: {
  teluguAudio: boolean;
  onToggleAudio: () => void;
  onReset: () => void;
  onExport: () => void;
}) {
  return (
    <section className="w-full bg-surface-container-lowest shadow-sm py-space-md">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
            Raft Consensus &amp; Split-Brain Simulator{" "}
            <span className="font-label-md text-label-md bg-surface-container-high text-primary px-space-xs py-0.5 rounded ml-space-xs">
              v2.4
            </span>
          </h1>
          <p className="font-title-md text-title-md text-tertiary">
            రాఫ్ట్ కన్సెన్సస్ మరియు స్ప్లిట్-బ్రెయిన్ సిమ్యులేటర్
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm">
          <ToolbarButton icon="restart_alt" label="Reset Topology" onClick={onReset} />
          <ToolbarButton
            icon="file_download"
            label="Export State (JSON)"
            onClick={onExport}
            hideSm
          />
          <button
            className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-secondary-container text-on-tertiary hover:bg-secondary transition-all text-body-sm font-body-sm shadow-sm"
            type="button"
            onClick={onToggleAudio}
          >
            <span className="material-symbols-outlined text-[18px]">
              {teluguAudio ? "volume_up" : "volume_off"}
            </span>
            <span className="font-semibold">
              Telugu Narration: {teluguAudio ? "ON" : "OFF"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ToolbarButton({
  icon,
  label,
  onClick,
  hideSm,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  hideSm?: boolean;
}) {
  return (
    <button
      className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm font-body-sm shadow-sm"
      type="button"
      onClick={onClick}
    >
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
      <span className={hideSm ? "hidden md:inline" : ""}>{label}</span>
    </button>
  );
}

function ExplainerSection({
  term,
  isLeaderAlive,
}: {
  term: number;
  isLeaderAlive: boolean;
}) {
  return (
    <section className="w-full bg-surface-container-low py-space-md">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
        <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row gap-space-md items-start">
          <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[24px]">account_tree</span>
          </div>
          <div className="flex flex-col gap-space-xs flex-1">
            <p className="font-body-md text-body-md text-on-surface leading-snug">
              Raft guarantees safety through strictly serialized leader election, monotonic
              log replication, and commitment rule invariants.
            </p>
            <p className="font-body-sm text-body-sm text-secondary leading-relaxed bg-surface-container-low p-space-xs px-space-sm rounded-lg">
              <span className="font-bold">కోరం (Quorum) సూత్రం:</span> సగానికి పైగా మెజారిటీ
              (N/2 + 1) ఉంటేనే ఏ నిర్ణయమైనా ఆమోదించబడుతుంది.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          <StatGauge icon="hub" label="Cluster Size" value="5 Nodes" />
          <StatGauge icon="schedule" label="Current Term" value={`Term ${term}`} valueClass="text-secondary-container" />
          <StatGauge
            icon="star"
            label="Cluster Leader"
            value={isLeaderAlive ? "Node C" : "DISRUPTED"}
            valueClass={isLeaderAlive ? "text-primary" : "text-error"}
          />
          <StatGauge icon="verified" label="Quorum Invariant" value="3/5 Nodes (60%)" />
        </div>
      </div>
    </section>
  );
}

function StatGauge({
  icon,
  label,
  value,
  valueClass = "text-on-surface",
}: {
  icon: string;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-caption text-caption uppercase text-on-surface-variant">
          {label}
        </span>
        <span className={`font-headline-sm text-headline-sm ${valueClass}`}>{value}</span>
      </div>
      <span className="material-symbols-outlined text-primary text-[24px]">{icon}</span>
    </div>
  );
}

function TopologyGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
          <path
            className="text-outline-variant"
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect fill="url(#grid-pattern)" height="100%" width="100%" />
    </svg>
  );
}

function NodeCard({
  id,
  label,
  role,
  className,
}: {
  id: string;
  label: string;
  role: string;
  className: string;
}) {
  return (
    <div
      className={`absolute w-52 p-space-sm rounded-xl bg-surface-container-lowest shadow-md z-10 flex flex-col gap-1 transition-all duration-300 ${className}`}
      id={id}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="font-title-md text-title-md text-on-surface font-bold">
            {label}
          </span>
        </div>
        <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-primary">
          {role}
        </span>
      </div>
      <div className="flex items-center justify-between text-caption font-caption text-tertiary">
        <span>Log Index: #142</span>
        <span className="text-primary font-medium">State: UP</span>
      </div>
    </div>
  );
}

function ChaosControls({
  onPartition,
  onKillLeader,
  onKv,
  onElection,
}: {
  onPartition: () => void;
  onKillLeader: () => void;
  onKv: () => void;
  onElection: () => void;
}) {
  const actions = [
    { icon: "call_split", title: "Inject Net Partition", sub: "Split: {A,B} vs {C,D,E}", onClick: onPartition, danger: false },
    { icon: "block", title: "Kill Current Leader", sub: "Crash Node C", onClick: onKillLeader, danger: true },
    { icon: "edit_note", title: "Propose KV Write", sub: "SET x = 42", onClick: onKv, danger: false },
    { icon: "timer", title: "Trigger Election Timeout", sub: "Randomized [150ms-300ms]", onClick: onElection, danger: false },
  ];
  return (
    <div className="mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
        {actions.map((a) => (
          <button
            key={a.title}
            className="group flex items-center gap-space-xs p-space-sm rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-sm transition-all text-left"
            type="button"
            onClick={a.onClick}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                a.danger
                  ? "bg-error-container text-error group-hover:bg-error group-hover:text-on-error"
                  : "bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-on-primary"
              } transition-colors`}
            >
              <span className="material-symbols-outlined text-[20px]">{a.icon}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-title-md text-title-md font-semibold truncate">
                {a.title}
              </span>
              <span className="font-caption text-caption text-on-surface-variant truncate">
                {a.sub}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function WalPanel({ wal, logIndex }: { wal: WalRow[]; logIndex: number }) {
  return (
    <div className="lg:col-span-6 rounded-2xl bg-surface-container-lowest shadow-md p-space-md flex flex-col gap-space-sm">
      <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[20px]">database</span>
        Replicated Raft WAL (Write-Ahead Log)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr className="text-on-surface-variant bg-surface-container-low font-label-sm text-label-sm uppercase">
              <th className="p-space-xs rounded-l">Index</th>
              <th className="p-space-xs">Term</th>
              <th className="p-space-xs">Command Entry</th>
              <th className="p-space-xs">Quorum</th>
              <th className="p-space-xs rounded-r">Committed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {wal.map((row) => (
              <tr key={row.index} className="hover:bg-surface-container-low/50">
                <td className="p-space-xs font-semibold text-primary">#{row.index}</td>
                <td className="p-space-xs">Term {row.term}</td>
                <td className="p-space-xs font-mono text-caption text-on-surface">
                  {row.command}
                </td>
                <td className="p-space-xs text-caption">
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary">
                    {row.quorum}
                  </span>
                </td>
                <td className="p-space-xs text-primary font-bold">{row.committed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-caption font-caption text-tertiary pt-space-xs bg-surface-container-low p-space-xs rounded-lg">
        <span>Commit Index: #{logIndex}</span>
        <span>State Machine: Healthy</span>
      </div>
    </div>
  );
}

const TerminalPanel = forwardRef<
  HTMLDivElement,
  { logs: LogLine[]; onClear: () => void }
>(function TerminalPanel({ logs, onClear }, ref) {
  return (
    <div className="lg:col-span-6 rounded-2xl bg-inverse-surface shadow-md p-space-md flex flex-col gap-space-xs text-inverse-on-surface">
      <div className="flex items-center justify-between pb-space-xs">
        <span className="font-label-md text-label-md text-surface-dim font-mono">
          raft-cluster-telemetry.log
        </span>
        <button
          className="text-caption font-caption text-surface-dim hover:text-surface-bright transition-colors"
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
      <div
        className="font-mono text-caption text-surface-bright flex flex-col gap-1.5 h-[175px] overflow-y-auto pr-space-xs leading-relaxed select-text"
        id="terminal-stream"
        ref={ref}
      >
        {logs.map((line, i) => (
          <div key={i} className={line.className} dangerouslySetInnerHTML={{ __html: line.html }} />
        ))}
      </div>
    </div>
  );
});

function RelatedSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">
          Deepen Your Systems Mastery Beyond Simulations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link
            className="rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-space-lg flex flex-col gap-space-md"
            href="/courses/distributed-systems-go-raft"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Distributed Systems Architecture with Go &amp; Raft
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              10-week cohort-backed track led by Venkatesh Rao.
            </p>
            <span className="text-primary font-semibold flex items-center gap-1">
              View Course Syllabus
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </Link>
          <Link
            className="rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-space-lg flex flex-col gap-space-md"
            href="/workshops/systems-programming-distributed-storage"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Cohort 04: Systems Programming &amp; Distributed Storage
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Hybrid lab at Hyderabad Node with 4K stream access.
            </p>
            <span className="text-secondary-container font-semibold flex items-center gap-1">
              Reserve Lab Station
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </Link>
          <Link
            className="rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-space-lg flex flex-col gap-space-md"
            href="/contact"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Schedule a 1:1 Architecture Review
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              45-minute code reviews with Staff engineers.
            </p>
            <span className="text-primary font-semibold flex items-center gap-1">
              Book Mentor Slot
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
