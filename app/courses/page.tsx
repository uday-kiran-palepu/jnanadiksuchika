import type { Metadata } from "next";
import { CoursesCatalog } from "@/components/courses/CoursesCatalog";

export const metadata: Metadata = {
  title: "Courses & Certification Tracks | Jnana Diksuchika",
  description:
    "Self-paced and diagnostic-driven engineering courses with Telugu mental models and global RFC English fluency.",
};

export default function CoursesPage() {
  return <CoursesCatalog />;
}
