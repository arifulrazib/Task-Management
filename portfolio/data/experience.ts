/**
 * Professional experience timeline.
 * Edit / add entries here. Keep the most recent role first.
 *
 * Only the Brain Station 23 role is drawn from Ariful's known profile.
 * Add or correct entries as needed — dates left as editable placeholders
 * where not confirmed.
 */

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  /** Marks the current role for the timeline "live" indicator. */
  current?: boolean;
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Brain Station 23",
    role: "Junior UI/UX Designer",
    period: "[Add start] – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Designing user experiences and interfaces for fintech, web and mobile products — from research and user flows through to high-fidelity UI and design system contributions.",
    skills: ["Product Design", "UX Research", "UI Design", "Design Systems", "Prototyping"],
    current: true,
  },
  // Add earlier roles / freelance / internships below.
  // {
  //   id: 2,
  //   company: "[Company]",
  //   role: "[Role]",
  //   period: "[Add period]",
  //   location: "[Location]",
  //   description: "[Add description]",
  //   skills: ["[Skill]"],
  // },
];
