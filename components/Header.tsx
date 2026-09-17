"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const navItems = [
  { href: "/", label: "Home", path: "home" },
  { href: "/about", label: "About", path: "about" },
  { href: "/team", label: "Team", path: "team" },
  { href: "/workshops", label: "Workshops", path: "workshops" },
  { href: "/courses", label: "Courses", path: "courses" },
  { href: "/tools", label: "Tools", path: "tools" },
  { href: "/contact", label: "Contact", path: "contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,96,155,0.08)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <Link
          href="/"
          className="flex items-center gap-space-sm flex-shrink-0"
        >
          {/* TODO: replace with real brand logo */}
          <ImagePlaceholder
            className="h-8 w-8 rounded object-contain"
            alt="Jnana Diksuchika Brand Logo"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              Jnana Diksuchika
            </span>
            <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider hidden sm:block">
              జ్ఞాన దిక్సూచిక • Compass of Knowledge
            </span>
          </div>
        </Link>

        <nav
          className="hidden xl:flex items-center gap-space-xs p-space-xs bg-surface-container-low/70 rounded-xl"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-space-md py-space-sm transition-all font-title-md text-title-md rounded-lg ${
                  active
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md flex-shrink-0">
          <button
            aria-label="Global Knowledge Search"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <div className="inline-flex items-center p-space-xs rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
            <button
              className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-primary shadow-xs font-semibold"
              type="button"
            >
              EN
            </button>
            <button
              className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface transition-colors"
              type="button"
            >
              తె
            </button>
          </div>
          <Link
            href="/workshops"
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md shadow-[0_4px_14px_rgba(252,139,51,0.35)] hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 transition-all"
          >
            Get Started
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
