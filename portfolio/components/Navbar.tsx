"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 20,
          paddingBottom: scrolled ? 10 : 20,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`shell flex items-center justify-between transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — home`}
        >
          {site.name.toUpperCase()}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-ink-secondary transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary ml-2 !px-5 !py-2 text-sm"
            data-cursor="link"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="shell md:hidden"
          >
            <div className="surface mt-2 overflow-hidden p-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
