"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "@/locales/en.json";
import te from "@/locales/te.json";

export type Locale = "en" | "te";

const STORAGE_KEY = "jd-locale";
const LEGACY_STORAGE_KEY = "bs-locale";

type Messages = typeof en;

const catalogs: Record<Locale, Messages> = { en, te };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  messages: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getByPath(obj: unknown, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k: string) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored =
        (localStorage.getItem(STORAGE_KEY) as Locale | null) ||
        (localStorage.getItem(LEGACY_STORAGE_KEY) as Locale | null);
      if (stored === "en" || stored === "te") setLocaleState(stored);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "te" ? "te" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, locale);
      // Keep legacy key in sync for older tabs, then prefer jd-locale on next load
      localStorage.setItem(LEGACY_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const messages = catalogs[locale];

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const raw =
        getByPath(catalogs[locale], key) ??
        getByPath(catalogs.en, key) ??
        key;
      return interpolate(raw, vars);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LanguageProvider");
  }
  return ctx;
}

/** Prefer useLocale().t — kept for gradual migration. */
export function pick(locale: Locale, enStr: string, teStr: string): string {
  return locale === "te" ? teStr : enStr;
}

export function Bilingual({
  en: enNode,
  te: teNode,
  className,
}: {
  en: React.ReactNode;
  te: React.ReactNode;
  className?: string;
}) {
  const { locale } = useLocale();
  return <span className={className}>{locale === "te" ? teNode : enNode}</span>;
}
