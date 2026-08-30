import { ImageResponse } from "next/og";
import { getProject, flatStack, projects } from "@/lib/projects";

export const alt = "Project — Tahsin Hassan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const IRON = "#111616";
const IRON_LINE = "#222a2a";
const HEAT = "#f39120";
const AQUA = "#4fbbbc";
const CREAM = "#e2dac2";
const MUTED = "#6b7878";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: IRON,
            color: CREAM,
            fontSize: 64,
          }}
        >
          Tahsin Hassan
        </div>
      ),
      size,
    );
  }

  const stack = flatStack(project).slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: IRON,
          backgroundImage: `linear-gradient(${IRON_LINE} 1px, transparent 1px), linear-gradient(90deg, ${IRON_LINE} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "flex",
              border: `3px solid ${HEAT}`,
              borderRadius: 6,
              color: HEAT,
              fontSize: 24,
              letterSpacing: 4,
              padding: "8px 16px",
            }}
          >
            {project.ref}
          </span>
          <span style={{ color: MUTED, fontSize: 20, letterSpacing: 5 }}>
            SYS://PROJECTS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: CREAM,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {project.title.toUpperCase()}
          </span>
          <span
            style={{
              color: AQUA,
              fontSize: 28,
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            {project.tagline}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: `3px solid ${IRON_LINE}`,
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {stack.map((t) => (
              <span
                key={t}
                style={{
                  display: "flex",
                  border: `2px solid ${IRON_LINE}`,
                  borderRadius: 4,
                  color: MUTED,
                  fontSize: 20,
                  padding: "8px 14px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span style={{ color: HEAT, fontSize: 22, letterSpacing: 3 }}>
            TAHSIN HASSAN
          </span>
        </div>
      </div>
    ),
    size,
  );
}
