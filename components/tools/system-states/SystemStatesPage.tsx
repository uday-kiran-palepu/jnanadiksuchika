"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CompassBeaconSvg } from "./CompassBeaconSvg";

const JUMP_SECTIONS = [
  { id: "not-found-beacon", label: "404 Beacon", icon: "explore" },
  { id: "empty-states", label: "Empty States", icon: "inbox" },
  { id: "skeleton-shimmers", label: "Skeleton UI", icon: "hourglass_empty" },
  { id: "form-resilience", label: "Form Failover", icon: "sync_problem" },
  { id: "mobile-frames", label: "Mobile 390", icon: "smartphone" },
] as const;

const DEBUG_PAYLOAD = {
  traceId: "jdk-states-7f3a9c",
  route: "/tools/raft-consensus-split-brain-visualizer",
  httpStatus: 404,
  fallback: "compass-beacon-v2",
  region: "ap-south-1",
  timestamp: "2025-09-17T14:22:01Z",
};

function MobileFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-space-sm">
      <span className="font-caption text-caption uppercase tracking-wider text-outline font-semibold">{title}</span>
      <div
        className="w-full max-w-[390px] rounded-[2rem] border-4 border-inverse-surface/80 bg-surface-container-lowest shadow-xl overflow-hidden"
        style={{ minHeight: "420px" }}
      >
        <div className="h-7 bg-inverse-surface/90 flex items-center justify-center gap-1">
          <span className="w-12 h-1 rounded-full bg-surface-dim/40" />
        </div>
        <div className="p-space-sm overflow-y-auto max-h-[520px]">{children}</div>
      </div>
    </div>
  );
}

