import { Briefcase, Clock, MapPin, Terminal, ExternalLink } from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/page-shell";

const experience = {
  role: "Full-Stack Developer",
  company: "Cyber World IT",
  location: "583 Shamim Sarani, Mirpur, Dhaka, Bangladesh",
  locationType: "On-site",
  period: "Aug 2024 — Aug 2025",
  type: "Full-time",
  project: "Medicare24bd — Healthcare Platform",
  projectUrl: "https://medicare24bd.com/",
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
  softSkills: [
    "Team Collaboration & Communication",
    "Working Under Deadlines & Time Pressure",
    "Problem Solving & Debugging Under Pressure",
    "Taking Ownership of Features End-to-End",
    "Adapting to New Tech & Requirements Quickly",
  ],
};

export default function ExperiencePage() {
  const exp = experience;

  return (
    <PageShell>
      <PageHeader
        index="02"
        kicker="// roles, impact & stack"
        title="Experience."
        sys="SYS://EXPERIENCE"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {/* ── Role card ── */}
        <section className="panel panel--iron brackets p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2 text-heat">
              <Briefcase size={11} /> {exp.type}
            </div>
            <span className="datum text-[9px] text-iron-400">EMP-01</span>
          </div>

          <h2 className="display text-[21px] leading-tight text-cream mb-1">
            {exp.role}
          </h2>

          <div className="display text-[13px] text-heat mb-4">
            {exp.company}
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-start gap-2 text-[10px] text-iron-300 leading-relaxed">
              <MapPin size={10} className="mt-0.5 shrink-0" />
              {exp.location}
            </div>
            <div className="flex items-center gap-2 text-[10px] text-iron-300">
              <Clock size={10} />
              {exp.period}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <div className="datum text-[9px] text-iron-400">
              {exp.locationType} • {exp.type}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="label inline-flex items-center gap-1.5 px-3 py-1.5 border border-aqua text-aqua rounded-sm bg-aqua/5">
                <Terminal size={9} />
                {exp.project}
              </div>

              <a
                href={exp.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary !py-1.5 !px-3 !text-[9px]"
              >
                <ExternalLink size={9} />
                Live Site
              </a>
            </div>
          </div>
        </section>

        {/* ── Stack + soft skills ── */}
        <section className="panel panel--heat panel-hover p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="label">Tech Stack</div>
            <span className="datum text-[9px] opacity-60">
              {exp.stack.length} MODULES
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {exp.stack.map((t) => (
              <span key={t} className="tag tag--on-light !bg-cream-100">
                {t}
              </span>
            ))}
          </div>

          <div className="h-0.5 bg-iron-950/20 mb-5" />

          <div className="label mb-3">Soft Skills</div>
          <div className="flex flex-col gap-2">
            {exp.softSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 text-[10px] px-3 py-2 border-2 border-iron-950 bg-cream-100 text-iron-800 rounded-sm transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <span className="text-rust text-[8px]">◆</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ── Responsibilities ── */}
        <section className="panel panel--cream md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2">
              <Briefcase size={11} /> Responsibilities
            </div>
            <span className="barcode w-24 h-4 text-iron-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-8">
            {exp.points.map((pt, j) => (
              <div
                key={j}
                className="flex gap-3 text-[11px] leading-[1.8] py-3 border-b border-iron-950/10"
              >
                <span className="datum text-[9px] text-rust shrink-0 mt-0.5">
                  {String(j + 1).padStart(2, "0")}
                </span>
                <span className="text-iron-800">{pt}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
