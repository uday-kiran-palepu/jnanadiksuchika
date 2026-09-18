import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Big Switch",
  description:
    "Faculty, mentors, and associate instructors at Big Switch.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
