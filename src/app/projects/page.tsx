import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/projectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects — microservices food delivery, MERN e-commerce, an AI hospital management system, and a real-time fire alert platform.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Tahsin Hassan",
    description:
      "Selected full-stack projects — microservices food delivery, MERN e-commerce, an AI hospital management system, and a real-time fire alert platform.",
    url: "/projects",
  },
};

export default function Page() {
  return <ProjectsPage />;
}
