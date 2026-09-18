"use client";

import Link from "next/link";
import { pick, useLocale } from "@/lib/i18n/LanguageProvider";
import type { KbArticle } from "@/components/knowledge-base/data";

export function ArticleDetail({ article }: { article: KbArticle }) {
  const { locale } = useLocale();

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm">
        <div className="max-w-[860px] mx-auto px-margin-mobile lg:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"
          >
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href="/knowledge-base">
              Knowledge Base
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold truncate">{article.topic}</span>
          </nav>
        </div>
      </section>

      <article className="max-w-[860px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
            {article.badge}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            {article.readMinutes} min read
          </span>
        </div>
        <p className="mt-space-md font-caption text-caption uppercase text-secondary font-semibold tracking-wider">
          {article.topic}
        </p>
        <h1 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
          {pick(locale, article.title, article.titleTe)}
        </h1>
        <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {article.excerpt}
        </p>
        <p className="mt-space-md font-caption text-caption text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[18px]">
            {article.authorIcon}
          </span>
          {article.authorMeta}
        </p>

        <div className="mt-space-xl flex flex-col gap-space-xl">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-space-sm space-y-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 font-body-md text-body-md text-on-surface-variant"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {article.related && article.related.length > 0 && (
          <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low">
            <h2 className="font-title-lg text-title-lg text-on-surface font-bold">Continue</h2>
            <ul className="mt-space-md flex flex-col gap-space-sm">
              {article.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-1 font-title-md text-title-md text-primary font-semibold hover:underline"
                  >
                    {r.label}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-space-xl flex flex-wrap gap-space-sm">
          <Link
            href="/knowledge-base"
            className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-primary font-title-md text-title-md"
          >
            All articles
          </Link>
          <Link
            href="/contact"
            className="px-space-md py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold"
          >
            Ask faculty
          </Link>
        </div>
      </article>
    </div>
  );
}
