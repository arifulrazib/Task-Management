"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./ui/SectionHeading";
import { EASE } from "@/lib/motion";

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const item = testimonials[index];

  const go = (delta: number) => {
    setDir(delta);
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  };

  return (
    <section className="scroll-mt-24 border-t border-line py-24 sm:py-32" aria-label="Testimonials">
      <div className="shell">
        <SectionHeading index="06" label="Words" title="What people say." />

        <div className="surface relative mt-14 overflow-hidden p-8 sm:p-12 lg:p-16">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-white/[0.04]" aria-hidden />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={item.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {item.placeholder && (
                <span className="mb-5 inline-block rounded-full border border-dashed border-accent/40 px-3 py-1 text-[11px] uppercase tracking-widest text-accent">
                  Placeholder — add a real testimonial
                </span>
              )}
              <p className="max-w-3xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-ink-muted">{item.title}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <ArrowRight size={16} />
              </button>
              <span className="ml-2 text-xs tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
