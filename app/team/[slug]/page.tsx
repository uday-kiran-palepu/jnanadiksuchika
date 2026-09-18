import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTeamMember, teamSlugs } from "@/components/team/data";
import { TeamProfile } from "@/components/team/TeamProfile";

export function generateStaticParams() {
  return teamSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const found = getTeamMember(params.slug);
  if (!found) return { title: "Team | Big Switch" };
  return {
    title: `${found.member.name} | Big Switch`,
    description: found.member.bio,
  };
}

type Props = { params: { slug: string } };

export default function TeamMemberPage({ params }: Props) {
  const found = getTeamMember(params.slug);
  if (!found) notFound();
  if (found.kind === "core") {
    return <TeamProfile kind="core" member={found.member} />;
  }
  return <TeamProfile kind="associate" member={found.member} />;
}
