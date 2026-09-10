"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { viewport } from "@/lib/motion";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-line py-28 sm:py-36"
      aria-label="Design philosophy"
    >
      <div className="accent-glow pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <motion.div style={{ x }} className="shell">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-ink"
        >
          Good design isn&apos;t about making{" "}
          <span className="text-ink-muted">more.</span> It&apos;s about making the{" "}
          <span className="text-accent">right things clearer.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
