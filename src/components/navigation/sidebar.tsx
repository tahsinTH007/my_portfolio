"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  FolderGit2,
  Code2,
  Mail,
  User,
  Menu,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menu = [
  { icon: Home, label: "Home", url: "/" },
  { icon: FolderGit2, label: "Projects", url: "/projects" },
  { icon: Briefcase, label: "Experience", url: "/experience" },
  { icon: Code2, label: "Skills", url: "/skills" },
  { icon: User, label: "About Me", url: "/about" },
  { icon: Mail, label: "Contact", url: "/contact" },
];

function SidebarContent({ onNavClick }: { onNavClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-col justify-between h-full py-6 px-4"
      style={{
        fontFamily: "'Space Mono', monospace",
        color: "#F5F2EB",
      }}
    >
      {/* Identity */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <div
            className="w-9 h-9 flex items-center justify-center text-[13px] font-bold border-2 border-[#F0C84A] mb-3"
            style={{ color: "#F0C84A" }}
          >
            TH
          </div>

          <span
            className="text-[15px] font-bold leading-tight"
            style={{ color: "#F5F2EB" }}
          >
            Tahsin Hassan
          </span>

          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "#7A7065" }}
          >
            Full-stack Developer
          </span>
        </div>

        <div className="border-t border-[#2A2A26]" />

        {/* Nav */}
        <nav className="flex flex-col gap-0.5">
          {menu.map((item, i) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;

            return (
              <Link key={i} href={item.url} onClick={onNavClick}>
                <div
                  className="flex items-center gap-2.5 px-3 py-2.5 text-[11px] tracking-[0.08em] uppercase font-bold border-[1.5px] transition-colors duration-150"
                  style={{
                    borderColor: isActive ? "#F0C84A" : "transparent",
                    background: isActive ? "#F0C84A" : "transparent",
                    color: isActive ? "#1A1A18" : "#9A9590",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.color = "#F5F2EB";
                      el.style.borderColor = "#2A2A26";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.color = "#9A9590";
                      el.style.borderColor = "transparent";
                    }
                  }}
                >
                  <Icon size={13} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div
        className="text-[9px] tracking-widest uppercase"
        style={{ color: "#444440" }}
      >
        &copy; {new Date().getFullYear()} Tahsin Hassan
      </div>
    </div>
  );
}

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex w-60 h-screen flex-col shrink-0 border-r-2 border-[#1A1A18]"
        style={{ background: "#1A1A18" }}
      >
        <SidebarContent />
      </aside>

      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b-2 border-[#2A2A26]"
        style={{
          background: "#1A1A18",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center text-[12px] font-bold border-2 border-[#F0C84A]"
            style={{ color: "#F0C84A" }}
          >
            TH
          </div>

          <span className="text-[13px] font-bold" style={{ color: "#F5F2EB" }}>
            Tahsin Hassan
          </span>
        </div>

        {/* Mobile Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <div
              className="flex items-center justify-center w-9 h-9 border border-[#2A2A26] transition-colors duration-150 hover:bg-[#2A2A26]"
              style={{ color: "#9A9590" }}
            >
              <Menu size={18} />
            </div>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-56 p-0 border-r-2 border-[#2A2A26]"
            style={{ background: "#1A1A18" }}
          >
            <SidebarContent onNavClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Spacer */}
      <div className="md:hidden h-14.5 shrink-0" />
    </>
  );
}
