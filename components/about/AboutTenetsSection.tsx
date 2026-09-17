const tenets = [
  {
    icon: "translate",
    color: "bg-primary-fixed text-primary",
    label: "TENET 01",
    title: "Vernacular Inclusivity",
    subtitle: "తెలుగు సాంకేతిక వేదిక",
    labelColor: "text-primary",
    body:
      "Embracing mother-tongue conceptual clarity as an engineering superpower. Complex ideas like cache coherency and mutex locks are understood without English language barriers first.",
  },
  {
    icon: "groups",
    color: "bg-secondary-fixed text-secondary",
    label: "TENET 02",
    title: "Small-Cohort Density",
    subtitle: "Max 25–35 Fellows",
    labelColor: "text-secondary",
    body:
      "We decline 80% of applicants to protect instructional quality. Every pull request receives rigorous, multi-page feedback from senior staff mentors.",
  },
  {
    icon: "architecture",
    color: "bg-tertiary-fixed text-tertiary",
    label: "TENET 03",
    title: "Practicing Faculty Only",
    subtitle: "Zero Pure Theorists",
    labelColor: "text-tertiary",
    body:
      "No full-time slide readers. Every instructor currently spends their 9-to-5 designing high-scale distributed runtimes, databases, or high-throughput cloud networks.",
  },
  {
    icon: "code_blocks",
    color: "bg-surface-container-highest text-on-surface",
    label: "TENET 04",
    title: "Open Knowledge Commons",
    subtitle: "Apache 2.0 Licensure",
    labelColor: "text-on-surface",
    body:
      "Our core CLI tools, regional tech glossaries, and architecture blueprints are public domain. We measure ecosystem health by public utility, not vendor lock-in.",
  },
];

export function AboutTenetsSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto pb-space-lg">
          <span className="font-caption text-caption uppercase tracking-widest text-primary font-bold">
            INTERNAL OPERATING TENETS
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg text-on-surface tracking-tight">
            How The Ecosystem Operates
          </h2>
          <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
            Strict structural invariants designed to ensure instructional fidelity,
            cohort intimacy, and lasting engineering dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {tenets.map((tenet) => (
            <div
              key={tenet.label}
              className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-space-sm ${tenet.color}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {tenet.icon}
                  </span>
                </div>
                <span className={`font-caption text-caption font-bold uppercase ${tenet.labelColor}`}>
                  {tenet.label}
                </span>
                <h3 className="mt-space-xs font-title-lg text-title-lg text-on-surface font-bold">
                  {tenet.title}
                </h3>
                <p className="font-caption text-caption text-on-surface-variant font-semibold mt-0.5">
                  {tenet.subtitle}
                </p>
                <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {tenet.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
