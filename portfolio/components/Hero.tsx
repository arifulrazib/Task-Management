"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, MousePointer2 } from "lucide-react";
import { useEffect } from "react";
import { site } from "@/data/site";
import { MagneticButton } from "./ui/MagneticButton";
import { EASE } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  // Cursor parallax — normalised -0.5..0.5 across viewport
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py, reduce]);

  // Different parallax depths per layer
  const portraitX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const portraitY = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const cardAX = useTransform(sx, [-0.5, 0.5], [-34, 34]);
  const cardAY = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const cardBX = useTransform(sx, [-0.5, 0.5], [40, -40]);
  const cardBY = useTransform(sy, [-0.5, 0.5], [28, -28]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-20, 20]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44" aria-label="Introduction">
      {/* Background grid + oversized word */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-texture absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="accent-glow absolute -right-40 top-10 h-[520px] w-[520px] opacity-70" />
      </div>

      <div className="shell grid grid-cols-1 items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {site.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-display-xl font-semibold text-ink [text-wrap:balance]"
          >
            Designing digital products{" "}
            <span className="text-accent">people actually enjoy</span> using.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="/#work" variant="primary">
              View Selected Work
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="/#contact" variant="ghost">
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2.5 text-sm text-ink-secondary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            {site.availability}
          </motion.div>
        </motion.div>

        {/* RIGHT — visual composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:max-w-none"
          aria-hidden
        >
          {/* Oversized background word */}
          <span className="pointer-events-none absolute -left-6 top-1/2 -z-10 -translate-y-1/2 select-none text-[7rem] font-bold leading-none tracking-tighter text-white/[0.03] sm:text-[9rem] lg:text-[11rem]">
            UX
          </span>

          {/* Glow behind portrait */}
          <motion.div
            style={{ x: reduce ? 0 : glowX }}
            className="accent-glow absolute inset-6 rounded-[2.5rem] opacity-80 blur-2xl"
          />

          {/* Portrait placeholder card */}
          <motion.div
            style={{ x: reduce ? 0 : portraitX, y: reduce ? 0 : portraitY }}
            className="surface relative h-full w-full overflow-hidden bg-gradient-to-b from-bg-secondary to-bg-card"
          >
            {/*
              PROFILE IMAGE: drop a photo at /public/images/profile.jpg and
              replace this placeholder block with:
              <Image src="/images/profile.jpg" alt="Ariful Islam" fill className="object-cover" priority />
            */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-white/[0.03] text-2xl font-semibold text-accent">
                AI
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{site.name}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  Add /public/images/profile.jpg
                </p>
              </div>
            </div>

            {/* Corner label */}
            <div className="absolute left-4 top-4 rounded-full border border-line bg-bg/60 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-ink-secondary backdrop-blur">
              Product Designer
            </div>

            {/* Decorative fine lines */}
            <svg className="absolute bottom-0 left-0 h-full w-full opacity-40" aria-hidden>
              <line x1="0" y1="82%" x2="100%" y2="82%" stroke="rgba(255,255,255,0.06)" />
              <line x1="18%" y1="0" x2="18%" y2="100%" stroke="rgba(255,255,255,0.05)" />
            </svg>
          </motion.div>

          {/* Floating UI fragment A */}
          <motion.div
            style={{ x: reduce ? 0 : cardAX, y: reduce ? 0 : cardAY }}
            className="surface absolute -left-6 top-10 w-44 bg-bg-secondary/90 p-3.5 shadow-2xl backdrop-blur"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Layers size={13} />
              </span>
              <span className="text-xs font-medium text-ink">Design System</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          </motion.div>

          {/* Floating UI fragment B */}
          <motion.div
            style={{ x: reduce ? 0 : cardBX, y: reduce ? 0 : cardBY }}
            className="surface absolute -right-4 bottom-14 w-40 bg-bg-secondary/90 p-3.5 shadow-2xl backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-ink-muted">Flows mapped</span>
              <Sparkles size={13} className="text-accent" />
            </div>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-ink">100%</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-accent" />
            </div>
          </motion.div>

          {/* Small floating chip */}
          <motion.div
            style={{ x: reduce ? 0 : cardBX, y: reduce ? 0 : cardAY }}
            className="absolute -bottom-3 left-8 flex items-center gap-1.5 rounded-full border border-line bg-bg-card/90 px-3 py-1.5 text-[11px] text-ink-secondary shadow-xl backdrop-blur"
          >
            <MousePointer2 size={11} className="text-accent" />
            Prototype ready
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
