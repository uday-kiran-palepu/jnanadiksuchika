"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { pick, useLocale } from "@/lib/i18n/LanguageProvider";
import {
  kbArticles,
  kbCategoryFilters,
  type KbCategoryId,
} from "./data";

export function KnowledgeBaseCatalog() {
  const { locale } = useLocale();
  const [category, setCategory] = useState<KbCategoryId>("all");
  const [query, setQuery] = useState("");
  const [listView, setListView] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("kb-search-input")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return kbArticles.filter((a) => {
      const matchCat = category === "all" || a.category === category;
      const blob = `${a.title} ${a.titleTe} ${a.excerpt} ${a.topic}`.toLowerCase();
      const matchQ = !q || blob.includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  const resetFilters = useCallback(() => {
    setQuery("");
    setCategory("all");
  }, []);

  const pillActive = "px-space-md py-space-sm rounded-lg font-title-md text-title-md bg-primary text-on-primary shadow-sm transition-all";
  const pillIdle =
    "px-space-md py-space-sm rounded-lg font-title-md text-title-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all";

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-space-xs" href="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">Knowledge Base &amp; Engineering Archive</span>
          </nav>
          <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping" />
            Telemetry Synced 4m ago
          </span>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-b from-surface-container-low via-surface to-background pt-space-xl pb-space-xl px-margin-mobile lg:px-margin overflow-hidden">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg relative z-10">
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-primary px-space-sm py-space-xs rounded bg-surface-container-highest w-fit">
              {pick(locale, "ARCHITECTURAL REPOSITORY", "జ్ఞాన దిక్సూచిక")}
            </span>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-none max-w-4xl">
              {pick(
                locale,
                "Knowledge Base & Career Engineering Library",
                "నాలెడ్జ్ బేస్ & కెరీర్ ఇంజనీరింగ్ లైబ్రరీ"
              )}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Procedural how-tos, platform guides, exam roadmaps, and distributed systems curriculum notes — open,
              community-refined, and telemetry-backed.
            </p>
          </div>

          <div className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-xl p-space-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
            <div className="flex items-center gap-space-sm flex-1 px-space-sm py-space-xs">
              <span className="material-symbols-outlined text-primary text-[24px]">search</span>
              <input
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                id="kb-search-input"
                placeholder="Search eBPF, Raft, GATE CS syllabus, Telugu glossary..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              className="px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-title-md text-title-md shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs"
              type="button"
              onClick={() => document.getElementById("kb-search-input")?.focus()}
            >
              <span>Query Docs</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              { n: "148", label: "Active RFCs & SOP Guides", sub: "9 Added this Month" },
              { n: "520+", label: "Telugu System Terms", sub: "తెలుగు డీప్-సిస్టమ్స్ గ్లోసరీ" },
              { n: "99.4%", label: "Lab Setup Success Rate", sub: "Hyderabad Bare-Metal Node" },
              { n: "2.4k", label: "GATE CS Aspirants Guided", sub: "High-yield Kernel Notes" },
            ].map((m) => (
              <div key={m.label} className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-bold">{m.n}</span>
                <span className="font-label-md text-label-md text-on-surface-variant">{m.label}</span>
                <span className="font-caption text-caption text-on-surface-variant mt-space-xs">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl px-margin-mobile lg:px-margin" id="article-stream">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md bg-surface-container-low p-space-sm rounded-xl">
            <div className="flex flex-wrap items-center gap-space-xs">
              {kbCategoryFilters.map((f) => (
                <button
                  key={f.id}
                  className={category === f.id ? pillActive : pillIdle}
                  type="button"
                  onClick={() => setCategory(f.id)}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-xs rounded-lg shadow-sm">
              <button
                aria-label="Grid View"
                className={`w-8 h-8 rounded flex items-center justify-center ${!listView ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container"}`}
                type="button"
                onClick={() => setListView(false)}
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
              </button>
              <button
                aria-label="List View"
                className={`w-8 h-8 rounded flex items-center justify-center ${listView ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container"}`}
                type="button"
                onClick={() => setListView(true)}
              >
                <span className="material-symbols-outlined text-[18px]">view_list</span>
              </button>
            </div>
          </div>

          {visible.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-low rounded-xl text-center">
              <span className="material-symbols-outlined text-outline text-[48px]">search_off</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-sm">No Matching Knowledge Base Entries</h3>
              <button
                className="mt-space-md px-space-md py-space-sm rounded bg-primary text-on-primary font-title-md text-title-md"
                type="button"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-gutter ${listView ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
              id="articles-container"
            >
              {visible.map((article) => (
                <article
                  key={article.id}
                  className="article-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-lg hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between gap-space-xs">
                      <span className="px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        {article.badge}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {article.readMinutes} min read
                      </span>
                    </div>
                    <span className="font-caption text-caption uppercase text-secondary font-semibold">{article.topic}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {pick(locale, article.title, article.titleTe)}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{article.excerpt}</p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-caption text-caption text-on-surface-variant flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">{article.authorIcon}</span>
                      {article.authorMeta}
                    </span>
                    {article.slug ? (
                      <Link
                        className="font-title-md text-title-md text-primary font-semibold flex items-center gap-space-xs hover:translate-x-0.5 transition-transform"
                        href={`/knowledge-base/${article.slug}`}
                      >
                        Read Article
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    ) : (
                      <span className="font-title-md text-title-md text-on-surface-variant">Coming soon</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
