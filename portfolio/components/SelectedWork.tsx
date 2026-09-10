"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui/SectionHeading";
import { stagger, viewport } from "@/lib/motion";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          label="Selected Work"
          title="Selected Work"
          description="A selection of product experiences, interfaces and digital products I've worked on across fintech, mobile and web."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
