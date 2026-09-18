"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { HubTool } from "@/components/tools/data";

export function ToolWorkbench({
  tool,
  children,
}: {
  tool: HubTool;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
          >
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <Link className="hover:text-primary transition-colors" href="/tools">
              Tools
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold truncate">{tool.title}</span>
          </nav>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-3xl">
          <span className="px-space-sm py-space-xs rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
            Client-side utility
          </span>
          <h1 className="mt-space-md font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            {tool.title}
          </h1>
          <p className="mt-2 font-caption text-caption text-secondary font-semibold">
            {tool.titleTe}
          </p>
          <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {tool.summary}
          </p>
        </div>
        <div className="mt-space-xl">{children}</div>
        <p className="mt-space-lg font-caption text-caption text-outline max-w-3xl">
          Runs entirely in your browser. No accounts, no telemetry uploads, and no payment
          simulation — results are educational approximations.
        </p>
      </section>
    </div>
  );
}
