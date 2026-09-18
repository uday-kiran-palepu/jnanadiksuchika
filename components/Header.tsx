"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, BookOpen, Wrench, Library } from "lucide-react";
import { BRAND_LOGO_SRC } from "@/components/ImagePlaceholder";
import { useLocale } from "@/lib/i18n/LanguageProvider";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const learningRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setLearningOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (
        learningRef.current &&
        !learningRef.current.contains(e.target as Node)
      ) {
        setLearningOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const learningActive =
    isActive(pathname, "/courses") ||
    isActive(pathname, "/tools") ||
    isActive(pathname, "/knowledge-base");

  const linkClass = (active: boolean) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
      active
        ? "bg-[var(--bs-accent-soft)] text-[var(--bs-accent)]"
        : "text-[var(--bs-muted)] hover:text-[var(--bs-ink)] hover:bg-[var(--bs-surface-2)]"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--bs-border)]/70 bg-[var(--bs-surface-0)]/85 backdrop-blur-xl">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 min-w-0 shrink-0">
          <Image
            src={BRAND_LOGO_SRC}
            alt="Big Switch logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
            priority
          />
          <div className="flex flex-col min-w-0">
            <span className="font-display text-lg font-bold tracking-tight text-[var(--bs-ink)] truncate">
              {t("brand.name")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--bs-muted)] hidden sm:block truncate">
              {t("brand.shortTagline")}
            </span>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
          aria-label="Main"
        >
          <div className="relative" ref={learningRef}>
            <button
              type="button"
              className={`${linkClass(learningActive)} inline-flex items-center gap-1`}
              aria-expanded={learningOpen}
              aria-haspopup="true"
              onClick={() => setLearningOpen((o) => !o)}
            >
              {t("nav.learning")}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${learningOpen ? "rotate-180" : ""}`}
              />
            </button>
            {learningOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[340px] rounded-2xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)] p-2 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]"
                role="menu"
              >
                <Link
                  href="/courses"
                  role="menuitem"
                  className="flex gap-3 rounded-xl p-3 hover:bg-[var(--bs-surface-1)]"
                  onClick={() => setLearningOpen(false)}
                >
                  <BookOpen className="h-5 w-5 text-[var(--bs-accent)] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-sm font-semibold text-[var(--bs-ink)]">
                      {t("nav.courses")}
                    </span>
                    <span className="block text-xs text-[var(--bs-muted)] mt-0.5">
                      {t("learningMenu.coursesDesc")}
                    </span>
                  </span>
                </Link>
                <Link
                  href="/tools"
                  role="menuitem"
                  className="flex gap-3 rounded-xl p-3 hover:bg-[var(--bs-surface-1)]"
                  onClick={() => setLearningOpen(false)}
                >
                  <Wrench className="h-5 w-5 text-[var(--bs-accent)] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-sm font-semibold text-[var(--bs-ink)]">
                      {t("nav.tools")}
                    </span>
                    <span className="block text-xs text-[var(--bs-muted)] mt-0.5">
                      {t("learningMenu.toolsDesc")}
                    </span>
                  </span>
                </Link>
                <Link
                  href="/knowledge-base"
                  role="menuitem"
                  className="flex gap-3 rounded-xl p-3 hover:bg-[var(--bs-surface-1)]"
                  onClick={() => setLearningOpen(false)}
                >
                  <Library className="h-5 w-5 text-[var(--bs-accent)] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-sm font-semibold text-[var(--bs-ink)]">
                      {t("nav.knowledgeBase")}
                    </span>
                    <span className="block text-xs text-[var(--bs-muted)] mt-0.5">
                      {t("learningMenu.kbDesc")}
                    </span>
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/services"
            className={linkClass(isActive(pathname, "/services"))}
          >
            {t("nav.services")}
          </Link>
          <Link
            href="/workshops"
            className={linkClass(isActive(pathname, "/workshops"))}
          >
            {t("nav.workshops")}
          </Link>
          <Link
            href="/about"
            className={linkClass(isActive(pathname, "/about"))}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/contact"
            className={linkClass(isActive(pathname, "/contact"))}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[var(--bs-muted)] bg-[var(--bs-surface-1)] hover:bg-[var(--bs-surface-2)]"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div
            className="inline-flex items-center p-0.5 rounded-lg bg-[var(--bs-surface-1)] text-xs font-bold"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              aria-pressed={locale === "en"}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                locale === "en"
                  ? "bg-[var(--bs-surface-0)] text-[var(--bs-ink)] shadow-sm"
                  : "text-[var(--bs-muted)]"
              }`}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={locale === "te"}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                locale === "te"
                  ? "bg-[var(--bs-surface-0)] text-[var(--bs-ink)] shadow-sm"
                  : "text-[var(--bs-muted)]"
              }`}
              onClick={() => setLocale("te")}
            >
              తె
            </button>
          </div>

          <Link
            href="/account/login"
            className="hidden md:inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-[var(--bs-muted)] hover:text-[var(--bs-ink)] hover:bg-[var(--bs-surface-2)]"
          >
            {t("nav.login")}
          </Link>
          <Link
            href="/workshops"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[var(--bs-accent)] text-[var(--bs-accent-fg)] text-sm font-semibold shadow-[0_8px_20px_-10px_rgba(15,118,110,0.7)] hover:brightness-110 transition"
          >
            {t("nav.getStarted")}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden border-t border-[var(--bs-border)] bg-[var(--bs-surface-0)] px-margin-mobile py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto"
          aria-label="Main mobile"
        >
          <p className="px-3 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-[var(--bs-muted)]">
            {t("nav.learning")}
          </p>
          <Link href="/courses" className={linkClass(isActive(pathname, "/courses"))} onClick={() => setMenuOpen(false)}>
            {t("nav.courses")}
          </Link>
          <Link href="/tools" className={linkClass(isActive(pathname, "/tools"))} onClick={() => setMenuOpen(false)}>
            {t("nav.tools")}
          </Link>
          <Link href="/knowledge-base" className={linkClass(isActive(pathname, "/knowledge-base"))} onClick={() => setMenuOpen(false)}>
            {t("nav.knowledgeBase")}
          </Link>
          <Link href="/services" className={linkClass(isActive(pathname, "/services"))} onClick={() => setMenuOpen(false)}>
            {t("nav.services")}
          </Link>
          <Link href="/workshops" className={linkClass(isActive(pathname, "/workshops"))} onClick={() => setMenuOpen(false)}>
            {t("nav.workshops")}
          </Link>
          <Link href="/about" className={linkClass(isActive(pathname, "/about"))} onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </Link>
          <Link href="/team" className={linkClass(isActive(pathname, "/team"))} onClick={() => setMenuOpen(false)}>
            {t("nav.team")}
          </Link>
          <Link href="/contact" className={linkClass(isActive(pathname, "/contact"))} onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </Link>
          <Link
            href="/account/login"
            className={linkClass(isActive(pathname, "/account"))}
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.login")}
          </Link>
          <Link
            href="/workshops"
            className="mt-2 px-3 py-2.5 rounded-lg bg-[var(--bs-accent)] text-[var(--bs-accent-fg)] text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.getStarted")}
          </Link>
        </nav>
      )}
    </header>
  );
}
