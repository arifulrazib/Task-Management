/**
 * Central site configuration.
 * Edit this file to update your name, headline, contact details and social links.
 *
 * NOTE: Only `behance` is a confirmed real link. The other social/contact
 * values are editable placeholders — replace them with your real profiles.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** Whether this is a verified real link or a placeholder to replace. */
  verified: boolean;
}

export const site = {
  name: "Ariful Islam",
  shortName: "Ariful",
  role: "UX/UI & Product Designer",
  location: "Dhaka, Bangladesh",

  // Hero
  eyebrow: "UX/UI Designer · Product Designer",
  headline: "Designing digital products people actually enjoy using.",
  intro:
    "I'm Ariful Islam, a UX/UI and Product Designer focused on creating clear, intuitive and visually refined digital experiences across fintech, mobile and web products.",

  // Availability indicator
  availability: "Available for opportunities",

  // Contact — replace with your real, public contact email.
  email: "hello@example.com", // [Replace with your real contact email]

  // SEO
  seo: {
    title: "Ariful Islam — UX/UI & Product Designer",
    description:
      "Ariful Islam is a UX/UI and Product Designer creating intuitive digital experiences across fintech, web and mobile products.",
    url: "https://arifulislam.design", // [Replace with your deployed domain]
  },
} as const;

export const socials: SocialLink[] = [
  { label: "Behance", href: "https://www.behance.net/arifulislam94", verified: true },
  { label: "LinkedIn", href: "#", verified: false }, // [Add your LinkedIn URL]
  { label: "Dribbble", href: "#", verified: false }, // [Add your Dribbble URL]
  { label: "Instagram", href: "#", verified: false }, // [Add your Instagram URL]
];

/** Convenience lookups used across components. */
export const getSocial = (label: string): SocialLink | undefined =>
  socials.find((s) => s.label.toLowerCase() === label.toLowerCase());
