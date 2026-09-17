"use client";

import { useState } from "react";

const dialects = ["Rust (Focal)", "Go", "C / Modern C++", "Java / JVM"] as const;

export function RegistrationCard() {
  const [dialect, setDialect] = useState<string>(dialects[0]);
  const [mode, setMode] = useState<"lab" | "remote">("lab");

  return (
    <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
      <div className="flex flex-col gap-space-xs pb-space-sm border-b border-surface-container-high">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
            ADMISSIONS COHORT 04
          </span>
          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm font-semibold">
            Limited 24 Seats
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
          Reserve Your Station
        </h3>
        <div className="flex items-baseline gap-space-xs mt-1">
          <span className="font-display-hero text-[32px] leading-tight text-on-surface font-extrabold">
            ₹14,999
          </span>
          <span className="font-body-md text-body-md text-outline line-through">
            ₹22,500
          </span>
          <span className="font-label-sm text-label-sm text-secondary font-bold ml-1">
            33% SUBSIDIZED
          </span>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm">
          <span className="material-symbols-outlined text-[16px] text-primary">
            credit_card
          </span>
          <span>
            Zero-Cost EMI from <strong>₹2,499/month</strong> (6 Months)
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center justify-between text-caption font-caption text-outline">
          <span className="text-primary font-bold">STEP 2 OF 3</span>
          <span>66% COMPLETED</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-2 rounded-full bg-primary" />
          <div className="h-2 rounded-full bg-secondary-container" />
          <div className="h-2 rounded-full bg-surface-container-high" />
        </div>
        <div className="flex justify-between font-label-sm text-[11px] text-on-surface-variant pt-1">
          <span className="text-primary font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px]">check</span>
            Identity
          </span>
          <span className="text-secondary font-semibold">Technical Fit</span>
          <span className="text-outline">SSH Station</span>
        </div>
      </div>

      <form
        className="flex flex-col gap-space-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              className="font-label-md text-label-md text-on-surface font-semibold"
              htmlFor="candidate-name"
            >
              Candidate Full Name
            </label>
            <span className="font-caption text-caption text-primary flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>
              Verified
            </span>
          </div>
          <div className="relative">
            <input
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md shadow-xs focus:ring-2 focus:ring-primary outline-none"
              id="candidate-name"
              type="text"
              defaultValue="Ananya Deshmukh"
            />
            <span className="material-symbols-outlined text-primary absolute right-3 top-2.5 text-[20px]">
              check_circle
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              className="font-label-md text-label-md text-on-surface font-semibold"
              htmlFor="candidate-email"
            >
              Engineering / Work Email
            </label>
            <span className="font-caption text-caption text-error font-medium">
              Domain Check Failed
            </span>
          </div>
          <div className="relative">
            <input
              className="w-full px-space-md py-space-sm rounded-lg bg-error-container/20 text-on-surface font-body-md shadow-xs ring-1 ring-error focus:ring-2 focus:ring-error outline-none"
              id="candidate-email"
              type="email"
              defaultValue="ananya.temp.coder@gmail.com"
            />
            <span className="material-symbols-outlined text-error absolute right-3 top-2.5 text-[20px]">
              error
            </span>
          </div>
          <p className="font-caption text-[11px] text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">info</span>
            Please use corporate or college domain. Disposable accounts are
            prohibited for bare-metal root keys.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-on-surface font-semibold"
            htmlFor="exp-level"
          >
            Current Systems Experience
          </label>
          <select
            className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md shadow-xs focus:ring-2 focus:ring-primary outline-none"
            id="exp-level"
            defaultValue="mid"
          >
            <option value="junior">1–3 Years (Junior / Mid Backend Engineer)</option>
            <option value="mid">
              3–5 Years (Senior Engineer / SRE transitioning to Systems)
            </option>
            <option value="staff">5+ Years (Staff / Principal Architect)</option>
            <option value="student">
              Engineering Student (Final Year CS / Hardware)
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Attendance Preference
          </span>
          <div className="grid grid-cols-2 gap-space-xs">
            <label
              className={`flex items-center gap-2 p-space-sm rounded-lg cursor-pointer transition-colors ${
                mode === "lab"
                  ? "bg-surface-container"
                  : "bg-surface-container-low hover:bg-surface-container"
              }`}
            >
              <input
                checked={mode === "lab"}
                className="text-primary focus:ring-primary"
                name="mode"
                type="radio"
                onChange={() => setMode("lab")}
              />
              <span className="font-body-sm text-body-sm text-on-surface font-medium">
                Hyderabad Lab
              </span>
            </label>
            <label
              className={`flex items-center gap-2 p-space-sm rounded-lg cursor-pointer transition-colors ${
                mode === "remote"
                  ? "bg-surface-container"
                  : "bg-surface-container-low hover:bg-surface-container"
              }`}
            >
              <input
                checked={mode === "remote"}
                className="text-primary focus:ring-primary"
                name="mode"
                type="radio"
                onChange={() => setMode("remote")}
              />
              <span className="font-body-sm text-body-sm text-on-surface font-medium">
                Remote 4K Stream
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Primary Coding Dialect
          </span>
          <div className="flex flex-wrap gap-1.5">
            {dialects.map((d) => (
              <button
                key={d}
                className={`px-space-sm py-1 rounded-full font-label-sm font-semibold transition-colors ${
                  dialect === d
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
                type="button"
                onClick={() => setDialect(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant text-[12px] space-y-1">
          <p className="font-semibold text-on-surface">
            What happens after submitting?
          </p>
          <p>1. Instant 30-min logic testbench sent to your email.</p>
          <p>2. Root SSH credentials deployed 48 hrs prior to kickoff.</p>
          <p>
            3. 100% money-back baseline audit if you withdraw before Week 2.
          </p>
        </div>

        <button
          className="w-full py-space-md rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold shadow-md hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 transition-all flex items-center justify-center gap-space-xs"
          type="submit"
        >
          <span>Proceed to Technical Diagnostic</span>
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>

        <div className="flex items-center justify-between text-caption font-caption text-outline pt-1 flex-wrap gap-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            256-bit Encrypted
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              receipt_long
            </span>
            GST Invoice Provided
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            Zero Spam Policy
          </span>
        </div>
      </form>
    </div>
  );
}
