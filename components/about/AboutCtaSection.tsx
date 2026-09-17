import Link from "next/link";

export function AboutCtaSection() {
  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="max-w-3xl flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-tertiary-container/40 text-surface-bright max-w-fit">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">
              explore
            </span>
            <span className="font-label-md text-label-md uppercase font-bold tracking-wide">
              Take Your Engineering Bearing
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight">
            Ready to Experience Engineering Without Shortcuts?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-dim leading-relaxed">
            Explore our upcoming flagship immersive cohorts in Systems Programming,
            Distributed Runtimes, and Cloud Performance, or schedule an informal
            diagnostic with a senior architect.
          </p>
          <div className="mt-space-sm flex flex-wrap items-center gap-space-md">
            <Link
              className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md shadow-lg hover:bg-secondary transition-all"
              href="/courses"
            >
              Explore All Courses &amp; Batches
            </Link>
            <Link
              className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-surface-container-low/10 text-surface-bright hover:bg-surface-container-low/20 font-title-md text-title-md transition-all"
              href="/contact"
            >
              Talk to a Mentor / Contact Us
            </Link>
            <Link
              className="inline-flex items-center gap-space-xs text-primary-fixed hover:text-surface-bright font-title-md text-title-md transition-colors ml-0 sm:ml-space-sm"
              href="/tools"
            >
              <span>Read Open Source Blueprints &amp; Docs</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
