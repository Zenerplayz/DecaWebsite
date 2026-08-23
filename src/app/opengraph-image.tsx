import { ImageResponse } from "next/og";

export const alt = "Great Sycamore DECA — Sycamore High School DECA chapter, Cincinnati, Ohio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
          backgroundColor: "#0b241a",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#fef3d4",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              backgroundColor: "#f0a800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b241a",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            D
          </div>
          Sycamore High School · Cincinnati, Ohio
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              color: "#f1f8f3",
              lineHeight: 1.05,
            }}
          >
            Great Sycamore DECA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontStyle: "italic",
              color: "#399463",
            }}
          >
            Lead. Compete. Serve.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 240,
            height: 10,
            backgroundColor: "#f0a800",
            borderRadius: 9999,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
