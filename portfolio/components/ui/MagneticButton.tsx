"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

/**
 * Button with a subtle magnetic hover (desktop, motion-safe).
 * Falls back to a plain button when reduced motion is preferred.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`${base} ${className}`}
        data-cursor="link"
        {...props}
      >
        {children}
      </Link>
    </motion.span>
  );
}
