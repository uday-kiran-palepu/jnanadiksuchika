import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-xl pb-space-lg">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-xl">
          <div className="flex flex-col gap-space-md lg:pr-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-surface-bright tracking-tight">
                Jnana Diksuchika
              </span>
            </div>
            <p className="font-title-md text-title-md text-secondary-fixed-dim font-bold tracking-wide">
              LEARN. BUILD. GROW.
            </p>
            <p className="font-body-sm text-body-sm text-surface-dim leading-relaxed">
              A directional beacon guiding engineers, researchers, and builders
              through deep technical knowledge and applied innovation.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-lg bg-tertiary/40 flex items-center justify-center text-surface-dim hover:text-surface-bright hover:bg-primary transition-all"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
              <a
                aria-label="Explore Code Repositories"
                className="w-9 h-9 rounded-lg bg-tertiary/40 flex items-center justify-center text-surface-dim hover:text-surface-bright hover:bg-primary transition-all"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                aria-label="Watch Technical Lectures"
                className="w-9 h-9 rounded-lg bg-tertiary/40 flex items-center justify-center text-surface-dim hover:text-surface-bright hover:bg-primary transition-all"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  smart_display
                </span>
              </a>
              <a
                aria-label="Join Discourse"
                className="w-9 h-9 rounded-lg bg-tertiary/40 flex items-center justify-center text-surface-dim hover:text-surface-bright hover:bg-primary transition-all"
                href="/contact"
              >
                <span className="material-symbols-outlined text-[20px]">forum</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <p className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
              Ecosystem
            </p>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-dim">
              <li className="pt-space-xs">
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/workshops"
                >
                  Workshops &amp; Bootcamps
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/courses"
                >
                  Certification Tracks
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/tools"
                >
                  Engineering Labs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/knowledge-base"
                >
                  Applied Research Papers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/tools"
                >
                  Open Source Tools &amp; SDKs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <p className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
              Organization
            </p>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-dim">
              <li className="pt-space-xs">
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/about"
                >
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/team"
                >
                  Leadership &amp; Mentors
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/contact"
                >
                  Careers &amp; Fellowships
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/contact"
                >
                  Press &amp; Media Kits
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/about"
                >
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container/5">
            <p className="font-title-md text-title-md text-secondary-fixed-dim font-semibold tracking-wide flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                menu_book
              </span>
              Knowledge Base
            </p>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-dim">
              <li className="pt-space-xs">
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/knowledge-base"
                >
                  Technical Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/knowledge-base"
                >
                  Architecture Blueprints
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/knowledge-base"
                >
                  Telugu Tech Glossary (తెలుగు)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/courses"
                >
                  Curated Career Roadmaps
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/knowledge-base"
                >
                  Community Wiki &amp; Archives
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <p className="font-title-md text-title-md text-surface-bright font-semibold tracking-wide">
              Connect &amp; Hubs
            </p>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-dim">
              <div className="flex items-start gap-space-xs pt-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0">
                  location_on
                </span>
                <span>Hyderabad &amp; Bengaluru Innovation Nodes, India</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim shrink-0">
                  mail
                </span>
                <Link
                  className="hover:text-surface-bright transition-colors"
                  href="/contact"
                >
                  ops@jnanadiksuchika.org
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-space-md gap-y-space-xs pt-space-sm font-label-md text-label-md text-surface-dim/80">
              <Link
                className="hover:text-surface-bright transition-colors"
                href="/contact"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-surface-bright transition-colors"
                href="/contact"
              >
                Terms of Service
              </Link>
              <Link
                className="hover:text-surface-bright transition-colors"
                href="/contact"
              >
                Cookie Settings
              </Link>
              <span className="w-full text-surface-dim/60 text-caption font-caption pt-space-xs">
                WCAG 2.2 AA Conforming Interface
              </span>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-inverse-surface">
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container/30 text-surface-bright font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              All Systems Operational
            </span>
            <span className="font-body-sm text-body-sm text-surface-dim hidden sm:inline">
              • Precision Directional Grid v2.4
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-surface-dim text-center md:text-right">
            © 2025 Jnana Diksuchika Ecosystem. Guided through knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
