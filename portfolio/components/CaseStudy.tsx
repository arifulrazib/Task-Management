import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./ui/Reveal";

interface CaseStudyProps {
  project: Project;
  next: Project;
}

/** Reusable case study layout for /work/[slug]. */
export function CaseStudy({ project, next }: CaseStudyProps) {
  const cs = project.caseStudy;

  const sections: { label: string; body: string }[] = [
    { label: "Overview", body: cs.overview },
    { label: "The problem", body: cs.problem },
    { label: "Research", body: cs.research },
    { label: "Insights", body: cs.insights },
    { label: "UX approach", body: cs.approach },
    { label: "Outcome", body: cs.outcome },
    { label: "Key learnings", body: cs.learnings },
  ];

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      {/* Hero */}
      <header className="shell">
        <Reveal>
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest">
            <span className="rounded-full border border-line px-3 py-1 text-accent">
              {project.category}
            </span>
            <span className="text-ink-muted">{project.platform}</span>
            <span className="text-ink-muted">· {project.year}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-display-lg font-semibold text-ink">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-secondary">
            {project.description}
          </p>
        </Reveal>
      </header>

      {/* Cover */}
      <div className="shell mt-12">
        <Reveal>
          <div className="surface relative aspect-[16/9] overflow-hidden">
            {project.hasImage ? (
              <Image
                src={project.image}
                alt={`${project.title} cover`}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0">
                <div className="grid-texture absolute inset-0 opacity-50" />
                <div className="accent-glow absolute -right-20 -top-20 h-80 w-80 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="select-none text-4xl font-semibold text-white/10 sm:text-6xl">
                    {project.title}
                  </span>
                </div>
                <span className="absolute bottom-5 left-6 text-xs text-ink-muted">
                  Add /public/images/projects/{project.slug}.jpg
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      {/* Meta row */}
      <div className="shell mt-12">
        <Reveal>
          <dl className="grid grid-cols-2 gap-6 border-y border-line py-8 sm:grid-cols-4">
            <div>
              <dt className="section-label">Role</dt>
              <dd className="mt-2 text-sm text-ink">{cs.role}</dd>
            </div>
            <div>
              <dt className="section-label">Timeline</dt>
              <dd className="mt-2 text-sm text-ink">{cs.timeline}</dd>
            </div>
            <div>
              <dt className="section-label">Platform</dt>
              <dd className="mt-2 text-sm text-ink">{project.platform}</dd>
            </div>
            <div>
              <dt className="section-label">Year</dt>
              <dd className="mt-2 text-sm text-ink">{project.year}</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* Body sections */}
      <div className="shell mt-12 max-w-3xl">
        {sections.map((section, i) => (
          <Reveal key={section.label} className="mb-12" delay={i * 0.03}>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {section.label}
            </h2>
            <p className="text-lg leading-relaxed text-ink-secondary">{section.body}</p>
          </Reveal>
        ))}

        {/* Editorial note about placeholders */}
        <Reveal className="mb-12">
          <div className="surface border-dashed p-5 text-sm text-ink-muted">
            Sections marked <span className="text-accent">[Add ...]</span> are editable
            placeholders — fill them with your real research, wireframes, UI and outcomes in{" "}
            <code className="text-ink-secondary">data/projects.ts</code>. You can also insert
            image galleries here for wireframes, design system and final screens.
          </div>
        </Reveal>
      </div>

      {/* Next project */}
      <div className="shell mt-8">
        <Link
          href={`/work/${next.slug}`}
          data-cursor="project"
          className="group surface flex items-center justify-between gap-6 p-8 transition-colors hover:border-accent/40 sm:p-12"
        >
          <div>
            <p className="section-label mb-3">Next project</p>
            <p className="text-display-md font-semibold text-ink">{next.title}</p>
            <p className="mt-2 text-sm text-ink-secondary">{next.category}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink-secondary transition-all group-hover:border-accent/50 group-hover:text-accent">
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
