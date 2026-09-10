"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { site, socials } from "@/data/site";
import { MagneticButton } from "./ui/MagneticButton";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-36">
      <div className="shell">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl border border-line bg-bg-secondary p-8 text-center sm:p-14 lg:p-20"
        >
          <div className="accent-glow pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 opacity-40" />
          <div className="grid-texture pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <motion.p variants={fadeUp} className="eyebrow relative mb-6 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-display-lg font-semibold text-ink [text-wrap:balance]"
          >
            Have a product worth designing?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-xl text-base text-ink-secondary sm:text-lg"
          >
            Let&apos;s turn complex ideas into simple, useful digital experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={`mailto:${site.email}`} variant="primary">
              Start a Conversation
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} variant="ghost">
              <Mail size={16} />
              Email Me
            </MagneticButton>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="relative mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink-secondary transition-colors hover:text-accent"
                data-cursor="link"
              >
                {site.email}
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary transition-colors hover:text-accent"
                  data-cursor="link"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
