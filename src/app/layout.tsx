import type { Metadata } from "next";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/navigation/sidebar";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahsin Hassan",
  description: "Full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex" style={{ background: "#1A1A18" }}>
        <TooltipProvider>
          <AppSidebar />
          <main
            className="flex-1 overflow-y-auto border-l-2 border-[#1A1A18] h-screen"
            style={{ background: "#F5F2EB" }}
          >
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
