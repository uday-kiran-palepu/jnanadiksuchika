import type { Metadata } from "next";
import { KnowledgeBaseCatalog } from "@/components/knowledge-base/KnowledgeBaseCatalog";
import { KbPlansSection } from "@/components/kb/KbPlansSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Knowledge Base",
  description:
    "Big Switch knowledge marketplace — free guides, ₹1/₹10 unlocks, and subscription plans. Payment checkout wiring is future work.",
  path: "/knowledge-base",
});

export default function KnowledgeBasePage() {
  return (
    <>
      <KnowledgeBaseCatalog />
      <KbPlansSection />
    </>
  );
}
