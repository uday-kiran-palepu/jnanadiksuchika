const techItems = [
  { name: "Go", sub: "Lang", color: "text-primary" },
  { name: "Rust", sub: "Systems", color: "text-secondary" },
  { name: "K8s", sub: "Orchestration", color: "text-primary" },
  { name: "eBPF", sub: "Kernel", color: "text-tertiary" },
  { name: "Kafka", sub: "Streams", color: "text-on-surface" },
  { name: "Postgres", sub: "ACID DB", color: "text-primary" },
  { name: "RISC-V", sub: "Arch", color: "text-secondary" },
  { name: "Wasm", sub: "Runtime", color: "text-primary" },
  { name: "Docker", sub: "Containers", color: "text-primary" },
  { name: "OTel", sub: "Observability", color: "text-tertiary" },
];

export function TechStackSection() {
  return (
    <section className="w-full py-space-lg bg-surface-container-high/40">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-md">
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider shadow-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            ENTERPRISE PRODUCTION STACK
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Production-tested technologies mastered across our labs
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-space-sm items-center">
          {techItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-lowest shadow-xs hover:bg-primary-fixed/40 transition-colors"
            >
              <span className={`font-headline-sm text-headline-sm font-bold ${item.color}`}>
                {item.name}
              </span>
              <span className="font-caption text-caption text-on-surface-variant uppercase">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
