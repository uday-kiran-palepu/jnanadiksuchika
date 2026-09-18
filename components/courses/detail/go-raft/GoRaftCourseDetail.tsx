import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CurriculumAndFaq } from "./CurriculumAndFaq";

export function GoRaftCourseDetail() {
  return (
    <div className="flex flex-col w-full pb-20 lg:pb-0">
      <section className="w-full bg-surface-container-lowest shadow-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-wrap items-center justify-between gap-y-space-xs text-body-sm font-body-sm text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs">
            <Link
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="/"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" href="/courses">
              Courses
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold truncate max-w-[240px] sm:max-w-none">
              Distributed Systems Architecture with Go &amp; Raft
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-space-sm px-space-sm py-1 rounded-full bg-surface-container-low text-caption font-caption text-tertiary tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
            <span>LAT 17.3850° N • LON 78.4867° E</span>
            <span className="text-outline-variant">•</span>
            <span className="text-secondary font-bold tracking-widest">
              ORIENTATION: ADVANCED INFRA
            </span>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden bg-gradient-to-b from-surface-container-low/80 via-background to-surface pb-space-xl pt-space-lg">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute top-48 right-0 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"
        />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">explore</span>
                  Big Switch • ADVANCED SYSTEMS TRACK
                </span>
                <span className="px-space-sm py-1 rounded-full bg-secondary-container/15 text-on-secondary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                  Course 04 of 08
                </span>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    sensors
                  </span>
                  Telemetry: Cohort IV Open
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight leading-tight">
                  Distributed Systems Architecture with{" "}
                  <span className="text-primary">Go</span> &amp;{" "}
                  <span className="text-secondary-container">Raft</span>
                </h1>
                <p className="font-title-lg text-title-lg text-primary/90 font-medium">
                  గో మరియు రాఫ్ట్ తో డిస్ట్రిబ్యూటెడ్ ఆర్కిటెక్చర్ — కన్సెన్సస్, ఫాల్ట్
                  టాలరెన్స్ మరియు నెట్‌వర్క్ పార్టిషన్స్
                </p>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Master distributed state machines, write consensus algorithms from
                scratch, survive network partition splits, and defend your architecture
                in front of Staff engineers. Zero magic abstractions—pure bare-metal Go
                runtimes.
              </p>
              <MetaBadgeGrid />
              <ProgressionHud />
            </div>
            <EnrollmentCard />
          </div>
        </div>
      </section>

      <AudienceSection />
      <CurriculumAndFaq />
      <ArtifactsSection />
      <FacultySection />
      <CertificationSection />

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.08)] p-space-sm">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-space-sm">
          <div className="flex flex-col min-w-0">
            <span className="font-caption text-caption text-outline truncate">
              Distributed Systems Track
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-title-md text-title-md font-bold text-on-surface">
                ₹7,999
              </span>
              <span className="font-caption text-caption text-secondary font-semibold">
                33% OFF
              </span>
            </div>
          </div>
          <Link
            className="px-space-md py-2.5 rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:bg-secondary transition-all shrink-0 flex items-center gap-1"
            href="/contact"
          >
            <span>Enroll Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetaBadgeGrid() {
  const items = [
    {
      icon: "calendar_month",
      iconClass: "text-primary",
      label: "Duration",
      value: "10 Weeks",
      sub: "40h Self + 4 Live Defenses",
    },
    {
      icon: "translate",
      iconClass: "text-secondary",
      label: "Dialect",
      value: "Dual Dialect",
      sub: "తెలుగు + Global RFC EN",
    },
    {
      icon: "terminal",
      iconClass: "text-primary",
      label: "Stack Standard",
      value: "Go 1.22+",
      sub: "Bare Sockets & RPC",
    },
    {
      icon: "verified_user",
      iconClass: "text-secondary-container",
      label: "Gate Standard",
      value: "Diagnostic Passed",
      sub: "Entrance Filter Applied",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
      {items.map((item) => (
        <div
          key={item.label}
          className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1"
        >
          <span className={`material-symbols-outlined ${item.iconClass} text-[20px]`}>
            {item.icon}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
            {item.label}
          </span>
          <span className="font-title-md text-title-md font-bold text-on-surface">
            {item.value}
          </span>
          <span className="font-caption text-caption text-outline">{item.sub}</span>
        </div>
      ))}
    </div>
  );
}

function ProgressionHud() {
  return (
    <div className="mt-space-sm p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface shadow-md">
      <div className="flex items-center justify-between pb-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
          The Big Switch Progression Continuum
        </span>
        <span className="font-caption text-caption text-surface-dim font-mono">
          STEP 02/03 ACTIVE
        </span>
      </div>
      <div className="grid grid-cols-3 gap-space-sm pt-space-xs text-center">
        <div className="p-space-xs rounded bg-surface-dim/10 flex flex-col items-center">
          <span className="font-title-md text-title-md font-bold text-surface-bright">
            1. LEARN
          </span>
          <span className="font-caption text-caption text-surface-dim">
            RFCs &amp; Mental Models
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim text-[16px] mt-1">
            check_circle
          </span>
        </div>
        <div className="p-space-xs rounded bg-secondary-container/25 shadow-inner flex flex-col items-center">
          <span className="font-title-md text-title-md font-bold text-secondary-fixed">
            2. BUILD
          </span>
          <span className="font-caption text-caption text-surface-bright font-medium">
            Raft From Zero
          </span>
          <span className="material-symbols-outlined text-secondary-container text-[16px] mt-1 animate-spin">
            sync
          </span>
        </div>
        <div className="p-space-xs rounded bg-surface-dim/10 flex flex-col items-center">
          <span className="font-title-md text-title-md font-bold text-surface-bright">
            3. GROW
          </span>
          <span className="font-caption text-caption text-surface-dim">
            Staff Defense Capstone
          </span>
          <span className="material-symbols-outlined text-surface-dim text-[16px] mt-1">
            lock
          </span>
        </div>
      </div>
    </div>
  );
}

function EnrollmentCard() {
  return (
    <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
      <div className="w-full rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden">
        <div className="w-full h-3 bg-gradient-to-r from-primary via-primary-container to-secondary-container" />
        <div className="p-space-lg flex flex-col gap-space-md">
          <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse" />
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Next Defense Session:
              </span>
            </div>
            <span className="font-label-md text-label-md font-bold text-primary">
              June 15, 2025
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-space-sm flex-wrap">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                ₹7,999
              </span>
              <span className="font-body-lg text-body-lg text-outline line-through">
                ₹11,999
              </span>
              <span className="px-space-xs py-0.5 rounded bg-secondary-container/15 text-secondary font-label-sm text-label-sm font-bold">
                33% Subsidized
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px] text-primary">
                payments
              </span>
              No-cost EMI available at{" "}
              <strong className="text-on-surface font-semibold">₹1,333/month</strong>{" "}
              for 6 months
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <Link
              className="w-full py-space-sm px-space-md rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-[0_4px_14px_rgba(252,139,51,0.35)] hover:bg-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-2"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              Enroll in Track &amp; Claim Station
            </Link>
            <Link
              className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-high text-primary font-title-md text-title-md font-semibold hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[20px]">science</span>
              Start Free Diagnostic Tier (Module 01)
            </Link>
          </div>
          <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant pt-space-xs flex-wrap gap-2">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-error">
                chair
              </span>
              Only 14 of 40 Linux Stations remaining
            </span>
            <span className="text-primary font-semibold">Self-Guided or Mentored</span>
          </div>
          <StationInclusions />
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2">
            <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">
              verified
            </span>
            <p className="font-caption text-caption text-tertiary leading-relaxed">
              <strong>Zero-Risk Baseline Guarantee:</strong> If the Module 01
              diagnostic exercises do not fundamentally rewire your intuition around
              distributed RPCs, request a 100% refund within 14 days without questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StationInclusions() {
  const items = [
    {
      icon: "dns",
      iconClass: "text-primary",
      text:
        "40 Bare-Metal Linux Lab Hours: Dedicated 5-node cluster with full root and netem packet shaper.",
    },
    {
      icon: "groups",
      iconClass: "text-secondary-container",
      text:
        "1:1 Capstone Defense: Live 45-min stress interrogation with a Staff/Principal Systems Engineer.",
    },
    {
      icon: "code_blocks",
      iconClass: "text-primary",
      text:
        "Permanent Git Repository Access: Reference implementations, test harness, & telemetry profilers.",
    },
    {
      icon: "forum",
      iconClass: "text-primary",
      text:
        "Lifetime RFC Community Access: Async Telugu + English architecture review forums.",
    },
  ];
  return (
    <div className="pt-space-sm flex flex-col gap-space-xs">
      <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
        Station Allocation Includes:
      </span>
      <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
        {items.map((item) => (
          <li key={item.text} className="flex items-start gap-2">
            <span
              className={`material-symbols-outlined ${item.iconClass} text-[18px] shrink-0 mt-0.5`}
            >
              {item.icon}
            </span>
            <span>
              <strong>{item.text.split(":")[0]}:</strong>
              {item.text.slice(item.text.indexOf(":") + 1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AudienceSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionIntro
          eyebrow="Candidate Qualification Standard"
          eyebrowIcon="tune"
          title="Engineered for Deep Builders. Not for Superficial CRUD."
          description="We maintain strict prerequisite filters so that peer review and live chaos defense sessions operate at the highest technical calibre."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <QualificationColumn
            icon="engineering"
            iconClass="bg-primary/10 text-primary"
            title="Target Archetypes"
            checkClass="text-primary"
            items={[
              "Backend Engineers (2–6 Yrs): Hitting the ceilings of monolithic architectures and single-node Postgres/MySQL scaling.",
              "SREs & Cloud Architects: Transitioning from running Kubernetes Helm charts to understanding fundamental failure domains.",
              "Staff / Principal Aspirants: Preparing for tier-1 high-concurrency systems design rounds where consensus is scrutinized.",
              "Curious Systems Builders: Engineers who want to understand how etcd, CockroachDB, and Kafka actually function underneath.",
            ]}
            footerLabel="Primary Outcome:"
            footerText="Able to design zero-data-loss distributed storage engines from first principles."
            footerClass="text-primary"
          />
          <QualificationColumn
            icon="terminal"
            iconClass="bg-secondary-container/15 text-secondary"
            title="Prerequisites"
            checkClass="text-secondary-container"
            items={[
              "Go, C++, or Rust Fluency: Practical grasp of goroutines/threads, channels, mutexes, and memory pointers.",
              "Networking Basics: Conceptual understanding of TCP streams, sockets, byte serialization, and HTTP/gRPC.",
              "Linux & Shell Competency: Ability to navigate SSH, inspect system process logs, and manipulate Git branches.",
              "Appetite for Academic RFCs: Enthusiasm to read the original Ongaro & Ousterhout Raft paper (included in coursework).",
            ]}
            footerLabel="Language Transition:"
            footerText="Java/C++ developers are offered a 2-day Go concurrency crash prep packet."
            footerClass="text-secondary"
          />
          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-error/10 text-error flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  do_not_disturb_on
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Not Recommended For
              </h3>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                {[
                  "Absolute Beginners: If you are learning your very first loops and functions, start with our Foundation Track.",
                  "Frontend UI Enthusiasts: This course contains 0% CSS/React. It is entirely head-less systems engineering.",
                  "Passive Watchers: Passive video viewing without submitting passing tests will lead to automatic cohort stall.",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                      close
                    </span>
                    <span>
                      <strong>{text.split(":")[0]}:</strong>
                      {text.slice(text.indexOf(":") + 1)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-highest text-caption font-caption text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                info
              </span>
              Unsure? Take the 15-minute entrance diagnostic quiz to benchmark your
              readiness.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualificationColumn({
  icon,
  iconClass,
  title,
  checkClass,
  items,
  footerLabel,
  footerText,
  footerClass,
}: {
  icon: string;
  iconClass: string;
  title: string;
  checkClass: string;
  items: string[];
  footerLabel: string;
  footerText: string;
  footerClass: string;
}) {
  return (
    <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-md">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconClass}`}
        >
          <span className="material-symbols-outlined text-[28px]">{icon}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
        <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-2">
              <span
                className={`material-symbols-outlined ${checkClass} text-[18px] shrink-0 mt-0.5`}
              >
                check
              </span>
              <span>
                <strong>{text.split(":")[0]}:</strong>
                {text.slice(text.indexOf(":") + 1)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
        <span
          className={`font-caption text-caption font-bold uppercase tracking-wider ${footerClass}`}
        >
          {footerLabel}
        </span>
        <p className="font-body-sm text-body-sm text-on-surface mt-0.5">{footerText}</p>
      </div>
    </div>
  );
}

function ArtifactsSection() {
  const artifacts = [
    {
      badge: "Artifact 01",
      badgeClass: "bg-primary/10 text-primary",
      icon: "database",
      title: "Raft-KV: Fault-Tolerant Distributed Key-Value Store",
      body:
        "A highly available linearizable key-value store built entirely with Go concurrency. Survives simultaneous disconnection of 2 out of 5 nodes with zero data loss and sub-5ms write commit latencies.",
      metrics: [
        ["Partition Tolerance", "3/5 Quorum Maintained", "text-primary"],
        ["Commit P99 Latency", "4.18 ms", "text-secondary"],
        ["Data Inconsistency", "0.0000% (Strict Linear)", "text-on-surface"],
      ],
      link: "View Sample Architecture Blueprint",
    },
    {
      badge: "Artifact 02",
      badgeClass: "bg-secondary-container/15 text-secondary",
      icon: "lock_clock",
      title: "Distributed Lock Manager (DLM) with Lease Fencing",
      body:
        "Solves the infamous split-brain split-write anomaly in worker pools. Features monotonic fencing tokens, heartbeat-based renewable lease contracts, and automatic dead-worker eviction.",
      metrics: [
        ["Fencing Token", "Strictly Monotonic (64-bit)", "text-primary"],
        ["Lease Precision", "10ms Tick Granularity", "text-secondary"],
        ["GC Pause Resilience", "Eviction Barrier Shield", "text-on-surface"],
      ],
      link: "Inspect Lease Protocol RFC Specs",
    },
    {
      badge: "Artifact 03",
      badgeClass: "bg-primary/10 text-primary",
      icon: "troubleshoot",
      title: "Jepsen Fault Injection & Chaos Testbench",
      body:
        "An automated testing suite that uses Linux netem to inject random latency, drop 25% of UDP/TCP packets, simulate asymmetric bridge netsplits, and verify consistency invariants using Porcupine.",
      metrics: [
        ["Asymmetric Netsplit", "Quorum Safe (Leader Steps Down)", "text-secondary"],
        ["Uncommitted Rollback", "No Ghost Writes Accepted", "text-primary"],
        ["Porcupine Checker", "100k Operations Verified", "text-on-surface"],
      ],
      link: "Review Chaos Test Runner Code",
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionIntro
          eyebrow="Verifiable Engineering Artifacts"
          eyebrowIcon="terminal"
          title="What You Will Actually Build & Prove in Code"
          description="No mock toy projects or todo-lists. You will build three production systems that pass the same chaos harnesses used by etcd and CockroachDB."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {artifacts.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="p-space-lg flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-space-sm py-0.5 rounded font-caption text-caption font-bold uppercase ${a.badgeClass}`}
                  >
                    {a.badge}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    {a.icon}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                  {a.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {a.body}
                </p>
                <div className="p-space-sm rounded-lg bg-surface-container-low font-mono text-caption text-caption text-on-surface flex flex-col gap-1 mt-space-xs">
                  <div className="flex justify-between text-outline">
                    <span>METRIC</span>
                    <span>BENCHMARK RESULT</span>
                  </div>
                  {a.metrics.map(([label, val, cls]) => (
                    <div
                      key={label}
                      className={`flex justify-between font-bold ${cls}`}
                    >
                      <span>{label}</span>
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-space-lg pb-space-lg pt-0">
                <span className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold group-hover:translate-x-1 transition-transform cursor-pointer">
                  {a.link}{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultySection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/40">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionIntro
          eyebrow="Distinguished Faculty & Mentors"
          eyebrowIcon="verified"
          title="Mentored by Engineers Who Built Real Distributed Engines"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-8 rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md flex flex-col md:flex-row gap-space-lg items-center md:items-start">
            <ImagePlaceholder
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-md"
              alt="Portrait of Venkatesh Rao"
            />
            <div className="flex flex-col gap-space-sm flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Venkatesh Rao
                  </h3>
                  <span className="font-body-sm text-body-sm text-primary font-semibold">
                    Infrastructure Fellow &amp; Author • 14 Years Production
                    Experience
                  </span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption px-space-sm py-1 rounded bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    hub
                  </span>
                  Hyderabad Node
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Venkatesh previously directed core infrastructure engineering scaling
                low-latency BGP routing backbones (40Gbps+) and custom distributed
                message queues handling billions of daily events. He pioneered Telugu
                mental models for concurrency semantics, lock-free queues, and memory
                fences.
              </p>
              <blockquote className="p-space-md rounded-xl bg-surface-container-low text-primary font-title-md text-title-md italic leading-snug">
                &quot;When an engineer implements Raft from bare sockets, distributed
                consensus ceases to be magic. You stop trusting blind cloud promises and
                start measuring quorums.&quot;
              </blockquote>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                {["ex-Telecom Infra Lead", "Go Contributor", "Telugu Tech Author"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-space-sm py-0.5 rounded-full bg-surface-container text-caption font-caption text-on-surface"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-2xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-md">
                <ImagePlaceholder
                  className="w-16 h-16 rounded-xl object-cover shadow-sm"
                  alt="Portrait of Dr S K Murthy"
                />
                <div className="flex flex-col">
                  <h4 className="font-title-lg text-title-lg font-bold text-on-surface">
                    Dr. S. K. Murthy
                  </h4>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">
                    ex-ISRO Principal Architect
                  </span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider font-semibold">
                Capstone Interrogator &amp; Evaluator
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Dr. Murthy spent 28 years designing radiation-tolerant fault-masking
                telemetry buses for satellite communication payloads. He acts as the
                independent defense panel chair for your final Capstone Project.
              </p>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low text-caption font-caption text-tertiary mt-space-md">
              <strong>Defense Focus:</strong> &quot;I look for graceful partition
              handling and mathematical quorum sanity, not polished slides.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionIntro
          eyebrow="Transparent Standards"
          eyebrowIcon="verified"
          eyebrowClass="text-secondary"
          title="Transparent Certification Standards"
          description="We reject the modern trend of paying for participation certificates. Here is exactly what our credential means, and what it does not."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-sm py-1 rounded bg-primary/10 text-primary font-label-md text-label-md font-bold uppercase">
                  Cryptographic Credential
                </span>
                <span className="material-symbols-outlined text-primary text-[28px]">
                  workspace_premium
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                Certificate of Completion — Big Switch
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Earned strictly after passing all 5 modules, recording 100% test pass
                on the automated Jepsen chaos bench, and surviving the live 45-minute
                architectural interrogation with a Staff Engineer.
              </p>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                {[
                  "Verifiable SHA-256 hash linked directly to your GitHub defense pull request.",
                  "Zero attendance-only credentials issued. Non-defended repos receive audit record only.",
                  "Recognized by top infrastructure hiring teams across Hyderabad, Bengaluru, and Singapore.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      fingerprint
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low font-caption text-caption text-primary font-mono">
              VERIFY PROTOCOL: bigswitch.dev/verify/&#123;HASH&#125;
            </div>
          </div>
          <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-sm py-1 rounded bg-surface-container-high text-outline font-label-md text-label-md font-bold uppercase">
                  Independent Disclosure
                </span>
                <span className="material-symbols-outlined text-outline text-[28px]">
                  policy
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                Industry Partner &amp; Vendor Accreditation Disclaimer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Big Switch certificates are independent engineering competency
                credentials. We do not sell vendor stamps (e.g. AWS, GCP, or Microsoft
                partner certifications) unless explicitly co-sponsored for specialized
                cloud tracks.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We believe a hiring manager at a real systems company values an audited,
                production-grade Go Raft repository far more than a multiple-choice cloud
                voucher. We stand proud behind authentic code proof.
              </p>
            </div>
            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-lowest text-caption font-caption text-tertiary">
              <strong>Institutional Philosophy:</strong> We prepare engineers for deep
              architectural reality, not multiple-choice exam tricks.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  eyebrowIcon,
  eyebrowClass = "text-primary",
  title,
  description,
}: {
  eyebrow: string;
  eyebrowIcon: string;
  eyebrowClass?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-space-xs max-w-3xl mb-space-lg">
      <span
        className={`font-label-md text-label-md font-bold uppercase tracking-wider flex items-center gap-1 ${eyebrowClass}`}
      >
        <span className="material-symbols-outlined text-[16px]">{eyebrowIcon}</span>
        {eyebrow}
      </span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      )}
    </div>
  );
}
