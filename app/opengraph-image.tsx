import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// Generates a 1200×630 social-share image at build time (link previews on
// LinkedIn, X, Slack, iMessage, etc.). No image file to maintain by hand.
// Statically generated (no runtime export) so it's cached as a plain image.
export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#6366f1",
              color: "white",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            DP
          </div>
          <div style={{ display: "flex", color: "#a5b4fc", fontSize: "26px", fontWeight: 600 }}>
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "white", fontSize: "84px", fontWeight: 800 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: "16px", color: "#cbd5e1", fontSize: "36px" }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", color: "#818cf8", fontSize: "26px", fontWeight: 500 }}>
          Forecasting · Optimization · BI Dashboards · Machine Learning
        </div>
      </div>
    ),
    { ...size }
  );
}
