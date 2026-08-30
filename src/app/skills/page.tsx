import type { Metadata } from "next";
import SkillsPage from "@/components/pages/skillsPage";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, backend, database and tooling skills — React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Redis and more.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills — Tahsin Hassan",
    description:
      "Frontend, backend, database and tooling skills — React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Redis and more.",
    url: "/skills",
  },
};

export default function Page() {
  return <SkillsPage />;
}
