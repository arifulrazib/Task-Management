"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="project"
        className="group block"
        aria-label={`${project.title} — view case study`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="surface overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(0,229,160,0.25),0_30px_60px_-30px_rgba(0,229,160,0.25)]"
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/11] overflow-hidden bg-bg-secondary">
            {project.hasImage ? (
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} project`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              /* Placeholder — replace by adding the image + setting hasImage:true in data/projects.ts */
              <div className="absolute inset-0">
                <div className="grid-texture absolute inset-0 opacity-50" />
                <div className="accent-glow absolute -right-16 -top-16 h-64 w-64 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="select-none text-center text-3xl font-semibold tracking-tight text-white/10 transition-transform duration-500 group-hover:scale-105 sm:text-4xl">
                    {project.title}
                  </span>
                </div>
                <span className="absolute bottom-4 left-5 text-[11px] text-ink-muted">
                  Add /public/images/projects/{project.slug}.jpg
                </span>
              </div>
            )}

            <span className="absolute right-4 top-4 rounded-full border border-line bg-bg/70 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent backdrop-blur">
              {project.category}
            </span>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-display-md font-semibold text-ink">{project.title}</h3>
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-secondary transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-secondary transition-colors duration-300 group-hover:text-ink/90">
              {project.description}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-ink-muted transition-colors duration-300 group-hover:text-ink-secondary">
              <span>{project.platform}</span>
              <span className="h-1 w-1 rounded-full bg-ink-muted" aria-hidden />
              <span>{project.year}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
