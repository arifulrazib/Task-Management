import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const description = `${profile.fullName} — ${profile.role}. ${profile.tagline}`;

export const metadata: Metadata = {
  title: `${profile.fullName} · ${profile.role}`,
  description,
  keywords: [
    "Full-Stack Developer",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    profile.fullName,
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.fullName} · ${profile.role}`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} · ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-hero-glow font-sans antialiased">{children}</body>
    </html>
  );
}
