"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";

export function FinalCtaSection() {
  const { t } = useLocale();

  return (
    <Section className="pb-24" reveal>
      <div className="rounded-3xl bg-[var(--bs-ink)] text-white px-8 py-14 md:px-14 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bs-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/workshops">
              <Button size="lg">{t("cta.primary")}</Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                {t("cta.secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
