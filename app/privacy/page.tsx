import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Data Policy | Big Switch",
  description:
    "DPDP-aligned privacy practices, zero ad-pixel policy, and ephemeral lab telemetry for Big Switch.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant mb-space-md"
      >
        <Link className="hover:text-primary" href="/">Home</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-primary font-semibold">Privacy Policy</span>
      </nav>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
        Privacy &amp; Telemetry Policy
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-lg">
        We align with India&apos;s Digital Personal Data Protection Act, 2023. We do not load
        commercial ad pixels on learning surfaces. Student repositories stay private by default.
        SSH session diagnostics are processed in memory and purged within 48 hours.
      </p>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        For the full legal framework including refunds, lab usage, and jurisdiction, see our{" "}
        <Link className="text-primary font-semibold hover:underline" href="/terms">
          Terms &amp; Academic Policies
        </Link>
        {" "}(Clause 7 — Data Privacy).
      </p>
      <Link
        href="/contact"
        className="inline-flex px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-title-md"
      >
        Contact Privacy Desk
      </Link>
    </div>
  );
}
