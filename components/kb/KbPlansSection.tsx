"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { kbPlans } from "@/lib/data/site";

const titleKeys = {
  free: "kbPlans.free",
  one: "kbPlans.one",
  ten: "kbPlans.ten",
  subscription: "kbPlans.sub",
} as const;

const descKeys = {
  free: "kbPlans.freeDesc",
  one: "kbPlans.oneDesc",
  ten: "kbPlans.tenDesc",
  subscription: "kbPlans.subDesc",
} as const;

export function KbPlansSection() {
  const { t, locale } = useLocale();

  return (
    <Section
      id="plans"
      title={t("kbPlans.title")}
      subtitle={t("kbPlans.subtitle")}
      className="pt-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kbPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-6 flex flex-col ${
              plan.featured
                ? "border-[var(--bs-accent)] ring-1 ring-[var(--bs-accent)]/30"
                : ""
            }`}
          >
            <h3 className="font-display text-lg font-bold text-[var(--bs-ink)]">
              {t(titleKeys[plan.id])}
            </h3>
            <p className="mt-3 font-display text-3xl font-extrabold text-[var(--bs-ink)]">
              {locale === "te" ? plan.priceTe : plan.priceLabel}
              {plan.period ? (
                <span className="text-base font-semibold text-[var(--bs-muted)]">
                  {plan.period}
                </span>
              ) : null}
            </p>
            <p className="mt-2 text-sm text-[var(--bs-muted)]">
              {t(descKeys[plan.id])}
            </p>
            <ul className="mt-4 space-y-2 flex-1">
              {(locale === "te" ? plan.featuresTe : plan.features).map((f) => (
                <li key={f} className="text-sm text-[var(--bs-ink)] flex gap-2">
                  <span className="text-[var(--bs-accent)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              variant={plan.featured ? "primary" : "outline"}
              onClick={() => {
                // FUTURE: INTEGRATION POINT — Razorpay / UPI checkout.
                // Do NOT show fake payment success. Open checkout session via API route.
                console.info(
                  "[Jnana Diksuchika] KB plan selected — payment integration pending:",
                  plan.id
                );
              }}
            >
              {t("kbPlans.cta")}
            </Button>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-xs text-[var(--bs-muted)]">
        {/* FUTURE: POST /api/payments/create-order → Razorpay order_id → verify webhook */}
        {t("kbPlans.paymentNote")}
      </p>
    </Section>
  );
}
