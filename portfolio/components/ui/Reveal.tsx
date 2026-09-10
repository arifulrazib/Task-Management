"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Render as a different element while keeping motion. */
  as?: "div" | "section" | "li" | "article";
}

/**
 * Scroll-reveal wrapper. Respects prefers-reduced-motion automatically via
 * Framer Motion + the global CSS override.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
