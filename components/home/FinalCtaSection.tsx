import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="w-full py-space-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          <div className="max-w-2xl flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span>JNANA DIKSUCHIKA DIRECTIONAL BEACON</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright font-bold tracking-tight">
              Ready to find your true engineering direction?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-dim">
              Join 4,800+ engineers building critical infrastructure with Jnana
              Diksuchika. Take the diagnostic baseline testbench today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full lg:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-secondary-container text-on-tertiary font-title-lg text-title-lg shadow-lg hover:bg-secondary hover:text-on-secondary transition-all hover:-translate-y-0.5 font-bold"
              href="#workshops-section"
            >
              <span>Get Started with Cohort 04</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
            <Link
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-tertiary/30 text-surface-bright hover:bg-tertiary/50 transition-colors font-title-md text-title-md font-semibold"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[20px]">
                support_agent
              </span>
              <span>Schedule Consult</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
