import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const IRON = "#111616";
const IRON_LINE = "#222a2a";
const HEAT = "#f39120";
const AQUA = "#4fbbbc";
const CREAM = "#e2dac2";
const MUTED = "#6b7878";

export default function Image() {
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
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 68,
                height: 68,
                border: `4px solid ${HEAT}`,
                borderRadius: 8,
                color: HEAT,
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              TH
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: MUTED, fontSize: 18, letterSpacing: 4 }}>
                UNIT
              </span>
              <span style={{ color: AQUA, fontSize: 20, letterSpacing: 3 }}>
                TH-2026
              </span>
            </div>
          </div>

          <span style={{ color: MUTED, fontSize: 20, letterSpacing: 5 }}>
            SYS://PORTFOLIO
          </span>
        </div>

        {/* name block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: MUTED,
              fontSize: 24,
              letterSpacing: 8,
              marginBottom: 14,
            }}
          >
            // PORTFOLIO · 2026
          </span>
          <span
            style={{
              color: CREAM,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {site.name.toUpperCase()}.
          </span>
          <span
            style={{
              color: HEAT,
              fontSize: 34,
              letterSpacing: 6,
              marginTop: 18,
            }}
          >
            {site.role.toUpperCase()}
          </span>
        </div>

        {/* bottom bar */}
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
            {["MERN", "NEXT.JS", "NODE.JS", "TYPESCRIPT"].map((t) => (
              <span
                key={t}
                style={{
                  display: "flex",
                  border: `2px solid ${IRON_LINE}`,
                  borderRadius: 4,
                  color: MUTED,
                  fontSize: 20,
                  letterSpacing: 2,
                  padding: "8px 14px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span style={{ color: MUTED, fontSize: 20, letterSpacing: 2 }}>
            {site.location.toUpperCase()}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
