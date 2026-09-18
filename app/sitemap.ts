import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { serviceSlugs } from "@/lib/data/services";
import { catalogCourses } from "@/components/courses/data";
import { workshopCohorts } from "@/components/workshops/data";
import { kbArticleSlugs } from "@/components/knowledge-base/data";
import { toolSlugs } from "@/components/tools/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/about",
    "/team",
    "/contact",
    "/courses",
    "/workshops",
    "/tools",
    "/tools/system-states",
    "/knowledge-base",
    "/services",
    "/terms",
    "/privacy",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const slug of serviceSlugs) {
    entries.push({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const c of catalogCourses) {
    entries.push({
      url: `${SITE_URL}/courses/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const w of workshopCohorts) {
    entries.push({
      url: `${SITE_URL}/workshops/${w.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }
  for (const slug of kbArticleSlugs) {
    entries.push({
      url: `${SITE_URL}/knowledge-base/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  for (const slug of toolSlugs) {
    entries.push({
      url: `${SITE_URL}/tools/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
