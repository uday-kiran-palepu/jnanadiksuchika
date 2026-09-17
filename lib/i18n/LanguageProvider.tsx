"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "en" | "te";

const STORAGE_KEY = "jd-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
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
    } catch {
      /* ignore */
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

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

/** Pick English or Telugu string for the active locale. */
export function pick(locale: Locale, en: string, te: string): string {
  return locale === "te" ? te : en;
}

export function Bilingual({
  en,
  te,
  className,
}: {
  en: React.ReactNode;
  te: React.ReactNode;
  className?: string;
}) {
  const { locale } = useLocale();
  return <span className={className}>{locale === "te" ? te : en}</span>;
}
