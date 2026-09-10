import Link from "next/link";
import { profile, socials } from "@/data/profile";
import ProfileImage from "./ProfileImage";
import { SocialIcon } from "./Icons";

const initials = profile.fullName
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function ProfileCard() {
  return (
    <aside className="animate-fade-up rounded-3xl border border-base-600/60 bg-base-800/70 p-6 backdrop-blur lg:sticky lg:top-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{profile.firstName}</span>
        <span className="rounded-full bg-base-700 px-3 py-1 text-xs font-medium text-muted">
          {profile.role.split(" ").slice(-1)[0]}
        </span>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-2xl border border-base-600/60">
        <ProfileImage src={profile.photo} alt={profile.fullName} initials={initials} />
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-5 block truncate text-center text-sm text-muted transition-colors hover:text-accent"
      >
        {profile.email}
      </a>

      <p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-muted">
        Follow me on
      </p>

      <div className="mt-3 flex items-center justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="grid h-9 w-9 place-items-center rounded-full bg-base-700 text-muted transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-base-900"
          >
            <SocialIcon name={s.icon} className="h-4 w-4" />
          </a>
        ))}
      </div>

      <Link
        href="#contact"
        className="mt-6 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-base-900 transition-colors hover:bg-accent-soft"
      >
        Hire Me
      </Link>
    </aside>
  );
}
