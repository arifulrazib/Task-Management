import Link from "next/link";
import { site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="shell flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
            {site.name.toUpperCase()}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-xs uppercase tracking-widest text-ink-muted">
            UX/UI · Product Designer
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {site.name}</p>
        <p>Designed &amp; crafted with intention.</p>
      </div>
    </footer>
  );
}
