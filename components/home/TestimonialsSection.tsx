"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data/site";

export function TestimonialsSection() {
  return (
    <Section
      title="Engineers who flipped the switch"
      subtitle="Peers talking about labs, cohorts, and bilingual knowledge — not marketing copy."
      className="bg-[var(--bs-surface-0)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <Card key={item.id} className="p-6 flex flex-col">
            <blockquote className="text-[var(--bs-ink)] leading-relaxed flex-1">
              “{item.quote}”
            </blockquote>
            <footer className="mt-6 pt-4 border-t border-[var(--bs-border)]">
              <p className="font-semibold text-sm text-[var(--bs-ink)]">
                {item.name}
              </p>
              <p className="text-xs text-[var(--bs-muted)] mt-0.5">{item.role}</p>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
