"use client";

import Link from "next/link";
import { useState } from "react";
import { KakinadaRadarMap } from "./KakinadaRadarMap";

type FormState = "default" | "error" | "success";

const inquiryOptions = [
  { value: "cohorts", label: "Cohort Admissions & Systems Bootcamps" },
  { value: "arch-review", label: "1:1 Architecture Review & Tech Mentorship" },
  { value: "labs", label: "Institutional / College Hardware Labs & Workshops" },
  { value: "vernacular", label: "Telugu Tech Translation Guild (తెలుగు ప్రాజెక్టులు)" },
  { value: "tools", label: "Bug Report / Open Source Tool RFC Feedback" },
  { value: "general", label: "General Inquiries & Collaborations" },
];

function isValidContact(value: string) {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return true;
  const digits = v.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
}

export function ContactPage() {
  const [formState, setFormState] = useState<FormState>("default");
  const [langIndex, setLangIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const contact = String(fd.get("contact") ?? "");
    if (!isValidContact(contact)) {
      setFormState("error");
      return;
    }
    setFormState("success");
  };

  const testbenchBtn =
    "px-space-sm py-1 rounded-lg text-label-md font-label-md transition-all";
  const testbenchIdle =
    "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high";

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low/70 py-space-sm px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">Contact &amp; Regional Nodes</span>
          </div>
          <div className="flex items-center gap-space-md flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-caption text-caption uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Gateway Status: 99.98% Available
            </span>
            <span className="font-caption text-caption text-outline hidden sm:inline">
              IST (UTC+5:30) • 09:00 - 19:30 Active Desk
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-surface-container-low/40 via-surface to-surface pt-space-lg pb-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 text-primary font-caption text-caption font-bold tracking-widest uppercase">
              <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">జ్ఞాన దిక్సూచిక</span>
              <span>• Direct Communication &amp; Inquiries</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
              Get in Touch with Our Faculty &amp; Engineering Guild
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs leading-relaxed max-w-3xl">
              Whether you&apos;re exploring deep-systems cohorts, seeking 1:1 architectural consultation, or
              inquiring about regional hardware labs — we respond with engineering clarity, zero sales pressure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-xs">
            {[
              { icon: "bolt", title: "Sub-4hr P95 SLA", desc: "Direct routing to technical mentors and faculty desks." },
              { icon: "security", title: "Zero Spam Protocol", desc: "RFC-compliant privacy. No sales pitches or tele-callers." },
              { icon: "translate", title: "ద్విభాషా మద్దతు (Dual)", desc: "Full technical guidance in తెలుగు or English." },
              { icon: "share_location", title: "Kakinada AP • All-India", desc: "R&D hub in coastal AP serving builders nationwide." },
            ].map((card) => (
              <div key={card.title} className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/60 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">{card.title}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container px-margin-mobile lg:px-margin py-space-sm">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
                Live State Evaluator
              </span>
              <span className="font-caption text-caption text-on-surface-variant">
                Toggle form states &amp; view fallback failovers
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="font-caption text-caption uppercase text-on-surface-variant font-bold mr-1">Form State:</span>
            <button
              className={`${testbenchBtn} ${formState === "default" ? "bg-primary text-on-primary shadow-xs" : testbenchIdle}`}
              type="button"
              onClick={() => setFormState("default")}
            >
              Default State
            </button>
            <button
              className={`${testbenchBtn} ${formState === "error" ? "bg-error text-on-error shadow-xs" : `${testbenchIdle} text-error hover:bg-error-container/40`}`}
              type="button"
              onClick={() => setFormState("error")}
            >
              Inline Error &amp; Fallback
            </button>
            <button
              className={`${testbenchBtn} ${formState === "success" ? "bg-primary text-on-primary shadow-xs" : `${testbenchIdle} text-primary hover:bg-primary-fixed/40`}`}
              type="button"
              onClick={() => setFormState("success")}
            >
              Success (#JDK-8921)
            </button>
          </div>
        </div>
      </section>

      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {formState === "default" && (
              <div className="rounded-xl bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                      Direct Dispatch Terminal
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Fill in your requirements. All submissions are PGP encrypted at edge.
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-primary font-caption text-caption font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary-container" />
                    DISPATCH QUEUE READY
                  </div>
                </div>
                <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="user-name">
                      Full Name
                    </label>
                    <input
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest"
                      id="user-name"
                      name="name"
                      placeholder="e.g., Ananya Sitaraman or K. V. Sharma"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="user-contact">
                      Contact Information (Email or Phone Number)
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest"
                      id="user-contact"
                      name="contact"
                      placeholder="name@organization.com or +91 98765 43210"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="inquiry-category">
                      Inquiry Category
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest"
                      id="inquiry-category"
                      name="category"
                      defaultValue="cohorts"
                    >
                      {inquiryOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Preferred Communication Language
                    </span>
                    <div className="flex items-center gap-space-xs p-1 rounded-lg bg-surface-container-low w-fit">
                      {["English", "తెలుగు (Telugu)", "Dual / Bilingual"].map((label, i) => (
                        <button
                          key={label}
                          className={`px-space-md py-1 rounded-md text-label-md font-label-md transition-all ${
                            langIndex === i
                              ? "bg-primary text-on-primary font-semibold shadow-xs"
                              : "text-on-surface-variant hover:text-on-surface"
                          }`}
                          type="button"
                          onClick={() => setLangIndex(i)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="user-message">
                      Detailed Technical Inquiry
                    </label>
                    <textarea
                      className="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest"
                      id="user-message"
                      name="message"
                      placeholder="Describe your engineering background, project architecture, or institutional inquiry..."
                      required
                      rows={4}
                    />
                  </div>
                  <div className="pt-space-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-caption text-caption">
                      <span className="material-symbols-outlined text-[18px] text-primary">key</span>
                      <span>Directly dispatched to faculty dispatch queue.</span>
                    </div>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-semibold shadow-md hover:bg-secondary hover:text-on-secondary transition-all"
                      type="submit"
                    >
                      <span>Transmit Message</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {formState === "error" && (
              <div className="rounded-xl bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm flex flex-col gap-space-md">
                <div className="p-space-md rounded-lg bg-error-container text-on-error-container flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[24px] shrink-0 text-error">wifi_off</span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-error">
                      Transmission timed out or failed to reach edge gateway.
                    </span>
                    <p className="font-body-sm text-body-sm mt-0.5 leading-relaxed">
                      Connection to <span className="font-semibold">api.jnanadiksuchika.org</span> encountered an
                      upstream handshake timeout.
                    </p>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
                    <span className="material-symbols-outlined text-[20px]">emergency</span>
                    <span>Priority Fallback Channels</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-xs flex flex-col">
                      <span className="font-caption text-caption text-outline uppercase font-semibold">Direct Telegram</span>
                      <span className="font-title-md text-title-md text-primary font-semibold">@JnanaDiksuchikaOps</span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-xs flex flex-col">
                      <span className="font-caption text-caption text-outline uppercase font-semibold">WhatsApp Desk</span>
                      <span className="font-title-md text-title-md text-primary font-semibold">+91 94942 81290</span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-xs flex flex-col">
                      <span className="font-caption text-caption text-outline uppercase font-semibold">Faculty PGP Email</span>
                      <a className="font-title-md text-title-md text-primary font-semibold" href="mailto:ops@jnanadiksuchika.org">
                        ops@jnanadiksuchika.org
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button
                    className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-title-md text-title-md font-semibold"
                    type="button"
                    onClick={() => setFormState("default")}
                  >
                    Retry Transmission
                  </button>
                </div>
              </div>
            )}

            {formState === "success" && (
              <div className="rounded-xl bg-surface-container-lowest p-space-lg sm:p-space-xl shadow-sm flex flex-col items-center text-center gap-space-md">
                <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Inquiry Dispatched to Engineering Faculty
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-lg">
                  Thank you! Faculty will review your inquiry within 4 hours. Dispatch ticket{" "}
                  <strong>#JDK-8921</strong>.
                </p>
                <button
                  className="mt-space-xs inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md font-semibold"
                  type="button"
                  onClick={() => setFormState("default")}
                >
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                  Send Another Note
                </button>
              </div>
            )}

            <div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md">
              <span className="font-title-lg text-title-lg text-on-surface font-bold">Frequently Asked Clarifications</span>
              <div className="flex flex-col gap-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-xs flex flex-col gap-1">
                  <span className="font-semibold text-on-surface">
                    Do you accommodate Telugu-first students without English fluency?
                  </span>
                  <span className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    Yes. Core cohorts include parallel Telugu documentation, native-script glossaries, and vernacular
                    discussion hours.
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-xs flex flex-col gap-1">
                  <span className="font-semibold text-on-surface">
                    Can colleges in Tier-2/3 AP &amp; Telangana host physical labs?
                  </span>
                  <span className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    Yes. Select &quot;Institutional / College Hardware Labs&quot; in the form above for on-campus intensive
                    bootcamps.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="font-caption text-caption uppercase text-secondary font-bold tracking-widest">
                    Headquarters &amp; R&amp;D Hub
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">Kakinada, Andhra Pradesh</h3>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Port City Innovation Lab • 16.9891° N, 82.2475° E
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Rooted in Kakinada — serving engineers across Hyderabad, Bengaluru, Chennai, Pune, Delhi NCR, and tier-2/3
                institutions nationwide.
              </p>
              <KakinadaRadarMap />
              <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">pin_drop</span>
                <div className="flex flex-col font-body-sm text-body-sm text-on-surface">
                  <span className="font-semibold">Jnana Diksuchika Foundation</span>
                  <span className="text-on-surface-variant">2nd Floor, Knowledge Corridors, Bhanugudi Junction,</span>
                  <span className="text-on-surface-variant">Kakinada, Andhra Pradesh 533003, India.</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
              <span className="font-title-lg text-title-lg text-on-surface font-bold">Direct Channels</span>
              <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex justify-between gap-space-sm">
                  <a className="font-semibold text-on-surface hover:text-primary" href="mailto:ops@jnanadiksuchika.org">
                    ops@jnanadiksuchika.org
                  </a>
                  <span className="font-caption text-caption text-primary font-semibold">&lt; 4h SLA</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex justify-between gap-space-sm">
                  <a className="font-semibold text-on-surface hover:text-secondary" href="mailto:partnerships@jnanadiksuchika.org">
                    partnerships@jnanadiksuchika.org
                  </a>
                  <span className="font-caption text-caption text-on-surface-variant">MOU Desk</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <span className="font-semibold text-on-surface">+91 884 234 8920 • +91 94942 81290</span>
                  <span className="font-caption text-caption text-on-surface-variant block">09:00 - 19:30 IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
