"use client";
import Link from "next/link";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Code2,
  ArrowRight,
  Terminal,
  Server,
  Database,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
];
const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Cyber World IT",
    period: "August2024 — August 2025",
    stack: [
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
    ],
  },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/tahsinTH007" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsin-hassan-44a7b5291/",
  },
];
const stats = [
  { value: "1+ yrs", label: "Full-Stack Dev" },
  { value: "8+ ", label: "Real Projects Built" },
  { value: "MERN + Next", label: "Primary Stack" },
  { value: "Realtime + APIs", label: "System Design" },
];

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className="text-[14px] px-2 py-1 border tracking-[0.04em] cursor-default transition-all duration-150 select-none"
      style={{
        borderColor: dark ? "#3A3A36" : "#C8C4BC",
        color: dark ? "#9A9590" : "#5A5048",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.background = "#F0C84A";
        el.style.color = "#1A1A18";
        el.style.borderColor = "#F0C84A";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.background = "transparent";
        el.style.color = dark ? "#9A9590" : "#5A5048";
        el.style.borderColor = dark ? "#3A3A36" : "#C8C4BC";
      }}
    >
      {label}
    </span>
  );
}

export default function HomePage() {
  return (
    <div
      className="min-h-screen px-6 py-8"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      {/* ── Header ── */}
      <div className="mb-6 pb-6 border-b border-[#1A1A18]/10">
        <p
          className="text-[14px] tracking-[0.2em] uppercase mb-2"
          style={{ color: "#A09890" }}
        >
          // portfolio · 2026
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h1
            className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
            style={{
              fontFamily: "'DM Serif Display', serif",
              letterSpacing: "-2px",
            }}
          >
            Tahsin Hassan.
          </h1>
          <div
            className="flex items-center gap-1.5 mb-1 text-[12px] tracking-widest px-3 py-1.5 border border-[#1A1A18]/15"
            style={{ color: "#5A5048" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#4ADE80",
                boxShadow: "0 0 0 3px rgba(74,222,128,0.2)",
              }}
            />
            Available for work
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div
          className="md:col-span-7 border border-[#1A1A18] p-6 flex flex-col justify-between"
          style={{ background: "#1A1A18", minHeight: "260px" }}
        >
          <div>
            <div
              className="flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase mb-4"
              style={{ color: "#F0C84A" }}
            >
              <User size={11} /> About Me
            </div>
            <p
              className="text-[12px] leading-[1.8] mb-3"
              style={{ color: "#9A9590" }}
            >
              Hey — I'm <span style={{ color: "#F0C84A" }}>Tahsin Hassan</span>,
              a full-stack developer passionate about building clean, scalable,
              and performance-focused web applications.
            </p>

            <p
              className="text-[12px] leading-[1.8] mb-3"
              style={{ color: "#9A9590" }}
            >
              I enjoy working with modern web technologies and building complete
              products from frontend to backend — including UI design, API
              development, and database architecture.
            </p>

            <p
              className="text-[12px] leading-[1.8] mb-3"
              style={{ color: "#9A9590" }}
            >
              I’ve worked on real-world full-stack projects where I built
              responsive interfaces, developed REST APIs, integrated
              authentication systems, and handled database design and
              optimization.
            </p>

            <p
              className="text-[12px] leading-[1.8]"
              style={{ color: "#6A6A62" }}
            >
              Outside of coding, I like exploring system design concepts,
              improving my problem-solving skills, and building side projects
              that push my limits.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] px-3 py-2 border no-underline transition-all duration-150 tracking-[0.05em]"
                style={{
                  borderColor: "#2A2A26",
                  color: "#9A9590",
                  background: "#1E1E1C",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#F0C84A";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "#F0C84A";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1E1E1C";
                  el.style.color = "#9A9590";
                  el.style.borderColor = "#2A2A26";
                }}
              >
                <Icon size={12} /> {label}
              </a>
            ))}
            <a
              href="mailto:tahsin.hassan007@gmail.com"
              className="flex items-center gap-1.5 text-[10px] px-3 py-2 border no-underline transition-all duration-150"
              style={{
                borderColor: "#F0C84A33",
                color: "#F0C84A",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#F0C84A";
                el.style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "#F0C84A";
              }}
            >
              <Mail size={12} /> tahsin.hassan007@gmail.com
            </a>
          </div>
        </div>

        <div
          className="md:col-span-5 border border-[#1A1A18] p-6 flex flex-col"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-3">
            <Terminal size={11} /> At a Glance
          </div>

          {/* small description */}
          <div
            className="text-[10px] tracking-widest uppercase mb-4"
            style={{ color: "#5A5048" }}
          >
            Full-stack developer • MERN • Next.js • Backend systems
          </div>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="border border-[#1A1A18] px-2 py-4 flex flex-col items-center justify-center text-center"
                style={{ background: "#FDFAF4" }}
              >
                <div
                  className="text-[20px] leading-none mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {value}
                </div>
                <div
                  className="text-[8px] tracking-widest uppercase"
                  style={{ color: "#7A7065" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
            ].map((t) => (
              <span
                key={t}
                className="text-[9px] px-2 py-1 border tracking-widest uppercase"
                style={{
                  borderColor: "#1A1A18",
                  color: "#1A1A18",
                  background: "#FDFAF4",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <div className="flex items-center gap-2 text-[11px]">
              <MapPin size={11} /> Based in Dhaka • Open to Remote Opportunities
            </div>
          </div>
        </div>

        <div
          className="md:col-span-5 border border-[#1A1A18] p-6"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase">
              <Code2 size={11} /> Core Skills
            </div>
            <Link
              href="/skills"
              className="flex items-center gap-1 text-[9px] tracking-widest uppercase no-underline"
              style={{ color: "#A09890" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#A09890")
              }
            >
              All <ArrowRight size={9} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s) => (
              <Tag key={s} label={s} />
            ))}
          </div>
          <div className="border-t border-[#1A1A18]/10 pt-4 grid grid-cols-3 gap-2">
            {[
              { icon: Code2, label: "Frontend" },
              { icon: Server, label: "Backend" },
              { icon: Database, label: "Data" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 py-3 border border-[#1A1A18]/15 transition-all duration-150 cursor-default"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "#1A1A18";
                  el.style.color = "#F0C84A";
                  el.style.borderColor = "#1A1A18";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "transparent";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "rgba(26,26,24,0.15)";
                }}
              >
                <Icon size={13} />
                <span className="text-[8px] tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="md:col-span-7 border border-[#1A1A18] p-6"
          style={{ background: "#F5F2EB" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase">
              <Briefcase size={11} /> Experience
            </div>
            <Link
              href="/experience"
              className="flex items-center gap-1 text-[9px] tracking-widest uppercase no-underline"
              style={{ color: "#A09890" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#A09890")
              }
            >
              History <ArrowRight size={9} />
            </Link>
          </div>
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-3.5"
                style={{
                  borderBottom:
                    i < experiences.length - 1
                      ? "1px solid rgba(26,26,24,0.08)"
                      : "none",
                }}
              >
                <div className="flex-1">
                  <div className="text-[12px] font-bold tracking-tight mb-0.5">
                    {exp.role}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.06em] uppercase mb-2"
                    style={{ color: "#A09890" }}
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
                  style={{ color: "#A09890" }}
                >
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="md:col-span-12 border border-[#1A1A18] p-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "#F0C84A" }}
        >
          <div>
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-2">
              <Mail size={11} /> Let's Build Something
            </div>
            <div
              className="text-[24px] leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Got a project in mind? Let's talk.
            </div>
            <p
              className="text-[11px] mt-1 tracking-[0.03em]"
              style={{ color: "#5A4F3A" }}
            >
              Open to freelance, contracts & full-time.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#1A1A18] no-underline transition-all duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#FDFAF4";
                el.style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#1A1A18";
                el.style.color = "#F0C84A";
              }}
            >
              Get in Touch <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
