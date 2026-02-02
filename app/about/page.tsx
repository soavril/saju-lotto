import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
  description:
    "사주 로또 번호 생성기는 생년월일을 기반으로 재미있는 로또 번호를 제공하는 오락 서비스입니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
      <article>
        <h1 style={{ fontSize: "var(--font-3xl)", marginBottom: "var(--space-lg)" }}>
          사주로또 소개
        </h1>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            서비스 소개
          </h2>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            <strong>사주 로또 번호 생성기</strong>는 여러분의 생년월일을 기반으로
            매주 새로운 로또 번호를 제안해드리는 <strong>무료 오락 서비스</strong>입니다.
          </p>
          <p style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            한국의 전통 사주 명리학에서 영감을 받아, 생년월일에 담긴 고유한 기운을
            재미있게 해석하여 번호를 생성합니다. 매주 달라지는 "주간 기운"이
            적용되어 같은 생년월일이라도 매주 새로운 번호를 받아보실 수 있어요.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            중요 안내
          </h2>
          <div
            className="disclaimer"
            style={{
              padding: "var(--space-lg)",
              fontSize: "var(--font-lg)",
              lineHeight: 1.8,
            }}
          >
            <p style={{ margin: "0 0 var(--space-md) 0" }}>
              ⚠️ <strong>반드시 읽어주세요!</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: "var(--space-lg)" }}>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                이 서비스는 <strong>100% 오락 목적</strong>으로만 제공됩니다.
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                로또 당첨 확률을 높이거나 결과를 예측하는 것은 <strong>불가능</strong>합니다.
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                생성된 번호와 실제 당첨은 <strong>아무런 관련이 없습니다</strong>.
              </li>
              <li>
                복권 구매는 <strong>책임감 있게</strong>, 여유 자금 범위 내에서 해주세요.
              </li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            이용 방법
          </h2>
          <div style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            <ol style={{ paddingLeft: "var(--space-lg)" }}>
              <li style={{ marginBottom: "var(--space-md)" }}>
                <strong>생년월일 입력</strong> - 필수 항목입니다.
              </li>
              <li style={{ marginBottom: "var(--space-md)" }}>
                <strong>출생 시간</strong> (선택) - 알고 계시면 더 세밀한 기운을 담을 수 있어요.
              </li>
              <li style={{ marginBottom: "var(--space-md)" }}>
                <strong>성별 선택</strong> (선택) - 건너뛰셔도 됩니다.
              </li>
              <li style={{ marginBottom: "var(--space-md)" }}>
                <strong>스타일 선택</strong> (선택) - 균형/안정/도전 중 원하는 느낌을 선택하세요.
              </li>
              <li>
                <strong>"이번 주 번호 뽑기"</strong> 버튼을 누르면 5세트의 번호가 생성됩니다!
              </li>
            </ol>
          </div>
        </section>

        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--font-2xl)", marginBottom: "var(--space-md)" }}>
            자주 묻는 질문
          </h2>
          <div style={{ fontSize: "var(--font-lg)", lineHeight: 1.8 }}>
            <h3 style={{ fontSize: "var(--font-xl)", marginTop: "var(--space-lg)" }}>
              Q. 왜 매주 번호가 바뀌나요?
            </h3>
            <p>
              매주 새로운 "주간 기운"이 적용되기 때문입니다. 같은 생년월일이라도
              매주 다른 재미를 느끼실 수 있도록 설계되었습니다.
            </p>

            <h3 style={{ fontSize: "var(--font-xl)", marginTop: "var(--space-lg)" }}>
              Q. 개인정보는 안전한가요?
            </h3>
            <p>
              입력하신 생년월일은 <strong>서버에 저장되지 않습니다</strong>.
              브라우저에서만 처리되고 바로 사라집니다.
            </p>

            <h3 style={{ fontSize: "var(--font-xl)", marginTop: "var(--space-lg)" }}>
              Q. 번호를 저장할 수 있나요?
            </h3>
            <p>
              네! 결과 화면의 "복사하기" 버튼을 누르면 클립보드에 저장됩니다.
              카카오톡이나 메모장에 붙여넣기 하세요.
            </p>
          </div>
        </section>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <Link
            href="/"
            className="btn-primary"
            style={{
              display: "inline-flex",
              fontSize: "var(--font-lg)",
              padding: "var(--space-md) var(--space-xl)",
              textDecoration: "none",
            }}
          >
            🍀 번호 뽑으러 가기
          </Link>
        </div>
      </article>
    </div>
  );
}
