/**
 * Skills grouped into categories (no percentages — shown as interactive tags).
 * Edit freely.
 */

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Product Design",
    items: ["Product Thinking", "User Flows", "Information Architecture", "Feature Definition"],
  },
  {
    category: "UX Design",
    items: ["UX Research", "Journey Mapping", "Wireframing", "Usability", "Interaction Design"],
  },
  {
    category: "UI & Visual",
    items: ["Visual Design", "Responsive Design", "Design Systems", "Prototyping", "Micro-interactions"],
  },
];
