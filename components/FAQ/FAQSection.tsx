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
      "아니요, 절대 아닙니다! 이 서비스는 100% 오락 목적입니다. 로또 당첨 확률을 높이거나 결과를 예측하는 것은 불가능합니다. 재미로만 즐겨주세요.",
  },
  {
    question: "번호는 어떻게 생성되나요?",
    answer:
      "입력하신 생년월일과 이번 주의 고유 값을 조합하여 번호를 생성합니다. 사주를 참고한 재미있는 방식이지만, 실제 당첨과는 관련이 없습니다.",
  },
  {
    question: "왜 매주 결과가 바뀌나요?",
    answer:
      "매주 새로운 '주간 기운'이 적용되기 때문입니다. 같은 생년월일이라도 주마다 다른 번호가 나와서, 매주 새롭게 즐기실 수 있어요!",
  },
  {
    question: "출생 시간을 몰라도 되나요?",
    answer:
      "네, 출생 시간은 선택 사항입니다. 몰라도 생년월일만으로 번호를 생성할 수 있어요.",
  },
  {
    question: "생성된 번호를 저장할 수 있나요?",
    answer:
      '네! 번호 생성 후 "복사하기" 버튼을 누르면 클립보드에 저장됩니다. 메모장이나 카카오톡으로 보내서 보관하세요.',
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
