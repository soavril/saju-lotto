/**
 * 로딩 중 스켈레톤 UI
 * 레이아웃 시프트 방지
 */
export default function ResultSkeleton() {
  return (
    <div style={{ marginTop: "var(--space-xl)" }}>
      <div
        className="skeleton"
        style={{
          height: "28px",
          width: "200px",
          margin: "0 auto var(--space-lg)",
        }}
      />

      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="card"
          style={{
            marginBottom: "var(--space-md)",
            background: "white",
          }}
        >
          {/* 헤더 스켈레톤 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "var(--space-md)",
            }}
          >
            <div>
              <div
                className="skeleton"
                style={{ height: "16px", width: "60px", marginBottom: "8px" }}
              />
              <div
                className="skeleton"
                style={{ height: "24px", width: "100px" }}
              />
            </div>
            <div
              className="skeleton"
              style={{ height: "24px", width: "80px" }}
            />
          </div>

          {/* 번호 스켈레톤 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "var(--space-md)",
              padding: "var(--space-md) 0",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div
                key={j}
                className="skeleton"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                }}
              />
            ))}
          </div>

          {/* 설명 스켈레톤 */}
          <div
            className="skeleton"
            style={{
              height: "48px",
              borderRadius: "var(--radius-md)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
