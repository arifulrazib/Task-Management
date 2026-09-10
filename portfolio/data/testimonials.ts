/**
 * Testimonials.
 *
 * IMPORTANT: These are clearly-marked placeholders — no fake testimonials.
 * Replace the `quote`, `name` and `title` with a real colleague / client
 * quote and set `placeholder: false` when you have it.
 */

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "[Add a real testimonial from a colleague, design lead or client. Keep it specific — what did working with you actually change?]",
    name: "[Name]",
    title: "[Role, Company]",
    placeholder: true,
  },
  {
    id: 2,
    quote:
      "[Add a second short testimonial here. A one-line quote about your collaboration, craft or product thinking works well.]",
    name: "[Name]",
    title: "[Role, Company]",
    placeholder: true,
  },
];
