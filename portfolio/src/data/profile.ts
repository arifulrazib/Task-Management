/**
 * Single source of truth for all portfolio content.
 * Edit values here — no need to touch component markup.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** key maps to an icon in components/Icons.tsx */
  icon: "github" | "linkedin" | "twitter" | "behance" | "dribbble" | "mail";
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  href: string;
  /** tailwind gradient classes used for the card thumbnail */
  gradient: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

export interface Skill {
  name: string;
  /** short label rendered inside the badge */
  short: string;
  /** tailwind classes for the badge tint */
  tint: string;
}

export interface Review {
  quote: string;
  name: string;
  title: string;
}

export const profile = {
  firstName: "Ariful",
  fullName: "Ariful Islam",
  role: "Full-Stack Developer",
  email: "mdjahidulraju@gmail.com",
  tagline:
    "I build fast, reliable web products end to end — Laravel & Node on the back, React & Next.js on the front.",
  subTagline: "Available for freelance & full-time work.",
  /** Drop your headshot at portfolio/public/profile.png (transparent PNG works best). */
  photo: "/profile.png",
  resumeHref: "#contact",
  location: "Dhaka, Bangladesh",
} as const;

export const socials: SocialLink[] = [
  { label: "Behance", href: "https://www.behance.net/arifulislam94", icon: "behance" },
  { label: "GitHub", href: "https://github.com/arifulrazib", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Twitter / X", href: "https://twitter.com/", icon: "twitter" },
];

export const stats: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "20+", label: "Happy Clients" },
];

export const projects: Project[] = [
  {
    title: "Task Management Platform",
    category: "Full-Stack · SaaS",
    description:
      "Daily-timeline task app with smart reminders, team accountability and deadline closing. React + Node + Supabase.",
    href: "https://www.behance.net/arifulislam94",
    gradient: "from-emerald-500/30 via-teal-600/20 to-slate-900",
    tags: ["React", "Node", "Supabase"],
  },
  {
    title: "Laravel Commerce API",
    category: "Backend · API",
    description:
      "High-throughput e-commerce backend with Redis caching, queue workers and Stripe billing. Dockerised for zero-drift deploys.",
    href: "https://www.behance.net/arifulislam94",
    gradient: "from-red-500/25 via-orange-600/15 to-slate-900",
    tags: ["Laravel", "MySQL", "Redis"],
  },
  {
    title: "Realtime Analytics Dashboard",
    category: "Frontend · Data",
    description:
      "Next.js dashboard streaming live KPIs over websockets with server components and edge caching for sub-100ms loads.",
    href: "https://www.behance.net/arifulislam94",
    gradient: "from-indigo-500/30 via-purple-600/20 to-slate-900",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Marketing Automation Suite",
    category: "Automation · Growth",
    description:
      "Content and campaign automation tooling — scheduling, SEO scoring and multi-channel publishing built on a Node worker fleet.",
    href: "https://www.behance.net/arifulislam94",
    gradient: "from-cyan-500/25 via-sky-600/15 to-slate-900",
    tags: ["Node", "Automation", "SEO"],
  },
];

export const experience: ExperienceItem[] = [
  { role: "Senior Full-Stack Developer", company: "Freelance · Full time", period: "2023 — Now" },
  { role: "Full-Stack Developer", company: "Agency · Full time", period: "2020 — 2023" },
  { role: "Junior Web Developer", company: "Startup · Full time", period: "2019 — 2020" },
];

export const skills: Skill[] = [
  { name: "Laravel", short: "LV", tint: "bg-red-500/15 text-red-400" },
  { name: "React", short: "Re", tint: "bg-sky-500/15 text-sky-400" },
  { name: "Next.js", short: "Nx", tint: "bg-white/10 text-white" },
  { name: "TypeScript", short: "TS", tint: "bg-blue-500/15 text-blue-400" },
  { name: "MySQL", short: "My", tint: "bg-amber-500/15 text-amber-400" },
  { name: "Docker", short: "Dk", tint: "bg-cyan-500/15 text-cyan-400" },
];

export const reviews: Review[] = [
  {
    quote:
      "Ariful delivered our platform ahead of schedule and the code quality was outstanding. Clean architecture, well tested, and easy for our team to extend.",
    name: "Sarah Mitchell",
    title: "Product Lead, Fintech Startup",
  },
  {
    quote:
      "One of the rare developers who understands both the backend and the business. He flagged performance issues before they became problems.",
    name: "David Chen",
    title: "CTO, SaaS Company",
  },
  {
    quote:
      "Great communicator and a real problem solver. Our Laravel API went from sluggish to lightning-fast under his hands.",
    name: "Ayesha Rahman",
    title: "Founder, E-commerce Brand",
  },
];
