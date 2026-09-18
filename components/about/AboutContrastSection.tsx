const contrasts = [
  {
    id: "01",
    tag: "PEDAGOGY FOCUS",
    title: "Practical System Internals vs Scripted Tutorial Paradigms",
    badLabel: "Typical Coaching Centre",
    bad:
      "Pre-recorded slide decks, copy-pasting frontend widgets, and toy applications that collapse the moment they run beyond localhost.",
    goodLabel: "Jnana Diksuchika",
    good:
      "Live kernel tracing via eBPF, writing custom TCP network stacks, bare-metal server provisioning, and debugging induced memory leaks in live workloads.",
    goodColor: "text-primary",
  },
  {
    id: "02",
    tag: "DELIVERABLE QUALITY",
    title: "Engineered Distributed Systems vs Generic Resume Filler",
    badLabel: "Typical IT Agency / Institute",
    bad:
      "Fictional e-commerce apps with hardcoded mock JSON; zero concurrent connection handling, zero load testing, and zero failover recovery.",
    goodLabel: "Jnana Diksuchika",
    good:
      "Verified upstream Git commits, distributed consensus engines (Raft) handling simulated split-brain partitions, and proxy reverse caches reviewed by Staff engineers.",
    goodColor: "text-primary",
  },
  {
    id: "03",
    tag: "ETHICS & ADMISSIONS",
    title: "Radical Transparency vs Predatory Placement Hype",
    badLabel: "Typical Coaching Centre",
    bad:
      "Inflated placement percentage stats, aggressive telecaller sales teams, predatory deferred ISA contracts with 36-month salary garnishments.",
    goodLabel: "Jnana Diksuchika",
    good:
      "100% upfront transparent fee schedule, zero hidden debt locks, an uncompromising diagnostic entrance filter, and auditable outcomes.",
    goodColor: "text-secondary",
  },
  {
    id: "04",
    tag: "INTELLECTUAL DEPTH",
    title: "Architectural Defense Panels vs Surface LeetCode Drills",
    badLabel: "Typical Coaching Centre",
    bad:
      "Rote memorization of two-pointer code snippets without knowing heap memory layout, garbage collection cycles, or thread safety locks.",
    goodLabel: "Jnana Diksuchika",
    good:
      "Formal RFC design defense panels, latency profiling with flame graphs, mock architectural teardowns, and high-trust peer endorsements for top roles.",
    goodColor: "text-tertiary",
  },
];

export function AboutContrastSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
          <div>
            <span className="font-caption text-caption uppercase text-primary font-bold tracking-widest">
              ARCHITECTURAL BENCHMARK
            </span>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg text-on-surface tracking-tight">
              The Engineering Contrast: How Jnana Diksuchika Redefines Capability
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A side-by-side examination of why traditional diploma mills fail and how
            true systems craftsmanship is forged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {contrasts.map((item) => (
            <div
              key={item.id}
              className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-space-xs font-caption text-caption uppercase tracking-wider text-outline font-bold">
                  <span>CONTRAST {item.id}</span>
                  <span>•</span>
                  <span>{item.tag}</span>
                </div>
                <h3 className="mt-space-xs font-title-lg text-title-lg text-on-surface font-bold">
                  {item.title}
                </h3>
                <div className="mt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="p-space-md rounded-lg bg-surface-container-high/60">
                    <span className="font-label-sm text-label-sm text-error uppercase font-bold">
                      {item.badLabel}
                    </span>
                    <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {item.bad}
                    </p>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                    <span
                      className={`font-label-sm text-label-sm uppercase font-bold ${item.goodColor}`}
                    >
                      {item.goodLabel}
                    </span>
                    <p className="mt-space-xs font-body-sm text-body-sm text-on-surface leading-relaxed font-medium">
                      {item.good}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
