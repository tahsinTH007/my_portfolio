"use client";

import { Layers, ExternalLink, Star, GitFork } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nexus CRM",
    tagline: "Full-stack CRM with RBAC, analytics & billing",
    status: "Live",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    description:
      "A multi-tenant CRM platform supporting role-based access control, real-time activity feeds, subscription billing via Stripe, and exportable analytics dashboards.",
    stars: 214,
    forks: 38,
    github: "https://github.com/",
    demo: "https://",
    accent: "#F0C84A",
    bg: "#1A1A18",
    dark: true,
  },
  {
    title: "DevLink",
    tagline: "Open-source developer portfolio builder",
    status: "Open Source",
    stack: ["Next.js", "MongoDB", "Tailwind", "Framer Motion"],
    description:
      "A drag-and-drop portfolio builder for developers. Users can compose sections, pick themes, and publish a personal site in minutes — no code required.",
    stars: 892,
    forks: 121,
    github: "https://github.com/",
    demo: "https://",
    accent: "#1A1A18",
    bg: "#F0C84A",
    dark: false,
  },
  {
    title: "Realtime",
    tagline: "WebSocket-powered team chat & task hub",
    status: "Beta",
    stack: ["React", "Express", "WebSockets", "MongoDB", "JWT"],
    description:
      "Real-time collaborative workspace combining Slack-style messaging with lightweight task tracking. Supports channels, threads, presence indicators, and file sharing.",
    stars: 147,
    forks: 23,
    github: "https://github.com/",
    demo: "https://",
    accent: "#1A1A18",
    bg: "#FDFAF4",
    dark: false,
  },
  {
    title: "QueryForge",
    tagline: "Visual SQL query builder & executor",
    status: "Live",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    description:
      "A browser-based SQL tool with a visual query builder, schema explorer, and query history. Supports PostgreSQL & MySQL connections over encrypted tunnels.",
    stars: 331,
    forks: 54,
    github: "https://github.com/",
    demo: "https://",
    accent: "#1A1A18",
    bg: "#D6E8D0",
    dark: false,
  },
];

function StatusBadge({ label, dark }: { label: string; dark: boolean }) {
  return (
    <span
      className="text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 border-[1.5px]"
      style={{
        borderColor: dark ? "#F0C84A" : "#1A1A18",
        color: dark ? "#F0C84A" : "#1A1A18",
      }}
    >
      {label}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen px-8 py-10"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      {/* Header */}
      <h1
        className="text-5xl leading-none mb-1"
        style={{
          fontFamily: "'DM Serif Display', serif",
          letterSpacing: "-1px",
        }}
      >
        Projects.
      </h1>
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-8"
        style={{ color: "#7A7065" }}
      >
        // things i've built &amp; shipped
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border-2 border-[#1A1A18] p-6 flex flex-col"
            style={{ background: proj.bg }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase">
                <Layers
                  size={12}
                  style={{ color: proj.dark ? "#F0C84A" : "#1A1A18" }}
                />
                <span style={{ color: proj.dark ? "#9A9590" : "#7A7065" }}>
                  Project
                </span>
              </div>
              <StatusBadge label={proj.status} dark={proj.dark} />
            </div>

            {/* Title */}
            <div
              className="text-[22px] leading-tight mb-1"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: proj.dark ? "#F5F2EB" : "#1A1A18",
              }}
            >
              {proj.title}
            </div>
            <div
              className="text-[11px] tracking-[0.04em] mb-4"
              style={{ color: proj.dark ? "#9A9590" : "#5A5048" }}
            >
              {proj.tagline}
            </div>

            {/* Description */}
            <p
              className="text-[11px] leading-relaxed mb-4 flex-1"
              style={{ color: proj.dark ? "#C8C3BA" : "#3A3530" }}
            >
              {proj.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {proj.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 border-[1.5px] tracking-[0.04em] cursor-default transition-colors duration-150"
                  style={{
                    borderColor: proj.dark ? "#444440" : "#1A1A18",
                    color: proj.dark ? "#F5F2EB" : "#1A1A18",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background =
                      "#F0C84A";
                    (e.currentTarget as HTMLSpanElement).style.color =
                      "#1A1A18";
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      "#F0C84A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLSpanElement).style.color = proj.dark
                      ? "#F5F2EB"
                      : "#1A1A18";
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      proj.dark ? "#444440" : "#1A1A18";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div
                className="flex items-center gap-3 text-[10px] tracking-[0.06em]"
                style={{ color: proj.dark ? "#9A9590" : "#7A7065" }}
              >
                <span className="flex items-center gap-1">
                  <Star size={10} /> {proj.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={10} /> {proj.forks}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-2 border-[1.5px] no-underline transition-colors duration-150"
                  style={{
                    borderColor: proj.dark ? "#444440" : "#1A1A18",
                    color: proj.dark ? "#F5F2EB" : "#1A1A18",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#F0C84A";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#1A1A18";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#F0C84A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      proj.dark ? "#F5F2EB" : "#1A1A18";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      proj.dark ? "#444440" : "#1A1A18";
                  }}
                >
                  <FaGithub size={11} /> Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-2 border-[1.5px] no-underline transition-colors duration-150"
                  style={{
                    borderColor: proj.dark ? "#F0C84A" : "#1A1A18",
                    background: proj.dark ? "#F0C84A" : "#1A1A18",
                    color: proj.dark ? "#1A1A18" : "#F0C84A",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      proj.dark ? "#F0C84A" : "#1A1A18";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      proj.dark ? "#F0C84A" : "#1A1A18";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      proj.dark ? "#1A1A18" : "#F0C84A";
                  }}
                >
                  <ExternalLink size={11} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
