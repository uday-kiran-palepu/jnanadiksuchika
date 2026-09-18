"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-20">
      <div className="rounded-3xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)] p-10 md:p-14 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--bs-warm)] mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--bs-ink)]">
          {t("notFound.title")}
        </h1>
        <p className="mt-4 text-[var(--bs-muted)] max-w-xl leading-relaxed">
          {t("notFound.body")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/">
            <Button>{t("notFound.home")}</Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline">{t("nav.courses")}</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost">{t("nav.services")}</Button>
          </Link>
          <Link href="/tools/system-states">
            <Button variant="ghost">{t("nav.systemStates")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
