import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cohort04Detail } from "@/components/workshops/detail/Cohort04Detail";
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

  return (
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <h1 className="font-headline-md text-headline-md text-on-surface">
        {cohort.title}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        Full syllabus page coming soon.{" "}
        <a className="text-primary font-semibold hover:underline" href="/workshops">
          Back to workshops
        </a>
      </p>
    </div>
  );
}
