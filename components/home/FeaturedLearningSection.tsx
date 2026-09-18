"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { catalogCourses } from "@/components/courses/data";

export function FeaturedLearningSection() {
  const { t, locale } = useLocale();
  const featured = catalogCourses.slice(0, 3);

  return (
    <Section
      eyebrow={t("nav.learning")}
      title="Featured learning tracks"
      subtitle="Production-shaped courses — systems, backends, and craft you can defend in an interview or an outage."
      className="bg-[var(--bs-surface-0)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((course) => (
          <Link key={course.id} href={`/courses/${course.slug}`} className="group block">
            <Card interactive className="overflow-hidden h-full flex flex-col">
              <ImagePlaceholder
                className="aspect-[16/10] w-full"
                alt={course.title}
              />
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--bs-accent)]">
                  {course.trackLabel}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-[var(--bs-ink)] group-hover:text-[var(--bs-accent)] transition-colors">
                  {locale === "te" ? course.teluguTitle : course.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--bs-muted)] line-clamp-2 flex-1">
                  {course.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--bs-ink)]">
                  {t("common.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--bs-accent)] hover:underline"
        >
          {t("common.viewAll")} {t("nav.courses")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
