import type { Metadata } from "next";
import { KnowledgeBaseCatalog } from "@/components/knowledge-base/KnowledgeBaseCatalog";

export const metadata: Metadata = {
  title: "Knowledge Base & Engineering Archive | Jnana Diksuchika",
  description:
    "How-tos, platform guides, GATE roadmaps, and distributed systems notes — bilingual and community-refined.",
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseCatalog />;
}