export function SystemStatesPage() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [emptyVariant, setEmptyVariant] = useState<"a" | "b">("a");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const copyPayload = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(DEBUG_PAYLOAD, null, 2));
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("idle");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin border-b border-outline-variant/30">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"
          >
            <Link className="hover:text-primary transition-colors flex items-center gap-space-xs" href="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href="/tools">Tools</Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">System States &amp; Fallback Archetypes</span>
          </nav>
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-caption text-caption uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Design RFC • JDK-UI-STATE-04
            </span>
            <span className="font-caption text-caption text-outline hidden sm:inline">
              WCAG 2.2 AA • M3 Tokens • Last reviewed 17 Sep 2025
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-surface-container-low/50 via-surface to-background pt-space-xl pb-space-lg px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-sm max-w-4xl">
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-primary px-space-sm py-space-xs rounded bg-surface-container-highest w-fit">
              Jnana Diksuchika • RESILIENCY PATTERN LIBRARY
            </span>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-tight">
              System States, Error Resiliency &amp; Fallback Archetypes
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
              Canonical UI states for empty catalogs, loading skeletons, graceful 404 beacons, and redundant contact
              fallbacks — aligned with our engineering tools hub and bilingual learner journeys.
            </p>
          </div>

          <div className="w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-md p-space-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[22px]">search</span>
            <input
              ref={searchRef}
              className="flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              id="states-search-input"
              placeholder="Search state archetypes… (⌘/Ctrl+K)"
              type="search"
            />
            <kbd className="hidden sm:inline font-caption text-caption text-outline px-1.5 py-0.5 rounded bg-surface-container-high">
              ⌘K
            </kbd>
          </div>

          <nav
            aria-label="Jump to section"
            className="flex flex-wrap gap-space-xs sticky top-[72px] z-20 py-space-xs bg-surface/90 backdrop-blur-md rounded-xl px-space-sm border border-outline-variant/20"
          >
            {JUMP_SECTIONS.map((s) => (
              <button
                key={s.id}
                className="inline-flex items-center gap-1 px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-primary-fixed/50 hover:text-primary transition-all"
                type="button"
                onClick={() => scrollToSection(s.id)}
              >
                <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section
        className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface scroll-mt-28"
        id="not-found-beacon"
      >
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          <div className="flex flex-col gap-space-md">
            <span className="font-caption text-caption uppercase tracking-widest text-secondary font-bold">
              Archetype 01 • Directional 404
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">404 Beacon with Compass Recovery</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              When a tool slug or KB article is missing, surface a calm beacon — not a dead end. Offer search, hub
              links, and a copyable debug payload for faculty triage.
            </p>
            <div className="rounded-xl bg-surface-container-low p-space-md font-mono text-body-sm text-on-surface-variant overflow-x-auto">
              <pre className="whitespace-pre-wrap">{JSON.stringify(DEBUG_PAYLOAD, null, 2)}</pre>
            </div>
            <button
              className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-title-md text-title-md w-fit hover:bg-primary-container transition-colors"
              type="button"
              onClick={copyPayload}
            >
              <span className="material-symbols-outlined text-[20px]">
                {copyState === "copied" ? "check" : "content_copy"}
              </span>
              {copyState === "copied" ? "Payload copied" : "Copy debug payload"}
            </button>
          </div>
          <div className="rounded-2xl bg-surface-container-lowest shadow-lg p-space-xl flex flex-col items-center text-center gap-space-md border border-outline-variant/20">
            <CompassBeaconSvg className="w-40 h-40 animate-pulse" />
            <span className="font-headline-sm text-headline-sm text-on-surface">Route not charted on this grid</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              The consensus visualizer or document you requested may have moved. Use the compass hub to re-orient.
            </p>
            <div className="flex flex-wrap gap-space-sm justify-center">
              <Link
                className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-title-md text-title-md"
                href="/tools"
              >
                Return to Tools Hub
              </Link>
              <Link
                className="px-space-md py-2 rounded-lg bg-surface-container-high text-primary font-title-md text-title-md"
                href="/knowledge-base"
              >
                Knowledge Base
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-low scroll-mt-28"
        id="empty-states"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
            <div>
              <span className="font-caption text-caption uppercase tracking-widest text-secondary font-bold">
                Archetype 02 • Empty catalog
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs">Empty States A / B</h2>
            </div>
            <div className="flex gap-space-xs p-1 rounded-lg bg-surface-container-lowest">
              <button
                className={`px-space-md py-1 rounded-md font-label-md text-label-md ${emptyVariant === "a" ? "bg-primary text-on-primary" : "text-on-surface-variant"}`}
                type="button"
                onClick={() => setEmptyVariant("a")}
              >
                Variant A — Zero results
              </button>
              <button
                className={`px-space-md py-1 rounded-md font-label-md text-label-md ${emptyVariant === "b" ? "bg-primary text-on-primary" : "text-on-surface-variant"}`}
                type="button"
                onClick={() => setEmptyVariant("b")}
              >
                Variant B — Filter too narrow
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {emptyVariant === "a" ? (
              <div className="rounded-xl bg-surface-container-lowest p-space-xl flex flex-col items-center text-center gap-space-sm shadow-sm">
                <span className="material-symbols-outlined text-[48px] text-outline">search_off</span>
                <span className="font-title-lg text-title-lg text-on-surface font-semibold">No tools matched your query</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Try broader keywords like &quot;Raft&quot;, &quot;eBPF&quot;, or reset category filters.
                </p>
                <Link className="text-primary font-semibold font-body-sm text-body-sm" href="/tools">
                  Browse all utilities
                </Link>
              </div>
            ) : (
              <div className="rounded-xl bg-surface-container-lowest p-space-xl flex flex-col items-center text-center gap-space-sm shadow-sm border border-secondary-container/30">
                <span className="material-symbols-outlined text-[48px] text-secondary">tune</span>
                <span className="font-title-lg text-title-lg text-on-surface font-semibold">Filters exclude every item</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Distributed + GATE filters together leave zero matches. Widen one axis.
                </p>
                <button
                  className="px-space-md py-2 rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md"
                  type="button"
                >
                  Reset filters
                </button>
              </div>
            )}
            <div className="rounded-xl bg-surface-container p-space-lg flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">Implementation notes</span>
              <ul className="list-disc pl-space-md font-body-sm text-body-sm text-on-surface-variant space-y-1">
                <li>Always pair empty states with a single primary action and one secondary escape hatch.</li>
                <li>Preserve filter chips above the fold so users understand why the list is empty.</li>
                <li>Log anonymized search terms for KB gap analysis (RFC JDK-TELEM-12).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface scroll-mt-28"
        id="skeleton-shimmers"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
          <span className="font-caption text-caption uppercase tracking-widest text-secondary font-bold">
            Archetype 03 • Loading skeleton
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Skeleton Shimmers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl bg-surface-container-lowest p-space-md flex flex-col gap-space-sm shadow-sm">
                <div className="h-32 rounded-lg bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                <div className="h-4 w-3/4 rounded bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                <div className="h-3 w-full rounded bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                <div className="h-3 w-5/6 rounded bg-shimmer bg-[length:200%_100%] animate-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container scroll-mt-28"
        id="form-resilience"
      >
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <span className="font-caption text-caption uppercase tracking-widest text-secondary font-bold">
              Archetype 04 • Form failure
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Transmission Error &amp; Redundant Fallbacks</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Mirror the contact page failover pattern: inline error banner, channel grid, and retry — never a silent
              failure.
            </p>
            {!formSubmitted ? (
              <form
                className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md"
                onSubmit={handleFormSubmit}
              >
                <label className="font-label-md text-label-md font-semibold" htmlFor="states-email">
                  Faculty ping (simulated)
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md"
                  id="states-email"
                  name="email"
                  placeholder="mentor@lab.local"
                  required
                  type="email"
                />
                <button
                  className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-title-md text-title-md w-fit"
                  type="submit"
                >
                  Simulate POST /api/inquiry
                </button>
              </form>
            ) : (
              <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="p-space-md rounded-lg bg-error-container text-on-error-container flex gap-space-sm">
                  <span className="material-symbols-outlined text-error">cloud_off</span>
                  <div>
                    <span className="font-title-md text-title-md font-semibold text-error">Edge gateway timeout (504)</span>
                    <p className="font-body-sm text-body-sm mt-1">Upstream handshake to api.jnanadiksuchika.org failed.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  {[
                    { label: "Telegram", value: "@JnanaDiksuchikaOps" },
                    { label: "WhatsApp", value: "+91 94942 81290" },
                    { label: "PGP Email", value: "ops@jnanadiksuchika.org" },
                  ].map((ch) => (
                    <div key={ch.label} className="p-space-sm rounded-lg bg-surface-container-low">
                      <span className="font-caption text-caption text-outline uppercase">{ch.label}</span>
                      <span className="font-title-md text-title-md text-primary block">{ch.value}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-title-md text-title-md w-fit"
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                >
                  Retry transmission
                </button>
              </div>
            )}
          </div>
          <div className="rounded-xl bg-inverse-surface text-inverse-on-surface p-space-lg flex flex-col gap-space-sm">
            <span className="font-caption text-caption uppercase text-secondary-fixed-dim">Redundancy matrix</span>
            <table className="w-full font-body-sm text-body-sm text-left">
              <thead>
                <tr className="text-surface-dim border-b border-tertiary/30">
                  <th className="py-2 pr-2">Channel</th>
                  <th className="py-2 pr-2">SLA</th>
                  <th className="py-2">Priority</th>
                </tr>
              </thead>
              <tbody className="text-surface-bright/90">
                <tr>
                  <td className="py-2">Web form</td>
                  <td>P95 &lt; 4h</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td className="py-2">Telegram ops</td>
                  <td>&lt; 30m</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td className="py-2">Voice / WhatsApp</td>
                  <td>Business hours</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
            <Link className="text-primary-fixed mt-space-sm font-semibold" href="/contact">
              Full contact failover spec →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-low scroll-mt-28"
        id="mobile-frames"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
          <div>
            <span className="font-caption text-caption uppercase tracking-widest text-secondary font-bold">
              Archetype 05 • Mobile 390px
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs">Compact viewport showcases</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <MobileFrame title="404 @ 390px">
              <div className="flex flex-col items-center text-center gap-space-sm py-space-md">
                <CompassBeaconSvg className="w-24 h-24" />
                <span className="font-title-md text-title-md font-semibold">Not found</span>
                <Link className="text-primary text-body-sm font-semibold" href="/tools">Tools hub</Link>
              </div>
            </MobileFrame>
            <MobileFrame title="Skeleton @ 390px">
              <div className="flex flex-col gap-space-sm py-space-sm">
                <div className="h-20 rounded-lg bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                <div className="h-3 w-full rounded bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                <div className="h-3 w-4/5 rounded bg-shimmer bg-[length:200%_100%] animate-shimmer" />
              </div>
            </MobileFrame>
          </div>
        </div>
      </section>

      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-primary-fixed/30 border-t border-primary/20">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-caption text-caption uppercase tracking-widest text-primary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">description</span>
              RFC footer callout
            </span>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Propose changes via{" "}
              <strong>JDK-RFC-UI-STATES</strong> on the faculty discourse. Include Figma links, telemetry IDs, and
              accessibility audit notes before merging to production routes.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md shadow-md shrink-0"
            href="/contact"
          >
            <span className="material-symbols-outlined text-[20px]">forum</span>
            Open RFC thread
          </Link>
        </div>
      </section>
    </div>
  );
}
