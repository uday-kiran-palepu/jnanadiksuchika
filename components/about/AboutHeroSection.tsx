export function AboutHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-space-xl pb-space-xl lg:pb-32">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[520px] bg-gradient-to-b from-primary-fixed/40 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-6 lg:right-16 text-right font-caption text-caption uppercase tracking-widest text-outline hidden md:block">
        <span>GRID REF: LAT 17.3850° N / LON 78.4867° E</span>
        <br />
        <span className="text-secondary font-semibold">HYDERABAD INNOVATION NODE</span>
      </div>
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high shadow-xs">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">
            Big Switch • Philosophical Manifesto
          </span>
          <span className="text-outline-variant">/</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-medium">
            About
          </span>
        </div>

        <div className="mt-space-lg max-w-4xl">
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            A Directional Compass For High-Trajectory Engineers.
          </h1>
          <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            <span className="text-primary font-semibold">Big Switch</span> is the
            moment an engineer stops collecting content and starts shipping with
            judgment — flipping from theory theater to production craft. Velocity
            without orientation produces burnout and fragile careers. We rebuild
            engineering intuition from the silicon layer upward, then connect it to
            knowledge, workshops, and delivery services under one roof.
          </p>
        </div>

        <div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-4 flex items-center justify-center p-space-lg rounded-xl bg-surface-container-low shadow-sm">
            <svg
              className="w-64 h-64 text-primary"
              fill="none"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="currentColor"
                strokeDasharray="3 3"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <circle
                cx="100"
                cy="100"
                r="64"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1.2"
              />
              <circle
                cx="100"
                cy="100"
                r="38"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
              <line
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
                x1="100"
                x2="100"
                y1="10"
                y2="190"
              />
              <line
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
                x1="10"
                x2="190"
                y1="100"
                y2="100"
              />
              <line stroke="currentColor" strokeOpacity="0.3" x1="36" x2="48" y1="36" y2="48" />
              <line stroke="currentColor" strokeOpacity="0.3" x1="164" x2="152" y1="36" y2="48" />
              <line stroke="currentColor" strokeOpacity="0.3" x1="36" x2="48" y1="164" y2="152" />
              <line stroke="currentColor" strokeOpacity="0.3" x1="164" x2="152" y1="164" y2="152" />
              <polygon fill="#00609b" points="100,24 112,96 100,104 88,96" />
              <polygon fill="#fc8b33" points="100,176 112,104 100,96 88,104" />
              <circle cx="100" cy="100" fill="#131b2e" r="6" />
              <circle cx="100" cy="100" fill="#ffffff" r="2.5" />
              <text fill="#00609b" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700" x="96" y="20">
                N
              </text>
              <text fill="#404751" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700" x="180" y="103">
                E
              </text>
              <text fill="#fc8b33" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700" x="96" y="190">
                S
              </text>
              <text fill="#404751" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700" x="12" y="103">
                W
              </text>
            </svg>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center gap-space-sm p-space-lg rounded-xl bg-surface-container-lowest shadow-md">
            <div className="flex items-center gap-space-sm">
              <span className="px-space-sm py-space-xs rounded bg-primary-fixed text-on-primary-fixed font-caption text-caption font-bold tracking-wider uppercase">
                ARCHITECTURAL ORIENTATION
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                HYD &amp; BLR CLUSTERS
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              &quot;To build distributed scale, one must first possess an unwavering
              mental model of the bare metal.&quot;
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              While contemporary industry tracks train technicians in ephemeral dashboard
              tools, we train systems engineers to understand packet flows, cache
              invalidation, asynchronous event loops, and hardware concurrency barriers.
            </p>
          </div>
        </div>

        <div className="mt-space-xl grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight">
                  PILLAR 01
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                  LEARN
                </span>
              </div>
              <h3 className="mt-space-md font-title-lg text-title-lg text-on-surface font-bold">
                Ground-Truth Systems &amp; Vernacular Mental Models
              </h3>
              <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We deconstruct complex computing paradigms down to absolute ground
                reality in Telugu and English. De-abstracting operating systems, Linux
                virtual memory, CPU cache lines, network routing packets, and consensus
                algorithms before touching frameworks.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg pb-space-md rounded-b-xl">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold">
                <span className="material-symbols-outlined text-[16px]">memory</span>
                Zero Rote Syntax • First-Principles Pedagogy
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-secondary font-extrabold tracking-tight">
                  PILLAR 02
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                  BUILD
                </span>
              </div>
              <h3 className="mt-space-md font-title-lg text-title-lg text-on-surface font-bold">
                Production-Grade Codebases &amp; Chaos Engineering
              </h3>
              <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                No toy clone tutorials or simulated sandbox toys. Engineers author actual
                distributed key-value engines implementing Raft consensus, eBPF telemetry
                kernel probes, and high-throughput streaming runtimes in Go and Rust under
                real network partitions.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg pb-space-md rounded-b-xl">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">dns</span>
                Bare-Metal Linux Nodes • 50k+ RPS Benchmarks
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-tertiary font-extrabold tracking-tight">
                  PILLAR 03
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                  GROW
                </span>
              </div>
              <h3 className="mt-space-md font-title-lg text-title-lg text-on-surface font-bold">
                High-Integrity Careers &amp; Architectural Autonomy
              </h3>
              <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Transitioning engineers from code executors to distributed systems
                architects. Engineers learn to author Request For Comments (RFCs),
                diagnose cascade failures in live distributed topologies, and lead
                mission-critical engineering initiatives globally.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg pb-space-md rounded-b-xl">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-tertiary font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Tier-1 Architectural Defenses • Mentorship For Life
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
