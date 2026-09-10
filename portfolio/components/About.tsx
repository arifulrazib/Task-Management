"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { getSocial } from "@/data/site";

const focusAreas = [
  "Mobile applications",
  "Web applications",
  "Fintech products",
  "Dashboards",
  "Admin portals",
  "Design systems",
];

export function About() {
  const behance = getSocial("Behance");

  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium tabular-nums text-accent">02</span>
            <span className="h-px w-8 bg-accent/40" aria-hidden />
            <span className="section-label">About</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg font-semibold text-ink">
            A little about me.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-ink-secondary sm:text-xl">
            I&apos;m a UX/UI and Product Designer who enjoys turning complex problems into
            simple, useful and visually refined digital experiences.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-secondary">
            I care about the details that make a product feel considered — clear flows,
            honest interfaces and systems that scale. I work across a range of product
            types, from early exploration through to polished, developer-ready UI.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-ink-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {area}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {/* Drop your resume at /public/resume.pdf */}
            <a href="/resume.pdf" download className="btn-ghost" data-cursor="link">
              <Download size={16} />
              Download Resume
            </a>
            {behance && (
              <a
                href={behance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                data-cursor="link"
              >
                View Behance
                <ArrowUpRight size={16} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
