export const SITE_NAME = "Jnana Diksuchika";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jnanadiksuchika.example";
export const SITE_DESCRIPTION =
  "Jnana Diksuchika — learning, knowledge base, workshops, and professional services that guide engineers from theory to production.";
export const SITE_TAGLINE = "Knowledge that gives you direction";

export function absoluteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function pageTitle(title?: string) {
  if (!title || title === SITE_NAME) return SITE_NAME;
  return `${title} | ${SITE_NAME}`;
}

export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}) {
  const fullTitle = pageTitle(title);
  const url = absoluteUrl(path);
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website" as const,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/knowledge-base?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
