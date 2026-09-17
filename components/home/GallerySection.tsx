import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const gallery = [
  {
    label: "LAB NODE • HYD-01",
    title: "Hardware Logic Testbenches",
    desc: "Oscilloscopes, RISC-V flashing, and peripheral SPI analysis",
    alt: "Engineers at logic analyzer workbench in Hyderabad lab",
  },
  {
    label: "SEMINAR HALL • HYD-03",
    title: "Whiteboard Architectural Teardowns",
    desc: "Deep-dive proofs of Raft quorum vs Paxos failure modes",
    alt: "Mentor teaching distributed consensus on glass whiteboard",
  },
  {
    label: "MIDNIGHT SPRINT • HYD-04",
    title: "48-Hour Systems Hack Nights",
    desc: "Building custom LSM engines under time & memory stress tests",
    alt: "Late evening hackathon with laptops in co-working space",
  },
];

export function GallerySection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-bold uppercase tracking-wider mb-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                photo_camera
              </span>
              <span>Hyderabad Innovation Hub</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Workshop Glimpses &amp; Lab Telemetry
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Inside the physical and virtual engineering chambers where critical
              systems get dissected.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md font-semibold hover:text-primary-container"
            href="/workshops"
          >
            <span>Explore Complete Gallery</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden shadow-sm bg-inverse-surface aspect-[4/3]"
            >
              {/* TODO: replace with real workshop photo */}
              <ImagePlaceholder
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-caption text-caption text-secondary-fixed uppercase font-mono">
                  {item.label}
                </span>
                <h4 className="font-title-lg text-title-lg text-surface-bright font-bold">
                  {item.title}
                </h4>
                <span className="font-body-sm text-body-sm text-surface-dim">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
