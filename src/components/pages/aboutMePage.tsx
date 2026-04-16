"use client";

import {
  User,
  MapPin,
  Coffee,
  Terminal,
  Sparkles,
  Download,
} from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Engineer",
    org: "Freelance / Remote",
    note: "Building SaaS products end-to-end",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    org: "Tech Startup, Dhaka",
    note: "Led frontend architecture with Next.js",
  },
  {
    year: "2022",
    title: "Junior Developer",
    org: "Agency, Dhaka",
    note: "React, REST APIs, client delivery",
  },
  {
    year: "2020",
    title: "CS Graduate",
    org: "University of Dhaka",
    note: "B.Sc. in Computer Science",
  },
];

const facts = [
  { icon: MapPin, text: "Based in Dhaka, Bangladesh" },
  { icon: Coffee, text: "Fuelled by coffee & curiosity" },
  { icon: Terminal, text: "CLI enthusiast & open-source fan" },
  { icon: Sparkles, text: "UI details are never too small" },
];

export default function AboutPage() {
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
        About.
      </h1>
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-8"
        style={{ color: "#7A7065" }}
      >
        // the human behind the terminal
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Bio Block */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#1A1A18", color: "#F5F2EB" }}
        >
          <div
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-4"
            style={{ color: "#F0C84A" }}
          >
            <User size={13} />
            Who I Am
          </div>
          <p
            className="text-[12px] leading-relaxed mb-4"
            style={{ color: "#C8C3BA" }}
          >
            Hey — I'm <span style={{ color: "#F0C84A" }}>Tahsin Hassan</span>, a
            full-stack developer who obsesses over clean architecture, fast UIs,
            and products that actually feel good to use.
          </p>
          <p
            className="text-[12px] leading-relaxed mb-4"
            style={{ color: "#C8C3BA" }}
          >
            I build from scratch — from database schema to pixel-perfect
            interfaces — and I care deeply about both the engineering and the
            experience layer.
          </p>
          <p
            className="text-[12px] leading-relaxed"
            style={{ color: "#C8C3BA" }}
          >
            When I'm not shipping code, I'm reading about systems design,
            tinkering with side projects, or nerding out over typography.
          </p>
        </div>

        {/* Quick Facts */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <Terminal size={13} />
            Quick Facts
          </div>
          <div className="flex flex-col gap-3">
            {facts.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-[11px] px-3 py-2.5 border-2 border-[#1A1A18] tracking-[0.04em]"
                style={{ background: "#F5F2EB" }}
              >
                <Icon size={12} />
                {text}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <button
              className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border-2 border-[#1A1A18] transition-colors duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#F5F2EB";
                (e.currentTarget as HTMLButtonElement).style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#1A1A18";
                (e.currentTarget as HTMLButtonElement).style.color = "#F0C84A";
              }}
            >
              <Download size={11} />
              Download CV
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="border-2 border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-6">
            <Sparkles size={13} />
            Journey
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {timeline.map(({ year, title, org, note }, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="text-[10px] font-bold tracking-widest pt-0.5 shrink-0 w-10"
                  style={{ color: "#7A7065" }}
                >
                  {year}
                </div>
                <div className="border-l-2 border-[#1A1A18] pl-4 pb-4">
                  <div className="text-[12px] font-bold tracking-[0.05em] mb-0.5">
                    {title}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.08em] uppercase mb-1"
                    style={{ color: "#7A7065" }}
                  >
                    {org}
                  </div>
                  <div className="text-[11px]" style={{ color: "#5A5048" }}>
                    {note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
