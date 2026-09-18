import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { WorkshopCohort } from "@/components/workshops/data";
import type { WorkshopDetailContent } from "./workshopDetails";

type Props = {
  cohort: WorkshopCohort & WorkshopDetailContent;
};

export function WorkshopDetail({ cohort }: Props) {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low/70 py-space-sm shadow-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-space-sm text-body-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs text-on-surface-variant font-body-sm"
          >
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href="/workshops">
              Workshops
            </Link>
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <span className="font-semibold text-primary truncate max-w-[260px] sm:max-w-none">
              {cohort.title}
            </span>
          </nav>
          <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-tertiary font-label-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
            {cohort.urgencyBadge}
          </span>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-high/30 via-surface to-background py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded font-label-sm text-label-sm font-semibold bg-primary-fixed text-on-primary-fixed w-fit">
              <span className="material-symbols-outlined text-[14px]">{cohort.deliveryIcon}</span>
              {cohort.deliveryBadge}
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              {cohort.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {cohort.overview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <Meta icon="calendar_today" label="Dates" value={cohort.dateRange} />
              <Meta icon="pace" label="Pace" value={cohort.pace} />
              <Meta icon="person" label="Mentor" value={cohort.mentorName} />
              <Meta icon={cohort.envIcon} label="Environment" value={cohort.envTag} />
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline-sm font-bold">
                {cohort.mentorInitial}
              </div>
              <div>
                <p className="font-title-md text-title-md text-on-surface font-semibold">
                  {cohort.mentorName}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{cohort.mentorBio}</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md sticky top-28">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-container">
                <ImagePlaceholder
                  className="w-full h-full object-cover"
                  alt={`${cohort.title} lab`}
                />
              </div>
              <div className="flex items-baseline gap-space-xs flex-wrap">
                <span className="font-headline-md text-headline-md font-extrabold text-on-surface">
                  {cohort.price}
                </span>
                {cohort.priceStrike && (
                  <span className="line-through font-body-sm text-body-sm text-on-surface-variant">
                    {cohort.priceStrike}
                  </span>
                )}
              </div>
              <p className="font-label-sm text-label-sm text-secondary font-semibold">
                {cohort.priceNote}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{cohort.envNote}</p>
              <Link
                href="/contact"
                className="text-center px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:bg-secondary transition-all"
              >
                Register & reserve seat
              </Link>
              <Link
                href="/contact"
                className="text-center px-space-md py-space-sm rounded-lg bg-surface-container-high text-primary font-title-md text-title-md"
              >
                Ask about corporate seats
              </Link>
              <p className="font-caption text-caption text-outline">
                Registration opens a conversation with ops — payment is confirmed offline, never faked in-app.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Outcomes</h2>
            <ul className="mt-space-md space-y-3">
              {cohort.outcomes.map((o) => (
                <li key={o} className="flex gap-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    verified
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-space-xl">
              Core modules
            </h2>
            <ul className="mt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {cohort.modules.map((m) => (
                <li
                  key={m}
                  className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm font-body-sm text-body-sm text-on-surface"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Week plan</h2>
            <div className="mt-space-md flex flex-col gap-space-sm">
              {cohort.weekPlan.map((w) => (
                <article key={w.label} className="p-space-md rounded-xl bg-surface-container-low">
                  <p className="font-label-sm text-label-sm uppercase text-primary font-bold">
                    {w.label}
                  </p>
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">
                    {w.focus}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Deliverable: {w.deliverable}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Prerequisites</h2>
            <ul className="mt-space-md space-y-2">
              {cohort.prerequisites.map((p) => (
                <li key={p} className="flex gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px]">flag</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">FAQ</h2>
            <div className="mt-space-md flex flex-col gap-space-sm">
              {cohort.faqs.map((f) => (
                <details key={f.q} className="p-space-md rounded-xl bg-surface-container-lowest group">
                  <summary className="font-title-md text-title-md font-semibold cursor-pointer list-none flex justify-between gap-2">
                    {f.q}
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
      <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
      <div>
        <p className="font-label-sm text-label-sm uppercase text-outline">{label}</p>
        <p className="font-title-md text-title-md text-on-surface font-semibold">{value}</p>
      </div>
    </div>
  );
}
