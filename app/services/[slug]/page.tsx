import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getService, serviceSlugs } from "@/lib/data/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const service = getService(params.slug);
  if (!service) return buildMetadata({ title: "Service", path: "/services" });
  return buildMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceSlugPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
