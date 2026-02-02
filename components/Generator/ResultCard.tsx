import type { LottoSet } from "@/lib/generator";
import { getBallColor } from "@/lib/generator";

interface ResultCardProps {
  set: LottoSet;
  index: number;
}

export default function ResultCard({ set, index }: ResultCardProps) {
  return (
    <div
      className="card"
      style={{
        marginBottom: "var(--space-md)",
        background: "white",
      }}
    >
      {/* 세트 헤더 */}
      <div
        style={{
          marginBottom: "var(--space-md)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-sm)",
            color: "var(--color-text-muted)",
            display: "block",
          }}
        >
          {index + 1}번째 세트
        </span>
        <h3
          style={{
            fontSize: "var(--font-xl)",
            fontWeight: 700,
            color: "var(--color-primary)",
            margin: "4px 0 0 0",
          }}
        >
          {set.label}
        </h3>
      </div>

      {/* 번호 표시 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "var(--space-lg)",
          padding: "var(--space-md) 0",
        }}
      >
        {set.numbers.map((num, numIndex) => (
          <div
            key={numIndex}
            className={`lotto-ball ${getBallColor(num)}`}
            style={{
              width: "52px",
              height: "52px",
              fontSize: "var(--font-xl)",
            }}
          >
            {num}
          </div>
        ))}
      </div>

      {/* 3파트 구조 리딩 */}
      <div
        style={{
          background: "var(--color-bg-card)",
          padding: "var(--space-md)",
          borderRadius: "var(--radius-md)",
          fontSize: "var(--font-base)",
          lineHeight: 1.7,
        }}
      >
        <div style={{ marginBottom: "var(--space-sm)" }}>
          <span
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              marginRight: "8px",
            }}
          >
            이번 주 흐름
          </span>
          <span style={{ color: "var(--color-text-light)" }}>{set.flow}</span>
        </div>

        <div style={{ marginBottom: "var(--space-sm)" }}>
          <span
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              marginRight: "8px",
            }}
          >
            포인트
          </span>
          <span style={{ color: "var(--color-text-light)" }}>{set.point}</span>
        </div>

        <div>
          <span
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              marginRight: "8px",
            }}
          >
            키워드
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>
            {set.keywords.map((kw, i) => (
              <span key={i}>
                {i > 0 && " · "}
                {kw}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
