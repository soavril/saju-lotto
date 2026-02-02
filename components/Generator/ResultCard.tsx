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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "var(--space-md)",
        }}
      >
        <div>
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
        <span
          style={{
            fontSize: "12px",
            color: "var(--color-text-muted)",
            background: "var(--color-bg-card)",
            padding: "4px 8px",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {set.labelEn}
        </span>
      </div>

      {/* 번호 표시 - 크고 명확하게 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "var(--space-md)",
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

      {/* 기운 설명 */}
      <p
        style={{
          fontSize: "var(--font-base)",
          color: "var(--color-text-light)",
          textAlign: "center",
          margin: 0,
          lineHeight: 1.6,
          background: "var(--color-bg-card)",
          padding: "var(--space-md)",
          borderRadius: "var(--radius-md)",
        }}
      >
        "{set.description}"
      </p>
    </div>
  );
}
