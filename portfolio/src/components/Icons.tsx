import type { SVGProps } from "react";
import type { SocialLink } from "@/data/profile";

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function BehanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8.197 11.1c.9-.45 1.35-1.2 1.35-2.25 0-2.1-1.575-2.85-3.6-2.85H0v12.15h6.3c2.1 0 3.9-.975 3.9-3.3 0-1.5-.675-2.55-2.003-3ZM2.55 8.1h2.55c.825 0 1.5.3 1.5 1.2 0 .825-.6 1.2-1.425 1.2H2.55V8.1Zm2.85 7.65H2.55v-3.15h2.925c.975 0 1.65.45 1.65 1.575 0 1.125-.75 1.575-1.725 1.575ZM24 12.6c0-2.7-1.575-4.95-4.425-4.95-2.775 0-4.65 2.1-4.65 4.8 0 2.85 1.8 4.8 4.65 4.8 2.175 0 3.6-.975 4.275-3.075h-2.25c-.225.75-.9 1.125-1.875 1.125-1.2 0-1.875-.75-1.95-1.95H24v-.75Zm-6.15-1.125c.15-.975.75-1.65 1.8-1.65.975 0 1.575.75 1.65 1.65h-3.45Zm-.9-5.7h5.4V4.5h-5.4v1.275Z" />
    </svg>
  );
}

export function DribbbleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm7.885 5.53a10.05 10.05 0 0 1 2.28 6.29c-.34-.07-3.74-.76-7.17-.33-.08-.18-.15-.36-.24-.55-.21-.49-.44-.99-.68-1.47 3.79-1.55 5.52-3.78 5.81-3.94ZM12 2.16c2.6 0 4.98.98 6.79 2.58-.24.34-1.8 2.43-5.46 3.81-1.69-3.1-3.56-5.65-3.85-6.04.81-.22 1.65-.35 2.52-.35ZM7.3 3.35c.28.38 2.11 2.94 3.82 5.98-4.81 1.28-9.06 1.26-9.52 1.26.66-3.16 2.79-5.79 5.7-7.24ZM1.36 12.01v-.31c.44.01 5.43.08 10.57-1.46.3.58.58 1.17.84 1.76-.14.04-.27.08-.41.12-5.31 1.71-8.13 6.39-8.36 6.79A9.79 9.79 0 0 1 1.36 12ZM12 21.85a9.8 9.8 0 0 1-6.03-2.07c.18-.37 2.22-4.3 8.03-6.33l.07-.02c1.45 3.76 2.04 6.92 2.19 7.83A9.72 9.72 0 0 1 12 21.85Zm6.24-1.98c-.1-.62-.65-3.63-2-7.34 3.23-.51 6.05.33 6.4.44a9.8 9.8 0 0 1-4.4 6.9Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2l2.9 6.26 6.1.55-4.6 4.05 1.36 6.04L12 15.9 6.24 18.9 7.6 12.86 3 8.81l6.1-.55L12 2Z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["icon"], (p: IconProps) => JSX.Element> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  behance: BehanceIcon,
  dribbble: DribbbleIcon,
  mail: MailIcon,
};

export function SocialIcon({ name, ...props }: { name: SocialLink["icon"] } & IconProps) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}
