import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/pages/projectDetailPage";
import { projects, getProject, flatStack } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    keywords: flatStack(project),
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Tahsin Hassan`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
