import Link from "next/link";
import { Layers, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PageShell, PageHeader } from "@/components/layout/page-shell";
import { projects, flatStack, isDarkVariant } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        index="01"
        kicker="// things i've built"
        title="Projects."
        sys="SYS://PROJECTS"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {projects.map((proj) => {
          const dark = isDarkVariant(proj.variant);
          const stack = flatStack(proj);

          return (
            <article
              key={proj.slug}
              className={`panel panel--${proj.variant} panel-hover p-6 flex flex-col`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="label flex items-center gap-2 opacity-70">
                  <Layers size={11} />
                  {proj.ref}
                </div>
                <span
                  className={`label px-2 py-1 border rounded-sm ${
                    dark ? "border-heat/50 text-heat" : "border-iron-950/40"
                  }`}
                >
                  {proj.status}
                </span>
              </div>

              <h2 className="display text-[19px] leading-tight mb-1">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="no-underline hover:opacity-70 transition-opacity"
                >
                  {proj.title}
                </Link>
              </h2>

              <p className="text-[11px] mb-3 opacity-70">{proj.tagline}</p>

              <p className="text-[11px] leading-[1.8] mb-4 flex-1 opacity-90">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {stack.slice(0, 7).map((t) => (
                  <span key={t} className={`tag ${dark ? "" : "tag--on-light"}`}>
                    {t}
                  </span>
                ))}
                {stack.length > 7 ? (
                  <span className={`tag ${dark ? "" : "tag--on-light"}`}>
                    +{stack.length - 7}
                  </span>
                ) : null}
              </div>

              <div
                className={`flex items-center justify-between flex-wrap gap-2 pt-3 border-t-2 ${
                  dark ? "border-iron-700" : "border-iron-950/15"
                }`}
              >
                <span className="barcode w-16 h-4 opacity-50" />

                <div className="flex items-center gap-1.5">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${proj.title} source code on GitHub`}
                    className={`btn !py-2 !px-3 ${
                      dark ? "btn--ghost" : "btn--dark"
                    }`}
                  >
                    <FaGithub size={11} /> Code
                  </a>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className={`btn !py-2 !px-3 ${
                      dark ? "btn--primary" : "btn--dark"
                    }`}
                  >
                    Details <ArrowUpRight size={11} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="panel panel--heat mt-3 p-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <div className="label flex items-center gap-2 mb-2">
            <FaGithub size={11} /> Repository Index
          </div>
          <div className="display text-[22px] leading-tight">
            Want to see more?
          </div>
        </div>
        <a
          href="https://github.com/tahsinTH007?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--dark shrink-0"
        >
          <FaGithub size={11} /> All Repos <ArrowRight size={11} />
        </a>
      </section>
    </PageShell>
  );
}
