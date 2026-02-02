"use client";

import { useState } from "react";
import type { GeneratorResult } from "@/lib/generator";
import { formatResultsForShare } from "@/lib/generator";

interface ShareBlockProps {
  result: GeneratorResult;
}

export default function ShareBlock({ result }: ShareBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = formatResultsForShare(result);

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 폴백: 구형 브라우저 지원
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const text = formatResultsForShare(result);

    if (navigator.share) {
      try {
        await navigator.share({
          title: "사주 로또 번호",
          text: text,
          url: "https://saju-number.com",
        });
      } catch {
        // 사용자가 공유 취소
      }
    } else {
      // 공유 API 미지원 시 복사로 폴백
      handleCopy();
    }
  };

  return (
    <div
      style={{
        background: "var(--color-bg-card)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-lg)",
        marginTop: "var(--space-lg)",
        border: "1px solid var(--color-border)",
      }}
    >
      <h3
        style={{
          fontSize: "var(--font-lg)",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "var(--space-md)",
          color: "var(--color-text)",
        }}
      >
        번호 저장하기
      </h3>

      <div
        style={{
          display: "flex",
          gap: "var(--space-sm)",
          flexDirection: "column",
        }}
      >
        {/* 복사 버튼 */}
        <button
          onClick={handleCopy}
          className="btn-primary"
          style={{
            width: "100%",
            fontSize: "var(--font-lg)",
            height: "56px",
            background: copied ? "var(--color-success)" : undefined,
          }}
        >
          {copied ? (
            <>
              <span style={{ fontSize: "20px" }}>✓</span>
              복사 완료!
            </>
          ) : (
            <>
              <span style={{ fontSize: "20px" }}>📋</span>
              번호 복사하기
            </>
          )}
        </button>

        {/* 공유 버튼 (모바일에서만 유용) */}
        <button
          onClick={handleShare}
          className="btn-secondary"
          style={{
            width: "100%",
            fontSize: "var(--font-lg)",
            height: "56px",
          }}
        >
          <span style={{ fontSize: "20px" }}>📤</span>
          카톡/문자로 공유
        </button>
      </div>

      {/* 미리보기 */}
      <details
        style={{
          marginTop: "var(--space-lg)",
        }}
      >
        <summary
          style={{
            fontSize: "var(--font-sm)",
            color: "var(--color-text-muted)",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          공유될 내용 미리보기
        </summary>
        <pre
          style={{
            marginTop: "var(--space-md)",
            padding: "var(--space-md)",
            background: "white",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--font-xs)",
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            border: "1px solid var(--color-border)",
          }}
        >
          {formatResultsForShare(result)}
        </pre>
      </details>
    </div>
  );
}
