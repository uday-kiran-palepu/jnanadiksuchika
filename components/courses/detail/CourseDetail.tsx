import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { CatalogCourse } from "@/components/courses/data";
import type { CourseDetailContent } from "./courseDetails";

type Props = {
  course: CatalogCourse & CourseDetailContent;
};

export function CourseDetail({ course }: Props) {
  return (
    <div className="flex flex-col w-full pb-24 lg:pb-0">
      <section className="w-full bg-surface-container-lowest shadow-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-wrap items-center justify-between gap-y-space-xs text-body-sm font-body-sm text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" href="/courses">
              Courses
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold truncate max-w-[240px] sm:max-w-none">
              {course.title}
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low text-caption font-caption uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-secondary-container" />
            {course.trackLabel}
          </span>
        </div>
      </section>

      <section className="w-full relative overflow-hidden bg-gradient-to-b from-surface-container-low/80 via-background to-surface pb-space-xl pt-space-lg">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        />
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className={`px-space-sm py-1 rounded-full font-label-sm text-label-sm font-semibold ${course.levelBadgeClass}`}>
                  {course.levelBadge}
                </span>
                <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider">
                  Big Switch · Course
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="font-title-lg text-title-lg text-primary/90 font-medium">
                {course.teluguTitle}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {course.longDescription}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                {[
                  { label: "Schedule", value: course.schedule },
                  { label: "Instructor", value: course.instructor },
                  { label: "Rating", value: `${course.rating} · ${course.ratingCount}` },
                  { label: "Level", value: course.levelBadge },
                ].map((m) => (
                  <div key={m.label} className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
                    <p className="font-label-sm text-label-sm uppercase text-outline">{m.label}</p>
                    <p className="font-title-md text-title-md text-on-surface font-semibold mt-1 leading-snug">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md sticky top-28">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-surface-container">
                  <ImagePlaceholder className="w-full h-full object-cover" alt={course.imageAlt} />
                </div>
                <div className="flex items-baseline gap-space-xs flex-wrap">
                  <span className="font-headline-md text-headline-md text-on-surface font-extrabold">
                    {course.price}
                  </span>
                  {course.priceStrike && (
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
                      {course.priceStrike}
                    </span>
                  )}
                  {course.discountLabel && (
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      {course.discountLabel}
                    </span>
                  )}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{course.priceNote}</p>
                <ul className="space-y-2">
                  {course.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex gap-2 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">
                        check_circle
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-space-sm">
                  <Link
                    href="/contact"
                    className="flex-1 text-center px-space-md py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:bg-secondary transition-all"
                  >
                    Request enrollment
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center px-space-md py-space-sm rounded-lg bg-surface-container-high text-primary font-title-md text-title-md hover:bg-primary-fixed transition-colors"
                  >
                    Ask faculty
                  </Link>
                </div>
                <p className="font-caption text-caption text-outline">
                  Enrollment is confirmed after a diagnostic conversation — no fake checkout.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Who this is for</h2>
              <ul className="mt-space-md space-y-3">
                {course.audience.map((a) => (
                  <li key={a} className="flex gap-3 font-body-md text-body-md text-on-surface-variant">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Curriculum</h2>
              <div className="mt-space-md flex flex-col gap-space-sm">
                {course.modules.map((m) => (
                  <article
                    key={m.week}
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm"
                  >
                    <p className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                      {m.week}
                    </p>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold mt-1">
                      {m.title}
                    </h3>
                    <ul className="mt-space-sm space-y-2">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex gap-2 font-body-sm text-body-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
                            arrow_right
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="p-space-lg rounded-xl bg-surface-container-low">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Stack & tools</h2>
              <div className="mt-space-md flex flex-wrap gap-space-xs">
                {course.stack.map((s) => (
                  <span
                    key={s}
                    className="px-space-sm py-space-xs rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">FAQ</h2>
              <div className="mt-space-md flex flex-col gap-space-sm">
                {course.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group p-space-md rounded-xl bg-surface-container-lowest shadow-sm"
                  >
                    <summary className="font-title-md text-title-md text-on-surface font-semibold cursor-pointer list-none flex items-center justify-between gap-2">
                      {f.q}
                      <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
            <div className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface">
              <h3 className="font-title-lg text-title-lg font-bold text-surface-bright">
                Prefer a live cohort?
              </h3>
              <p className="mt-2 font-body-sm text-body-sm text-surface-dim">
                Pair this track with an intensive workshop when you want bare-metal hours and live defenses.
              </p>
              <Link
                href="/workshops"
                className="mt-space-md inline-flex items-center gap-1 font-title-md text-title-md text-secondary-fixed font-semibold"
              >
                Browse workshops
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.08)] p-space-sm">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-space-sm">
          <div className="min-w-0">
            <p className="font-caption text-caption text-outline truncate">{course.subtitle}</p>
            <p className="font-title-md text-title-md font-bold text-on-surface">{course.price}</p>
          </div>
          <Link
            className="px-space-md py-2.5 rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md shrink-0"
            href="/contact"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}
