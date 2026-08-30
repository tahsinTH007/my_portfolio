import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111616",
          color: "#f39120",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: -1,
          border: "5px solid #f39120",
          borderRadius: 10,
        }}
      >
        TH
      </div>
    ),
    size,
  );
}
