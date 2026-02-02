import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "면책조항",
  description: "사주 로또 번호 생성기의 면책조항입니다. 본 서비스는 오락 목적으로만 제공됩니다.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
      <article>
        <h1 style={{ fontSize: "var(--font-3xl)", marginBottom: "var(--space-lg)" }}>
          면책조항
        </h1>

        <div
          className="disclaimer"
          style={{
            padding: "var(--space-xl)",
            marginBottom: "var(--space-xl)",
            fontSize: "var(--font-xl)",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>
            ⚠️ 중요: 본 서비스는 100% 오락 목적으로만 제공됩니다.
          </p>
        </div>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            1. 서비스의 성격
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            사주 로또 번호 생성기("본 서비스")는 순수하게 <strong>오락 및 재미</strong>를
            목적으로 제공되는 서비스입니다. 본 서비스는 다음을 포함하지만 이에 국한되지 않는
            어떠한 형태의 도박 조언이나 예측도 제공하지 않습니다.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            2. 당첨 보장 없음
          </h2>
          <div
            style={{
              background: "var(--color-bg-card)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-lg)",
              border: "2px solid var(--color-accent)",
            }}
          >
            <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, margin: 0 }}>
              <strong>본 서비스에서 생성된 번호는:</strong>
            </p>
            <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)", marginBottom: 0 }}>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                로또 당첨 확률을 <strong>높이지 않습니다</strong>.
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                미래의 당첨 번호를 <strong>예측하지 않습니다</strong>.
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                어떠한 형태의 당첨도 <strong>보장하지 않습니다</strong>.
              </li>
              <li>
                무작위 번호 선택과 동일한 <strong>확률적 가치</strong>를 가집니다.
              </li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            3. 사주 해석의 한계
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스에서 사용하는 "사주" 개념은 전통 명리학을 <strong>재미있게 해석</strong>한
            것으로, 학문적이거나 점술적인 정확성을 주장하지 않습니다. 제공되는 "기운"이나
            "바이브" 설명은 오락적 요소일 뿐이며, 실제 운세나 미래를 예측하지 않습니다.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            4. 책임의 제한
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스의 운영자는 다음에 대해 책임을 지지 않습니다:
          </p>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              생성된 번호를 사용하여 발생하는 모든 금전적 손실
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              복권 구매와 관련된 모든 결정 및 그 결과
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              서비스 이용으로 인한 직접적, 간접적, 부수적 손해
            </li>
            <li>
              서비스의 중단, 오류, 또는 변경으로 인한 불편
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            5. 책임감 있는 복권 구매
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            복권 구매는 <strong>책임감 있게</strong> 해주시기 바랍니다:
          </p>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              여유 자금 범위 내에서만 구매하세요.
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              복권은 오락이지, 투자나 수입원이 아닙니다.
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              도박 중독이 우려되시면 전문 상담을 받으세요.
            </li>
            <li>
              한국도박문제관리센터: <strong>1336</strong>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            6. 동의
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스를 이용함으로써, 위의 면책조항을 읽고 이해하였으며 이에 동의하는 것으로
            간주합니다. 본 면책조항에 동의하지 않으시면 서비스 이용을 중단해 주시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            7. 문의
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 면책조항에 대한 문의사항이 있으시면{" "}
            <a href="/contact">문의하기</a> 페이지를 이용해 주세요.
          </p>
        </section>
      </article>
    </div>
  );
}
