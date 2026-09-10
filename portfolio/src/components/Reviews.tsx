"use client";

import { useCallback, useState } from "react";
import { reviews } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const count = reviews.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  const review = reviews[index];

  return (
    <section id="reviews" className="scroll-mt-20">
      <SectionHeading eyebrow="Testimonials" title="What Clients Say" />

      <div className="mt-10 rounded-3xl border border-base-600/60 bg-base-800/60 p-8 sm:p-12">
        <div
          className="flex flex-col items-center gap-6"
          role="group"
          aria-roledescription="carousel"
          aria-label={`Review ${index + 1} of ${count}`}
        >
          <div className="flex gap-1 text-accent" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>

          <blockquote className="max-w-2xl text-center text-lg leading-relaxed text-white/90">
            &ldquo;{review.quote}&rdquo;
          </blockquote>

          <div className="text-center">
            <p className="font-semibold text-white">{review.name}</p>
            <p className="text-sm text-muted">{review.title}</p>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-10 w-10 place-items-center rounded-full border border-base-600 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Choose review">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-base-600 hover:bg-base-600/70"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-10 w-10 place-items-center rounded-full border border-base-600 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
