import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* 면책 조항 - 항상 표시 */}
      <div
        style={{
          background: "#fef3c7",
          borderBottom: "1px solid #fcd34d",
          padding: "var(--space-md) 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "var(--font-sm)",
              color: "#92400e",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            ⚠️ 본 서비스는 <strong>오락 목적</strong>으로만 제공됩니다.
            <br />
            로또 당첨 확률을 높이거나 결과를 예측하지 않습니다.
          </p>
        </div>
      </div>

      {/* 푸터 링크 */}
      <div
        style={{
          padding: "var(--space-xl) 0",
        }}
      >
        <div className="container">
          {/* 네비게이션 링크 - 큰 터치 영역 */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--space-sm)",
              marginBottom: "var(--space-lg)",
            }}
          >
            <Link
              href="/"
              style={{
                padding: "12px 16px",
                fontSize: "var(--font-base)",
                color: "var(--color-text-light)",
                textDecoration: "none",
              }}
            >
              홈
            </Link>
            <Link
              href="/about"
              style={{
                padding: "12px 16px",
                fontSize: "var(--font-base)",
                color: "var(--color-text-light)",
                textDecoration: "none",
              }}
            >
              소개
            </Link>
            <Link
              href="/privacy-policy"
              style={{
                padding: "12px 16px",
                fontSize: "var(--font-base)",
                color: "var(--color-text-light)",
                textDecoration: "none",
              }}
            >
              개인정보처리방침
            </Link>
            <Link
              href="/disclaimer"
              style={{
                padding: "12px 16px",
                fontSize: "var(--font-base)",
                color: "var(--color-text-light)",
                textDecoration: "none",
              }}
            >
              면책조항
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "12px 16px",
                fontSize: "var(--font-base)",
                color: "var(--color-text-light)",
                textDecoration: "none",
              }}
            >
              문의하기
            </Link>
          </nav>

          {/* 저작권 */}
          <p
            style={{
              textAlign: "center",
              fontSize: "var(--font-sm)",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            © {currentYear} 사주로또. 재미로 즐겨주세요!
          </p>
        </div>
      </div>
    </footer>
  );
}
