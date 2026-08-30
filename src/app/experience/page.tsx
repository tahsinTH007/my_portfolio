import type { Metadata } from "next";
import ExperiencePage from "@/components/pages/experiencesPage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Full-stack developer at Cyber World IT (Aug 2024 - Aug 2025), building the Medicare24bd healthcare platform with Next.js, Node.js, Express and SQL.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Tahsin Hassan",
    description:
      "Full-stack developer at Cyber World IT (Aug 2024 - Aug 2025), building the Medicare24bd healthcare platform with Next.js, Node.js, Express and SQL.",
    url: "/experience",
  },
};

export default function Page() {
  return <ExperiencePage />;
}
