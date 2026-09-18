"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CourseCard } from "./CourseCard";
import {
  catalogCourses,
  categoryPills,
  TOTAL_CATALOG_COUNT,
  type CourseCategoryId,
  type CourseLevelId,
} from "./data";

type TestbenchState = "default" | "filtered" | "empty";

export function CoursesCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<CourseCategoryId>("all");
  const [level, setLevel] = useState<CourseLevelId>("all");
  const [freeDiagnosticOnly, setFreeDiagnosticOnly] = useState(false);
  const [testbench, setTestbench] = useState<TestbenchState>("default");
  const [emptyQueryDisplay, setEmptyQueryDisplay] = useState("");

  const applyTestbench = useCallback((state: TestbenchState) => {
    setTestbench(state);
    if (state === "default") {
      setSearchQuery("");
      setCategory("all");
      setFreeDiagnosticOnly(false);
      setLevel("all");
      return;
    }
    if (state === "filtered") {
      setSearchQuery("eBPF");
      setCategory("all");
      setFreeDiagnosticOnly(false);
      setLevel("all");
      return;
    }
    setSearchQuery("blockchain crypto web3");
    setCategory("all");
    setFreeDiagnosticOnly(false);
    setLevel("all");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("courseSearchInput")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visibleCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return catalogCourses.filter((course) => {
      const matchesCat = category === "all" || course.category === category;
      const matchesLevel = level === "all" || course.level === level;
      const matchesDiag = !freeDiagnosticOnly || course.freeDiagnostic;
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q);
      return matchesCat && matchesLevel && matchesDiag && matchesQuery;
    });
  }, [searchQuery, category, level, freeDiagnosticOnly]);

  const showEmpty = visibleCourses.length === 0;

  useEffect(() => {
    if (showEmpty) {
      setEmptyQueryDisplay(
        searchQuery.trim() || "Selected filters"
      );
    }
  }, [showEmpty, searchQuery]);

  const resetAll = () => {
    setSearchQuery("");
    setCategory("all");
    setLevel("all");
    setFreeDiagnosticOnly(false);
    setTestbench("default");
  };

  const categoryLabel =
    categoryPills.find((p) => p.id === category)?.label ?? "All Tracks";

  const activeCategoryPillClass =
    "whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md font-semibold transition-all bg-primary-container text-on-primary-container shadow-xs";
  const inactiveCategoryPillClass =
    "whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md font-semibold transition-all bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface";

  const testbenchActive =
    "px-space-sm py-1 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-xs";
  const testbenchInactive =
    "px-space-sm py-1 rounded-lg bg-surface-container-lowest/60 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-semibold transition-colors";

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background pb-space-xl pt-space-md">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant pb-space-md"
          >
            <Link
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="/"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline-variant select-none">/</span>
            <span className="text-primary font-semibold">
              Courses &amp; Certification Tracks
            </span>
          </nav>
          <div className="flex flex-col gap-space-sm max-w-4xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              <span>
                Jnana Diksuchika • COMPREHENSIVE CURRICULUM ARCHIVE / Courses
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
              Ground-Truth Engineering &amp; Career Courses
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Self-paced, cohort-backed, and diagnostic-driven tracks engineered by
              active industry practitioners. Taught with intuitive Telugu mental models
              and global RFC English fluency.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-lg">
            {[
              {
                icon: "verified",
                iconClass: "bg-primary-fixed text-primary",
                title: "28 Accredited",
                sub: "Production-grade tracks",
              },
              {
                icon: "translate",
                iconClass: "bg-secondary-fixed text-secondary",
                title: "Dual Dialect",
                sub: "తెలుగు • Global RFC English",
              },
              {
                icon: "terminal",
                iconClass: "bg-surface-container-high text-primary-container",
                title: "Lifetime Labs",
                sub: "Persistent cloud containers",
              },
              {
                icon: "bolt",
                iconClass: "bg-surface-variant text-on-surface-variant",
                title: "Zero Fluff",
                sub: "Code-first architectural rigor",
              },
            ].map((chip) => (
              <div
                key={chip.title}
                className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest/90 backdrop-blur shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${chip.iconClass}`}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {chip.icon}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-title-md text-title-md text-on-surface font-bold truncate">
                    {chip.title}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    {chip.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest shadow-sm py-space-lg">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-md">
          <div className="relative w-full flex items-center">
            <span className="material-symbols-outlined absolute left-space-md text-primary text-[24px] pointer-events-none">
              search
            </span>
            <input
              className="w-full pl-12 pr-28 py-space-md bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none shadow-xs transition-all"
              id="courseSearchInput"
              placeholder="Search courses by tech stack, topic, or keyword (e.g. 'eBPF', 'Kafka', 'Wasm', 'System Design', 'GATE CS')..."
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setTestbench("default");
              }}
            />
            <div className="absolute right-space-sm flex items-center gap-space-xs">
              {searchQuery && (
                <button
                  className="p-space-xs rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                  title="Clear search"
                  type="button"
                  onClick={() => setSearchQuery("")}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-space-xs py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold select-none shadow-xs">
                <span>⌘</span>
                <span>K</span>
              </kbd>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
            <div className="flex flex-wrap items-center gap-space-sm">
              <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  layers
                </span>
                <label
                  className="font-label-sm text-label-sm text-on-surface-variant"
                  htmlFor="levelSelect"
                >
                  Level:
                </label>
                <select
                  className="bg-transparent font-title-md text-title-md text-on-surface font-semibold focus:outline-none cursor-pointer"
                  id="levelSelect"
                  value={level}
                  onChange={(e) =>
                    setLevel(e.target.value as CourseLevelId)
                  }
                >
                  <option value="all">All Levels</option>
                  <option value="foundational">Foundational</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced / Staff</option>
                </select>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  language
                </span>
                <label
                  className="font-label-sm text-label-sm text-on-surface-variant"
                  htmlFor="langSelect"
                >
                  Dialect:
                </label>
                <select
                  className="bg-transparent font-title-md text-title-md text-on-surface font-semibold focus:outline-none cursor-pointer"
                  id="langSelect"
                  defaultValue="all"
                >
                  <option value="all">All (తెలుగు + EN)</option>
                  <option value="dual">Telugu + English Dual</option>
                  <option value="english">English Only</option>
                </select>
              </div>
              <label className="inline-flex items-center gap-space-xs cursor-pointer select-none px-space-sm py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                <input
                  checked={freeDiagnosticOnly}
                  className="rounded text-primary focus:ring-0 w-4 h-4 cursor-pointer"
                  id="freeDiagnosticToggle"
                  type="checkbox"
                  onChange={(e) => setFreeDiagnosticOnly(e.target.checked)}
                />
                <span className="font-label-md text-label-md text-on-surface font-medium">
                  Free Diagnostic Tier
                </span>
              </label>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg self-end ml-auto">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                swap_vert
              </span>
              <label
                className="font-label-sm text-label-sm text-on-surface-variant"
                htmlFor="sortSelect"
              >
                Sort by:
              </label>
              <select
                className="bg-transparent font-title-md text-title-md text-on-surface font-semibold focus:outline-none cursor-pointer"
                id="sortSelect"
                defaultValue="popular"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Releases</option>
                <option value="price-asc">Price: Low to High</option>
              </select>
            </div>
          </div>

          <div
            className="flex items-center gap-space-xs overflow-x-auto pb-space-xs pt-space-xs"
            role="tablist"
          >
            {categoryPills.map((pill) => (
              <button
                key={pill.id}
                className={
                  category === pill.id
                    ? activeCategoryPillClass
                    : inactiveCategoryPillClass
                }
                data-cat={pill.id}
                type="button"
                onClick={() => setCategory(pill.id)}
              >
                {pill.label} ({pill.count})
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">
                Active filters:
              </span>
              <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium">
                Category: <strong className="font-bold">{categoryLabel}</strong>
              </span>
              <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                Level:{" "}
                {level === "all"
                  ? "All Levels"
                  : level.charAt(0).toUpperCase() + level.slice(1)}
              </span>
              <button
                className="text-primary hover:text-primary-container font-label-md text-label-md font-semibold ml-2 underline underline-offset-4"
                type="button"
                onClick={resetAll}
              >
                Reset all filters
              </button>
            </div>
            <span className="font-title-md text-title-md font-semibold text-on-surface">
              {showEmpty ? (
                <>
                  Showing <span className="text-primary font-bold">0</span> courses
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="text-primary font-bold">
                    {visibleCourses.length}
                  </span>{" "}
                  of {TOTAL_CATALOG_COUNT} courses
                </>
              )}
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-high/60 py-space-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-primary">
              science
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold tracking-wide uppercase">
              UI Catalog Testbench:
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant hidden md:inline">
              Inspect Coursera/Udemy catalog states
            </span>
          </div>
          <div className="flex items-center gap-space-xs flex-wrap">
            <button
              className={testbench === "default" ? testbenchActive : testbenchInactive}
              type="button"
              onClick={() => applyTestbench("default")}
            >
              State 1: Full Catalog (6 Featured)
            </button>
            <button
              className={testbench === "filtered" ? testbenchActive : testbenchInactive}
              type="button"
              onClick={() => applyTestbench("filtered")}
            >
              State 2: Filtered (&apos;eBPF&apos; Active)
            </button>
            <button
              className={testbench === "empty" ? testbenchActive : testbenchInactive}
              type="button"
              onClick={() => applyTestbench("empty")}
            >
              State 3: Empty Results Zero-State
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          {!showEmpty && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
              id="courseCatalogGrid"
            >
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
          {showEmpty && (
            <div
              className="flex flex-col items-center justify-center p-space-xl rounded-xl bg-surface-container-lowest text-center max-w-2xl mx-auto shadow-sm"
              id="emptyResultContainer"
            >
              <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[44px]">
                  explore_off
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                No courses found for &quot;
                <span className="text-secondary" id="emptyQueryTerm">
                  {emptyQueryDisplay}
                </span>
                &quot;
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-md">
                Jnana Diksuchika only certifies ground-truth engineering tracks
                backed by real kernel and systems utility.
              </p>
              <div className="p-space-md rounded-lg bg-surface-container-low mt-space-md w-full text-left">
                <p className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-2">
                  Helpful suggestions:
                </p>
                <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1 list-disc pl-5">
                  <li>
                    Search for real infrastructure domains like{" "}
                    <button
                      className="text-primary cursor-pointer hover:underline font-semibold"
                      type="button"
                      onClick={() => setSearchQuery("Systems")}
                    >
                      Systems
                    </button>
                    ,{" "}
                    <button
                      className="text-primary cursor-pointer hover:underline font-semibold"
                      type="button"
                      onClick={() => setSearchQuery("Kernel")}
                    >
                      Kernel
                    </button>
                    , or{" "}
                    <button
                      className="text-primary cursor-pointer hover:underline font-semibold"
                      type="button"
                      onClick={() => setSearchQuery("Distributed")}
                    >
                      Distributed
                    </button>
                    .
                  </li>
                  <li>
                    Double-check spelling or broaden your category filters to
                    &quot;All Courses&quot;.
                  </li>
                  <li>
                    Request a customized industry syllabus defense from our
                    principal engineering mentors.
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-space-sm mt-space-lg flex-wrap justify-center">
                <button
                  className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-title-md text-title-md font-bold hover:bg-primary-container shadow-sm transition-all"
                  type="button"
                  onClick={resetAll}
                >
                  Clear Search &amp; Show All
                </button>
                <Link
                  className="px-space-md py-space-sm rounded-lg bg-surface-container text-primary font-title-md text-title-md font-semibold hover:bg-surface-container-high transition-colors"
                  href="/contact"
                >
                  Request Course Topic
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs text-center max-w-2xl mx-auto">
            <span className="font-caption text-caption uppercase text-secondary font-bold tracking-widest">
              PEDAGOGICAL CONTRACT • ఇంజనీరింగ్ ప్రామాణికత
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
              The Jnana Diksuchika Course Experience Guarantee
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineered for cognitive retention and architectural depth, without
              boilerplate tutorials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                icon: "terminal",
                iconClass: "bg-primary-fixed text-primary",
                title: "Real Bare-Metal Shells",
                body:
                  "No simulated in-browser sandboxes that hide kernel errors. You get ephemeral root SSH access to dedicated Linux instances.",
              },
              {
                icon: "record_voice_over",
                iconClass: "bg-secondary-fixed text-secondary",
                title: "Dual Nuance Pedagogy",
                body:
                  "Difficult algorithmic intuition demystified in clear Telugu, aligned simultaneously with global IETF/RFC English industry standards.",
              },
              {
                icon: "gavel",
                iconClass: "bg-primary-fixed text-primary",
                title: "Live Architectural Defenses",
                body:
                  "Present your capstone PRs and system diagrams in live defense panels facing Staff-level engineers before certification is granted.",
              },
              {
                icon: "verified_user",
                iconClass: "bg-secondary-fixed text-secondary",
                title: "14-Day Diagnostic Audit",
                body:
                  "Complete the initial diagnostic module. If the technical depth does not rigorously test your engineering thinking, receive a full refund.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-space-sm p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-space-xs ${item.iconClass}`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-space-xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-caption text-caption uppercase text-secondary-fixed-dim font-bold tracking-widest">
              NEED INTENSIVE LIVE BOOTCAMPS?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-on-primary">
              Fast-track your mastery with synchronous weekend sprints.
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed leading-relaxed">
              Complement self-paced video modules with live group debugging,
              architecture whiteboard sessions, and mentor pair-programming.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md shrink-0">
            <Link
              className="px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:bg-secondary hover:-translate-y-0.5 transition-all"
              href="/workshops"
            >
              Explore Live Workshops
            </Link>
            <Link
              className="px-space-lg py-space-sm rounded-lg bg-on-primary/10 hover:bg-on-primary/20 text-on-primary font-title-md text-title-md font-semibold backdrop-blur transition-all"
              href="/contact"
            >
              Book Mentor Consult
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
