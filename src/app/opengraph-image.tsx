import { ImageResponse } from "next/og";

export const alt = "The Arete Connoisseurs — Africa's accreditation infrastructure partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#121619",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", color: "#dca03e", fontSize: 28, fontWeight: 700, letterSpacing: 3 }}>
          THE ARETE CONNOISSEURS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#ffffff", fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Africa&apos;s accreditation infrastructure partner
          </div>
          <div style={{ display: "flex", color: "#cbd5e1", fontSize: 30, marginTop: 28, maxWidth: 880 }}>
            Standards, systems, and surveyors for healthcare quality.
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", height: 12, width: 240, backgroundColor: "#64328c" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
