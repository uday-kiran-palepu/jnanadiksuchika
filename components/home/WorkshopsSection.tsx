import Link from "next/link";

export function WorkshopsSection() {
  return (
    <section
      className="w-full py-space-xl bg-surface-container"
      id="workshops-section"
    >
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold uppercase tracking-wider mb-space-xs">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span>Vetted Admissions Only</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Active Bootcamps &amp; Engineering Cohorts
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Intensive systems incubators. Small batches, live code teardowns, and
              direct architectural defenses.
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 rounded-full bg-secondary-container animate-ping" />
            <span className="font-mono text-label-md text-label-md text-secondary font-bold">
              ADMISSIONS OPEN FOR COHORT 04
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-md">
              <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                BATCH 04 CLOSING SOON • 14 SEATS LEFT
              </span>
              <span className="font-mono text-caption text-caption text-on-surface-variant font-semibold">
                CODE: DSK-SYS-401
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
              Systems Programming &amp; Distributed Runtimes
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              6-week deep immersion into Rust memory models, custom TCP stacks, Raft
              consensus engines, and eBPF tracing.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
              <Link
                className="font-title-md text-title-md text-primary font-semibold hover:underline flex items-center gap-1"
                href="/workshops"
              >
                <span>Prerequisite Testbench</span>
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md shadow-md hover:bg-secondary hover:text-on-secondary transition-all"
                href="/workshops"
              >
                <span>Enroll in Batch Now</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-md">
              <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary" />
                BATCH 02 OPEN • EARLY ADMISSION STAGE
              </span>
              <span className="font-mono text-caption text-caption text-on-surface-variant font-semibold">
                CODE: DSK-CLD-202
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
              Full-Stack Distributed Systems Engineering
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              High-throughput event sourcing with Apache Kafka, Go microservices,
              multi-region PostgreSQL consensus, and gRPC contracts.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
              <Link
                className="font-title-md text-title-md text-primary font-semibold hover:underline flex items-center gap-1"
                href="/workshops"
              >
                <span>View Full Syllabus &amp; Rubric</span>
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-primary text-on-primary font-title-md text-title-md shadow-md hover:bg-primary-container transition-all"
                href="/workshops"
              >
                <span>Apply for Admission</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
