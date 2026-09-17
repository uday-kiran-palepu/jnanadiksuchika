import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Jnana Diksuchika",
  description:
    "Philosophical manifesto, origin story, and operating tenets of Jnana Diksuchika.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
