"use client";

import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { pick, useLocale } from "@/lib/i18n/LanguageProvider";
import type { CatalogCourse } from "./data";

export function CourseCard({ course }: { course: CatalogCourse }) {
  const { locale } = useLocale();
  return (
    <article
      className="course-card flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
      data-category={course.category}
      data-level={course.level}
    >
      <div className="relative w-full h-48 bg-surface-container overflow-hidden">
        <ImagePlaceholder
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={course.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent" />
        <span className="absolute top-space-sm left-space-sm px-space-sm py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur font-label-sm text-label-sm text-primary font-bold">
          {course.trackLabel}
        </span>
        <span
          className={`absolute top-space-sm right-space-sm px-space-sm py-1 rounded-full font-label-sm text-label-sm font-bold shadow-xs ${course.levelBadgeClass}`}
        >
          {course.levelBadge}
        </span>
        <div className="absolute bottom-space-sm left-space-sm right-space-sm text-on-primary">
          <span className="font-caption text-caption opacity-80 uppercase tracking-wider block">
            {pick(locale, course.subtitle, course.teluguTitle)}
          </span>
        </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary-container">
              schedule
            </span>
            <span>{course.schedule}</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs line-clamp-2">
            {course.description}
          </p>
        </div>
        <div className="flex flex-col gap-space-sm pt-space-xs">
          <div className="flex items-center justify-between text-body-sm">
            <div className="flex items-center gap-1">
              <span className="font-bold text-on-surface">{course.rating}</span>
              <div className="flex text-secondary-container">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <span className="text-on-surface-variant font-label-sm text-label-sm">
                ({course.ratingCount})
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[140px]">
              {course.instructor}
            </span>
          </div>
          <div className="flex items-center justify-between pt-space-xs gap-space-sm flex-wrap">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-space-xs flex-wrap">
                <span className="font-title-lg text-title-lg font-bold text-on-surface">
                  {course.price}
                </span>
                {course.priceStrike && (
                  <span className="font-label-sm text-label-sm line-through text-outline">
                    {course.priceStrike}
                  </span>
                )}
                {course.discountLabel && (
                  <span className="font-label-sm text-label-sm text-secondary-container font-bold">
                    {course.discountLabel}
                  </span>
                )}
              </div>
              <span
                className={`font-caption text-caption font-medium ${
                  course.freeDiagnostic ? "text-primary" : "text-secondary"
                }`}
              >
                {course.priceNote}
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <Link
                className="px-space-sm py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold transition-colors"
                href={`/courses/${course.slug}`}
              >
                Syllabus
              </Link>
              <Link
                className="px-space-md py-space-xs rounded-lg bg-secondary-container hover:bg-secondary text-on-tertiary font-title-md text-title-md font-bold shadow-sm hover:shadow-md transition-all"
                href="/contact"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
