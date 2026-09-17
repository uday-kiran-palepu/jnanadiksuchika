"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { RAFT_VISUALIZER_SLUG } from "@/components/tools/data";

const toolHref = `/tools/${RAFT_VISUALIZER_SLUG}`;

const toc = [
  { id: "section-overview", n: "01", label: "Overview of the In-Browser Sandbox" },
  { id: "section-step1", n: "02", label: "Step 1: Initializing the 5-Node Topology" },
  { id: "section-step2", n: "03", label: "Step 2: Simulating Partitions (Split-Brain)" },
  { id: "section-step3", n: "04", label: "Step 3: Inspecting WAL & Quorum ACKs" },
  { id: "section-telugu-mental-model", n: "05", label: "తెలుగు రూపకల్పన: గ్రామ సర్పంచ్ ఎన్నిక పోలిక", highlight: true },
  { id: "section-step4", n: "06", label: "Step 4: Recovering & Log Reconciliation" },
  { id: "section-faq", n: "07", label: "Troubleshooting & FAQs" },
];

export function RaftVisualizerGuide() {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-20 z-40 w-full h-1 bg-surface-container-high">
        <div className="h-full bg-secondary-container transition-all duration-75" style={{ width: `${progress}%` }} />
      </div>

      <section className="w-full bg-surface-container-lowest/80 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-wrap items-center justify-between gap-y-space-xs">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
              <span className="material-symbols-outlined text-[15px]">home</span>
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" href="/knowledge-base">Knowledge Base</Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold truncate max-w-[260px] sm:max-w-md">
              Raft Consensus &amp; Split-Brain Visualizer Guide
            </span>
          </nav>
        </div>
      </section>

      <header className="w-full bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-background pb-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-space-lg">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-lg">
            <div className="flex-1 max-w-4xl flex flex-col gap-space-sm">
              <span className="px-space-sm py-1 rounded-md bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold w-fit">
                HELP GUIDES &amp; PLATFORM HOW-TOS
              </span>
              <p className="font-title-md text-title-md text-secondary font-semibold tracking-wide">
                రాఫ్ట్ కన్సెన్సస్ &amp; స్ప్లిట్-బ్రెయిన్ విజువలైజర్ వినియోగ విధానం
              </p>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                How to Use the Client-Side Raft Consensus &amp; Split-Brain Visualizer
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Simulate network partitions, force leader elections, inspect replicated WAL entries, and test consensus
                invariants in your browser.
              </p>
              <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-low/70 flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
                    VR
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">Venkatesh Rao</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Infrastructure Fellow</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button
                    className="h-9 px-space-sm rounded-lg bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface transition-all flex items-center gap-1 font-label-md text-label-md"
                    type="button"
                    onClick={copyLink}
                  >
                    <span className="material-symbols-outlined text-[16px]">link</span>
                    {copied ? "Copied" : "Copy Link"}
                  </button>
                  <button
                    className={`h-9 w-9 rounded-lg transition-all flex items-center justify-center ${bookmarked ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container-highest text-on-surface hover:bg-primary hover:text-on-primary"}`}
                    type="button"
                    aria-label="Bookmark"
                    onClick={() => setBookmarked((b) => !b)}
                  >
                    <span className="material-symbols-outlined text-[18px]">bookmark</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-80 w-full p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-space-sm">
              <h2 className="font-headline-sm text-headline-sm text-surface-bright">WebAssembly Node Sandbox</h2>
              <p className="font-body-sm text-body-sm text-surface-dim leading-snug">
                Run an isolated 5-node cluster with zero backend dependencies.
              </p>
              <Link
                className="mt-space-xs inline-flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md font-bold shadow-sm hover:bg-secondary transition-all"
                href={toolHref}
              >
                Launch Raft Simulator
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-space-md">
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
              <h3 className="font-title-md text-title-md text-on-surface font-bold uppercase tracking-wider mb-space-sm">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    className={`px-space-sm py-1.5 rounded hover:bg-surface-container-high hover:text-primary transition-colors flex items-center gap-2 ${item.highlight ? "bg-secondary-fixed/50 text-secondary font-semibold" : ""}`}
                    href={`#${item.id}`}
                  >
                    <span className="text-caption font-caption text-primary">{item.n}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-8 flex flex-col gap-space-xl">
            <ArticleSection id="section-overview" n="01" title="Overview of the In-Browser Sandbox">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The Raft simulator runs five deterministic state machine nodes in your browser. No remote webhooks are
                dispatched — partitions and election timeouts are fully client-side.
              </p>
              <div className="p-space-md rounded-xl bg-primary-container text-on-primary-container shadow-sm">
                <span className="font-title-md text-title-md font-bold">Raft Fundamental Invariant</span>
                <p className="font-body-sm text-body-sm mt-1 opacity-95">
                  Election safety: at most one leader per term. Commits require majority quorum{" "}
                  <code className="px-1 py-0.5 rounded bg-black/20 font-mono text-label-sm">Q = floor(N / 2) + 1</code>.
                </p>
              </div>
            </ArticleSection>

            <ArticleSection id="section-step1" n="02" title="Step 1: Initializing the 5-Node Cluster Topology">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Open the visualizer to see nodes A–E. Use <strong>Reset Topology</strong> to return to Term 4 with Node C as
                leader. Followers display log index #142 when healthy.
              </p>
            </ArticleSection>

            <ArticleSection id="section-step2" n="03" title="Step 2: Simulating Asymmetric Network Partitions (Split-Brain)">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Click <strong>Inject Net Partition</strong> to split {"{A,B}"} from {"{C,D,E}"}. The minority partition
                cannot commit new writes; the majority side retains quorum.
              </p>
            </ArticleSection>

            <ArticleSection id="section-step3" n="04" title="Step 3: Inspecting Replicated WAL and Quorum ACKs">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Use <strong>Propose KV Write</strong> to append entries to the WAL table. Watch quorum ACK counts change
                when partitioned (3/5 vs 5/5).
              </p>
            </ArticleSection>

            <article
              className="p-space-lg rounded-xl bg-secondary-fixed/30 flex flex-col gap-space-md"
              id="section-telugu-mental-model"
            >
              <h2 className="font-headline-sm text-headline-sm text-on-secondary-fixed font-bold">
                గ్రామ సర్పంచ్ ఎన్నిక మరియు పంచాయతీ కోరం పోలిక
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                పంచాయతీలో 5 సభ్యులుంటే కనీసం 3 మంది సంతకాలు తప్పనిసరి — ఇది Raft quorumకు సమానం. గ్రామం రెండుగా
                విడిపోయినప్పుడు మైనారిటీ తీర్మానాలు చెల్లవు; మెజారిటీ వైపు commits అమలవుతాయి.
              </p>
            </article>

            <ArticleSection id="section-step4" n="06" title="Step 4: Recovering from Partitions & Log Reconciliation">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Toggle partition off again to heal the network. The leader replicates authoritative log entries; minority
                orphans are truncated on merge.
              </p>
            </ArticleSection>

            <ArticleSection id="section-faq" n="07" title="Troubleshooting & FAQs">
              <details className="group p-space-md rounded-xl bg-surface-container-low shadow-sm">
                <summary className="font-title-md text-title-md font-bold text-on-surface list-none cursor-pointer flex justify-between">
                  Why does a candidate keep timing out?
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                  Likely a split vote — increase election timer jitter or heal partitions before forcing elections.
                </p>
              </details>
            </ArticleSection>

            <div className="p-space-lg rounded-2xl bg-gradient-to-br from-primary via-primary-container to-surface-container-high text-on-primary shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <h3 className="font-headline-md text-headline-md font-extrabold text-surface-bright">
                Ready to break and heal the cluster?
              </h3>
              <Link
                className="shrink-0 px-space-lg py-space-md rounded-xl bg-secondary-container text-on-secondary-container font-title-md font-bold shadow-md hover:bg-secondary transition-all inline-flex items-center gap-space-xs"
                href={toolHref}
              >
                Launch Raft Simulator
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              </Link>
            </div>
          </main>
        </div>
      </section>

      <section className="w-full bg-surface-container-low/60 py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link
            className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all"
            href="/courses/distributed-systems-go-raft"
          >
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Distributed Systems with Go &amp; Raft</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">10-week cohort track.</p>
          </Link>
          <Link className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" href="/knowledge-base">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Telugu Mental Models Glossary</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Quorum &amp; Two-Phase Commit analogies.</p>
          </Link>
          <Link className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" href="/workshops/systems-programming-distributed-storage">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Systems Programming Workshop</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Hybrid lab cohort.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ArticleSection({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-space-md" id={id}>
      <div className="flex items-center gap-space-xs">
        <span className="w-8 h-8 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold font-title-md">
          {n}
        </span>
        <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
      </div>
      {children}
    </article>
  );
}
