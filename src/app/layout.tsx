import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/navigation/sidebar";
import { ScrollReset } from "@/components/navigation/scroll-reset";
import { Chakra_Petch, Space_Mono } from "next/font/google";
import { site, siteUrl } from "@/lib/site";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Tahsin Hassan",
    "Full-stack developer",
    "MERN developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex bg-iron-950">
        <TooltipProvider>
          <ScrollReset />
          <AppSidebar />
          <main className="tech-grid flex-1 overflow-y-auto h-screen border-l-2 border-iron-800 md:pt-0 pt-13.25">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
