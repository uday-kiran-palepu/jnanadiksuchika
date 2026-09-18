import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Jnana Diksuchika",
  description:
    "Jnana Diksuchika — learning tracks, knowledge marketplace, workshops, and professional services that guide engineers from theory to production.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
