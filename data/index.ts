/** Central mock/catalog data surface for Big Switch. */
export * from "@/lib/data/services";
export * from "@/lib/data/site";

export {
  catalogCourses,
  categoryPills,
  TOTAL_CATALOG_COUNT,
} from "@/components/courses/data";
export type { CatalogCourse, CourseCategoryId, CourseLevelId } from "@/components/courses/data";

export {
  workshopCohorts,
  trackFilters,
} from "@/components/workshops/data";
export type { WorkshopCohort, TrackFilterId } from "@/components/workshops/data";

export {
  kbArticles,
  kbCategoryFilters,
  kbArticleSlugs,
  RAFT_GUIDE_SLUG,
} from "@/components/knowledge-base/data";
export type { KbArticle, KbCategoryId } from "@/components/knowledge-base/data";

export {
  hubTools,
  categoryFilters as toolCategoryFilters,
  toolSlugs,
  RAFT_VISUALIZER_SLUG,
} from "@/components/tools/data";
export type { HubTool, ToolCategoryId } from "@/components/tools/data";

export {
  coreTeamMembers,
  associateMentors,
  domainFilters,
  teamSlugs,
  getTeamMember,
} from "@/components/team/data";
export type {
  CoreTeamMember,
  AssociateMentor,
  DomainFilterId,
} from "@/components/team/data";
