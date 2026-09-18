"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  reveal?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  narrow = false,
  reveal = true,
}: SectionProps) {
  const reduce = useReducedMotion();
  const inner = (
    <div
      className={`${narrow ? "max-w-3xl" : "max-w-[1320px]"} mx-auto px-margin-mobile lg:px-margin`}
    >
      {(eyebrow || title || subtitle) && (
        <header className="mb-10 md:mb-14 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--bs-accent)]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-[var(--bs-ink)] text-balance">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-[var(--bs-muted)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </div>
  );

  if (!reveal || reduce) {
    return (
      <section id={id} className={`py-16 md:py-24 ${className}`}>
        {inner}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {inner}
    </motion.section>
  );
}
