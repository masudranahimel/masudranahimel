import { ImageResponse } from "next/og";

export const alt = "Masud Rana Himel — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 20,
          letterSpacing: "8px",
          textTransform: "uppercase",
          color: "#86868b",
          marginBottom: "30px",
        }}
      >
        ASPIRING SOFTWARE ENGINEER
      </div>

      <div
        style={{
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: "-4px",
          lineHeight: 1,
        }}
      >
        Masud Rana Himel
      </div>

      <div
        style={{
          fontSize: 30,
          color: "#a1a1a6",
          marginTop: "32px",
          maxWidth: "900px",
          lineHeight: 1.4,
        }}
      >
        Modern web development. Clean engineering. High-performance digital
        experiences.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "70px",
          fontSize: 22,
          color: "#86868b",
        }}
      >
        masudranahimel.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
