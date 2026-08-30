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
import { useState } from "react";

const menu = [
  { icon: Home, label: "Home", url: "/", code: "00" },
  { icon: FolderGit2, label: "Projects", url: "/projects", code: "01" },
  { icon: Briefcase, label: "Experience", url: "/experience", code: "02" },
  { icon: Code2, label: "Skills", url: "/skills", code: "03" },
  { icon: User, label: "About Me", url: "/about", code: "04" },
  { icon: Mail, label: "Contact", url: "/contact", code: "05" },
];

function SidebarContent({ onNavClick }: { onNavClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between h-full py-6 px-4 bg-iron-900">
      <div className="flex flex-col gap-7">
        {/* Identity */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 flex items-center justify-center text-[13px] font-bold border-2 border-heat text-heat rounded-sm">
              TH
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="datum text-[8px] text-iron-400">UNIT</span>
              <span className="datum text-[9px] text-aqua">TH-2026</span>
            </div>
          </div>

          <span className="display text-[15px] leading-tight text-cream">
            Tahsin Hassan
          </span>

          <span className="datum text-[9px] text-iron-400">
            Full-stack Developer
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-iron-700" />
          <span className="datum text-[8px] text-iron-500">NAV</span>
          <div className="h-px flex-1 bg-iron-700" />
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {menu.map((item) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;

            return (
              <Link key={item.url} href={item.url} onClick={onNavClick}>
                <div
                  className={`nav-item ${isActive ? "nav-item--active" : ""}`}
                >
                  <Icon size={13} />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-[9px] opacity-50">{item.code}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3">
        <div className="barcode text-iron-600" />
        <div className="datum text-[8px] text-iron-500">
          &copy; {new Date().getFullYear()} Tahsin Hassan
        </div>
      </div>
    </div>
  );
}

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 h-screen flex-col shrink-0 border-r-2 border-iron-800 bg-iron-900">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b-2 border-iron-700 bg-iron-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-[12px] font-bold border-2 border-heat text-heat rounded-sm">
            TH
          </div>
          <span className="display text-[13px] text-cream">Tahsin Hassan</span>
        </div>

        {/* Mobile Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <div className="flex items-center justify-center w-9 h-9 border border-iron-600 rounded-sm text-iron-300 transition-colors duration-150 hover:bg-iron-700 hover:text-cream">
              <Menu size={18} />
            </div>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-60 p-0 border-r-2 border-iron-700 bg-iron-900"
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
