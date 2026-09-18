import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Big Switch",
  description:
    "Big Switch — learning tracks, knowledge marketplace, workshops, and professional services that flip engineers from theory to production.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
