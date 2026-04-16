import type { Metadata } from "next";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
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
      <body className="min-h-screen flex">
        <SidebarProvider>
          <AppSidebar />

          <TooltipProvider>
            <div className="flex-1 bg-[#AAD7B8] p-2">
              <div className="h-[97vh] border-2 border-[#25343F] bg-[#F8F7F1] overflow-scroll">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
