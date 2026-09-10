import Link from "next/link";
import { profile, stats } from "@/data/profile";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative rotating badge */}
      <div className="pointer-events-none absolute -right-2 top-0 hidden lg:block" aria-hidden>
        <div className="relative h-28 w-28">
          <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow text-accent/70">
            <defs>
              <path id="circlePath" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
            </defs>
            <text fontSize="11" fill="currentColor" letterSpacing="3">
              <textPath href="#circlePath">
                OPEN TO WORK · AVAILABLE FOR HIRE ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-bold text-base-900">
              A
            </span>
          </div>
        </div>
      </div>

      <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.25em] text-accent">
        {profile.location}
      </p>

      <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Hey, I am <span className="text-accent">{profile.fullName}</span>
        <br />
        <span className="text-white/90">{profile.role}</span>
      </h1>

      <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted">
        {profile.tagline}
      </p>
      <p className="mt-1 text-sm text-muted/80">{profile.subTagline}</p>

      <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-base-900 transition-colors hover:bg-accent-soft"
        >
          Get a quote <ArrowIcon className="h-4 w-4" />
        </Link>
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-base-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
        >
          View work
        </Link>
      </div>

      <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-base-600/60 bg-base-800/60 px-4 py-5"
          >
            <dt className="text-2xl font-bold text-accent">{stat.value}</dt>
            <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
