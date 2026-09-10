import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-base-600/50 pt-8 text-center">
      <p className="text-lg font-semibold text-white">{profile.fullName}</p>
      <a
        href={`mailto:${profile.email}`}
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        {profile.email}
      </a>
      <p className="mt-4 text-xs text-muted/70">
        © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
