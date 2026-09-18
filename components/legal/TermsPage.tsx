"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HonestPedagogyDisclaimer } from "./HonestPedagogyDisclaimer";

type DocTab = "terms" | "privacy" | "cookies" | "conduct";

const DOC_TABS: { id: DocTab; label: string; disabled?: boolean }[] = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy", disabled: true },
  { id: "cookies", label: "Cookie Notice", disabled: true },
  { id: "conduct", label: "Community Conduct", disabled: true },
];

const TOC = [
  { id: "sec-01", label: "1. Acceptance & Scope" },
  { id: "sec-02", label: "2. Educational Nature" },
  { id: "sec-03", label: "3. Accounts & Eligibility" },
  { id: "sec-04", label: "4. Workshops & Cohorts" },
  { id: "sec-05", label: "5. Tools & Open Source" },
  { id: "sec-06", label: "6. Intellectual Property" },
  { id: "sec-07", label: "7. Liability & Disclaimers" },
  { id: "sec-08", label: "8. Governing Law & Contact" },
];

const CLAUSES: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "sec-01",
    title: "Acceptance & Scope",
    body: (
      <>
        By accessing bigswitch.dev, enrolling in workshops, or using our engineering tools, you agree to these
        Terms. If you disagree, discontinue use of our digital properties. These Terms apply to all visitors, cohort
        participants, institutional partners, and open-source contributors.
      </>
    ),
  },
  {
    id: "sec-02",
    title: "Educational Nature & Honest Pedagogy",
    body: (
      <>
        Programs are mentorship-oriented and practitioner-focused. Certificates and badges attest to participation and
        assessed milestones — they are not degrees unless covered by a separate signed agreement with an accredited
        partner institution.
      </>
    ),
  },
  {
    id: "sec-03",
    title: "Accounts, Eligibility & Conduct",
    body: (
      <>
        You must provide accurate registration data and safeguard credentials. Misrepresentation, harassment, or
        attempts to disrupt lab infrastructure may result in suspension. Minors require guardian consent for paid
        cohorts.
      </>
    ),
  },
  {
    id: "sec-04",
    title: "Workshops, Bootcamps & Refunds",
    body: (
      <>
        Workshop schedules, hardware requirements, and refund windows are published per cohort. Force-majeure
        rescheduling follows the policy on each{" "}
        <Link className="text-primary font-semibold hover:underline" href="/workshops">workshop detail page</Link>.
        Deposits are non-transferable unless faculty approves an exception in writing.
      </>
    ),
  },
  {
    id: "sec-05",
    title: "Engineering Tools & Sandboxes",
    body: (
      <>
        Browser-based utilities in the{" "}
        <Link className="text-primary font-semibold hover:underline" href="/tools">tools hub</Link> are provided
        &quot;as-is&quot; for learning and diagnostics. Do not rely on them for production safety-critical decisions
        without independent verification.
      </>
    ),
  },
  {
    id: "sec-06",
    title: "Intellectual Property & Licensing",
    body: (
      <>
        Curriculum PDFs, lecture recordings, and proprietary visualizations remain © Big Switch unless marked
        otherwise. Open-source repositories ship under their respective LICENSE files; contributions follow each
        project&apos;s CLA.
      </>
    ),
  },
  {
    id: "sec-07",
    title: "Limitation of Liability",
    body: (
      <>
        To the fullest extent permitted by Indian law, we are not liable for indirect, incidental, or consequential
        damages arising from use of materials, tools, or third-party integrations. Total liability for paid services is
        limited to fees paid for the specific cohort in dispute.
      </>
    ),
  },
  {
    id: "sec-08",
    title: "Governing Law, Updates & Contact",
    body: (
      <>
        These Terms are governed by the laws of India, with courts in Andhra Pradesh having jurisdiction. We may update
        this document with notice on-site. Questions:{" "}
        <Link className="text-primary font-semibold hover:underline" href="/contact">contact faculty ops</Link> or
        email ops@bigswitch.dev. Effective date: 17 September 2025.
      </>
    ),
  },
];

function MobileTermsFrame() {
  return (
    <div
      className="w-full max-w-[390px] mx-auto rounded-[2rem] border-4 border-inverse-surface/80 bg-surface-container-lowest shadow-xl overflow-hidden"
    >
      <div className="h-7 bg-inverse-surface/90 flex items-center justify-center">
        <span className="w-12 h-1 rounded-full bg-surface-dim/40" />
      </div>
      <div className="p-space-md max-h-[480px] overflow-y-auto">
        <span className="font-caption text-caption text-primary uppercase font-bold">Terms • Mobile</span>
        <h3 className="font-title-md text-title-md font-semibold mt-space-xs">Academic Governance</h3>
        <nav className="flex flex-wrap gap-1 mt-space-sm">
          {TOC.slice(0, 4).map((t) => (
            <a
              key={t.id}
              className="text-caption font-caption px-2 py-0.5 rounded-full bg-surface-container-high text-primary"
              href={`#${t.id}`}
            >
              {t.label.split(".")[0]}
            </a>
          ))}
        </nav>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md leading-relaxed">
          Sticky TOC collapses to pill chips under 390px. Telugu toggle persists in session for bilingual learners.
        </p>
      </div>
    </div>
  );
}

