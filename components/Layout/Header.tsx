import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* 로고 / 홈 링크 */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "var(--color-text)",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              lineHeight: 1,
            }}
            role="img"
            aria-label="행운의 클로버"
          >
            🍀
          </span>
          <span
            style={{
              fontSize: "var(--font-lg)",
              fontWeight: 700,
            }}
          >
            사주로또
          </span>
        </Link>

        {/* 간단한 네비게이션 - 모바일에서는 숨김 */}
        <nav
          style={{
            display: "flex",
            gap: "var(--space-md)",
          }}
        >
          <Link
            href="/about"
            style={{
              fontSize: "var(--font-sm)",
              color: "var(--color-text-light)",
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
