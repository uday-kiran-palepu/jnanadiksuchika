import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="rounded-2xl bg-surface-container-low p-space-xl shadow-md">
        <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-error-container text-on-error-container font-mono text-xs font-semibold mb-space-md">
          HTTP 404 • ERR_BEARING_UNDEFINED
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
          Vector Out of Coordinate Range
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg">
          This route does not resolve to an active page. Check the URL or return to
          the mission home grid.
        </p>
        <div className="flex flex-wrap gap-space-sm">
          <Link
            href="/"
            className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-title-md shadow-sm hover:bg-primary-container transition-colors"
          >
            Mission Home
          </Link>
          <Link
            href="/courses"
            className="px-space-lg py-space-sm rounded-lg bg-surface-container text-on-surface font-title-md hover:bg-surface-container-high transition-colors"
          >
            Browse Courses
          </Link>
          <Link
            href="/tools"
            className="px-space-lg py-space-sm rounded-lg bg-surface-container text-on-surface font-title-md hover:bg-surface-container-high transition-colors"
          >
            Engineering Tools
          </Link>
          <Link
            href="/tools/system-states"
            className="px-space-lg py-space-sm rounded-lg bg-surface-container-low text-primary font-title-md hover:bg-surface-container-high transition-colors"
          >
            Error &amp; Fallback Spec
          </Link>
        </div>
      </div>
    </div>
  );
}
