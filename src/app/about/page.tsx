import type { Metadata } from "next";
import AboutPage from "@/components/pages/aboutMePage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer based in Dhaka, Bangladesh, focused on scalable web applications, REST APIs, authentication systems and database design.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Tahsin Hassan",
    description:
      "Full-stack developer based in Dhaka, Bangladesh, focused on scalable web applications, REST APIs, authentication systems and database design.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
