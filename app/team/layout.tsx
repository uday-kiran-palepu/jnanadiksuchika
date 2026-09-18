import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Jnana Diksuchika",
  description:
    "Faculty, mentors, and associate instructors at Jnana Diksuchika.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
