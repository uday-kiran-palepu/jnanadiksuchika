type CourseDetailPageProps = {
  params: { slug: string };
};

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return (
    <h1 className="p-8 text-3xl font-semibold">Courses: {params.slug}</h1>
  );
}
