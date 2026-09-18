"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useLocale } from "@/lib/i18n/LanguageProvider";
import { homepageFaqs } from "@/lib/data/site";

export function FaqSection() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section title={t("faq.title")} subtitle={t("faq.subtitle")} narrow>
      <div className="divide-y divide-[var(--bs-border)] border border-[var(--bs-border)] rounded-2xl bg-[var(--bs-surface-0)] overflow-hidden">
        {homepageFaqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.qKey}>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[var(--bs-surface-1)] transition-colors"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-semibold text-[var(--bs-ink)]">
                  {t(item.qKey)}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--bs-muted)] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-[var(--bs-muted)] leading-relaxed">
                  {t(item.aKey)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
