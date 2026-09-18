import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogCourses } from "@/components/courses/data";
import { GoRaftCourseDetail } from "@/components/courses/detail/go-raft/GoRaftCourseDetail";
import { CourseDetail } from "@/components/courses/detail/CourseDetail";
import { getCourseDetail } from "@/components/courses/detail/courseDetails";

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

  const detail = getCourseDetail(params.slug);
  if (!detail) {
    notFound();
  }

  return <CourseDetail course={detail} />;
}
