type HonestPedagogyDisclaimerProps = {
  className?: string;
};

export function HonestPedagogyDisclaimer({ className = "" }: HonestPedagogyDisclaimerProps) {
  return (
    <aside
      className={`rounded-xl border border-secondary-container/40 bg-secondary-fixed/25 p-space-md flex gap-space-sm items-start ${className}`}
      role="note"
      aria-label="Honest pedagogical disclaimer"
    >
      <span className="material-symbols-outlined text-secondary text-[28px] shrink-0">school</span>
      <div className="flex flex-col gap-space-xs">
        <span className="font-title-md text-title-md text-on-surface font-bold">
          Honest Pedagogical Disclaimer
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Big Switch is an engineering mentorship and applied-research guild — not a degree-granting
          university, accredited bootcamp franchise, or government-recognized examination board. Course outcomes,
          workshop certificates, and tooling sandboxes are designed for practitioner skill-building and portfolio
          evidence; they do not replace formal accreditation unless explicitly stated in a signed institutional MOU.
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          We publish bilingual (English / తెలుగు) materials with editorial rigor and cite primary sources where
          possible. Learners remain responsible for verifying syllabus alignment with their employer, university, or
          licensing body.
        </p>
      </div>
    </aside>
  );
}
