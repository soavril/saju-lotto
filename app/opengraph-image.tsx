import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "사주 로또 번호 생성기";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            marginBottom: 20,
          }}
        >
          🍀
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          사주 행운 번호 생성기
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: "center",
          }}
        >
          생년월일 기반 행운 번호 5세트
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            padding: "12px 24px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: 12,
          }}
        >
          재미로 즐기는 행운 번호
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
