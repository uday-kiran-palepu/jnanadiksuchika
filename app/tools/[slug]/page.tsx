import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RAFT_VISUALIZER_SLUG, toolSlugs } from "@/components/tools/data";
import { RaftVisualizer } from "@/components/tools/detail/RaftVisualizer";

export function generateStaticParams() {
  return toolSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  if (params.slug === RAFT_VISUALIZER_SLUG) {
    return {
      title: "Raft Consensus & Split-Brain Visualizer | Big Switch",
      description:
        "Simulate 3–7 node Raft clusters, network partitions, leader elections, and log commits. Client-side interactive sandbox.",
    };
  }
  return { title: "Tool | Big Switch" };
}

type ToolDetailPageProps = {
  params: { slug: string };
};

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  if (params.slug === RAFT_VISUALIZER_SLUG) {
    return <RaftVisualizer />;
  }
  notFound();
}
