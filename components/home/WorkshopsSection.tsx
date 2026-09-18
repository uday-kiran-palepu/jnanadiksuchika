"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { workshopCohorts } from "@/components/workshops/data";

export function WorkshopsSection() {
  const { t } = useLocale();
  const featured = workshopCohorts.slice(0, 2);

  return (
    <Section
      eyebrow={t("nav.workshops")}
      title="Upcoming cohorts"
      subtitle="Intensive workshops with labs that feel like production — not slide karaoke."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featured.map((w) => (
          <Link key={w.id} href={`/workshops/${w.slug}`} className="group block">
            <Card interactive className="overflow-hidden grid sm:grid-cols-5">
              <ImagePlaceholder
                className="sm:col-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-full"
                alt={w.title}
              />
              <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--bs-warm)]">
                  {w.deliveryBadge} · {w.dateRange}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-[var(--bs-ink)] group-hover:text-[var(--bs-accent)] transition-colors">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--bs-muted)]">
                  {w.mentorName} — {w.pace}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--bs-ink)]">
                  {w.price}
                  {w.priceStrike ? (
                    <span className="ml-2 line-through text-[var(--bs-muted)] font-normal">
                      {w.priceStrike}
                    </span>
                  ) : null}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/workshops"
          className="text-sm font-semibold text-[var(--bs-accent)] hover:underline"
        >
          {t("common.viewAll")} {t("nav.workshops")} →
        </Link>
      </div>
    </Section>
  );
}
