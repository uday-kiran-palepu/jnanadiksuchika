"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND_LOGO_SRC } from "@/components/ImagePlaceholder";
import { pick, useLocale } from "@/lib/i18n/LanguageProvider";

const navItems = [
  { href: "/", labelEn: "Home", labelTe: "హోమ్" },
  { href: "/about", labelEn: "About", labelTe: "గురించి" },
  { href: "/team", labelEn: "Team", labelTe: "బృందం" },
  { href: "/workshops", labelEn: "Workshops", labelTe: "వర్క్‌షాప్‌లు" },
  { href: "/courses", labelEn: "Courses", labelTe: "కోర్సులు" },
  { href: "/tools", labelEn: "Tools", labelTe: "సాధనాలు" },
  { href: "/knowledge-base", labelEn: "Knowledge Base", labelTe: "నాలెడ్జ్ బేస్" },
  { href: "/contact", labelEn: "Contact", labelTe: "సంప్రదించండి" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  labelEn,
  labelTe,
  active,
  onNavigate,
  compact,
}: {
  href: string;
  labelEn: string;
  labelTe: string;
  active: boolean;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const label = pick(locale, labelEn, labelTe);
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`transition-all rounded-lg whitespace-nowrap ${
        compact
          ? "px-space-md py-space-sm font-title-md text-title-md"
          : "px-2 lg:px-space-sm xl:px-space-md py-space-sm font-title-md text-[13px] lg:text-title-md"
      } ${
        active
          ? "bg-primary-container text-on-primary-container shadow-sm"
          : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const tagline = pick(
    locale,
    "Compass of Knowledge",
    "జ్ఞాన దిక్సూచిక"
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,96,155,0.08)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-2 lg:gap-gutter">
        <Link
          href="/"
          className="flex items-center gap-space-sm flex-shrink-0 min-w-0"
        >
          <Image
            src={BRAND_LOGO_SRC}
            alt="Jnana Diksuchika Brand Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded object-contain shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
              Jnana Diksuchika
            </span>
            <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider hidden sm:block truncate">
              {tagline}
            </span>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-space-xs p-1 xl:p-space-xs bg-surface-container-low/70 rounded-xl flex-1 justify-center max-w-3xl mx-2"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              labelEn={item.labelEn}
              labelTe={item.labelTe}
              active={isActive(pathname, item.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-space-sm flex-shrink-0">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant bg-surface-container-low hover:bg-surface-container-high"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
          <button
            aria-label="Global Knowledge Search"
            className="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center text-on-surface-variant bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface transition-colors"
            type="button"
            onClick={() => {
              window.location.href = "/knowledge-base";
            }}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <div className="inline-flex items-center p-space-xs rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
            <button
              type="button"
              aria-pressed={locale === "en"}
              className={`px-space-sm py-space-xs rounded font-semibold transition-colors ${
                locale === "en"
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={locale === "te"}
              className={`px-space-sm py-space-xs rounded font-semibold transition-colors ${
                locale === "te"
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              onClick={() => setLocale("te")}
            >
              తె
            </button>
          </div>
          <Link
            href="/workshops"
            className="hidden md:inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md shadow-[0_4px_14px_rgba(252,139,51,0.35)] hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 transition-all"
          >
            {pick(locale, "Get Started", "ప్రారంభించండి")}
          </Link>
          <Link
            href="/contact"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-container transition-colors"
            aria-label="Contact"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden border-t border-surface-container-high bg-surface-container-lowest px-margin-mobile py-space-md flex flex-col gap-1 shadow-lg max-h-[70vh] overflow-y-auto"
          aria-label="Main mobile"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              labelEn={item.labelEn}
              labelTe={item.labelTe}
              active={isActive(pathname, item.href)}
              onNavigate={() => setMenuOpen(false)}
              compact
            />
          ))}
          <Link
            href="/workshops"
            className="mt-space-sm px-space-md py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-center"
            onClick={() => setMenuOpen(false)}
          >
            {pick(locale, "Get Started", "ప్రారంభించండి")}
          </Link>
        </nav>
      )}
    </header>
  );
}
