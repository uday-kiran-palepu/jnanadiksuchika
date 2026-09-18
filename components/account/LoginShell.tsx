"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";

export function LoginShell() {
  const { t } = useLocale();

  return (
    <Section narrow className="pt-12 pb-24">
      <Card className="p-8 md:p-10">
        <h1 className="font-display text-3xl font-bold text-[var(--bs-ink)]">
          {t("account.loginTitle")}
        </h1>
        <p className="mt-3 text-sm text-[var(--bs-muted)] leading-relaxed">
          {t("account.loginSubtitle")}
        </p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // FUTURE: Wire to auth provider — do not fake success.
          }}
        >
          <label className="block">
            <span className="text-sm font-semibold text-[var(--bs-ink)]">
              {t("account.email")}
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="mt-1.5 w-full rounded-lg border border-[var(--bs-border)] bg-[var(--bs-surface-0)] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--bs-accent)]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[var(--bs-ink)]">
              {t("account.password")}
            </span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="mt-1.5 w-full rounded-lg border border-[var(--bs-border)] bg-[var(--bs-surface-0)] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--bs-accent)]"
            />
          </label>
          <Button type="submit" className="w-full" size="lg">
            {t("account.submitLogin")}
          </Button>
        </form>
        <p className="mt-6 text-xs text-[var(--bs-muted)] leading-relaxed border-t border-[var(--bs-border)] pt-4">
          {/* FUTURE: NextAuth / Clerk / custom JWT + secure session cookies. No secrets in client. */}
          {t("account.futureNote")}
        </p>
        <Link
          href="/account/profile"
          className="mt-4 inline-block text-sm font-semibold text-[var(--bs-accent)] hover:underline"
        >
          {t("account.profileTitle")} →
        </Link>
      </Card>
    </Section>
  );
}
