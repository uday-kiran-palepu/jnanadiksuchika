"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  associateMentors,
  coreTeamMembers,
  domainFilters,
  type DomainFilterId,
  type FormatFilter,
} from "@/components/team/data";

function CoreTeamCard({
  member,
}: {
  member: (typeof coreTeamMembers)[number];
}) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-72 w-full overflow-hidden bg-surface-container">
        {/* TODO: replace with real faculty photo */}
        <ImagePlaceholder
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          alt={member.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent" />
        <div className="absolute top-space-sm left-space-sm">
          <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary text-on-primary text-label-sm font-label-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
            {member.badge}
          </span>
        </div>
        <div className="absolute bottom-space-md left-space-md right-space-md text-inverse-on-surface">
          <div className="flex items-center gap-space-xs text-secondary-fixed-dim text-caption font-caption uppercase tracking-wider">
            <span>{member.experience.split(" • ")[0]}</span>
            <span>•</span>
            <span>{member.experience.split(" • ")[1]}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-surface-bright font-bold">
            {member.title}
          </h3>
          <p className="font-body-sm text-body-sm text-surface-dim">{member.role}</p>
        </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md bg-surface-container-lowest">
        <div className="flex flex-col gap-space-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {member.bio}
          </p>
          <div className="flex flex-wrap gap-space-xs pt-space-xs">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-space-sm flex flex-col gap-space-sm bg-surface-container-low/40 -mx-space-lg -mb-space-lg p-space-md">
          <div className="flex items-center justify-between text-body-sm font-body-sm">
            <span className="text-tertiary font-medium flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-primary">
                terminal
              </span>
              Lab Track:
            </span>
            <span className="font-semibold text-primary">{member.labTrack}</span>
          </div>
          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] hover:text-primary cursor-pointer">
                code
              </span>
              <span className="material-symbols-outlined text-[18px] hover:text-primary cursor-pointer">
                description
              </span>
              <span className="material-symbols-outlined text-[18px] hover:text-primary cursor-pointer">
                share
              </span>
            </div>
            <span className="text-caption font-caption text-secondary font-bold uppercase tracking-wider">
              {member.hours}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState<DomainFilterId>("all");
  const [activeFormat, setActiveFormat] = useState<FormatFilter>("all");

  const filteredMentors = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return associateMentors.filter((mentor) => {
      const matchesDomain =
        activeDomain === "all" || mentor.domains.includes(activeDomain);
      const matchesFormat =
        activeFormat === "all" || mentor.format === activeFormat;
      const haystack = `${mentor.name} ${mentor.role} ${mentor.tags.join(" ")} ${mentor.bio}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesDomain && matchesFormat && matchesSearch;
    });
  }, [searchQuery, activeDomain, activeFormat]);

  const formatButtons: { id: FormatFilter; label: string }[] = [
    { id: "all", label: "All Formats" },
    { id: "online", label: "Online Interactive" },
    { id: "inperson", label: "In-Person Lab Node" },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-surface overflow-hidden pt-space-lg pb-space-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-fixed/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-primary text-label-md font-label-md shadow-sm">
              <span className="font-bold tracking-widest text-secondary-container">
                Jnana Diksuchika
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-semibold uppercase tracking-wider text-on-surface-variant">
                Faculty &amp; Mentor Directory
              </span>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-bold">Team</span>
            </div>
            <div className="flex items-center gap-space-xs text-caption font-caption text-on-surface-variant bg-surface-container-lowest/80 px-space-md py-space-xs rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span className="font-mono text-tertiary">
                NODE: HYDERABAD (17.3850° N, 78.4867° E) &amp; BENGALURU LABS
              </span>
              <span className="text-outline-variant">•</span>
              <span className="text-primary font-semibold">GLOBAL ACTIVE REPO</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end pt-space-sm">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl">
                Practicing Engineers, Systems Architects &amp; Domain Mentors.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                We do not hire professional slide-readers or career lecturers. Every
                mentor at Jnana Diksuchika builds, debugs, and deploys high-scale software
                in production while translating complex systems into intuitive mental
                models in Telugu and English.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-sm relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-primary-fixed/40 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-space-xs text-secondary font-title-md text-title-md">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                  <span>The Jnana Diksuchika Standard</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Every mentor commits to live kernel packet inspection, bare-metal
                  hardware validation, or production database stress teardowns directly on
                  projector terminals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-xl pt-space-lg bg-surface-container-low/60 rounded-xl p-space-md shadow-sm">
            {[
              { value: "08", label: "Full-Time On-Site Architects", sub: "Hyderabad & Bengaluru Nodes", color: "text-primary" },
              { value: "34", label: "Vetted Associate Fellows", sub: "Production Lead Contributed", color: "text-secondary-container" },
              { value: "1:8", label: "Lab Mentorship Ratio", sub: "Uncapped Debugging Support", color: "text-tertiary" },
              { value: "100%", label: "Active Practitioners", sub: "Zero Career Theorists", color: "text-primary-container" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-space-xs p-space-sm">
                <span className={`font-display-hero text-[32px] leading-8 font-extrabold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  {stat.label}
                </span>
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-bright py-space-xl relative">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">
                  RESIDENT ARCHITECTURAL BOARD
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Full-Time Core Team &amp; On-Site Lab Directors
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Our full-time faculty lead curriculum architecture, write foundational lab
                frameworks, and supervise physical hardware testbenches 6 days a week across
                our innovation nodes.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-fixed text-on-primary-fixed font-label-md text-label-md shadow-xs">
                <span className="material-symbols-outlined text-[18px]">apartment</span>
                FULL-TIME • HYDERABAD &amp; BENGALURU ON-SITE LABS
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {coreTeamMembers.map((member) => (
              <CoreTeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl relative">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col gap-space-md pb-space-lg">
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold">
                  EXTERNAL FELLOWSHIP DIRECTORY
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Associate Instructor &amp; Contributor Network
              </h2>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row gap-space-md items-start">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h4 className="font-title-lg text-title-lg text-on-surface font-semibold">
                  An Open, Peer-Governed Contributor Ecosystem
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our associate instructors are active industry leads, staff engineers, and
                  domain specialists who conduct specialized weekend sprints, guest
                  workshops, and diagnostic code teardowns. They mentor part-time alongside
                  their primary production roles at leading technology organizations
                  worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md mb-space-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="relative w-full md:w-96">
                <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-inner"
                  placeholder="Search associate mentors by name, company, or tech stack..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-space-xs w-full md:w-auto overflow-x-auto pb-space-xs md:pb-0">
                <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
                  Format:
                </span>
                {formatButtons.map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setActiveFormat(btn.id)}
                    className={`px-space-sm py-space-xs rounded-lg text-label-sm font-label-sm whitespace-nowrap ${
                      activeFormat === btn.id
                        ? "bg-primary text-on-primary shadow-xs"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs border-t border-surface-container-high">
              {domainFilters.map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setActiveDomain(pill.id)}
                  className={`px-space-md py-space-xs rounded-full text-label-md font-label-md transition-colors ${
                    activeDomain === pill.id
                      ? "bg-primary-container text-on-primary-container shadow-xs"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md p-space-lg justify-between gap-space-md hover:-translate-y-1 transition-transform"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      {/* TODO: replace with real associate photo */}
                      <ImagePlaceholder
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                        alt={mentor.alt}
                      />
                      <div>
                        <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                          {mentor.name}
                        </h3>
                        <p className="font-body-sm text-body-sm text-primary font-semibold">
                          {mentor.role}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-space-xs py-0.5 rounded text-caption font-caption bg-surface-container-high text-on-surface-variant font-medium">
                      {mentor.fellowType}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-space-xs text-label-sm font-label-sm font-medium ${
                      mentor.format === "inperson" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {mentor.formatIcon}
                    </span>
                    <span>{mentor.formatLabel}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {mentor.bio}
                  </p>
                  <div className="flex flex-wrap gap-space-xs pt-space-xs">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant text-caption font-caption"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-sm border-t border-surface-container-high text-caption font-caption">
                  <span className="text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary-container">
                      event_available
                    </span>
                    {mentor.nextSession}
                  </span>
                  <Link
                    className="text-primary hover:text-primary-container font-semibold inline-flex items-center gap-0.5"
                    href={`/team/${mentor.slug}`}
                  >
                    Profile{" "}
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}

            <div className="flex flex-col bg-surface-container rounded-xl p-space-lg justify-between gap-space-md shadow-sm border border-dashed border-outline-variant">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high text-tertiary text-caption font-caption font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    ACTIVE VETTING PIPELINE
                  </span>
                  <span className="text-caption font-caption text-outline">Cohort 04</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                  New Associate Vetting in Progress
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We are currently completing peer verification code reviews for 3 upcoming
                  fellows specialized in:
                </p>
                <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-tertiary">
                  {[
                    "Distributed NVMe Storage & Ceph Clusters",
                    "Rust WebAssembly Audio Worklets",
                    "High-Speed FPGA Trading Telemetry",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary-container">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-sm border-t border-surface-container-highest flex items-center justify-between text-caption font-caption text-on-surface-variant">
                <span>Syllabi releases scheduled</span>
                <span className="font-bold text-primary">July 2025</span>
              </div>
            </div>

            <div className="flex flex-col bg-gradient-to-br from-primary-fixed/40 via-surface-container-lowest to-surface-container-lowest rounded-xl shadow-md p-space-lg justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-tertiary flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                  Become an Associate Fellow
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Do you design high-scale systems or teach deep technical fundamentals in
                  Telugu and English? Apply to lead an associate workshop track without
                  leaving your day job.
                </p>
                <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-label-sm font-label-sm text-tertiary">
                  <span className="font-bold text-on-surface">Criteria for nomination:</span>
                  <span>• 5+ years writing production code</span>
                  <span>• Commitment to live terminal demos</span>
                  <span>• Zero sponsored vendor slide presentations</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-space-sm px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md transition-all shadow-sm flex items-center justify-center gap-space-xs"
              >
                <span>Apply as Associate Mentor</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-bright py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col gap-space-xs pb-space-lg text-center max-w-2xl mx-auto">
            <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold">
              THE PEDAGOGICAL COMPASS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Mentorship Integrity &amp; Operating Code
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              What sets our faculty apart from conventional bootcamps and university courses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
            {[
              {
                icon: "terminal",
                color: "bg-primary-fixed text-primary",
                title: "Zero Slide-Deck Lecturing",
                body:
                  "We believe PowerPoint slides create an illusion of understanding. Mentors write code live, trace kernel packets through tcpdump, inject deliberate chaos faults, and inspect raw memory pointers alongside students.",
                foot: "100% Live Terminals",
                footColor: "text-primary",
              },
              {
                icon: "translate",
                color: "bg-secondary-fixed text-secondary",
                title: "Telugu & English Dual Fluency",
                body:
                  "Language should never bottleneck technical mastery. Our mentors seamlessly translate complex architectural abstractions into intuitive Telugu mental models while preserving standard industry terminology for global interviews.",
                foot: "Jnana Diksuchika Pedagogy",
                footColor: "text-secondary",
              },
              {
                icon: "balance",
                color: "bg-surface-container-high text-tertiary",
                title: "Transparent Intellectual Autonomy",
                body:
                  "Our fellows retain full copyright and ownership of their open-source curriculum, lab test fixtures, and custom tooling. They receive equitable, top-percentile honorariums and full creative freedom over workshop pedagogy.",
                foot: "Open Source Native",
                footColor: "text-tertiary",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-space-xl rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${item.color}`}
                >
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.body}
                  </p>
                </div>
                <div
                  className={`mt-auto pt-space-sm text-label-sm font-label-sm font-semibold flex items-center gap-1 ${item.footColor}`}
                >
                  <span>{item.foot}</span>
                  <span className="material-symbols-outlined text-[14px]">done_all</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-sm max-w-2xl text-center lg:text-left">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary-fixed-dim font-bold">
                ACCELERATE YOUR ENGINEERING MASTERY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-surface-bright font-extrabold leading-tight">
                Learn Directly From Engineers Who Run Production Systems.
              </h2>
              <p className="font-body-lg text-body-lg text-surface-dim">
                Reserve your seat for upcoming weekend cohorts or nominate a fellow
                practitioner to lead a specialized workshop at our Hyderabad and Bengaluru
                nodes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
              <Link
                href="/workshops"
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded-lg bg-secondary-container hover:bg-secondary text-on-tertiary font-title-md text-title-md transition-all shadow-[0_4px_14px_rgba(252,139,51,0.35)]"
              >
                Explore Upcoming Cohorts
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-tertiary/40 hover:bg-primary text-surface-bright font-title-md text-title-md transition-all"
              >
                Nominate or Apply as Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
