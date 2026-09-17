"use client";

import Link from "next/link";
import CompassAnimation from "@/components/CompassAnimation";
import { BRAND_LOGO_SRC, ImagePlaceholder } from "@/components/ImagePlaceholder";
import { pick, useLocale } from "@/lib/i18n/LanguageProvider";

export function HeroSection() {
  const { locale } = useLocale();
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/50 to-surface py-space-xl">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex flex-wrap items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                Engineering &amp; Knowledge Ecosystem
              </span>
              <span className="text-outline-variant text-label-sm font-label-sm">
                /
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-medium">
                {pick(locale, "English", "తెలుగు")}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-space-sm">
                {/* TODO: replace with real emblem */}
                <ImagePlaceholder
                  className="h-10 w-10 rounded"
                  alt="Jnana Diksuchika Emblem"
                  src={BRAND_LOGO_SRC}
                />
                <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-on-surface tracking-tight leading-none">
                  {pick(locale, "JNANA DIKSUCHIKA", "జ్ఞాన దిక్సూచిక")}
                </h1>
              </div>
              <div className="flex items-baseline gap-space-sm mt-space-xs">
                <span className="font-headline-md text-headline-md text-primary font-bold tracking-normal">
                  {pick(locale, "Compass of Knowledge", "జ్ఞాన దిక్సూచిక")}
                </span>
              </div>
            </div>

            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold max-w-xl">
              {pick(
                locale,
                "Knowledge that gives you direction. Real engineering depth, distributed systems, and career trajectory.",
                "మీకు దిశానిర్దేశం ఇచ్చే జ్ఞానం. నిజమైన ఇంజనీరింగ్ లోతు, డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్ మరియు కెరీర్ మార్గం."
              )}
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label-md text-label-md font-bold uppercase tracking-wide">
                  LEARN
                </span>
                <span className="font-body-sm text-body-sm text-on-primary-fixed-variant">
                  Foundations &amp; Systems
                </span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-tertiary-container/20 text-on-surface shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="font-label-md text-label-md font-bold uppercase tracking-wide">
                  BUILD
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Production Microservices &amp; Hardware
                </span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                <span className="font-label-md text-label-md font-bold uppercase tracking-wide">
                  GROW
                </span>
                <span className="font-body-sm text-body-sm text-on-secondary-fixed-variant">
                  Career Trajectory &amp; Mentorship
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <Link
                className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-secondary-container text-on-tertiary font-title-lg text-title-lg shadow-lg hover:bg-secondary hover:text-on-secondary transition-all hover:-translate-y-0.5"
                href="/workshops"
              >
                <span>{pick(locale, "Explore Flagship Batches", "ప్రధాన బ్యాచ్‌లను అన్వేషించండి")}</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-low text-primary hover:bg-surface-container-high transition-colors font-title-md text-title-md"
                href="/knowledge-base"
              >
                <span className="material-symbols-outlined text-[20px]">
                  architecture
                </span>
                <span>Read Architecture Docs</span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-space-sm self-start p-space-xs pr-space-md rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm mt-space-xs">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-on-primary">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">
                <strong className="text-on-surface font-semibold">4,800+</strong>{" "}
                Engineers Mentored •{" "}
                <strong className="text-on-surface font-semibold">94%</strong>{" "}
                Production Placement •{" "}
                <strong className="text-secondary font-semibold">4.9★</strong>{" "}
                Peer Review
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full rounded-xl bg-inverse-surface text-inverse-on-surface overflow-hidden shadow-xl p-space-md flex flex-col">
              <div className="flex items-center justify-between pb-space-sm text-surface-dim font-label-sm text-label-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                  <span className="font-mono uppercase tracking-widest text-secondary-fixed">
                    DIKSUCHIKA TELEMETRY HUD
                  </span>
                </div>
                <span className="font-mono text-surface-dim/70">BEARING: 045° NE</span>
              </div>
              <div className="grid grid-cols-2 gap-space-xs py-space-xs bg-tertiary/20 rounded-lg px-space-sm mb-space-sm text-[11px] font-mono text-surface-dim">
                <div>LAT 17.3850° N / LON 78.4867° E</div>
                <div className="text-right text-primary-fixed-dim">
                  HYDERABAD VECTOR NODE
                </div>
              </div>
              <div className="relative w-full h-[360px] rounded-lg bg-inverse-surface/80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <CompassAnimation />
                </div>
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <svg
                    className="w-full h-full text-primary/20"
                    fill="none"
                    viewBox="0 0 300 300"
                  >
                    <circle
                      cx="150"
                      cy="150"
                      r="130"
                      stroke="currentColor"
                      strokeDasharray="4 6"
                      strokeWidth="1"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="90"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      stroke="currentColor"
                      strokeDasharray="2 4"
                      strokeWidth="0.75"
                      x1="150"
                      x2="150"
                      y1="10"
                      y2="290"
                    />
                    <line
                      stroke="currentColor"
                      strokeDasharray="2 4"
                      strokeWidth="0.75"
                      x1="10"
                      x2="290"
                      y1="150"
                      y2="150"
                    />
                    <circle cx="150" cy="150" fill="currentColor" r="4" />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 px-2 py-1 rounded text-[10px] font-mono text-surface-dim">
                  VELOCITY: HIGH • SYS_STABLE
                </div>
                <div className="absolute top-3 right-3 bg-inverse-surface/90 px-2 py-1 rounded text-[10px] font-mono text-secondary-fixed">
                  LIVE COMPASS HEADING
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-sm mt-space-xs text-surface-dim font-label-sm text-label-sm">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">
                    explore
                  </span>
                  Real-Time Inertial Frame
                </span>
                <div className="inline-flex rounded bg-tertiary/40 p-0.5">
                  <button
                    className="px-2 py-0.5 rounded bg-primary text-on-primary text-caption font-caption font-semibold"
                    type="button"
                  >
                    3D Interactive
                  </button>
                  <button
                    className="px-2 py-0.5 rounded text-surface-dim hover:text-surface-bright text-caption font-caption"
                    type="button"
                  >
                    Static Vector
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
