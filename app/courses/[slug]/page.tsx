import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogCourses } from "@/components/courses/data";
import { GoRaftCourseDetail } from "@/components/courses/detail/go-raft/GoRaftCourseDetail";

const GO_RAFT_SLUG = "distributed-systems-go-raft";

export function generateStaticParams() {
  return catalogCourses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = catalogCourses.find((c) => c.slug === params.slug);
  if (!course) {
    return { title: "Course | Jnana Diksuchika" };
  }
  return {
    title: `${course.title} | Jnana Diksuchika`,
    description: course.description,
  };
}

type CourseDetailPageProps = {
  params: { slug: string };
};

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = catalogCourses.find((c) => c.slug === params.slug);
  if (!course) {
    notFound();
  }

  if (params.slug === GO_RAFT_SLUG) {
    return <GoRaftCourseDetail />;
  }

  return (
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <h1 className="font-headline-md text-headline-md text-on-surface">
        {course.title}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        Full syllabus page coming soon.{" "}
        <Link className="text-primary font-semibold hover:underline" href="/courses">
          Back to courses
        </Link>
      </p>
    </div>
  );
}
