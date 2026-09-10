"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { tools } from "@/data/tools";
import { SectionHeading } from "./ui/SectionHeading";
import { EASE, fadeUp, stagger, viewport } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="04"
          label="Capabilities"
          title="Skills & tools."
          description="What I bring to a product team — and the tools I use to get there."
        />

        {/* Skill groups */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={fadeUp} className="surface p-6 sm:p-7">
              <h3 className="text-sm font-medium uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="cursor-default rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-sm text-ink-secondary transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8"
        >
          <motion.p variants={fadeUp} className="section-label mb-5">
            Design &amp; AI toolkit
          </motion.p>
          <motion.ul variants={fadeUp} className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-bg-card px-4 py-3 transition-colors hover:border-accent/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-xs font-semibold text-ink-secondary transition-colors group-hover:text-accent">
                  {tool.initials}
                </span>
                <span className="text-sm text-ink-secondary transition-colors group-hover:text-ink">
                  {tool.name}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
