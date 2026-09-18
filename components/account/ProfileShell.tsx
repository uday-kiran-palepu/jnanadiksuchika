"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";

export function ProfileShell() {
  const { t } = useLocale();

  return (
    <Section narrow className="pt-12 pb-24">
      <Card className="p-8 md:p-10">
        <h1 className="font-display text-3xl font-bold text-[var(--bs-ink)]">
          {t("account.profileTitle")}
        </h1>
        <p className="mt-3 text-sm text-[var(--bs-muted)] leading-relaxed">
          {t("account.profileSubtitle")}
        </p>
        <div className="mt-8 space-y-4 opacity-70 pointer-events-none" aria-disabled>
          <div className="h-12 rounded-lg bg-[var(--bs-surface-2)]" />
          <div className="h-12 rounded-lg bg-[var(--bs-surface-2)]" />
          <div className="h-24 rounded-lg bg-[var(--bs-surface-2)]" />
        </div>
        <p className="mt-6 text-xs text-[var(--bs-muted)] leading-relaxed">
          {/* FUTURE: Load profile from authenticated API; enrollment, KB entitlements, invoices. */}
          {t("account.futureNote")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/account/login">
            <Button variant="outline">{t("nav.login")}</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">{t("nav.contact")}</Button>
          </Link>
        </div>
      </Card>
    </Section>
  );
}
