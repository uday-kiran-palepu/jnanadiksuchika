"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { services } from "@/lib/data/services";

export function ServicesPreviewSection() {
  const { t, locale } = useLocale();
  const preview = services.slice(0, 4);

  return (
    <Section
      eyebrow={t("nav.services")}
      title={t("services.title")}
      subtitle={t("services.subtitle")}
      className="bg-[var(--bs-surface-0)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {preview.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group block h-full">
            <Card interactive className="p-5 h-full">
              <span className="material-symbols-outlined text-[var(--bs-accent)] text-[28px]">
                {s.icon}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-[var(--bs-ink)]">
                {locale === "te" ? s.titleTe : s.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--bs-muted)] leading-relaxed">
                {locale === "te" ? s.shortTe : s.short}
              </p>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--bs-accent)] hover:underline"
        >
          {t("common.viewAll")} {t("nav.services")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
