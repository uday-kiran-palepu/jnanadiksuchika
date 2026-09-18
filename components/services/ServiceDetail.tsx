"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import type { Service } from "@/lib/data/services";

export function ServiceDetail({ service }: { service: Service }) {
  const { t, locale } = useLocale();
  const title = locale === "te" ? service.titleTe : service.title;
  const short = locale === "te" ? service.shortTe : service.short;

  return (
    <Section className="pt-10">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--bs-muted)] hover:text-[var(--bs-ink)] mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("nav.services")}
      </Link>
      <div className="max-w-3xl">
        <span className="material-symbols-outlined text-[var(--bs-accent)] text-[40px]">
          {service.icon}
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--bs-ink)]">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[var(--bs-muted)] leading-relaxed">
          {short}
        </p>
        <p className="mt-6 text-[var(--bs-ink)] leading-relaxed">
          {service.description}
        </p>
        <h2 className="mt-10 font-display text-xl font-bold text-[var(--bs-ink)]">
          Outcomes
        </h2>
        <ul className="mt-4 space-y-3">
          {service.outcomes.map((o) => (
            <li
              key={o}
              className="flex gap-3 text-sm text-[var(--bs-muted)] leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bs-accent)] shrink-0" />
              {o}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact">
            <Button size="lg">{t("services.cta")}</Button>
          </Link>
          <Link href="/workshops">
            <Button size="lg" variant="outline">
              {t("nav.workshops")}
            </Button>
          </Link>
        </div>
        {/* FUTURE: CRM / HubSpot form embed + calendar booking */}
      </div>
    </Section>
  );
}
