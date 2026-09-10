/**
 * Design & workflow tools. `initials` renders in the icon card
 * (no external logo assets required).
 */

export interface Tool {
  name: string;
  initials: string;
  group: "Design" | "AI";
}

export const tools: Tool[] = [
  { name: "Figma", initials: "Fi", group: "Design" },
  { name: "FigJam", initials: "Fj", group: "Design" },
  { name: "Adobe Photoshop", initials: "Ps", group: "Design" },
  { name: "Adobe Illustrator", initials: "Ai", group: "Design" },
  { name: "Adobe XD", initials: "Xd", group: "Design" },
  { name: "Claude", initials: "Cl", group: "AI" },
  { name: "ChatGPT", initials: "GPT", group: "AI" },
  { name: "Gemini", initials: "Gm", group: "AI" },
];
