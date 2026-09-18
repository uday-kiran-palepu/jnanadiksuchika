import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  RAFT_VISUALIZER_SLUG,
  getHubTool,
  toolSlugs,
} from "@/components/tools/data";
import { RaftVisualizer } from "@/components/tools/detail/RaftVisualizer";
import { SubnetCalculator } from "@/components/tools/detail/SubnetCalculator";
import { AmdahlBench } from "@/components/tools/detail/AmdahlBench";
import { IeeeInspector } from "@/components/tools/detail/IeeeInspector";
import { LsmAnalyzer } from "@/components/tools/detail/LsmAnalyzer";
import { EbpfScratchpad } from "@/components/tools/detail/EbpfScratchpad";
import { GlossaryTool } from "@/components/tools/detail/GlossaryTool";
import { ProtobufProfiler } from "@/components/tools/detail/ProtobufProfiler";

export function generateStaticParams() {
  return toolSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const tool = getHubTool(params.slug);
  if (!tool) {
    return { title: "Tool | Jnana Diksuchika" };
  }
  if (params.slug === RAFT_VISUALIZER_SLUG) {
    return {
      title: "Raft Consensus & Split-Brain Visualizer | Jnana Diksuchika",
      description:
        "Simulate 3–7 node Raft clusters, network partitions, leader elections, and log commits. Client-side interactive sandbox.",
    };
  }
  return {
    title: `${tool.title} | Jnana Diksuchika`,
    description: tool.summary,
  };
}

type ToolDetailPageProps = {
  params: { slug: string };
};

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = getHubTool(params.slug);
  if (!tool) {
    notFound();
  }

  if (params.slug === RAFT_VISUALIZER_SLUG) {
    return <RaftVisualizer />;
  }

  switch (tool.id) {
    case "subnet":
      return <SubnetCalculator tool={tool} />;
    case "amdahl":
      return <AmdahlBench tool={tool} />;
    case "ieee754":
      return <IeeeInspector tool={tool} />;
    case "lsm":
      return <LsmAnalyzer tool={tool} />;
    case "ebpf":
      return <EbpfScratchpad tool={tool} />;
    case "glossary":
      return <GlossaryTool tool={tool} />;
    case "protobuf":
      return <ProtobufProfiler tool={tool} />;
    default:
      notFound();
  }
}
