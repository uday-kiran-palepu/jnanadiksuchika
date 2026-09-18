"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LazyCompass } from "@/components/home/LazyCompass";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { homepageStats } from "@/lib/data/site";

export function HeroSection() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bs-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bs-surface-1)]/40 to-[var(--bs-surface-1)] pointer-events-none" />
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bs-accent)]">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--bs-ink)] leading-[0.95]">
              {t("hero.headline")}
            </h1>
            <p className="text-lg md:text-xl text-[var(--bs-muted)] max-w-xl leading-relaxed">
              {t("hero.subhead")}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/courses">
                <Button size="lg">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  {t("hero.ctaSecondary")}
                </Button>
              </Link>
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-4 max-w-lg">
              {homepageStats.map((s) => (
                <div key={s.value}>
                  <dt className="font-display text-2xl font-bold text-[var(--bs-ink)]">
                    {s.value}
                  </dt>
                  <dd className="text-xs text-[var(--bs-muted)] mt-1 leading-snug">
                    {t(s.labelKey)}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[440px] rounded-3xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)]/70 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] overflow-hidden"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <LazyCompass />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
