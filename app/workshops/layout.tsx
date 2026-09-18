import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops | Big Switch",
  description:
    "High-velocity engineering workshops, systems bootcamps, and curated cohorts.",
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
