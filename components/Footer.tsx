"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bs-ink)] text-slate-300 pt-16 pb-10">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4 lg:pr-6">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              {t("brand.name")}
            </span>
            <p className="text-sm font-semibold tracking-wide text-teal-300/90 uppercase">
              {t("brand.shortTagline")}
            </p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {t("footer.blurb")}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">
              {t("footer.ecosystem")}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="/courses">
                  {t("nav.courses")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/knowledge-base">
                  {t("nav.knowledgeBase")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/tools">
                  {t("nav.tools")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/workshops">
                  {t("nav.workshops")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/services">
                  {t("nav.services")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">
              {t("footer.company")}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="/about">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/team">
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/contact">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/account/login">
                  {t("nav.account")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">
              {t("footer.legal")}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms#sec-07">
                  Cookie Settings
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="mailto:hello@bigswitch.dev"
                >
                  hello@bigswitch.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>{t("footer.copyright", { year })}</p>
          <p className="text-xs tracking-wide uppercase text-slate-600">
            {t("brand.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
