import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기",
  description: "사주 로또 번호 생성기에 대한 문의사항이 있으시면 연락해 주세요.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
      <article>
        <h1 style={{ fontSize: "var(--font-3xl)", marginBottom: "var(--space-lg)" }}>
          문의하기
        </h1>

        <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, marginBottom: "var(--space-xl)" }}>
          사주 로또 번호 생성기에 대한 문의사항, 제안, 또는 피드백이 있으시면
          아래 방법으로 연락해 주세요.
        </p>

        <section
          className="card"
          style={{
            marginBottom: "var(--space-xl)",
            padding: "var(--space-xl)",
          }}
        >
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            이메일 문의
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            가장 빠른 답변을 원하시면 이메일로 문의해 주세요.
          </p>
          <a
            href="mailto:soavril@naver.com"
            style={{
              display: "inline-block",
              marginTop: "var(--space-md)",
              padding: "var(--space-md) var(--space-xl)",
              background: "var(--color-primary)",
              color: "white",
              fontSize: "var(--font-lg)",
              fontWeight: 600,
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}
          >
            📧 soavril@naver.com
          </a>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            문의 시 참고사항
          </h2>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              문의 내용은 가능한 <strong>구체적으로</strong> 작성해 주세요.
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              오류 신고 시 사용하신 <strong>기기와 브라우저</strong> 정보를 함께 알려주시면 도움이 됩니다.
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              답변은 영업일 기준 <strong>2-3일 이내</strong>에 드리도록 노력하겠습니다.
            </li>
            <li>
              <strong>당첨 번호 요청</strong>에는 답변드리지 않습니다. (불가능합니다!)
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            자주 묻는 질문
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            문의하시기 전에{" "}
            <Link href="/about">소개 페이지</Link>의 자주 묻는 질문을
            먼저 확인해 보세요. 대부분의 궁금증이 해결될 수 있습니다.
          </p>
        </section>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <Link
            href="/"
            className="btn-secondary"
            style={{
              display: "inline-flex",
              fontSize: "var(--font-lg)",
              padding: "var(--space-md) var(--space-xl)",
              textDecoration: "none",
            }}
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </article>
    </div>
  );
}
