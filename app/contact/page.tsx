import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Regional Nodes | Big Switch",
  description:
    "Reach faculty and engineering mentors in Kakinada AP and nationwide. Sub-4hr SLA, bilingual support, zero spam.",
};

export default function Page() {
  return <ContactPage />;
}
