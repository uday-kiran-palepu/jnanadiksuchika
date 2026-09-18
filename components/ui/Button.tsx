import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--bs-accent)] text-[var(--bs-accent-fg)] shadow-[0_8px_24px_-8px_rgba(15,118,110,0.45)] hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "bg-[var(--bs-ink)] text-white hover:bg-[var(--bs-ink-soft)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--bs-ink)] hover:bg-[var(--bs-surface-2)]",
  outline:
    "bg-transparent border border-[var(--bs-border)] text-[var(--bs-ink)] hover:border-[var(--bs-ink)] hover:bg-[var(--bs-surface-1)]",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className = "", variant = "primary", size = "md", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bs-accent)] disabled:opacity-50 disabled:pointer-events-none ${variantClass[variant]} ${sizeClass[size]} ${className}`}
        {...props}
      />
    );
  }
);
