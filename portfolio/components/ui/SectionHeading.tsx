"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="max-w-2xl"
    >
      <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium tabular-nums text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden />
        <span className="section-label">{label}</span>
      </motion.div>
      <motion.h2 variants={fadeUp} className="text-display-lg font-semibold text-ink">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
