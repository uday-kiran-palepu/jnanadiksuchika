type ToolDetailPageProps = {
  params: { slug: string };
};

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  return <h1 className="p-8 text-3xl font-semibold">Tools: {params.slug}</h1>;
}