export function TermsPage() {
  const [activeDoc, setActiveDoc] = useState<DocTab>("terms");
  const [teluguMode, setTeluguMode] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const copyPageLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/terms#sec-01`);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  };

  const pillActive =
    "px-space-md py-space-xs rounded-full font-title-md text-title-md bg-primary text-on-primary shadow-sm";
  const pillIdle =
    "px-space-md py-space-xs rounded-full font-title-md text-title-md text-on-surface-variant bg-surface-container-high hover:bg-surface-container-highest transition-all";
  const pillDisabled = "opacity-50 cursor-not-allowed";

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap"
          >
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">Legal</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">Academic Governance &amp; Terms</span>
          </nav>
          <button
            className={`inline-flex items-center gap-1 px-space-sm py-1 rounded-lg border border-outline-variant/40 font-label-md text-label-md transition-colors ${teluguMode ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container-lowest text-on-surface-variant"}`}
            type="button"
            onClick={() => setTeluguMode((v) => !v)}
          >
            <span className="material-symbols-outlined text-[18px]">translate</span>
            {teluguMode ? "తెలుగు UI" : "English UI"}
          </button>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-surface-container-low/40 to-surface pt-space-xl pb-space-lg px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              {teluguMode ? "విద్యా పాలనా ప్రమాణం" : "Regulatory & governance framework"}
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
              {teluguMode
                ? "అకాడమిక్ గవర్నెన్స్ & నిబంధనలు (Terms)"
                : "Academic Governance & Regulatory Standard (Terms of Service)"}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {teluguMode
                ? "మెంటర్‌షిప్ కోర్సులు, వర్క్‌షాప్‌లు మరియు ఓపెన్ సోర్స్ టూల్స్ కోసం స్పష్టమైన నిబంధనలు."
                : "Transparent terms for mentorship tracks, regional workshops, certification cohorts, and public engineering utilities."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-md font-caption text-caption text-on-surface-variant">
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span>
              Effective 17 Sep 2025
            </span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-[14px] text-primary">gavel</span>
              Version 2.1.0
            </span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-[14px] text-primary">public</span>
              India • AP jurisdiction
            </span>
            <button
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
              type="button"
              onClick={copyPageLink}
            >
              <span className="material-symbols-outlined text-[16px]">
                {linkCopied ? "check" : "link"}
              </span>
              {linkCopied ? "Link copied" : "Copy page link"}
            </button>
          </div>

          <div className="flex flex-wrap gap-space-xs" role="tablist" aria-label="Legal documents">
            {DOC_TABS.map((tab) => (
              <button
                key={tab.id}
                aria-selected={activeDoc === tab.id}
                className={`${activeDoc === tab.id ? pillActive : pillIdle} ${tab.disabled ? pillDisabled : ""}`}
                disabled={tab.disabled}
                role="tab"
                type="button"
                onClick={() => !tab.disabled && setActiveDoc(tab.id)}
              >
                {tab.label}
                {tab.disabled && (
                  <span className="ml-1 font-caption text-caption opacity-70">(soon)</span>
                )}
              </button>
            ))}
          </div>

          <HonestPedagogyDisclaimer />
        </div>
      </section>

      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <aside className="lg:col-span-3 hidden lg:block">
            <nav
              aria-label="Table of contents"
              className="sticky top-24 flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low border border-outline-variant/20"
            >
              <span className="font-label-md text-label-md uppercase text-outline font-bold mb-space-xs">On this page</span>
              {TOC.map((item) => (
                <button
                  key={item.id}
                  className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary py-1 transition-colors"
                  type="button"
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-space-md mt-space-sm border-t border-outline-variant/30 flex flex-col gap-space-xs font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Related</span>
                <Link className="text-primary hover:underline" href="/courses">Certification tracks</Link>
                <Link className="text-primary hover:underline" href="/workshops">Workshops</Link>
                <Link className="text-primary hover:underline" href="/tools">Engineering tools</Link>
                <Link className="text-primary hover:underline" href="/contact">Contact ops</Link>
              </div>
            </nav>
          </aside>

          <article className="lg:col-span-9 flex flex-col gap-space-xl">
            {CLAUSES.map((clause) => (
              <section
                key={clause.id}
                className="scroll-mt-28 flex flex-col gap-space-sm pb-space-lg border-b border-outline-variant/20 last:border-0"
                id={clause.id}
              >
                <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-sm">
                  <span className="font-mono text-primary text-body-sm">{clause.id}</span>
                  {clause.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{clause.body}</p>
              </section>
            ))}

            <div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md font-semibold text-on-surface">Contextual cross-links</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Explore adjacent policies: cohort admission on{" "}
                <Link className="text-primary font-semibold" href="/courses">courses</Link>, on-site intensives on{" "}
                <Link className="text-primary font-semibold" href="/workshops">workshops</Link>, sandbox liability on{" "}
                <Link className="text-primary font-semibold" href="/tools">tools</Link>, and escalations via{" "}
                <Link className="text-primary font-semibold" href="/contact">contact</Link>.
              </p>
            </div>

            <div className="lg:hidden">
              <span className="font-caption text-caption uppercase text-outline font-bold block mb-space-sm text-center">
                Mobile 390px preview
              </span>
              <MobileTermsFrame />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
