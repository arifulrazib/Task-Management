"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "link" | "project";

/**
 * Subtle custom cursor. Desktop / fine-pointer only.
 * - default: small dot
 * - link: expanded ring
 * - project: label pill ("View Case Study →")
 * Disabled entirely on touch devices and when reduced motion is preferred.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        setState((target.dataset.cursor as CursorState) ?? "default");
      } else if ((e.target as HTMLElement)?.closest("a, button")) {
        setState("link");
      } else {
        setState("default");
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [x, y]);

  if (!enabled) return null;

  const isProject = state === "project";
  const isLink = state === "link";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: isProject ? 132 : isLink ? 44 : 10,
          height: isProject ? 44 : isLink ? 44 : 10,
          backgroundColor: isProject ? "#00E5A0" : isLink ? "rgba(0,229,160,0.12)" : "#00E5A0",
          border: isLink ? "1px solid rgba(0,229,160,0.6)" : "1px solid transparent",
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {isProject && (
          <span className="whitespace-nowrap text-xs font-medium text-[#06251c]">
            View Case Study →
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
