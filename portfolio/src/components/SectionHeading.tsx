interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}

export default function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
