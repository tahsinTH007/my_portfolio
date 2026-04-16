"use client";

import { Briefcase, Award, Clock, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Freelance / Remote",
    period: "2024 — Present",
    type: "Contract",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    points: [
      "Architected and shipped 3 SaaS products from 0 → 1, handling auth, billing, and multi-tenancy.",
      "Reduced client page load times by 60% via ISR and edge caching strategies.",
      "Implemented RBAC systems and JWT-based auth flows across REST APIs.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Startup, Dhaka",
    period: "2023 — 2024",
    type: "Full-time",
    stack: ["React", "Express", "MongoDB", "Redis"],
    points: [
      "Led migration of a legacy PHP codebase to a modern React + Node.js stack.",
      "Built real-time notification system using WebSockets, serving 10k+ daily users.",
      "Mentored 2 junior developers and established code review culture.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency, Dhaka",
    period: "2022 — 2023",
    type: "Full-time",
    stack: ["React", "REST APIs", "MySQL", "Tailwind"],
    points: [
      "Delivered 8+ client projects on time with pixel-accurate UI implementations.",
      "Integrated third-party APIs (payment gateways, maps, CMS) across projects.",
      "Maintained and improved CI/CD pipelines via GitHub Actions.",
    ],
  },
];

const awards = [
  { label: "Hackathon Winner", desc: "DU CS Fest 2022" },
  { label: "Open Source", desc: "2k+ GitHub stars" },
  { label: "Certifications", desc: "AWS Cloud Practitioner" },
];

function StackTag({ label }: { label: string }) {
  return (
    <span
      className="text-[10px] px-2 py-1 border-[1.5px] border-[#F5F2EB] tracking-[0.04em] cursor-default transition-colors duration-150"
      style={{ color: "#F5F2EB" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "#F0C84A";
        (e.currentTarget as HTMLSpanElement).style.color = "#1A1A18";
        (e.currentTarget as HTMLSpanElement).style.borderColor = "#F0C84A";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "transparent";
        (e.currentTarget as HTMLSpanElement).style.color = "#F5F2EB";
        (e.currentTarget as HTMLSpanElement).style.borderColor = "#F5F2EB";
      }}
    >
      {label}
    </span>
  );
}

export default function ExperiencePage() {
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
        Experience.
      </h1>
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-8"
        style={{ color: "#7A7065" }}
      >
        // roles, impact &amp; stack
      </p>

      <div className="flex flex-col gap-5">
        {/* Experience Cards */}
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="border-2 border-[#1A1A18] p-6"
            style={{
              background: i === 0 ? "#1A1A18" : i === 1 ? "#FDFAF4" : "#F5F2EB",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div
                  className="text-[10px] font-bold tracking-[0.14em] uppercase mb-1"
                  style={{ color: i === 0 ? "#F0C84A" : "#7A7065" }}
                >
                  <Briefcase size={11} className="inline mr-1.5" />
                  {exp.type}
                </div>
                <div
                  className="text-[18px] leading-tight mb-0.5"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: i === 0 ? "#F5F2EB" : "#1A1A18",
                  }}
                >
                  {exp.role}
                </div>
                <div
                  className="text-[11px] tracking-[0.06em]"
                  style={{ color: i === 0 ? "#9A9590" : "#7A7065" }}
                >
                  {exp.company}
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 text-[10px] tracking-[0.08em] px-3 py-1.5 border-[1.5px]"
                style={{
                  borderColor: i === 0 ? "#444440" : "#1A1A18",
                  color: i === 0 ? "#9A9590" : "#7A7065",
                }}
              >
                <Clock size={10} />
                {exp.period}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {exp.stack.map((tag) =>
                i === 0 ? (
                  <StackTag key={tag} label={tag} />
                ) : (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 border-[1.5px] border-[#1A1A18] tracking-[0.04em] cursor-default transition-colors duration-150 hover:bg-[#1A1A18] hover:text-[#F0C84A]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* Points */}
            <div className="flex flex-col gap-2">
              {exp.points.map((pt, j) => (
                <div key={j} className="flex gap-3 text-[11px] leading-relaxed">
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: i === 0 ? "#F0C84A" : "#7A7065" }}
                  >
                    →
                  </span>
                  <span style={{ color: i === 0 ? "#C8C3BA" : "#3A3530" }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Awards / Extras */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <Award size={13} />
            Highlights &amp; Extras
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {awards.map(({ label, desc }) => (
              <div
                key={label}
                className="border-2 border-[#1A1A18] px-4 py-3"
                style={{ background: "#F5F2EB" }}
              >
                <div className="text-[12px] font-bold tracking-[0.04em] mb-0.5">
                  {label}
                </div>
                <div
                  className="text-[10px] tracking-[0.08em]"
                  style={{ color: "#7A7065" }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            <a
              href="#"
              className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-bold no-underline"
              style={{ color: "#1A1A18" }}
            >
              <ExternalLink size={11} />
              View full résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
