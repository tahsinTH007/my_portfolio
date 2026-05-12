"use client";

import { Briefcase, Clock, MapPin, Terminal, Link } from "lucide-react";
import NextLink from "next/link";

const experience = {
  role: "Full-Stack Developer",
  company: "Cyber World IT",
  location: "583 Shamim Sarani, Mirpur, Dhaka, Bangladesh",
  locationType: "On-site",
  period: "Aug 2024 — Aug 2025",
  type: "Full-time",
  project: "Medicare24bd — Healthcare Platform",
  stack: [
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "SQL",
    "Sequelize",
  ],
  points: [
    "Developed responsive and scalable user interfaces for the Medicare24bd healthcare platform using Next.js and Tailwind CSS.",
    "Built dynamic patient management systems and workflow-based forms for clinical data entry.",
    "Integrated REST APIs for secure data handling between frontend and backend services.",
    "Developed backend services using Node.js, Express.js, SQL, and Sequelize ORM.",
    "Designed and managed relational database structures and optimized SQL queries.",
    "Implemented PDF generation and export functionality for medical reports and prescriptions.",
    "Improved application performance through Server-Side Rendering (SSR) and optimized data handling.",
    "Identified and resolved bugs across the stack to enhance system stability and user experience.",
  ],
};

export default function ExperiencePage() {
  const exp = experience;

  return (
    <div
      className="min-h-screen px-6 py-8"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      <div className="mb-6 pb-6 border-b border-[#1A1A18]/10">
        <p
          className="text-[10px] tracking-[0.2em] uppercase mb-2"
          style={{ color: "#A09890" }}
        >
          // roles, impact & stack
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          Experience.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div
          className="border border-[#1A1A18] p-6 flex flex-col"
          style={{ background: "#1A1A18" }}
        >
          <div
            className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#F0C84A" }}
          >
            <Briefcase size={10} /> {exp.type}
          </div>

          <div
            className="text-[20px] leading-tight mb-1"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#F5F2EB",
            }}
          >
            {exp.role}
          </div>

          <div
            className="text-[13px] font-bold tracking-[0.04em] mb-3"
            style={{ color: "#F0C84A" }}
          >
            {exp.company}
          </div>

          <div className="flex flex-col gap-1.5 mb-5">
            <div className="flex items-center gap-1.5 text-[10px] tracking-[0.05em] text-white">
              <MapPin size={9} />
              {exp.location}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] tracking-[0.05em] text-white">
              <Clock size={9} />
              {exp.period}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <div
              className="text-[9px] tracking-[0.18em] uppercase"
              style={{ color: "#7A7065" }}
            >
              On-site • Full-time
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* project tag */}
              <div
                className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 border transition-all duration-150"
                style={{
                  borderColor: "#F0C84A",
                  color: "#F0C84A",
                  background: "rgba(240,200,74,0.06)",
                }}
              >
                <Terminal size={9} />
                {exp.project}
              </div>

              <NextLink
                href="https://medicare24bd.com/"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 border no-underline transition-all duration-150"
                style={{
                  borderColor: "#1A1A18",
                  color: "#1A1A18",
                  background: "#FDFAF4",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#F0C84A";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "#1A1A18";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#FDFAF4";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "#F0C84A";
                }}
              >
                <Link size={9} />
                Live Website
              </NextLink>
            </div>
          </div>
        </div>

        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
          style={{ background: "#F0C84A" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "translate(-2px,-2px)";
            el.style.boxShadow = "3px 3px 0 #1A1A18";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "translate(0,0)";
            el.style.boxShadow = "none";
          }}
        >
          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-3">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2.5 py-1.5 border tracking-[0.04em] cursor-default transition-all duration-150"
                style={{ borderColor: "#1A1A18", color: "#1A1A18" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "#1A1A18";
                  el.style.color = "#F0C84A";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "transparent";
                  el.style.color = "#1A1A18";
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#1A1A18]/20 mb-5" />

          {/* Soft Skills */}
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-3">
            Soft Skills
          </div>
          <div className="flex flex-col gap-2">
            {[
              "Team Collaboration & Communication",
              "Working Under Deadlines & Time Pressure",
              "Problem Solving & Debugging Under Pressure",
              "Taking Ownership of Features End-to-End",
              "Adapting to New Tech & Requirements Quickly",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 text-[10px] tracking-[0.03em] px-3 py-2 border border-[#1A1A18] transition-all duration-150"
                style={{ background: "#FDFAF4" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translate(-2px,-2px)";
                  el.style.boxShadow = "3px 3px 0 #1A1A18";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translate(0,0)";
                  el.style.boxShadow = "none";
                }}
              >
                <span style={{ color: "#1A1A18", fontSize: "8px" }}>◆</span>
                <span style={{ color: "#3A3530" }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="border border-[#1A1A18] p-6 md:col-span-2 transition-all duration-200"
          style={{ background: "#FDFAF4" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "translate(-2px,-2px)";
            el.style.boxShadow = "3px 3px 0 #F0C84A";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "translate(0,0)";
            el.style.boxShadow = "none";
          }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-6">
            <Briefcase size={11} /> Responsibilities
          </div>
          <div className="grid md:grid-cols-2 gap-x-10">
            {exp.points.map((pt, j) => (
              <div
                key={j}
                className="flex gap-3 text-[11px] leading-[1.8] py-3"
                style={{ borderBottom: "1px solid rgba(26,26,24,0.07)" }}
              >
                <span className="shrink-0 mt-0.5" style={{ color: "#C8C4BC" }}>
                  →
                </span>
                <span style={{ color: "#3A3530" }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
