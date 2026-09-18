import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function AboutOriginSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-xl shadow-xl bg-surface-container">
              {/* TODO: replace with real lab photo */}
              <ImagePlaceholder
                className="w-full h-[420px] object-cover"
                alt="Hyderabad engineering lab with dual monitors and architecture whiteboards"
              />
            </div>
            <div className="relative -mt-12 ml-4 lg:-ml-6 bg-inverse-surface text-inverse-on-surface p-space-md rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-space-xs text-secondary-fixed-dim font-caption text-caption uppercase font-semibold">
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                Telangana &amp; Karnataka Labs
              </div>
              <p className="mt-space-xs font-body-sm text-body-sm text-surface-dim">
                Where kernel debuggers meet mother-tongue clarity. Established by
                practicing Staff &amp; Principal Engineers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs font-caption text-caption text-secondary uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">history_edu</span>
              Our Origin Story &amp; Realization
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Born From a Simple Frustration: Engineers Taught How to Type, Not How to
              Think.
            </h2>
            <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>
                In 2021, senior systems architects working across cloud infrastructure in
                Hyderabad and Bengaluru noticed a painful paradox across Indian tech:
                brilliant, driven young graduates holding top engineering credentials,
                yet unable to explain how memory is segmented in RAM or why a distributed
                microservice latency spikes at the 99th percentile under load.
              </p>
              <p>
                Millions of rupees were being funneled into commercial commercial coaching
                centers that treated algorithmic interviews like high-speed spelling bees.
                Meanwhile, corporate re-skilling programs churned out paper certificates
                completely detached from the unforgiving realities of distributed
                production environments.
              </p>
              <p>
                Big Switch was founded as a quiet, uncompromising sanctuary. An
                institute where practicing principal engineers teach what actually runs the
                modern internet. Where foundational intuition is first unlocked in the
                intuitive, expressive cadence of Telugu (
                <span className="font-title-md text-primary font-medium">
                  మాతృభాషలో స్పష్టత
                </span>
                ), and subsequently forged into rigorous, peer-reviewed English technical
                fluency.
              </p>
            </div>
            <div className="mt-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
              <p className="font-title-md text-title-md text-on-surface italic">
                &quot;When an engineer truly understands how the machine thinks at the byte
                and socket layer, they never need to fear a changing framework, a new
                language, or an evolving cloud vendor ever again.&quot;
              </p>
              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-label-md text-label-md text-primary font-bold tracking-wide">
                  FOUNDING ARCHITECTURAL COUNCIL
                </span>
                <span className="font-caption text-caption text-outline">
                  EST. 2021 • BARE METAL RESEARCH GROUP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
