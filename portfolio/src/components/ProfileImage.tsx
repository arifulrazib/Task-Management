"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  initials: string;
}

/**
 * Renders the headshot, falling back to initials if the file is missing
 * (so the layout never breaks before you drop in public/profile.png).
 */
export default function ProfileImage({ src, alt, initials }: ProfileImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-base-700 to-base-900 text-4xl font-bold tracking-wide text-accent"
        aria-label={alt}
        role="img"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 260px"
      className="object-cover object-top"
      priority
      onError={() => setErrored(true)}
    />
  );
}
