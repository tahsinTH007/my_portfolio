"use client";

import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Code2,
  Layers,
  Star,
  ExternalLink,
  ArrowRight,
  Terminal,
  Server,
  Database,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Prisma",
];

const experiences = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Freelance / Remote",
    period: "2024 — Present",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Startup, Dhaka",
    period: "2023 — 2024",
    stack: ["React", "Express", "MongoDB"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency, Dhaka",
    period: "2022 — 2023",
    stack: ["React", "REST APIs", "MySQL"],
  },
];

const projects = [
  {
    title: "Nexus CRM",
    tagline: "Multi-tenant CRM with RBAC & Stripe billing",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    stars: 214,
    github: "https://github.com/",
    demo: "https://",
  },
  {
    title: "DevLink",
    tagline: "Open-source developer portfolio builder",
    stack: ["Next.js", "MongoDB", "Tailwind"],
    stars: 892,
    github: "https://github.com/",
    demo: "https://",
  },
  {
    title: "Realtime",
    tagline: "WebSocket-powered team chat & task hub",
    stack: ["React", "WebSockets", "Redis"],
    stars: 147,
    github: "https://github.com/",
    demo: "https://",
  },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/" },
];

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "1k+", label: "GitHub Stars" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className="text-[10px] px-2 py-1 border-[1.5px] tracking-[0.04em] cursor-default transition-colors duration-150"
      style={{
        borderColor: dark ? "#F5F2EB" : "#1A1A18",
        color: dark ? "#F5F2EB" : "#1A1A18",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "#F0C84A";
        (e.currentTarget as HTMLSpanElement).style.color = "#1A1A18";
        (e.currentTarget as HTMLSpanElement).style.borderColor = "#F0C84A";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "transparent";
        (e.currentTarget as HTMLSpanElement).style.color = dark
          ? "#F5F2EB"
          : "#1A1A18";
        (e.currentTarget as HTMLSpanElement).style.borderColor = dark
          ? "#F5F2EB"
          : "#1A1A18";
      }}
    >
      {label}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div
      className="min-h-screen px-8 py-10"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      {/* ── Page Header ── */}
      <div className="mb-8">
        <p
          className="text-[11px] tracking-[0.18em] uppercase mb-1"
          style={{ color: "#7A7065" }}
        >
          // portfolio · 2025
        </p>
        <h1
          className="text-6xl leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          Tahsin Hassan.
        </h1>
      </div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* ── 1. Hero Bio ── col-span-7 */}
        <div
          className="md:col-span-7 border-2 border-[#1A1A18] p-6 flex flex-col justify-between"
          style={{
            background: "#1A1A18",
            color: "#F5F2EB",
            minHeight: "260px",
          }}
        >
          <div>
            <div
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4"
              style={{ color: "#F0C84A" }}
            >
              <User size={12} />
              About Me
            </div>
            <p
              className="text-[13px] leading-relaxed mb-3"
              style={{ color: "#C8C3BA" }}
            >
              Hey — I'm a{" "}
              <span style={{ color: "#F0C84A" }}>full-stack developer</span>{" "}
              based in Dhaka, Bangladesh. I build fast, well-designed web
              products from database schema to pixel-perfect UI.
            </p>
            <p
              className="text-[12px] leading-relaxed"
              style={{ color: "#9A9590" }}
            >
              Obsessed with clean architecture, developer experience, and
              interfaces that feel genuinely good to use. Open to freelance
              &amp; full-time roles.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] px-3 py-2 border-[1.5px] no-underline transition-colors duration-150 tracking-[0.06em]"
                style={{
                  borderColor: "#444440",
                  color: "#F5F2EB",
                  background: "#2A2A26",
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
                    "#2A2A26";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#F5F2EB";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#444440";
                }}
              >
                <Icon size={12} />
                {label}
              </a>
            ))}
            <a
              href="mailto:tahsin.hassan007@gmail.com"
              className="flex items-center gap-1.5 text-[10px] px-3 py-2 border-[1.5px] no-underline transition-colors duration-150 tracking-[0.06em]"
              style={{
                borderColor: "#F0C84A",
                color: "#F0C84A",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#F0C84A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F0C84A";
              }}
            >
              <Mail size={12} />
              tahsin.hassan007@gmail.com
            </a>
          </div>
        </div>

        {/* ── 2. Stats ── col-span-5 */}
        <div
          className="md:col-span-5 border-2 border-[#1A1A18] p-6 flex flex-col"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <Terminal size={12} />
            At a Glance
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="border-2 border-[#1A1A18] px-3 py-4 flex flex-col items-center justify-center text-center"
                style={{ background: "#F5F2EB" }}
              >
                <div
                  className="text-2xl leading-none mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {value}
                </div>
                <div
                  className="text-[9px] tracking-widest uppercase"
                  style={{ color: "#7A7065" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-2">
            <MapPin size={11} />
            <span className="text-[11px] tracking-[0.04em]">
              Dhaka, Bangladesh
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{
                background: "#2A9D2A",
                boxShadow: "0 0 0 3px rgba(42,157,42,0.25)",
              }}
            />
            <span className="text-[11px] tracking-[0.04em]">
              Available for work
            </span>
          </div>
        </div>

        {/* ── 3. Skills ── col-span-5 */}
        <div
          className="md:col-span-5 border-2 border-[#1A1A18] p-6"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase">
              <Code2 size={12} />
              Core Skills
            </div>
            <a
              href="/skills"
              className="flex items-center gap-1 text-[9px] tracking-widest uppercase no-underline transition-colors duration-150"
              style={{ color: "#7A7065" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#7A7065")
              }
            >
              All skills <ArrowRight size={9} />
            </a>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s) => (
              <Tag key={s} label={s} />
            ))}
          </div>
          <hr className="border-t border-[#1A1A18] opacity-10 mb-4" />
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Code2, label: "Frontend" },
              { icon: Server, label: "Backend" },
              { icon: Database, label: "Databases" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 py-3 border-[1.5px] border-[#1A1A18] transition-colors duration-150 cursor-default"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "#1A1A18";
                  (e.currentTarget as HTMLDivElement).style.color = "#F0C84A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLDivElement).style.color = "#1A1A18";
                }}
              >
                <Icon size={14} />
                <span className="text-[9px] tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. Experience ── col-span-7 */}
        <div
          className="md:col-span-7 border-2 border-[#1A1A18] p-6"
          style={{ background: "#F5F2EB" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase">
              <Briefcase size={12} />
              Experience
            </div>
            <a
              href="/experience"
              className="flex items-center gap-1 text-[9px] tracking-widest uppercase no-underline transition-colors duration-150"
              style={{ color: "#7A7065" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#7A7065")
              }
            >
              Full history <ArrowRight size={9} />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 pb-3"
                style={{
                  borderBottom:
                    i < experiences.length - 1
                      ? "1px solid rgba(26,26,24,0.12)"
                      : "none",
                }}
              >
                <div className="flex-1">
                  <div className="text-[12px] font-bold tracking-[0.03em] mb-0.5">
                    {exp.role}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.06em] uppercase mb-2"
                    style={{ color: "#7A7065" }}
                  >
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {exp.stack.map((s) => (
                      <Tag key={s} label={s} />
                    ))}
                  </div>
                </div>
                <div
                  className="text-[9px] tracking-[0.08em] shrink-0 pt-0.5"
                  style={{ color: "#7A7065" }}
                >
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Projects ── col-span-12 */}
        <div
          className="md:col-span-12 border-2 border-[#1A1A18] p-6"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase">
              <Layers size={12} />
              Featured Projects
            </div>
            <a
              href="/projects"
              className="flex items-center gap-1 text-[9px] tracking-widest uppercase no-underline transition-colors duration-150"
              style={{ color: "#7A7065" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#7A7065")
              }
            >
              All projects <ArrowRight size={9} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                className="border-2 border-[#1A1A18] p-4 flex flex-col transition-all duration-150"
                style={{
                  background:
                    i === 0 ? "#1A1A18" : i === 1 ? "#F0C84A" : "#F5F2EB",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translate(-2px,-2px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "4px 4px 0 #1A1A18";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translate(0,0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="text-[16px] mb-1"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: i === 0 ? "#F5F2EB" : "#1A1A18",
                  }}
                >
                  {proj.title}
                </div>
                <div
                  className="text-[10px] tracking-[0.04em] leading-relaxed mb-3 flex-1"
                  style={{ color: i === 0 ? "#9A9590" : "#5A5048" }}
                >
                  {proj.tagline}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.stack.map((s) => (
                    <Tag key={s} label={s} dark={i === 0} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center gap-1 text-[10px]"
                    style={{ color: i === 0 ? "#9A9590" : "#7A7065" }}
                  >
                    <Star size={10} /> {proj.stars}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[9px] px-2.5 py-1.5 border-[1.5px] no-underline tracking-[0.08em] uppercase transition-colors duration-150"
                      style={{
                        borderColor: i === 0 ? "#444440" : "#1A1A18",
                        color: i === 0 ? "#F5F2EB" : "#1A1A18",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "#F0C84A";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#1A1A18";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = "#F0C84A";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          i === 0 ? "#F5F2EB" : "#1A1A18";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = i === 0 ? "#444440" : "#1A1A18";
                      }}
                    >
                      <FaGithub size={10} /> Code
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[9px] px-2.5 py-1.5 border-[1.5px] no-underline tracking-[0.08em] uppercase transition-colors duration-150"
                      style={{
                        borderColor: i === 0 ? "#F0C84A" : "#1A1A18",
                        background: i === 0 ? "#F0C84A" : "#1A1A18",
                        color: i === 0 ? "#1A1A18" : "#F0C84A",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          i === 0 ? "#F0C84A" : "#1A1A18";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = i === 0 ? "#F0C84A" : "#1A1A18";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          i === 0 ? "#1A1A18" : "#F0C84A";
                      }}
                    >
                      <ExternalLink size={10} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. CTA / Contact Teaser ── col-span-12 */}
        <div
          className="md:col-span-12 border-2 border-[#1A1A18] p-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "#F0C84A" }}
        >
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-2">
              <Mail size={12} />
              Let's Build Something
            </div>
            <div
              className="text-[26px] leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Got a project in mind? Let's talk.
            </div>
            <p
              className="text-[11px] mt-1 tracking-[0.04em]"
              style={{ color: "#5A4F3A" }}
            >
              Open to freelance, contracts &amp; full-time opportunities.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase border-2 border-[#1A1A18] no-underline transition-colors duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#F5F2EB";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#1A1A18";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F0C84A";
              }}
            >
              Get in Touch <ArrowRight size={12} />
            </a>
            <a
              href="mailto:tahsin.hassan007@gmail.com"
              className="flex items-center gap-2 px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase border-2 border-[#1A1A18] no-underline transition-colors duration-150"
              style={{
                background: "transparent",
                color: "#1A1A18",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#1A1A18";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F0C84A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18";
              }}
            >
              <Mail size={12} /> Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
