import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "사주 로또 번호 생성기의 개인정보처리방침입니다.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
      <article>
        <h1 style={{ fontSize: "var(--font-3xl)", marginBottom: "var(--space-lg)" }}>
          개인정보처리방침
        </h1>

        <p style={{ fontSize: "var(--font-base)", color: "var(--color-text-muted)", marginBottom: "var(--space-xl)" }}>
          최종 수정일: 2026년 2월 2일
        </p>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            1. 수집하는 개인정보
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            사주 로또 번호 생성기("본 서비스")는 <strong>개인정보를 수집하거나 저장하지 않습니다</strong>.
          </p>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            입력하시는 생년월일, 출생 시간, 성별 정보는 오직 번호 생성을 위해
            브라우저 내에서만 처리되며, 어떠한 서버에도 전송되거나 저장되지 않습니다.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            2. 쿠키 및 추적 기술
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스는 다음과 같은 목적으로 쿠키를 사용할 수 있습니다:
          </p>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>필수 쿠키</strong>: 웹사이트의 기본 기능 제공
            </li>
            <li>
              <strong>분석 쿠키</strong>: 서비스 개선을 위한 익명화된 방문 통계 수집
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            3. Google AdSense 및 광고
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
            Google AdSense는 다음과 같은 정보를 수집할 수 있습니다:
          </p>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              쿠키를 사용하여 이전 방문 기록을 바탕으로 광고를 게재합니다.
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Google의 광고 쿠키를 사용하면 사용자가 해당 사이트 또는 인터넷의
              다른 사이트를 방문한 기록을 바탕으로 광고를 게재할 수 있습니다.
            </li>
            <li>
              사용자는{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google 광고 설정
              </a>
              에서 맞춤 광고를 비활성화할 수 있습니다.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            4. 제3자 서비스
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스는 다음 제3자 서비스를 사용할 수 있습니다:
          </p>
          <ul style={{ fontSize: "var(--font-lg)", lineHeight: 1.8, paddingLeft: "var(--space-lg)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Google Analytics</strong>: 익명화된 방문 통계 수집
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Google AdSense</strong>: 광고 게재
            </li>
            <li>
              <strong>Vercel</strong>: 웹사이트 호스팅
            </li>
          </ul>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            각 서비스의 개인정보처리방침은 해당 서비스의 공식 웹사이트에서
            확인하실 수 있습니다.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            5. 아동의 개인정보
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
            다만, 본 서비스는 개인정보를 수집하지 않으므로 특별한 제한은 없습니다.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            6. 개인정보처리방침의 변경
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            본 개인정보처리방침은 관련 법령이나 서비스 정책의 변경에 따라
            수정될 수 있습니다. 변경 사항이 있을 경우 이 페이지에 게시됩니다.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            7. 문의
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            개인정보처리방침에 대한 문의사항이 있으시면{" "}
            <a href="/contact">문의하기</a> 페이지를 이용해 주세요.
          </p>
        </section>
      </article>
    </div>
  );
}
