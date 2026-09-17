import type { Metadata } from "next";
import { ToolsHub } from "@/components/tools/ToolsHub";

export const metadata: Metadata = {
  title: "Free Diagnostic & Engineering Tools | Jnana Diksuchika",
  description:
    "Precision engineering tools, interactive protocol visualizers, and systems calculators for software builders and students. Client-side, zero sign-up.",
};

export default function ToolsPage() {
  return <ToolsHub />;
}
