"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "이 번호로 당첨이 보장되나요?",
    answer:
      "아니요. 본 서비스는 오락 목적으로 번호를 생성하며, 실제 당첨과는 무관합니다. 로또는 완전한 무작위 추첨이므로 어떤 방법으로도 결과를 예측할 수 없습니다.",
  },
  {
    question: "번호는 어떻게 생성되나요?",
    answer:
      "입력하신 생년월일과 해당 주차의 고유 시드(seed) 값을 규칙 기반으로 조합해 번호를 생성합니다. AI나 통계 분석이 아닌 단순 조합 방식이며, 재미를 위한 엔터테인먼트입니다.",
  },
  {
    question: "왜 매주 결과가 바뀌나요?",
    answer:
      "매주 주차(week) 값이 달라지기 때문에 동일한 생년월일이라도 새로운 번호 조합이 만들어집니다. 매주 색다른 테마와 기운을 경험해 보세요.",
  },
  {
    question: "출생 시간을 몰라도 되나요?",
    answer:
      "네, 출생 시간은 선택 사항입니다. 입력하지 않아도 생년월일만으로 번호가 생성됩니다. 시간을 입력하면 조합에 추가 요소가 반영됩니다.",
  },
  {
    question: "생성된 번호를 저장할 수 있나요?",
    answer:
      "네, \"복사하기\" 버튼으로 클립보드에 저장할 수 있어요. 카카오톡이나 메모장에 붙여넣기 해서 보관하세요.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        marginTop: "var(--space-2xl)",
        paddingTop: "var(--space-xl)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <h2
        style={{
          fontSize: "var(--font-2xl)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "var(--space-lg)",
        }}
      >
        자주 묻는 질문
      </h2>

      <div
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            style={{
              marginBottom: "var(--space-sm)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              background: "white",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              itemProp="name"
              style={{
                width: "100%",
                padding: "var(--space-lg)",
                background: openIndex === index ? "var(--color-bg-card)" : "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "var(--font-lg)",
                fontWeight: 600,
                color: "var(--color-text)",
                textAlign: "left",
                minHeight: "var(--touch-min)",
              }}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span
                style={{
                  fontSize: "var(--font-xl)",
                  fontWeight: 400,
                  color: "var(--color-primary)",
                  transform: openIndex === index ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>

            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p
                itemProp="text"
                style={{
                  padding: "0 var(--space-lg) var(--space-lg)",
                  margin: 0,
                  fontSize: "var(--font-base)",
                  lineHeight: 1.8,
                  color: "var(--color-text-light)",
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
