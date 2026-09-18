import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  RAFT_GUIDE_SLUG,
  getKbArticle,
  kbArticleSlugs,
  kbArticles,
} from "@/components/knowledge-base/data";
import { RaftVisualizerGuide } from "@/components/knowledge-base/detail/RaftVisualizerGuide";
import { ArticleDetail } from "@/components/knowledge-base/detail/ArticleDetail";

export function generateStaticParams() {
  return kbArticleSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = kbArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "Knowledge Base | Big Switch" };
  }
  return {
    title: `${article.title} | Big Switch`,
    description: article.excerpt,
  };
}

type KnowledgeBaseArticlePageProps = {
  params: { slug: string };
};

export default function KnowledgeBaseArticlePage({ params }: KnowledgeBaseArticlePageProps) {
  if (params.slug === RAFT_GUIDE_SLUG) {
    return <RaftVisualizerGuide />;
  }

  const article = getKbArticle(params.slug);
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
