"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const steps = [
  {
    no: "01",
    title: "Understand",
    body: "Understand the business, the users and the real problem before touching pixels.",
  },
  {
    no: "02",
    title: "Explore",
    body: "Research, map flows and explore multiple directions to find what fits.",
  },
  {
    no: "03",
    title: "Design",
    body: "Create wireframes, systems, interactions and high-fidelity UI.",
  },
  {
    no: "04",
    title: "Refine",
    body: "Validate, iterate and collaborate closely with developers.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Process"
          title="How I approach a problem."
        />

        <motion.ol
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.li key={step.no} variants={fadeUp} className="surface group relative p-6 sm:p-7">
              <span className="text-4xl font-semibold tabular-nums text-white/10 transition-colors duration-300 group-hover:text-accent/40">
                {step.no}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.body}</p>
              <span className="mt-6 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
