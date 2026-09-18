import type { Metadata } from "next";
import { TermsPage } from "@/components/legal/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service & Academic Governance | Big Switch",
  description:
    "Terms of service, honest pedagogical disclaimer, and governance framework for workshops, courses, and engineering tools.",
};

export default function Page() {
  return <TermsPage />;
}
