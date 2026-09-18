"use client";

import Link from "next/link";
import { BookOpen, Library, Briefcase, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/lib/i18n/LanguageProvider";

const pillars = [
  {
    href: "/courses",
    icon: BookOpen,
    titleKey: "pillars.learning",
    descKey: "pillars.learningDesc",
  },
  {
    href: "/knowledge-base",
    icon: Library,
    titleKey: "pillars.kb",
    descKey: "pillars.kbDesc",
  },
  {
    href: "/services",
    icon: Briefcase,
    titleKey: "pillars.services",
    descKey: "pillars.servicesDesc",
  },
  {
    href: "/workshops",
    icon: Users,
    titleKey: "pillars.workshops",
    descKey: "pillars.workshopsDesc",
  },
] as const;

export function PillarsSection() {
  const { t } = useLocale();

  return (
    <Section title={t("pillars.title")} subtitle={t("pillars.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {pillars.map(({ href, icon: Icon, titleKey, descKey }) => (
          <Link key={href} href={href} className="group block h-full">
            <Card interactive className="h-full p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bs-accent-soft)] text-[var(--bs-accent)] group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--bs-ink)]">
                {t(titleKey)}
              </h3>
              <p className="mt-2 text-sm text-[var(--bs-muted)] leading-relaxed">
                {t(descKey)}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
