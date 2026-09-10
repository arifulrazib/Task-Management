import type { Variants } from "framer-motion";

/** Premium easing — matches Tailwind's out-expo token. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Container that staggers its children. */
export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Shared viewport config for scroll-reveal. */
export const viewport = { once: true, margin: "-80px" } as const;
