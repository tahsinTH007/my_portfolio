"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FolderGit2, Code2, Mail, User } from "lucide-react";

const menu = [
  { icon: Home, label: "Home", url: "/" },
  { icon: FolderGit2, label: "Projects", url: "/projects" },
  { icon: Briefcase, label: "Experience", url: "/experience" },
  { icon: Code2, label: "Skills", url: "/skills" },
  { icon: User, label: "About Me", url: "/about" },
  { icon: Mail, label: "Contact", url: "/contact" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-screen bg-[#AAD7B8] flex flex-col justify-between py-4 px-3">
      {/* Top */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex items-center gap-3">
          <div className="w-10 h-10 bg-[#408A71] rounded-sm flex items-center justify-center text-white font-bold">
            TH
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              Tahsin Hassan
            </span>
            <span className="text-sm text-gray-800">Full-stack Developer</span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-4">
          {menu.map((item, i) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;

            return (
              <Link key={i} href={item.url}>
                <div
                  className={`flex items-center p-2 transition font-semibold ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-800 hover:bg-[#F8F7F1]"
                  }`}
                >
                  <Icon size={20} />
                  <span className="ml-2">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
