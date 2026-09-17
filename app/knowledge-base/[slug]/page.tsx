type KnowledgeBaseArticlePageProps = {
  params: { slug: string };
};

export default function KnowledgeBaseArticlePage({
  params,
}: KnowledgeBaseArticlePageProps) {
  return (
    <h1 className="p-8 text-3xl font-semibold">
      Knowledge Base: {params.slug}
    </h1>
  );
}
