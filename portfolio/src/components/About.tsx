import { experience, skills } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Get to know me" title="About My Story" align="left" />
          <p className="mt-6 text-sm leading-relaxed text-muted">
            I&apos;m a full-stack developer who ships complete products — from database schema and
            API design to the pixels users actually touch. My core stack is PHP/Laravel, MySQL,
            Redis and Docker on the backend, with React, Next.js and TypeScript on the frontend.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            I care about clean architecture, fast queries and interfaces that stay out of the
            way. Alongside engineering I build automation tooling and run content &amp; marketing
            projects, so I think about products in terms of both code quality and real-world
            conversion.
          </p>

          <div className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Tech I work with
            </p>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-xl border border-base-600/60 bg-base-800/60 px-3 py-2"
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-bold ${skill.tint}`}
                  >
                    {skill.short}
                  </span>
                  <span className="text-sm text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full border border-base-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Experience
          </span>

          <ol className="mt-6 space-y-6">
            {experience.map((item) => (
              <li key={`${item.role}-${item.period}`} className="border-b border-base-600/50 pb-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold text-white">{item.role}</h3>
                  <span className="whitespace-nowrap text-sm text-accent">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.company}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
