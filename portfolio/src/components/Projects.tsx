import { projects } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <SectionHeading eyebrow="Portfolio" title="My Recent Projects" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-3xl border border-base-600/60 bg-base-800/60 transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <div
              className={`relative flex h-44 items-end bg-gradient-to-br p-5 ${project.gradient}`}
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-base-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                View project
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
