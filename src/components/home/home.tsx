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
import { PageShell, PageHeader } from "@/components/layout/page-shell";

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
    period: "Aug 2024 — Aug 2025",
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
  { value: "1+", unit: "YRS", label: "Full-Stack Dev" },
  { value: "8+", unit: "REPO", label: "Projects Built" },
  { value: "MERN", unit: "STACK", label: "Primary Stack" },
  { value: "RT+API", unit: "SYS", label: "System Design" },
];

export default function HomePage() {
  return (
    <PageShell>
      <PageHeader
        index="00"
        kicker="// portfolio · 2026"
        title="Tahsin Hassan."
        sys="SYS://HOME"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* ── Bio ── */}
        <section className="panel panel--iron brackets md:col-span-7 p-6 flex flex-col justify-between">
          <div>
            <div className="label flex items-center gap-2 text-heat mb-4">
              <User size={11} /> About Me
            </div>

            <p className="text-[12px] leading-[1.85] mb-3 text-iron-300">
              Hey — I&apos;m <span className="text-heat">Tahsin Hassan</span>, a
              full-stack developer passionate about building clean, scalable,
              and performance-focused web applications.
            </p>

            <p className="text-[12px] leading-[1.85] mb-3 text-iron-300">
              I enjoy working with modern web technologies and building complete
              products from frontend to backend — including UI design, API
              development, and database architecture.
            </p>

            <p className="text-[12px] leading-[1.85] mb-3 text-iron-300">
              I&apos;ve worked on real-world full-stack projects where I built
              responsive interfaces, developed REST APIs, integrated
              authentication systems, and handled database design and
              optimization.
            </p>

            <p className="text-[12px] leading-[1.85] text-iron-400">
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
                className="btn btn--ghost py-2! px-3! text-[10px]!"
              >
                <Icon size={12} /> {label}
              </a>
            ))}
            <a
              href="mailto:tahsin.hassan007@gmail.com"
              className="btn py-2! px-3! text-[10px]! normal-case! tracking-[0.04em]! border-heat/40 text-heat hover:bg-heat hover:text-iron-950"
            >
              <Mail size={12} /> tahsin.hassan007@gmail.com
            </a>
          </div>
        </section>

        {/* ── At a glance ── */}
        <section className="panel panel--heat md:col-span-5 p-6 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <div className="label flex items-center gap-2">
              <Terminal size={11} /> At a Glance
            </div>
            <span className="datum text-[9px] opacity-60">UA 570-B</span>
          </div>

          <div className="datum text-[9px] mb-4 opacity-70">
            MERN • Next.js • Backend systems
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {stats.map(({ value, unit, label }) => (
              <div
                key={label}
                className="border-2 border-iron-950 bg-cream-100 px-2 py-3 flex flex-col items-center justify-center text-center rounded-md"
              >
                <div className="flex items-baseline gap-1">
                  <span className="display text-[19px] leading-none text-iron-950">
                    {value}
                  </span>
                  <span className="datum text-[8px] text-rust">{unit}</span>
                </div>
                <div className="datum text-[8px] mt-1 text-cream-500">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {["React", "Next.js", "Node.js", "Express", "PostgreSQL"].map(
              (t) => (
                <span key={t} className="tag tag--on-light bg-cream-100!">
                  {t}
                </span>
              ),
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] mt-auto pt-3 border-t-2 border-iron-950/20">
            <MapPin size={11} /> Dhaka, BD • Open to Remote
          </div>
        </section>

        {/* ── Core skills ── */}
        <section className="panel panel--iron md:col-span-5 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2 text-aqua">
              <Code2 size={11} /> Core Skills
            </div>
            <Link
              href="/skills"
              className="datum text-[9px] text-iron-400 hover:text-heat transition-colors flex items-center gap-1"
            >
              All <ArrowRight size={9} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s) => (
              <span key={s} className="tag tag--aqua">
                {s}
              </span>
            ))}
          </div>

          <div className="border-t-2 border-iron-700 pt-4 grid grid-cols-3 gap-2">
            {[
              { icon: Code2, label: "Frontend" },
              { icon: Server, label: "Backend" },
              { icon: Database, label: "Data" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 py-3 border border-iron-600 rounded-md text-iron-300 transition-colors duration-150 hover:bg-aqua hover:border-aqua hover:text-iron-950"
              >
                <Icon size={13} />
                <span className="datum text-[8px]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="panel panel--cream md:col-span-7 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2">
              <Briefcase size={11} /> Experience
            </div>
            <Link
              href="/experience"
              className="datum text-[9px] text-cream-500 hover:text-rust transition-colors flex items-center gap-1"
            >
              History <ArrowRight size={9} />
            </Link>
          </div>

          {experiences.map((exp, i) => (
            <div key={i} className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="display text-[15px] mb-0.5 text-iron-950">
                  {exp.role}
                </div>
                <div className="datum text-[9px] mb-3 text-rust">
                  {exp.company}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="tag tag--on-light">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="datum text-[9px] shrink-0 text-cream-500">
                {exp.period}
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="panel panel--rust md:col-span-12 p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <div className="label flex items-center gap-2 mb-2 text-cream-100/80">
              <Mail size={11} /> Let&apos;s Build Something
            </div>
            <div className="display text-[22px] leading-tight text-cream-100">
              Got a project in mind?
            </div>
            <p className="text-[11px] mt-1 text-cream-100/70">
              Open to freelance, contracts &amp; full-time.
            </p>
          </div>
          <Link href="/contact" className="btn btn--dark shrink-0">
            Get in Touch <ArrowRight size={11} />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
