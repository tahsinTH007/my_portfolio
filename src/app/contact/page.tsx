import type { Metadata } from "next";
import ContactPage from "@/components/pages/contactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about freelance, contract or full-time full-stack work. Response within 24-48 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Tahsin Hassan",
    description:
      "Get in touch about freelance, contract or full-time full-stack work. Response within 24-48 hours.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
