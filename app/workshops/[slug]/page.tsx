import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cohort04Detail } from "@/components/workshops/detail/Cohort04Detail";
import { WorkshopDetail } from "@/components/workshops/detail/WorkshopDetail";
import { getWorkshopDetail } from "@/components/workshops/detail/workshopDetails";
import { workshopCohorts } from "@/components/workshops/data";

const COHORT_04_SLUG = "systems-programming-distributed-storage";

export function generateStaticParams() {
  return workshopCohorts.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cohort = workshopCohorts.find((c) => c.slug === params.slug);
  if (!cohort) {
    return { title: "Workshop | Jnana Diksuchika" };
  }
  return {
    title: `${cohort.title} | Jnana Diksuchika`,
    description: cohort.envNote,
  };
}

type WorkshopDetailPageProps = {
  params: { slug: string };
};

export default function WorkshopDetailPage({ params }: WorkshopDetailPageProps) {
  const cohort = workshopCohorts.find((c) => c.slug === params.slug);
  if (!cohort) {
    notFound();
  }

  if (params.slug === COHORT_04_SLUG) {
    return <Cohort04Detail />;
  }

  const detail = getWorkshopDetail(params.slug);
  if (!detail) {
    notFound();
  }

  return <WorkshopDetail cohort={detail} />;
}
