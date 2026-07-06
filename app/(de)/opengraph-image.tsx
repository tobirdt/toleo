import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Toleo GmbH – Beratung und Beteiligungen mit Weitblick";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#3060a8" }} />
          <div
            style={{
              width: 64,
              height: 2,
              background: "linear-gradient(90deg, #3060a8, #e00810)"
            }}
          />
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e00810" }} />
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 92,
            fontWeight: 700,
            color: "#181716",
            letterSpacing: -2
          }}
        >
          Toleo GmbH
        </div>
        <div style={{ marginTop: 18, fontSize: 34, color: "#6b6966" }}>
          Beratung und Beteiligungen mit Weitblick.
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 24,
            fontWeight: 700,
            color: "#3060a8",
            letterSpacing: 6
          }}
        >
          TOLEO.BIZ
        </div>
      </div>
    ),
    { ...size }
  );
}
