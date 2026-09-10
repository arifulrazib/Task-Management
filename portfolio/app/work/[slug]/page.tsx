import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import { getAdjacentProject, getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.description,
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getAdjacentProject(slug);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <CaseStudy project={project} next={next} />
      </main>
      <Footer />
    </>
  );
}
