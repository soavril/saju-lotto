"use client";

import { useState } from "react";
import InputForm from "@/components/Generator/InputForm";
import ResultCard from "@/components/Generator/ResultCard";
import ResultSkeleton from "@/components/Generator/ResultSkeleton";
import ShareBlock from "@/components/Generator/ShareBlock";
import FAQSection from "@/components/FAQ/FAQSection";
import { generateLottoSets, type GeneratorResult } from "@/lib/generator";
import type { StyleOption } from "@/lib/vibes";

export default function Home() {
  const [result, setResult] = useState<GeneratorResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [lastInput, setLastInput] = useState<{
    birthDate: string;
    birthTime: string | null;
    gender: "male" | "female" | "skip";
    style: StyleOption;
  } | null>(null);

  const handleSubmit = (data: {
    birthDate: string;
    birthTime: string | null;
    gender: "male" | "female" | "skip";
    style: StyleOption;
  }) => {
    setIsLoading(true);
    setLastInput(data);
    setNonce(0);

    // 약간의 딜레이로 UX 개선 (즉각적이면 뭔가 된 것 같지 않음)
    setTimeout(() => {
      const generated = generateLottoSets({
        birthDate: data.birthDate,
        birthTime: data.birthTime,
        gender: data.gender,
        style: data.style,
        nonce: 0,
      });
      setResult(generated);
      setIsLoading(false);

      // 결과로 스크롤
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }, 800);
  };

  const handleRegenerate = () => {
    if (!lastInput) return;

    setIsLoading(true);
    const newNonce = nonce + 1;
    setNonce(newNonce);

    setTimeout(() => {
      const generated = generateLottoSets({
        ...lastInput,
        nonce: newNonce,
      });
      setResult(generated);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
      {/* 히어로 섹션 */}
      <section style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
        <h1
          style={{
            fontSize: "var(--font-3xl)",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "var(--space-md)",
          }}
        >
          <span style={{ color: "var(--color-primary)" }}>사주</span> 기반
          <br />
          행운 번호 생성기
        </h1>
        <p
          style={{
            fontSize: "var(--font-lg)",
            color: "var(--color-text-light)",
            maxWidth: "420px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          생년월일과 이번 주 테마를 조합해
          <br />
          나만의 행운 번호 5세트를 만들어 드려요
        </p>

        {/* 면책 배지 */}
        <div
          style={{
            display: "inline-block",
            marginTop: "var(--space-md)",
            padding: "8px 16px",
            background: "#fef3c7",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--font-sm)",
            color: "#92400e",
          }}
        >
          🍀 재미로 즐기는 행운 번호
        </div>
      </section>

      {/* 입력 폼 */}
      <section
        className="card"
        style={{
          background: "white",
          padding: "var(--space-xl)",
        }}
      >
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
      </section>

      {/* 결과 영역 */}
      <div id="results">
        {isLoading && <ResultSkeleton />}

        {!isLoading && result && (
          <section style={{ marginTop: "var(--space-xl)" }}>
            {/* 주차 표시 */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  background: "var(--color-primary)",
                  color: "white",
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--font-base)",
                  fontWeight: 600,
                }}
              >
                🍀 {result.weekString} 번호
              </span>
            </div>

            {/* 5세트 결과 */}
            {result.sets.map((set, index) => (
              <ResultCard key={index} set={set} index={index} />
            ))}

            {/* 다시 뽑기 버튼 */}
            <button
              onClick={handleRegenerate}
              className="btn-secondary"
              style={{
                width: "100%",
                marginTop: "var(--space-md)",
                fontSize: "var(--font-lg)",
                height: "56px",
              }}
            >
              ✨ 다른 번호 뽑기
            </button>

            {/* 공유 블록 */}
            <ShareBlock result={result} />

            {/* 결과 면책 */}
            <div
              className="disclaimer"
              style={{
                marginTop: "var(--space-lg)",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, fontSize: "var(--font-sm)" }}>
                ⚠️ 본 서비스는 오락용이며 당첨을 보장하지 않습니다.
                <br />
                복권 구매는 개인의 선택이며, 과도한 구매는 지양해 주세요.
              </p>
            </div>
          </section>
        )}
      </div>

      {/* FAQ 섹션 */}
      <FAQSection />
    </div>
  );
}
