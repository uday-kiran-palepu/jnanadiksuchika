import { type HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  className = "",
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--bs-border)] bg-[var(--bs-surface-0)] ${
        interactive
          ? "transition-all hover:border-[var(--bs-ink)]/20 hover:shadow-[0_20px_50px_-28px_rgba(15,23,42,0.35)]"
          : "shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
