import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Big Switch",
  description:
    "Philosophical manifesto, origin story, and operating tenets of Big Switch.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
