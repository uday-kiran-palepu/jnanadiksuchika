"use client";

import { useState } from "react";
import {
  courseFaqs,
  curriculumModules,
  moduleBodies,
} from "./modules";

export function CurriculumAndFaq() {
  const initialOpen = curriculumModules.reduce(
    (acc, m) => {
      acc[m.id] = Boolean(m.defaultOpen);
      return acc;
    },
    {} as Record<string, boolean>
  );
  const [openModules, setOpenModules] = useState(initialOpen);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    curriculumModules.forEach((m) => {
      all[m.id] = true;
    });
    setOpenModules(all);
  };

  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    curriculumModules.forEach((m) => {
      all[m.id] = false;
    });
    setOpenModules(all);
  };

  return (
    <>
      <section className="w-full py-space-xl bg-surface-container-low/50">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  account_tree
                </span>
                Modular Engineering Path
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Curriculum: 5 Rigorous Modules to Production Mastery
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Each module blends academic RFC analysis, Telugu conceptual
                grounding, and non-trivial Go implementation.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <button
                className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-primary text-label-md font-label-md shadow-xs hover:bg-primary hover:text-on-primary transition-all"
                type="button"
                onClick={expandAll}
              >
                Expand All Modules
              </button>
              <button
                className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md shadow-xs hover:bg-surface-container-high transition-all"
                type="button"
                onClick={collapseAll}
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm" id="curriculum-accordion">
            {curriculumModules.map((mod) => {
              const isOpen = openModules[mod.id];
              return (
                <div
                  key={mod.id}
                  className="module-card rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all"
                >
                  <button
                    aria-expanded={isOpen}
                    className="w-full p-space-md text-left flex flex-col md:flex-row md:items-center justify-between gap-space-sm hover:bg-surface-container-low/40 transition-colors cursor-pointer"
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                  >
                    <div className="flex items-start md:items-center gap-space-md">
                      <span
                        className={`w-10 h-10 rounded-lg font-headline-sm text-headline-sm flex items-center justify-center shrink-0 ${mod.numberClass}`}
                      >
                        {mod.number}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            {mod.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full font-caption text-caption font-bold ${mod.weeksBadgeClass}`}
                          >
                            {mod.weeksBadge}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary mt-0.5">
                          {mod.telugu}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-md self-end md:self-center">
                      <div className="hidden sm:flex flex-col items-end text-caption font-caption text-outline">
                        <span>{mod.exercises}</span>
                        <span className={mod.labClass}>{mod.lab}</span>
                      </div>
                      <span
                        className={`material-symbols-outlined text-on-surface-variant transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        expand_more
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-space-md pb-space-lg pt-space-xs bg-surface-container-lowest">
                      <div className="p-space-md rounded-xl bg-surface-container-low/60 flex flex-col gap-space-sm">
                        {mod.syllabus && mod.labBox ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                            <div className="flex flex-col gap-space-xs">
                              <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                                Syllabus Breakdown:
                              </span>
                              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                                {mod.syllabus.map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">
                                      arrow_right
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-lowest shadow-xs">
                              <div className="flex items-center justify-between">
                                <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[16px]">
                                    terminal
                                  </span>
                                  {mod.labBox.title}
                                </span>
                                <span className="font-caption text-caption text-outline">
                                  Repo: {mod.labBox.repo}
                                </span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                {mod.labBox.description}
                              </p>
                              <div className="mt-auto pt-space-xs flex items-center gap-2 font-caption text-caption text-tertiary flex-wrap">
                                <span className="px-2 py-0.5 rounded bg-surface-container font-mono">
                                  {mod.labBox.command}
                                </span>
                                <span className="text-primary font-semibold">
                                  100% Pass Required
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                              {moduleBodies[mod.id]}
                            </p>
                            {mod.tags && (
                              <div className="flex flex-wrap gap-2 pt-2">
                                {mod.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-space-sm py-1 rounded bg-surface-container-lowest font-caption text-caption text-on-surface"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-low/30">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col gap-space-xs max-w-2xl mb-space-lg">
            <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                help_center
              </span>
              Direct Answers
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Frequently Answered Architectural Questions
            </h2>
          </div>
          <div className="max-w-4xl flex flex-col gap-space-xs" id="faq-accordion">
            {courseFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-surface-container-lowest shadow-xs overflow-hidden"
                >
                  <button
                    className="w-full p-space-md text-left flex items-center justify-between gap-space-sm font-title-md text-title-md font-semibold text-on-surface hover:text-primary transition-colors cursor-pointer"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-outline transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-space-md pb-space-md text-body-md font-body-md text-on-surface-variant">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
