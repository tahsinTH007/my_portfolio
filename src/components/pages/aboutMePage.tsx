"use client";

import {
  User,
  Code,
  Globe,
  Server,
  Terminal,
  Sparkles,
  Download,
  Database,
  Shield,
  Zap,
  Eye,
} from "lucide-react";

const timeline = [
  {
    year: "2024-2025",
    title: "Full-Stack Developer (Project)",
    org: "Cyber World IT",
    note: "Worked on Medicare24bd healthcare platform using Next.js, Node.js, Express, SQL, and MongoDB. Built frontend UI, backend APIs, authentication system, and PDF generation features.",
  },
];

const facts = [
  { icon: Code, text: "Full-Stack Developer (MERN + Next.js)" },
  { icon: Globe, text: "Building Scalable Web Applications" },
  { icon: Server, text: "REST API Development (Node.js, Express)" },
  { icon: Database, text: "Database Design & Management (MongoDB, SQL)" },
  { icon: Shield, text: "Authentication Systems (JWT, Cookies, RBAC)" },
  { icon: Zap, text: "Performance Optimization (SSR, API tuning)" },
];

export default function AboutPage() {
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
          // the human behind the terminal
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          About.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {/* Bio */}
        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
          style={{ background: "#1A1A18" }}
        >
          <div
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#F0C84A" }}
          >
            <User size={11} /> Who I Am
          </div>

          <p
            className="text-[12px] leading-[1.8] mb-3"
            style={{ color: "#9A9590" }}
          >
            Hey — I'm <span style={{ color: "#F0C84A" }}>Tahsin Hassan</span>, a
            full-stack developer passionate about building clean, scalable, and
            performance-focused web applications.
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

          <p className="text-[12px] leading-[1.8]" style={{ color: "#6A6A62" }}>
            Outside of coding, I like exploring system design concepts,
            improving my problem-solving skills, and building side projects that
            push my limits.
          </p>
        </div>

        {/* Quick Facts */}
        <div
          className="border border-[#1A1A18] p-6"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-5">
            <Terminal size={11} /> Quick Facts
          </div>
          <div className="flex flex-col gap-2 mb-5">
            {facts.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-[11px] px-3 py-2.5 border border-[#1A1A18] tracking-[0.03em] transition-all duration-150"
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
                <Icon size={11} /> {text}
              </div>
            ))}
          </div>
          <a
            href="/Tahsin_Hassan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#1A1A18] transition-all duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#FDFAF4";
                el.style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#1A1A18";
                el.style.color = "#F0C84A";
              }}
            >
              <Eye size={11} /> View CV
            </button>
          </a>
        </div>

        {/* Timeline */}
        <div
          className="border border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-6">
            <Sparkles size={11} /> Journey
          </div>
          <div className="grid md:grid-cols-2 gap-x-10">
            {timeline.map(({ year, title, org, note }, i) => (
              <div
                key={i}
                className="flex gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(26,26,24,0.07)" }}
              >
                <div
                  className="text-[10px] font-bold tracking-widest pt-0.5 shrink-0 w-10"
                  style={{ color: "#C8C4BC" }}
                >
                  {year}
                </div>
                <div className="border-l-2 border-[#1A1A18] pl-4">
                  <div className="text-[12px] font-bold tracking-[0.03em] mb-0.5">
                    {title}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.08em] uppercase mb-1"
                    style={{ color: "#A09890" }}
                  >
                    {org}
                  </div>
                  <div className="text-[11px]" style={{ color: "#7A7065" }}>
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
