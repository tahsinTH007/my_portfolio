"use client";

import { Code2, Server, Database, Settings, BarChart2 } from "lucide-react";

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Framer Motion",
    "Redux",
    "ShadCN",
  ],
  backend: ["Node.js", "Express", "REST APIs", "JWT", "WebSockets", "RBAC"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Redis", "Mongoose"],
  tools: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
};

const proficiency = [
  { label: "React / Next.js", pct: 95 },
  { label: "Node.js / Express", pct: 90 },
  { label: "TypeScript", pct: 88 },
  { label: "PostgreSQL / MongoDB", pct: 82 },
  { label: "Docker", pct: 75 },
  { label: "System Design", pct: 78 },
];

function TagList({
  items,
  variant = "default",
}: {
  items: string[];
  variant?: "default" | "inv" | "amber" | "sage";
}) {
  const base =
    "text-[11px] px-[10px] py-[5px] border-[1.5px] tracking-[0.04em] cursor-default transition-colors duration-150";
  const variants = {
    default:
      "border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-[#F0C84A]",
    inv: "border-[#F5F2EB] text-[#F5F2EB] hover:bg-[#F0C84A] hover:text-[#1A1A18] hover:border-[#F0C84A]",
    amber:
      "border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-[#F0C84A]",
    sage: "border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-[#D6E8D0]",
  };
  return (
    <div className="flex flex-wrap gap-1.75">
      {items.map((item) => (
        <span key={item} className={`${base} ${variants[variant]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SkillsPage() {
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
        Skills.
      </h1>
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-8"
        style={{ color: "#7A7065" }}
      >
        // full-stack expertise &amp; tooling
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Frontend */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4">
            <Code2 size={13} />
            Frontend Core
          </div>
          <TagList items={skills.frontend} variant="amber" />
        </div>

        {/* Backend */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#1A1A18", color: "#F5F2EB" }}
        >
          <div
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4"
            style={{ color: "#F0C84A" }}
          >
            <Server size={13} />
            Backend Engine
          </div>
          <TagList items={skills.backend} variant="inv" />
        </div>

        {/* Database */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4">
            <Database size={13} />
            Data Systems
          </div>
          <TagList items={skills.database} variant="default" />
        </div>

        {/* Tools */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#D6E8D0" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4">
            <Settings size={13} />
            Dev Tools
          </div>
          <TagList items={skills.tools} variant="sage" />
        </div>

        {/* Proficiency bars */}
        <div
          className="border-2 border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <BarChart2 size={13} />
            Proficiency Index
          </div>
          <div className="grid md:grid-cols-2 gap-x-8">
            {proficiency.map(({ label, pct }) => (
              <div key={label} className="mb-2.5">
                <div className="flex justify-between text-[10px] tracking-[0.08em] uppercase mb-1">
                  <span>{label}</span>
                  <span>{pct}%</span>
                </div>
                <div
                  className="h-1.5 border border-[#1A1A18]"
                  style={{ background: "rgba(26,26,24,0.12)" }}
                >
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${pct}%`, background: "#1A1A18" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
