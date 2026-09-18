import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { AssociateMentor, CoreTeamMember } from "@/components/team/data";

type Props =
  | { kind: "core"; member: CoreTeamMember }
  | { kind: "associate"; member: AssociateMentor };

export function TeamProfile(props: Props) {
  const { member, kind } = props;
  const focus = member.focus;
  const teaching =
    kind === "core" ? props.member.teaching : [props.member.nextSession];

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-low py-space-sm">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
          >
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <Link className="hover:text-primary transition-colors" href="/team">
              Team
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{member.name}</span>
          </nav>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-4">
          <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-md">
            <div className="relative aspect-[4/5] bg-surface-container">
              <ImagePlaceholder className="w-full h-full object-cover" alt={member.alt} />
            </div>
            <div className="p-space-lg">
              <p className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider">
                {kind === "core" ? props.member.badge : props.member.fellowType}
              </p>
              <h1 className="mt-2 font-headline-md text-headline-md text-on-surface">{member.name}</h1>
              <p className="mt-1 font-body-md text-body-md text-primary font-semibold">
                {kind === "core" ? props.member.role : props.member.role}
              </p>
              <div className="mt-space-md flex flex-wrap gap-space-xs">
                {member.tags.map((t) => (
                  <span
                    key={t}
                    className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-space-lg inline-flex w-full justify-center px-space-md py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold"
              >
                Request office hours
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-space-xl">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">About</h2>
            <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {member.bio}
            </p>
            {kind === "core" && (
              <p className="mt-space-md font-body-sm text-body-sm text-on-surface-variant">
                Lab track: <strong className="text-on-surface">{props.member.labTrack}</strong> ·{" "}
                {props.member.hours}
              </p>
            )}
            {kind === "associate" && (
              <p className="mt-space-md font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  {props.member.formatIcon}
                </span>
                {props.member.formatLabel} · {props.member.nextSession}
              </p>
            )}
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Focus areas</h2>
            <ul className="mt-space-md space-y-2">
              {focus.map((f) => (
                <li key={f} className="flex gap-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    check_circle
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              {kind === "core" ? "Teaching" : "Upcoming"}
            </h2>
            <ul className="mt-space-md space-y-2">
              {teaching.map((t) => (
                <li
                  key={t}
                  className="p-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-on-surface"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface">
            <h3 className="font-title-lg text-title-lg font-bold text-surface-bright">
              Want to learn with this mentor?
            </h3>
            <p className="mt-2 font-body-sm text-body-sm text-surface-dim">
              Browse courses and workshops, then contact ops to request a diagnostic or seat —
              we do not invent payment confirmations in the product.
            </p>
            <div className="mt-space-md flex flex-wrap gap-space-sm">
              <Link
                href="/courses"
                className="px-space-md py-space-sm rounded-lg bg-secondary-container text-on-tertiary font-title-md text-title-md font-bold"
              >
                Courses
              </Link>
              <Link
                href="/workshops"
                className="px-space-md py-space-sm rounded-lg bg-surface-bright/10 text-surface-bright font-title-md text-title-md"
              >
                Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
