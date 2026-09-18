"use client";

import { Section } from "@/components/ui/Section";
import { useLocale } from "@/lib/i18n/LanguageProvider";

const whyPoints = [
  {
    title: "Production over theater",
    body: "Labs inject failure modes — partitions, timeouts, flaky deps — so graduates can reason under pressure.",
  },
  {
    title: "Bilingual by design",
    body: "English and Telugu surfaces mean regional teams learn without losing technical precision.",
  },
  {
    title: "Learning + delivery",
    body: "The same ecosystem that teaches systems depth also recruits, staffs, and ships software.",
  },
];

const howSteps = [
  { step: "01", title: "Diagnose", body: "Baseline skills, goals, and constraints — individual or team." },
  { step: "02", title: "Switch on", body: "Pick a course, workshop, KB plan, or service engagement." },
  { step: "03", title: "Ship & review", body: "Build in the open, get feedback, and leave with artifacts you own." },
];

export function WhyHowSection() {
  const { t } = useLocale();

  return (
    <>
      <Section
        title="Why Jnana Diksuchika"
        subtitle="A coherent bet: depth beats hype, and direction beats more content."
        className="bg-[var(--bs-surface-0)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPoints.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg font-bold text-[var(--bs-ink)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--bs-muted)] leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How it works"
        subtitle="Three moves — no funnel fog."
      >
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howSteps.map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)] p-6"
            >
              <span className="font-display text-sm font-bold text-[var(--bs-accent)] tracking-widest">
                {s.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-[var(--bs-ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--bs-muted)] leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="sr-only">{t("brand.tagline")}</p>
      </Section>
    </>
  );
}
