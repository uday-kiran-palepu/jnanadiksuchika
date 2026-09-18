import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const faculty = [
  {
    name: "Dr. S. K. Murthy",
    slug: "dr-s-k-murthy",
    role: "Lead Systems Architect",
    meta: "ex-ISRO Satellite Control • 24 yrs exp",
    roleColor: "text-primary",
    bio: "Specializes in real-time operating systems, distributed telemetry, and Linux kernel instrumentation for high-reliability payloads.",
    tags: ["Distributed OS", "Rust Kernel", "Telemetry"],
    badgeColor: "text-primary",
  },
  {
    name: "Venkatesh Rao",
    slug: "venkatesh-rao",
    role: "Fellow & Principal Infra Engineer",
    meta: "BGP Networks • Telugu Pedagogy Lead",
    roleColor: "text-secondary",
    bio: "Pioneered the dual-language conceptual frameworks converting abstract RFC protocols into intuitive native mental models.",
    tags: ["BGP Routing", "Go Network Stack", "తెలుగు Tech"],
    badgeColor: "text-secondary",
  },
  {
    name: "Priya Ramaswamy",
    slug: "priya-ramaswamy",
    role: "Senior Staff SRE & Chaos Lead",
    meta: "Global FinTech Core • eBPF Testbenches",
    roleColor: "text-tertiary",
    bio: "Architected multi-region failover engines surviving massive cloud outages. Instructor for the Chaos Engineering & Observability Lab.",
    tags: ["Chaos Mesh", "eBPF Probes", "Kafka Pipelines"],
    badgeColor: "text-tertiary",
  },
];

export function TeamTeaserSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-bold uppercase tracking-wider mb-space-xs">
              <span className="material-symbols-outlined text-[18px]">groups</span>
              <span>Distinguished Fellows</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Taught by Systems Architects, Not Marketers.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Active industry practitioners building satellite telemetry,
              high-throughput financial fabrics, and cloud-native runtimes.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md font-semibold hover:text-primary-container shrink-0"
            href="/team"
          >
            <span>View Full Team (18 Faculty)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {faculty.map((person) => (
            <Link
              key={person.name}
              href={`/team/${person.slug}`}
              className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-space-md mb-space-md">
                {/* TODO: replace with real faculty photo */}
                <ImagePlaceholder
                  className="w-16 h-16 rounded-full object-cover"
                  alt={`Portrait of ${person.name}`}
                />
                <div className="flex flex-col">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {person.name}
                  </h3>
                  <span
                    className={`font-body-sm text-body-sm font-semibold ${person.roleColor}`}
                  >
                    {person.role}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    {person.meta}
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                {person.bio}
              </p>
              <div className="flex flex-wrap gap-space-xs mb-space-md">
                {person.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-container-lowest font-caption text-caption text-on-surface font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-space-sm flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 text-label-sm font-label-sm font-semibold ${person.badgeColor}`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  Verified Mentor
                </span>
                <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                  View profile
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
