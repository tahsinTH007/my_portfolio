import { Code2, Server, Database, Settings, BarChart2 } from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/page-shell";

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
  { label: "System Design", pct: 30 },
  { label: "Docker", pct: 10 },
];

function TagList({
  items,
  onLight = false,
}: {
  items: string[];
  onLight?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={`tag ${onLight ? "tag--on-light" : "tag--aqua"}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        index="03"
        kicker="// full-stack expertise & tooling"
        title="Skills."
        sys="SYS://SKILLS"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {/* Frontend */}
        <section className="panel panel--heat panel-hover p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2">
              <Code2 size={11} /> Frontend Core
            </div>
            <span className="datum text-[9px] opacity-60">
              {skills.frontend.length} UNITS
            </span>
          </div>
          <TagList items={skills.frontend} onLight />
        </section>

        {/* Backend */}
        <section className="panel panel--iron brackets panel-hover p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2 text-aqua">
              <Server size={11} /> Backend Engine
            </div>
            <span className="datum text-[9px] text-iron-400">
              {skills.backend.length} UNITS
            </span>
          </div>
          <TagList items={skills.backend} />
        </section>

        {/* Data */}
        <section className="panel panel--aqua panel-hover p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2">
              <Database size={11} /> Data Systems
            </div>
            <span className="datum text-[9px] opacity-60">
              {skills.database.length} UNITS
            </span>
          </div>
          <TagList items={skills.database} onLight />
        </section>

        {/* Tools */}
        <section className="panel panel--cream panel-hover p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2">
              <Settings size={11} /> Dev Tools
            </div>
            <span className="datum text-[9px] opacity-60">
              {skills.tools.length} UNITS
            </span>
          </div>
          <TagList items={skills.tools} onLight />
        </section>

        {/* Proficiency */}
        <section className="panel panel--iron md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2 text-heat">
              <BarChart2 size={11} /> Proficiency Index
            </div>
            <span className="datum text-[9px] text-iron-400">
              SELF-ASSESSED
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8">
            {proficiency.map(({ label, pct }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between datum text-[9px] mb-1.5">
                  <span className="text-cream-300">{label}</span>
                  <span className={pct >= 80 ? "text-heat" : "text-iron-400"}>
                    {pct}%
                  </span>
                </div>
                <div className="meter !bg-iron-700">
                  <div
                    className="meter__fill"
                    style={{
                      width: `${pct}%`,
                      background:
                        pct >= 80
                          ? "var(--heat-marker)"
                          : "var(--industrial-aqua)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
