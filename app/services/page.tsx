import { buildMetadata } from "@/lib/seo/metadata";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Jnana Diksuchika services — recruitment, staffing, digital marketing, web & software, support, projects, and corporate learning.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesCatalog />;
}
