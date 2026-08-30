import {
  User,
  Code,
  Globe,
  Server,
  Terminal,
  Sparkles,
  Database,
  Shield,
  Zap,
  Eye,
} from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/page-shell";

const timeline = [
  {
    year: "2024 — 2025",
    title: "Full-Stack Developer (Project)",
    org: "Cyber World IT",
    note: "Worked on the Medicare24bd healthcare platform using Next.js, Node.js, Express, SQL, and MongoDB. Built frontend UI, backend APIs, authentication system, and PDF generation features.",
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
    <PageShell>
      <PageHeader
        index="04"
        kicker="// the human behind the terminal"
        title="About."
        sys="SYS://ABOUT"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {/* Bio */}
        <section className="panel panel--iron brackets p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2 text-heat">
              <User size={11} /> Who I Am
            </div>
            <span className="datum text-[9px] text-iron-400">BIO-01</span>
          </div>

          <p className="text-[12px] leading-[1.85] mb-3 text-iron-300">
            Hey — I&apos;m <span className="text-heat">Tahsin Hassan</span>, a
            full-stack developer passionate about building clean, scalable, and
            performance-focused web applications.
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
            improving my problem-solving skills, and building side projects that
            push my limits.
          </p>
        </section>

        {/* Quick facts */}
        <section className="panel panel--aqua p-6 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2">
              <Terminal size={11} /> Quick Facts
            </div>
            <span className="datum text-[9px] opacity-60">
              {facts.length} ENTRIES
            </span>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            {facts.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-[11px] px-3 py-2.5 border-2 border-iron-950 bg-cream-100 text-iron-800 rounded-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--iron-950)]"
              >
                <Icon size={11} className="text-rust shrink-0" /> {text}
              </div>
            ))}
          </div>

          <a
            href="/Tahsin_Hassan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark mt-auto self-start"
          >
            <Eye size={11} /> View CV
          </a>
        </section>

        {/* Journey */}
        <section className="panel panel--cream md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2">
              <Sparkles size={11} /> Journey
            </div>
            <span className="barcode w-24 h-4 text-iron-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-8">
            {timeline.map(({ year, title, org, note }, i) => (
              <div key={i} className="flex gap-4 py-3">
                <div className="datum text-[9px] pt-1 shrink-0 w-16 text-cream-500">
                  {year}
                </div>
                <div className="border-l-2 border-rust pl-4">
                  <div className="display text-[14px] mb-0.5 text-iron-950">
                    {title}
                  </div>
                  <div className="datum text-[9px] mb-2 text-rust">{org}</div>
                  <div className="text-[11px] leading-[1.8] text-iron-800/80">
                    {note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
