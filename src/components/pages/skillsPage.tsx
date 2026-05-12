

"use client";

import { Code2, Server, Database, Settings, BarChart2 } from "lucide-react";

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "ShadCN",
  ],
  backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "JWT Authentication",
    "Socket.io",
    "Clerk Auth",
    "RBAC",
  ],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Redis", "Mongoose"],
  tools: ["Git", "GitHub", "Vercel", "Postman"],
};

const proficiency = [
  { label: "React / Next.js", pct: 95 },
  { label: "Node.js / Express", pct: 90 },
  { label: "TypeScript", pct: 88 },
  { label: "PostgreSQL / MongoDB", pct: 82 },
  { label: "Docker", pct: 10 },
  { label: "System Design", pct: 30 },
];

function TagList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="text-[10px] px-2.5 py-1.5 border tracking-[0.04em] cursor-default transition-all duration-150"
          style={{
            borderColor: dark ? "#3A3A36" : "#C8C4BC",
            color: dark ? "#7A7A72" : "#5A5048",
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
            el.style.color = dark ? "#7A7A72" : "#5A5048";
            el.style.borderColor = dark ? "#3A3A36" : "#C8C4BC";
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SkillsPage() {
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
          // full-stack expertise & tooling
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          Skills.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
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
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-4">
            <Code2 size={11} /> Frontend Core
          </div>

          {/* Frontend tags with black hover */}
          <div className="flex flex-wrap gap-1.5">
            {skills.frontend.map((item) => (
              <span
                key={item}
                className="text-[10px] px-2.5 py-1.5 border tracking-[0.04em] cursor-default transition-all duration-150"
                style={{
                  borderColor: "#1A1A18",
                  color: "#1A1A18",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "#1A1A18";
                  el.style.color = "#FFFFFF";
                  el.style.borderColor = "#1A1A18";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.background = "transparent";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "#1A1A18";
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
          style={{ background: "#1A1A18" }}
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
          <div
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#F0C84A" }}
          >
            <Server size={11} /> Backend Engine
          </div>
          <TagList items={skills.backend} dark />
        </div>

        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
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
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-4">
            <Database size={11} /> Data Systems
          </div>
          <TagList items={skills.database} />
        </div>

        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
          style={{ background: "#D6E8D0" }}
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
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-4">
            <Settings size={11} /> Dev Tools
          </div>
          <TagList items={skills.tools} />
        </div>

        {/* Proficiency */}
        <div
          className="border border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-5">
            <BarChart2 size={11} /> Proficiency Index
          </div>
          <div className="grid md:grid-cols-2 gap-x-10">
            {proficiency.map(({ label, pct }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-[9px] tracking-widest uppercase mb-1.5">
                  <span style={{ color: "#5A5048" }}>{label}</span>
                  <span style={{ color: "#A09890" }}>{pct}%</span>
                </div>
                <div
                  className="h-1 w-full"
                  style={{ background: "rgba(26,26,24,0.08)" }}
                >
                  <div
                    className="h-full transition-all duration-700"
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
