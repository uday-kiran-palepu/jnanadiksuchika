import Link from "next/link";

export function PathwaysSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-bold uppercase tracking-wider mb-space-xs">
              <span className="material-symbols-outlined text-[18px]">explore</span>
              <span>Navigational Router</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Choose Your Trajectory
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Four curated pathways calibrated to your exact engineering inflection
              point.
            </p>
          </div>
          <span className="font-mono text-label-sm text-label-sm text-tertiary hidden md:block">
            ROUTING PROTOCOL // v4.2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <Link
            className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            href="/courses"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-space-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider mb-space-xs">
                Phase 01 • Foundations
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                I want to learn
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Deep CS fundamentals, distributed systems, and Telugu &amp; English
                technical deep dives.
              </p>
            </div>
            <div className="flex items-center gap-space-xs font-title-md text-title-md text-primary font-semibold mt-space-lg group-hover:text-primary-container">
              <span>Browse 12+ Courses</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>

          <Link
            className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            href="/workshops"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-space-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">
                  rocket_launch
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-space-xs">
                Phase 02 • Transition
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                I want a career
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Interview testbenches, real resume audits, and Tier-1 system design
                live mentorship.
              </p>
            </div>
            <div className="flex items-center gap-space-xs font-title-md text-title-md text-secondary font-semibold mt-space-lg group-hover:text-secondary-container">
              <span>Join Career Accelerator</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>

          <Link
            className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            href="/tools"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary mb-space-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">terminal</span>
              </div>
              <div className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider mb-space-xs">
                Phase 03 • Production
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                I want to build something
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                diksuchika-cli, open-source Linux kernel hacks, and microservices in
                Go &amp; Rust.
              </p>
            </div>
            <div className="flex items-center gap-space-xs font-title-md text-title-md text-tertiary font-semibold mt-space-lg group-hover:text-on-surface">
              <span>Open Developer Tools</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>

          <Link
            className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            href="/contact"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">
                  support_agent
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider mb-space-xs">
                Phase 04 • Support
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                I need help online
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                1-on-1 mentor dispatch, asynchronous architecture review, and live
                doubts sandbox.
              </p>
            </div>
            <div className="flex items-center gap-space-xs font-title-md text-title-md text-primary font-semibold mt-space-lg group-hover:text-primary-container">
              <span>Request Mentor Dispatch</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
