"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-8 flex items-center justify-end" aria-label="Primary">
      {/* Desktop links */}
      <ul className="hidden items-center gap-1 rounded-full border border-base-600/60 bg-base-800/70 p-1 backdrop-blur md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-base-700 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        className="grid h-10 w-10 place-items-center rounded-full border border-base-600/60 bg-base-800/70 text-white md:hidden"
      >
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="absolute right-4 top-16 z-50 flex w-48 flex-col gap-1 rounded-2xl border border-base-600/60 bg-base-800 p-2 shadow-xl md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-base-700 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
