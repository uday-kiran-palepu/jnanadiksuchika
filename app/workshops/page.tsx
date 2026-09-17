"use client";

import Link from "next/link";
import { useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  trackFilters,
  workshopCohorts,
  type DeliveryMode,
  type TrackFilterId,
  type WorkshopCohort,
} from "@/components/workshops/data";

function urgencyClasses(style: WorkshopCohort["urgencyStyle"]) {
  if (style === "error") {
    return "bg-error-container text-on-error-container";
  }
  if (style === "secondary") {
    return "bg-secondary-fixed text-on-secondary-fixed";
  }
  return "bg-surface-container-high text-on-surface";
}

function CohortCard({ cohort }: { cohort: WorkshopCohort }) {
  const deliveryIsPrimaryFixed = cohort.deliveryIcon === "videocam";

  return (
    <article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-sm">
          <span
            className={`inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded font-label-sm text-label-sm font-semibold ${
              deliveryIsPrimaryFixed
                ? "bg-primary-fixed text-on-primary-fixed"
                : "bg-surface-container-high text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">
              {cohort.deliveryIcon}
            </span>
            {cohort.deliveryBadge}
          </span>
          <span
            className={`inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded font-label-sm text-label-sm font-bold ${urgencyClasses(cohort.urgencyStyle)}`}
          >
            <span className="material-symbols-outlined text-[14px]">
              {cohort.urgencyIcon}
            </span>
            {cohort.urgencyBadge}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
          {cohort.title}
        </h3>
        <div className="flex flex-wrap items-center gap-y-space-xs gap-x-space-md mt-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">
              calendar_today
            </span>
            <span>{cohort.dateRange}</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">
              pace
            </span>
            <span>{cohort.pace}</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm mt-space-md p-space-sm rounded-lg bg-surface-container-low">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline-sm font-bold">
            {cohort.mentorInitial}
          </div>
          <div>
            <p className="font-title-md text-title-md text-on-surface font-semibold">
              {cohort.mentorName}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {cohort.mentorBio}
            </p>
          </div>
        </div>
        <div className="mt-space-md">
          <p className="font-label-md text-label-md text-outline uppercase tracking-wider mb-space-xs">
            Curriculum Core Modules
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface">
            {cohort.modules.map((mod) => (
              <li key={mod} className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                {mod}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between text-on-surface-variant font-caption text-caption">
          <span className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">
              {cohort.envIcon}
            </span>
            {cohort.envNote}
          </span>
          <span className="text-primary font-bold hidden sm:inline">
            {cohort.envTag}
          </span>
        </div>
      </div>
      <div className="mt-space-lg pt-space-md border-t-0 bg-surface-container/30 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
        <div>
          <div className="flex items-baseline gap-space-xs">
            {cohort.id === "cohort-04" && (
              <>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  £
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-extrabold">
                  ∞
                </span>
              </>
            )}
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              {cohort.price}
            </span>
            {cohort.priceStrike && (
              <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
                {cohort.priceStrike}
              </span>
            )}
          </div>
          <p className="font-label-sm text-label-sm text-secondary font-semibold">
            {cohort.priceNote}
          </p>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <Link
            className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-primary hover:bg-primary-fixed hover:text-on-primary-fixed font-title-md text-title-md transition-colors text-center"
            href={`/workshops/${cohort.slug}`}
          >
            {cohort.secondaryLinkLabel}
          </Link>
          <Link
            href="/contact"
            className="px-space-lg py-space-sm rounded-lg bg-secondary-container hover:bg-secondary text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:-translate-y-0.5 transition-all text-center"
          >
            Register &amp; Reserve Seat
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function WorkshopsPage() {
  const [activeTrack, setActiveTrack] = useState<TrackFilterId>("all");
  const [activeMode, setActiveMode] = useState<DeliveryMode>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const modeButtons: { id: DeliveryMode; label: string }[] = [
    { id: "all", label: "All Modes" },
    { id: "offline", label: "Offline Nodes" },
    { id: "live", label: "Live Sync" },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-high/40 via-surface to-background pb-space-xl pt-space-lg">
        <div
          aria-hidden
          className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute top-10 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/5 blur-3xl pointer-events-none"
        />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                explore
              </span>
              జ్ఞాన దిక్సూచిక • SYSTEM INCUBATORS &amp; COHORTS
            </span>
            <span className="font-caption text-caption uppercase text-outline tracking-wider hidden sm:inline">
              / Workshops &amp; Bootcamps
            </span>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
              <span>HYDERABAD LAB NODE (17.3850° N, 78.4867° E) &amp; BENGALURU</span>
            </div>
          </div>
          <div className="max-w-4xl">
            <h1 className="font-headline-lg text-headline-lg lg:text-display-hero text-on-surface tracking-tight mb-space-md">
              High-Velocity Engineering Workshops &amp; Systems Bootcamps
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
              Intensive, production-rigorous cohorts modeled on real terminal practice.
              Zero toy examples — build consensus engines, trace kernel packets, and
              defend architecture before senior practitioners.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-xl">
            {[
              { icon: "terminal", bg: "bg-primary-fixed text-on-primary-fixed", title: "120+ Bare-Metal Hrs", sub: "Real Linux clusters, zero simulation toys" },
              { icon: "groups", bg: "bg-secondary-fixed text-on-secondary-fixed", title: "25-35 Engineers/Cohort", sub: "Strict cap ensuring individual code reviews" },
              { icon: "verified_user", bg: "bg-tertiary-fixed text-on-tertiary-fixed", title: "100% Practicing Leads", sub: "Instructors from ISRO, Swiggy, & SRE teams" },
              { icon: "translate", bg: "bg-surface-container-high text-primary", title: "Telugu + Global English", sub: "Intuitive Telugu mental models + RFC fluency" },
            ].map((m) => (
              <div
                key={m.title}
                className="p-space-md rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow flex items-start gap-space-md"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${m.bg}`}>
                  <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
                </div>
                <div>
                  <span className="block font-title-md text-title-md text-on-surface font-bold">
                    {m.title}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-28 xl:top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-xs py-space-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">
            <div
              className="flex items-center gap-space-xs overflow-x-auto pb-space-xs lg:pb-0"
              role="tablist"
              aria-label="Workshop tracks"
            >
              {trackFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTrack === filter.id}
                  onClick={() => setActiveTrack(filter.id)}
                  className={`px-space-md py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-colors ${
                    activeTrack === filter.id
                      ? "bg-secondary-fixed text-secondary font-bold shadow-xs"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm shrink-0">
              <div className="inline-flex items-center p-space-xs rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                {modeButtons.map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setActiveMode(btn.id)}
                    className={`px-space-sm py-space-xs rounded transition-colors ${
                      activeMode === btn.id
                        ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                        : "hover:text-on-surface"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  className="w-full pl-9 pr-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-xs placeholder:text-outline focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Search tech stack, topic, mentor..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                  search
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                ACTIVE REGISTRATION WINDOW • SUMMER 2025
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
                Curated Master Cohorts
              </h2>
            </div>
            <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-primary">
                verified
              </span>
              <span>
                Transparent Fees • Zero Placement Upfront Cuts • Direct Hardware
                Provisioning
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {workshopCohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                VERIFIABLE TELEMETRY ARCHIVE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
                Authentic Workshop Glimpses &amp; Lab Notes
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Review authentic recordings, terminal traces, and hardware setups from our
              previous cohorts before you register.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full bg-inverse-surface overflow-hidden group">
                  {/* TODO: replace with real workshop photo */}
                  <ImagePlaceholder
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                    alt="Instructor illustrating Raft consensus on whiteboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent" />
                  <div className="absolute bottom-space-sm left-space-sm right-space-sm flex items-center justify-between">
                    <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[14px] text-secondary-container">
                        play_arrow
                      </span>
                      18:42 Recap Video
                    </span>
                    <span className="text-inverse-on-surface font-caption text-caption uppercase tracking-wider">
                      Cohort 03
                    </span>
                  </div>
                </div>
                <div className="p-space-md">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                    Cohort 03: Distributed Database Consensus
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                    Engineers tore down etcd Raft state machines and intentionally created
                    split-brain partitions across 7 virtual nodes.
                  </p>
                  <div className="p-space-xs px-space-sm rounded bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm mb-space-sm flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[14px]">
                      record_voice_over
                    </span>
                    <span>
                      Includes Telugu vernacular deep-dive on memory barriers
                      (మెమరీ బారియర్స్).
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md hover:text-primary-container font-semibold"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Watch Teardown Highlight (YouTube)</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-48 w-full bg-surface-container-high grid grid-cols-2 gap-1 p-1">
                  {/* TODO: replace with real lab gallery photos */}
                  <ImagePlaceholder
                    className="w-full h-full object-cover rounded-sm"
                    alt="Oscilloscope and FPGA test board"
                  />
                  <div className="grid grid-rows-2 gap-1">
                    <ImagePlaceholder
                      className="w-full h-full object-cover rounded-sm"
                      alt="Engineers reviewing Verilog waveforms"
                    />
                    <ImagePlaceholder
                      className="w-full h-full object-cover rounded-sm"
                      alt="FPGA development boards on lab shelf"
                    />
                  </div>
                </div>
                <div className="p-space-md">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                    Hardware Acceleration Weekend Lab
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                    Hands-on in Hyderabad. Attendees synthesized softcore RISC-V cores onto
                    silicon boards without slide decks.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md hover:text-primary-container font-semibold"
                  href="/knowledge-base"
                >
                  <span>View Photo Telemetry &amp; Lab Notes</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-48 w-full bg-inverse-surface p-space-md font-mono text-xs text-surface-dim flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                    </div>
                    <span className="text-caption text-surface-dim/60">
                      go tool pprof --http=:8080
                    </span>
                  </div>
                  <div className="py-2 overflow-hidden text-[11px] leading-tight font-caption text-surface-dim">
                    <p className="text-secondary-fixed">Entering live benchmark mode...</p>
                    <p className="text-primary-fixed-dim">
                      [14:22:04] wrk -t12 -c400 -d30s http://localhost:9000/orders
                    </p>
                    <p className="text-surface-bright">
                      Requests/sec: 52,431.18 • p99: 1.84ms
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-caption text-secondary-container">
                    <span>BENCHMARK PASSED</span>
                    <span>50k+ req/sec</span>
                  </div>
                </div>
                <div className="p-space-md">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs">
                    High-Throughput Go Microservices Teardown
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                    Investigating lock contention, garbage collection pauses, and zero-copy
                    byte buffers in real-world Go network servers.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md hover:text-primary-container font-semibold"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Inspect Public GitHub Archive</span>
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="max-w-2xl mb-space-lg">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              PROVEN INTEGRITY
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
              Verified Feedback Tied to Specific Batches
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                batch: "Cohort 03: Distributed Database Consensus",
                quote:
                  "Unlike common bootcamps that copy-paste toy web apps, Venkatesh garu and Dr. Murthy forced us to induce split-brain networks and fix corrupted WAL logs. The explanation of consensus in Telugu before formalizing in Go made it click forever.",
                initials: "RV",
                name: "Rahul Varma",
                role: "Software Engineer @ Swiggy Infrastructure",
                bg: "bg-primary-fixed text-on-primary-fixed",
              },
              {
                batch: "Cohort 01: Linux Kernel & eBPF",
                quote:
                  "Priya's eBPF sessions gave me the confidence to debug production socket drops at work the very next Monday. We went into raw kernel kprobes and tracepoints. Unbeatable practical value.",
                initials: "SK",
                name: "Soundarya K.",
                role: "Site Reliability Engineer @ PhonePe",
                bg: "bg-secondary-fixed text-on-secondary-fixed",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                      {t.batch}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-space-sm mt-space-md pt-space-sm">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-title-md font-bold ${t.bg}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-title-md text-title-md text-on-surface font-semibold">
                      {t.name}
                    </p>
                    <p className="font-caption text-caption text-on-surface-variant">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-space-lg rounded-xl bg-surface-container-low shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-space-sm py-space-xs rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                  RISC-V Hardware Synthesis &amp; FPGA Bring-up
                </span>
                <div className="flex flex-col items-center text-center py-space-sm mt-space-sm">
                  <p className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
                    No Graduate Reviews Yet
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Inaugural batch — we never generate synthetic testimonials. Faculty
                    evaluations and syllabus open for inspection.
                  </p>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm flex justify-center">
                <Link
                  href="/team"
                  className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-md text-label-md font-semibold transition-colors flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    manage_search
                  </span>
                  <span>Inspect Faculty Track Record</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="max-w-xl">
              <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-widest font-bold">
                THE DIKSUCHIKA DIRECTIONAL FRAMEWORK
              </span>
              <h2 className="font-headline-md text-headline-md text-surface-bright mt-space-xs">
                From First Principles to High-Velocity Production
              </h2>
              <p className="font-body-sm text-body-sm text-surface-dim mt-space-xs leading-relaxed">
                Our curriculum flows with mathematical purpose: grasp the foundational
                physics, build the real distributed subsystem with your hands, and defend
                it under extreme load.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-space-md">
              {[
                { n: "01", title: "LEARN", sub: "Telugu Intuition + Theory", box: "bg-primary" },
                { n: "02", title: "BUILD", sub: "Bare-Metal Terminal Labs", box: "bg-secondary-container text-on-tertiary" },
                { n: "03", title: "GROW", sub: "Staff SRE Architecture", box: "bg-primary-container" },
              ].map((step, i) => (
                <div key={step.n} className="flex items-center gap-space-md">
                  <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-tertiary-container/30">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-surface-bright font-bold font-title-md ${step.box}`}
                    >
                      {step.n}
                    </div>
                    <div>
                      <p className="font-title-md text-title-md text-surface-bright font-bold">
                        {step.title}
                      </p>
                      <p className="font-caption text-caption text-surface-dim">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                  {i < 2 && (
                    <span className="material-symbols-outlined text-secondary-container hidden sm:block">
                      arrow_forward
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
