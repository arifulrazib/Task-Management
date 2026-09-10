"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "./ui/SectionHeading";
import { EASE, viewport } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where I've worked."
          description="My professional journey as a product & UX/UI designer."
        />

        <ol className="mt-14 border-l border-line pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Node */}
              <span
                className={`absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full sm:-left-[49px] ${
                  item.current ? "bg-accent" : "bg-bg-card ring-2 ring-line"
                }`}
              >
                {item.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                )}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                {item.current && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-accent">{item.company}</p>
              <p className="mt-0.5 text-xs uppercase tracking-widest text-ink-muted">
                {item.period} · {item.location}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                {item.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
