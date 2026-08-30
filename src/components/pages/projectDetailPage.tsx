import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  ImageIcon,
  CheckSquare,
  Cpu,
  FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PageShell } from "@/components/layout/page-shell";
import {
  getAdjacent,
  isDarkVariant,
  type Project,
} from "@/lib/projects";

export default function ProjectDetailPage({ project }: { project: Project }) {
  const { prev, next } = getAdjacent(project.slug);
  const dark = isDarkVariant(project.variant);

  return (
    <PageShell>
      {/* ── Breadcrumb / system bar ── */}
      <div className="flex items-center gap-3 mb-4">
        <Link
          href="/projects"
          className="datum text-[9px] text-iron-400 hover:text-heat transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft size={10} /> All Projects
        </Link>
        <div className="h-px flex-1 bg-iron-700" />
        <span className="datum text-[9px] text-iron-400">
          SYS://PROJECTS/{project.ref}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
      </div>

      {/* ── Hero ── */}
      <header className={`panel panel--${project.variant} p-6 md:p-8 mb-3`}>
        <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
          <div className="label flex items-center gap-2 opacity-70">
            <Layers size={11} /> {project.ref}
          </div>
          <span
            className={`label px-2 py-1 border rounded-sm ${
              dark ? "border-heat/50 text-heat" : "border-iron-950/40"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h1 className="display text-[clamp(1.8rem,4.5vw,3rem)] leading-[0.98] mb-2">
          {project.title}
        </h1>

        <p className="text-[12px] leading-relaxed opacity-75 max-w-2xl mb-6">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${dark ? "btn--primary" : "btn--dark"}`}
          >
            <FaGithub size={12} /> View Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${dark ? "btn--ghost" : "btn--dark"}`}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          ) : null}
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-3">
        {/* ── Overview ── */}
        <section className="panel panel--iron brackets md:col-span-7 p-6">
          <div className="label flex items-center gap-2 text-heat mb-4">
            <FileText size={11} /> Overview
          </div>
          <p className="text-[12px] leading-[1.9] text-iron-300">
            {project.description}
          </p>

          {project.notes?.length ? (
            <div className="mt-6 flex flex-col gap-5">
              {project.notes.map(({ heading, body }) => (
                <div key={heading}>
                  <h2 className="display text-[13px] text-cream mb-1.5">
                    {heading}
                  </h2>
                  <p className="text-[12px] leading-[1.9] text-iron-300">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {/* ── Key features ── */}
        <section className="panel panel--heat md:col-span-5 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label flex items-center gap-2">
              <CheckSquare size={11} /> Key Features
            </div>
            <span className="datum text-[9px] opacity-60">
              {project.highlights.length}
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {project.highlights.map((h, i) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-[11px] leading-relaxed px-3 py-2 border-2 border-iron-950 bg-cream-100 text-iron-800 rounded-sm"
              >
                <span className="datum text-[9px] text-rust shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Stack, grouped by layer ── */}
        <section className="panel panel--iron md:col-span-12 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2 text-aqua">
              <Cpu size={11} /> Tech Stack
            </div>
            <span className="barcode w-24 h-4 text-iron-600" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {project.stack.map(({ label, items }) => (
              <div key={label}>
                <div className="datum text-[9px] text-iron-400 mb-2 pb-1.5 border-b border-iron-700">
                  {label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((t) => (
                    <span key={t} className="tag tag--aqua">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="panel panel--iron md:col-span-12 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2 text-heat">
              <ImageIcon size={11} /> Screens
            </div>
            <span className="datum text-[9px] text-iron-400">
              {project.screenshots.length || "—"}
            </span>
          </div>

          {project.screenshots.length ? (
            <div className="grid sm:grid-cols-2 gap-3">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="flex flex-col gap-2">
                  <div className="relative w-full aspect-video border-2 border-iron-600 rounded-md overflow-hidden bg-iron-950">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {shot.caption ? (
                    <figcaption className="datum text-[9px] text-iron-400">
                      {shot.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : (
            <div className="border-2 border-dashed border-iron-600 rounded-md py-10 flex flex-col items-center justify-center gap-2 text-center">
              <ImageIcon size={20} className="text-iron-500" />
              <p className="datum text-[9px] text-iron-400">
                No screens attached
              </p>
              <p className="text-[10px] text-iron-500 max-w-xs leading-relaxed">
                Add images to{" "}
                <code className="text-aqua">
                  /public/projects/{project.slug}/
                </code>{" "}
                and list them in{" "}
                <code className="text-aqua">src/lib/projects.ts</code>.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ── Pager ── */}
      <nav className="grid sm:grid-cols-2 gap-3 mt-3">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="panel panel--iron panel-hover p-4 flex items-center gap-3 no-underline"
          >
            <ArrowLeft size={14} className="text-heat shrink-0" />
            <span className="min-w-0">
              <span className="datum text-[9px] text-iron-400 block">
                Previous
              </span>
              <span className="display text-[12px] text-cream block truncate">
                {prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="panel panel--iron panel-hover p-4 flex items-center justify-end gap-3 text-right no-underline"
          >
            <span className="min-w-0">
              <span className="datum text-[9px] text-iron-400 block">Next</span>
              <span className="display text-[12px] text-cream block truncate">
                {next.title}
              </span>
            </span>
            <ArrowRight size={14} className="text-heat shrink-0" />
          </Link>
        ) : null}
      </nav>
    </PageShell>
  );
}
