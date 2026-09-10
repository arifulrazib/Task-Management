/**
 * Selected work / case studies.
 *
 * Project titles and categories are drawn from Ariful's Behance portfolio
 * (behance.net/arifulislam94). Research numbers, business metrics and outcomes
 * are intentionally left as editable placeholders — replace the bracketed
 * `[Add ...]` strings with your real content before publishing.
 *
 * To add a new project: copy a block, give it a unique `slug`, drop the
 * thumbnail into /public/images/projects/<slug>.jpg and you're done.
 */

export interface CaseStudyBlock {
  /** Section label shown in the case study. */
  heading: string;
  /** Body copy — keep it editable, use [Add ...] where content is missing. */
  body: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  platform: string;
  image: string;
  slug: string;
  tags: string[];
  /** Whether the thumbnail file exists yet. Drives the placeholder overlay. */
  hasImage: boolean;
  /** Case study content — all fields editable. */
  caseStudy: {
    overview: string;
    role: string;
    timeline: string;
    problem: string;
    research: string;
    insights: string;
    approach: string;
    outcome: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Remittance Transfer",
    category: "Fintech",
    description:
      "Designing a clearer and more trustworthy digital remittance experience for cross-border money transfers.",
    year: "2024",
    platform: "Web · Product Design",
    image: "/images/projects/remittance.jpg",
    slug: "remittance-transfer",
    tags: ["Fintech", "Web App", "Product Design", "UX"],
    hasImage: false,
    caseStudy: {
      overview:
        "A digital remittance product that helps people send money across borders with clarity and confidence, reducing the anxiety that comes with moving money between countries.",
      role: "UX/UI & Product Design",
      timeline: "[Add project timeline]",
      problem:
        "Sending money abroad is stressful — hidden fees, unclear exchange rates and uncertainty about whether the money arrived. [Add specific problem framing]",
      research: "[Add research insight — e.g. interviews, competitive audit, support tickets reviewed]",
      insights: "[Add key insight — e.g. users abandon transfers when total cost isn't shown upfront]",
      approach:
        "Mapped the end-to-end transfer flow, prioritised transparent fee and rate breakdowns, and designed clear status tracking so senders always know where their money is.",
      outcome: "[Add project outcome — e.g. task success rate, drop-off reduction]",
      learnings: "[Add key learning]",
    },
  },
  {
    id: 2,
    title: "Home Find App",
    category: "Mobile · Real Estate",
    description:
      "A mobile experience for discovering, comparing and shortlisting homes with a calm, browsable UI.",
    year: "2024",
    platform: "Mobile · UX/UI Case Study",
    image: "/images/projects/home-find.jpg",
    slug: "home-find-app",
    tags: ["Mobile App", "UX Case Study", "UI Design"],
    hasImage: false,
    caseStudy: {
      overview:
        "A property discovery app that makes browsing homes feel calm instead of overwhelming, with strong filtering, saved searches and a clean listing detail experience.",
      role: "UX/UI Design",
      timeline: "[Add project timeline]",
      problem:
        "Property search apps overload users with listings and filters, making it hard to focus. [Add specific problem framing]",
      research: "[Add research insight]",
      insights: "[Add key insight]",
      approach:
        "Designed a focused browse-and-save flow, simplified filtering into progressive disclosure, and built a listing detail layout that surfaces the details buyers care about first.",
      outcome: "[Add project outcome]",
      learnings: "[Add key learning]",
    },
  },
  {
    id: 3,
    title: "Admin Portal",
    category: "Dashboard",
    description:
      "An information-dense admin portal designed for control, clarity and fast day-to-day operations.",
    year: "2023",
    platform: "Web · Dashboard Design",
    image: "/images/projects/admin-portal.jpg",
    slug: "admin-portal",
    tags: ["Dashboard", "Web App", "Design System"],
    hasImage: false,
    caseStudy: {
      overview:
        "An operations dashboard that turns dense data into a scannable, actionable interface for internal teams managing content, users and workflows.",
      role: "Product & UI Design",
      timeline: "[Add project timeline]",
      problem:
        "Internal tools are often neglected, slowing teams down. This portal needed to handle density without becoming cluttered. [Add specific problem framing]",
      research: "[Add research insight]",
      insights: "[Add key insight]",
      approach:
        "Built a modular layout system, standardised tables and data states, and defined a component library so the portal stays consistent as it grows.",
      outcome: "[Add project outcome]",
      learnings: "[Add key learning]",
    },
  },
  {
    id: 4,
    title: "Flight Booking",
    category: "Travel",
    description:
      "A flight booking experience that keeps search, compare and checkout fast and legible.",
    year: "2023",
    platform: "Web · UX/UI Case Study",
    image: "/images/projects/flight-booking.jpg",
    slug: "flight-booking",
    tags: ["Travel", "Web App", "UX Case Study"],
    hasImage: false,
    caseStudy: {
      overview:
        "A flight booking flow designed to reduce the friction of comparing fares and completing checkout, keeping the traveller oriented from search to confirmation.",
      role: "UX/UI Design",
      timeline: "[Add project timeline]",
      problem:
        "Flight booking flows bury total price and stack up decision points, causing drop-off. [Add specific problem framing]",
      research: "[Add research insight]",
      insights: "[Add key insight]",
      approach:
        "Streamlined the search-to-checkout path, made fare comparison visual, and kept price transparency consistent across every step.",
      outcome: "[Add project outcome]",
      learnings: "[Add key learning]",
    },
  },
  {
    id: 5,
    title: "eKYC Experience",
    category: "Fintech",
    description:
      "A digital identity verification (eKYC) flow that balances compliance with a low-friction onboarding.",
    year: "2024",
    platform: "Mobile · Product Design",
    image: "/images/projects/ekyc.jpg",
    slug: "ekyc-experience",
    tags: ["Fintech", "Onboarding", "Mobile App"],
    hasImage: false,
    caseStudy: {
      overview:
        "An electronic Know-Your-Customer flow that guides new users through identity verification quickly, keeping a regulated process feeling human and clear.",
      role: "Product & UX Design",
      timeline: "[Add project timeline]",
      problem:
        "eKYC steps are legally required but a common point of onboarding drop-off. [Add specific problem framing]",
      research: "[Add research insight]",
      insights: "[Add key insight]",
      approach:
        "Broke verification into small, well-explained steps, designed strong error and retry states for document capture, and set clear expectations at every stage.",
      outcome: "[Add project outcome]",
      learnings: "[Add key learning]",
    },
  },
  {
    id: 6,
    title: "Bangladesh Tourism",
    category: "Web Redesign",
    description:
      "A tourism website redesign that showcases destinations with an editorial, immersive feel.",
    year: "2023",
    platform: "Web · Redesign",
    image: "/images/projects/tourism.jpg",
    slug: "bangladesh-tourism",
    tags: ["Web Redesign", "Editorial", "UI Design"],
    hasImage: false,
    caseStudy: {
      overview:
        "A redesign of a tourism website that turns destination discovery into an immersive, editorial experience while keeping trip-planning practical.",
      role: "UX/UI Design",
      timeline: "[Add project timeline]",
      problem:
        "The existing site felt dated and made destinations hard to explore. [Add specific problem framing]",
      research: "[Add research insight]",
      insights: "[Add key insight]",
      approach:
        "Reworked the information architecture around destinations, designed a rich visual system for imagery, and made planning tools easy to reach.",
      outcome: "[Add project outcome]",
      learnings: "[Add key learning]",
    },
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAdjacentProject = (slug: string): Project => {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
};
