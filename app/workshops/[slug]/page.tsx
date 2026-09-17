type WorkshopDetailPageProps = {
  params: { slug: string };
};

export default function WorkshopDetailPage({ params }: WorkshopDetailPageProps) {
  return (
    <h1 className="p-8 text-3xl font-semibold">Workshops: {params.slug}</h1>
  );
}
