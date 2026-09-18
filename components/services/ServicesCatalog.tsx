"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { services } from "@/lib/data/services";

export function ServicesCatalog() {
  const { t, locale } = useLocale();

  return (
    <Section
      title={t("services.title")}
      subtitle={t("services.subtitle")}
      className="pt-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Card key={s.slug} interactive className="p-6 flex flex-col h-full">
            <span className="material-symbols-outlined text-[var(--bs-accent)] text-[32px]">
              {s.icon}
            </span>
            <h2 className="mt-4 font-display text-xl font-bold text-[var(--bs-ink)]">
              {locale === "te" ? s.titleTe : s.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--bs-muted)] flex-1 leading-relaxed">
              {locale === "te" ? s.shortTe : s.short}
            </p>
            <Link href={`/services/${s.slug}`} className="mt-5">
              <Button variant="outline" className="w-full">
                {t("common.learnMore")}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-[var(--bs-ink)]">
            Need a custom mix?
          </h3>
          <p className="mt-1 text-sm text-[var(--bs-muted)]">
            Combine staffing, workshops, and software delivery under one SOW.
          </p>
        </div>
        <Link href="/contact">
          <Button>{t("services.cta")}</Button>
        </Link>
      </div>
    </Section>
  );
}
