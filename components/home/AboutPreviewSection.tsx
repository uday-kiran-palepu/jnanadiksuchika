import Link from "next/link";

export function AboutPreviewSection() {
  return (
    <section className="w-full py-space-xl bg-surface" id="architecture-docs">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span>The Pedagogy Manifesto</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight leading-snug">
              A Directional Compass, Not a Generic Tutorial Mill.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Most EdTech platforms sell shallow syntax or automated multiple-choice
              quizzes that collapse the moment you encounter a live production
              outage. Jnana Diksuchika bridges the gap between deep native
              vernacular comprehension (Telugu) and high-rigor Silicon Valley
              engineering standards.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We teach engineers to reason from the hardware cache lines up to global
              consensus protocols. When you understand the ground truth, every
              architectural decision becomes self-evident.
            </p>
            <div className="pt-space-xs">
              <Link
                className="inline-flex items-center gap-space-xs text-primary font-title-lg text-title-lg font-bold hover:text-primary-container transition-colors"
                href="/about"
              >
                <span>Learn More About Our Mission &amp; Vernacular Philosophy</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  compare_arrows
                </span>
                <span>Engineering Standard Comparison</span>
              </h3>
              <div className="flex flex-col gap-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-xs flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    cancel
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Generic Course Warehouses
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Slide deck lectures with pre-recorded toy TODO apps. Zero Linux
                      internals or observability.
                    </span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary-fixed/30 shadow-xs flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                      Jnana Diksuchika Rigor
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Bare-metal Linux labs, Raft consensus implementations from
                      scratch, eBPF tracing, and real traffic chaos engineering.
                    </span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-xs flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    cancel
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Surface Language Coding
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Memorizing LeetCode templates without understanding memory
                      allocation or cache thrashing.
                    </span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-secondary-fixed/40 shadow-xs flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                      Dual-Script Mastery
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Concepts explained with native intuitive mental models in
                      Telugu, synthesized into fluent English architectural debates.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
