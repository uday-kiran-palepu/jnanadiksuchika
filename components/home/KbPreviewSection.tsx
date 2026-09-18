"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { kbArticles } from "@/components/knowledge-base/data";

export function KbPreviewSection() {
  const { t, locale } = useLocale();
  const preview = kbArticles.slice(0, 3);

  return (
    <Section
      eyebrow={t("nav.knowledgeBase")}
      title="Knowledge that compounds"
      subtitle="Guides, roadmaps, and bilingual mental models — free tier plus unlockable premium packs."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {preview.map((article) => (
          <Card key={article.id} interactive className="p-5 h-full">
            <p className="text-xs font-semibold text-[var(--bs-muted)]">
              {article.badge} · {article.readMinutes} min
            </p>
            <h3 className="mt-3 font-display text-base font-bold text-[var(--bs-ink)] leading-snug">
              {locale === "te" ? article.titleTe : article.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--bs-muted)] line-clamp-3">
              {article.excerpt}
            </p>
            <Link
                href={`/knowledge-base/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--bs-accent)]"
              >
                {t("common.learnMore")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/knowledge-base"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--bs-accent)] hover:underline"
        >
          {t("common.viewAll")}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/knowledge-base#plans"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--bs-ink)] hover:underline"
        >
          {t("kbPlans.title")}
        </Link>
      </div>
    </Section>
  );
}
