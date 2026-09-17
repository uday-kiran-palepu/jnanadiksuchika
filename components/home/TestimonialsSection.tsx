import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function TestimonialsSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="max-w-2xl mb-space-lg">
          <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold uppercase tracking-wider mb-space-xs">
            <span className="material-symbols-outlined text-[18px]">stars</span>
            <span>Verified Engineering Journeys</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Authentic Outcomes From Real Engineers
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            Engineers who transformed their mental models from rote memorization to
            principal-grade system fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                “Learning Linux network namespace internals in Telugu broke every
                barrier I had. I went from failing basic service mesh questions to
                designing multi-tenant VPC routing during my interview at CloudTech.”
              </p>
            </div>
            <div className="flex items-center gap-space-sm pt-space-md mt-space-sm">
              {/* TODO: replace with real alumni photo */}
              <ImagePlaceholder
                className="w-12 h-12 rounded-full object-cover"
                alt="Ananya Reddy, Systems Engineer"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  Ananya Reddy
                </span>
                <span className="font-body-sm text-body-sm text-primary font-semibold">
                  Systems Engineer @ CloudTech Global
                </span>
                <span className="font-caption text-caption text-on-surface-variant">
                  Cohort 02 Alum • Hyderabad
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                “The faculty tears down code in production live. We didn’t write fake
                todo apps; we debugged real memory leaks in Rust microservices under
                50k RPS load. Irreplaceable engineering education.”
              </p>
            </div>
            <div className="flex items-center gap-space-sm pt-space-md mt-space-sm">
              {/* TODO: replace with real alumni photo */}
              <ImagePlaceholder
                className="w-12 h-12 rounded-full object-cover"
                alt="K. Tharun, Backend Engineer"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  K. Tharun
                </span>
                <span className="font-body-sm text-body-sm text-secondary font-semibold">
                  Backend Engineer @ FinTech Core
                </span>
                <span className="font-caption text-caption text-on-surface-variant">
                  Cohort 01 Alum • Bengaluru
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-high/60 shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase">
                Transparent Policy
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold mt-space-xs">
                Upcoming Cohort Waitlist
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We never inflate placement metrics or guarantee fake jobs. Admissions
                require clearing our baseline logic testbench. New Hyderabad offline
                lab batches launch next month.
              </p>
              <div className="p-space-sm rounded bg-surface-container-lowest mt-space-xs">
                <span className="font-caption text-caption text-primary uppercase font-bold block mb-1">
                  Batch 05 Vetting Test
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Registration opens in 18 days. Only 40 seats allocated across twin
                  labs.
                </span>
              </div>
            </div>
            <div className="pt-space-md">
              <Link
                className="w-full inline-flex items-center justify-center gap-space-xs py-space-sm rounded-lg bg-surface-container-lowest text-primary font-title-md text-title-md hover:bg-surface-container-high transition-colors font-semibold"
                href="/contact"
              >
                <span>Join Vetted Waitlist</span>
                <span className="material-symbols-outlined text-[18px]">
                  lock_open
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
