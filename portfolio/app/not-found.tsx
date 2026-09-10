import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-display-md font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft size={16} />
        Back home
      </Link>
    </main>
  );
}
