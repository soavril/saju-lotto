"use client";

import { useState, FormEvent, useMemo } from "react";
import type { StyleOption } from "@/lib/vibes";

interface InputFormProps {
  onSubmit: (data: {
    birthDate: string;
    birthTime: string | null;
    gender: "male" | "female" | "skip";
    style: StyleOption;
  }) => void;
  isLoading: boolean;
}

export default function InputForm({ onSubmit, isLoading }: InputFormProps) {
  // 생년월일 - 년/월/일 분리
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  // 출생 시간 - 오전/오후 + 시 + 분
  const [knowBirthTime, setKnowBirthTime] = useState(false);
  const [ampm, setAmpm] = useState<"오전" | "오후">("오전");
  const [birthHour, setBirthHour] = useState("");
  const [birthMinute, setBirthMinute] = useState("");

  const [gender, setGender] = useState<"male" | "female" | "skip">("skip");
  const [style, setStyle] = useState<StyleOption>("balanced");

  // 연도 옵션 생성 (1920 ~ 현재)
  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const arr = [];
    for (let y = currentYear; y >= 1920; y--) {
      arr.push(y);
    }
    return arr;
  }, [currentYear]);

  // 월 옵션 (1~12)
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  // 일 옵션 (선택된 년/월에 따라 동적)
  const days = useMemo(() => {
    if (!birthYear || !birthMonth) {
      return Array.from({ length: 31 }, (_, i) => i + 1);
    }
    const daysInMonth = new Date(
      parseInt(birthYear),
      parseInt(birthMonth),
      0
    ).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }, [birthYear, birthMonth]);

  // 시간 옵션 (1~12)
  const hours = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  // 분 옵션 (00, 10, 20, 30, 40, 50) - 간소화
  const minutes = useMemo(() => [0, 10, 20, 30, 40, 50], []);

  // 생년월일 유효성 검사
  const isBirthDateValid = birthYear && birthMonth && birthDay;

  // 생년월일을 YYYY-MM-DD 형식으로 변환
  const getBirthDateString = () => {
    if (!isBirthDateValid) return "";
    return `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`;
  };

  // 출생 시간을 HH:MM 형식으로 변환 (24시간)
  const getBirthTimeString = () => {
    if (!birthHour || birthMinute === "") return null;
    let hour24 = parseInt(birthHour);
    if (ampm === "오후" && hour24 !== 12) {
      hour24 += 12;
    } else if (ampm === "오전" && hour24 === 12) {
      hour24 = 0;
    }
    return `${hour24.toString().padStart(2, "0")}:${birthMinute.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isBirthDateValid) return;

    const birthDate = getBirthDateString();
    const birthTime = knowBirthTime ? getBirthTimeString() : null;

    onSubmit({
      birthDate,
      birthTime,
      gender,
      style,
    });
  };

  // 공통 select 스타일
  const selectStyle = {
    fontSize: "var(--font-lg)",
    padding: "12px 40px 12px 16px",
    height: "56px",
    minWidth: "90px",
    textAlign: "left" as const,
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='%236b7280' d='M7 10L2 4h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    WebkitAppearance: "none" as const,
    MozAppearance: "none" as const,
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 생년월일 - 년/월/일 분리 (한국식) */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <label
          style={{
            fontSize: "var(--font-lg)",
            fontWeight: 600,
            display: "block",
            marginBottom: "var(--space-sm)",
          }}
        >
          생년월일 <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>

        <div
          style={{
            display: "flex",
            gap: "var(--space-sm)",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* 년 */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              style={{ ...selectStyle, minWidth: "120px" }}
              aria-label="출생 연도"
            >
              <option value="">선택</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}년
                </option>
              ))}
            </select>
          </div>

          {/* 월 */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              style={{ ...selectStyle, minWidth: "90px" }}
              aria-label="출생 월"
            >
              <option value="">선택</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}월
                </option>
              ))}
            </select>
          </div>

          {/* 일 */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <select
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              style={{ ...selectStyle, minWidth: "90px" }}
              aria-label="출생 일"
            >
              <option value="">선택</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}일
                </option>
              ))}
            </select>
          </div>
        </div>

        <p
          style={{
            fontSize: "var(--font-sm)",
            color: "var(--color-text-muted)",
            marginTop: "var(--space-xs)",
          }}
        >
          태어난 날짜를 선택해주세요
        </p>
      </div>

      {/* 출생 시간 - 선택 */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-sm)",
            marginBottom: "var(--space-sm)",
          }}
        >
          <input
            type="checkbox"
            id="knowBirthTime"
            checked={knowBirthTime}
            onChange={(e) => setKnowBirthTime(e.target.checked)}
            style={{
              width: "28px",
              height: "28px",
              cursor: "pointer",
              accentColor: "var(--color-primary)",
            }}
          />
          <label
            htmlFor="knowBirthTime"
            style={{
              fontSize: "var(--font-lg)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            출생 시간을 알고 있어요
          </label>
        </div>

        {knowBirthTime && (
          <div
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "var(--space-sm)",
            }}
          >
            {/* 오전/오후 */}
            <div style={{ display: "flex", gap: "4px" }}>
              {(["오전", "오후"] as const).map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setAmpm(period)}
                  style={{
                    padding: "var(--space-md) var(--space-lg)",
                    fontSize: "var(--font-lg)",
                    fontWeight: ampm === period ? 600 : 400,
                    background: ampm === period ? "var(--color-primary)" : "white",
                    color: ampm === period ? "white" : "var(--color-text)",
                    border: `2px solid ${ampm === period ? "var(--color-primary)" : "var(--color-border)"}`,
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    minHeight: "56px",
                  }}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* 시 */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <select
                value={birthHour}
                onChange={(e) => setBirthHour(e.target.value)}
                style={{ ...selectStyle, minWidth: "85px" }}
                aria-label="시"
              >
                <option value="">시</option>
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}시
                  </option>
                ))}
              </select>
            </div>

            {/* 분 */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <select
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
                style={{ ...selectStyle, minWidth: "85px" }}
                aria-label="분"
              >
                <option value="">분</option>
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m.toString().padStart(2, "0")}분
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* 성별 - 선택 */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <label
          style={{
            fontSize: "var(--font-lg)",
            fontWeight: 600,
            display: "block",
            marginBottom: "var(--space-sm)",
          }}
        >
          성별 (선택)
        </label>
        <div
          style={{
            display: "flex",
            gap: "var(--space-sm)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "male", label: "남성" },
            { value: "female", label: "여성" },
            { value: "skip", label: "건너뛰기" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setGender(option.value as typeof gender)}
              style={{
                flex: "1 1 auto",
                minWidth: "100px",
                padding: "var(--space-md)",
                fontSize: "var(--font-lg)",
                fontWeight: gender === option.value ? 600 : 400,
                background:
                  gender === option.value ? "var(--color-primary)" : "white",
                color: gender === option.value ? "white" : "var(--color-text)",
                border: `2px solid ${gender === option.value ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minHeight: "56px",
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 스타일 - 선택 */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <label
          style={{
            fontSize: "var(--font-lg)",
            fontWeight: 600,
            display: "block",
            marginBottom: "var(--space-sm)",
          }}
        >
          스타일 (선택)
        </label>
        <div
          style={{
            display: "flex",
            gap: "var(--space-sm)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "balanced", label: "균형", emoji: "⚖️" },
            { value: "conservative", label: "안정", emoji: "🛡️" },
            { value: "spicy", label: "도전", emoji: "🔥" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setStyle(option.value as StyleOption)}
              style={{
                flex: "1 1 auto",
                minWidth: "100px",
                padding: "var(--space-md)",
                fontSize: "var(--font-lg)",
                fontWeight: style === option.value ? 600 : 400,
                background:
                  style === option.value ? "var(--color-primary)" : "white",
                color: style === option.value ? "white" : "var(--color-text)",
                border: `2px solid ${style === option.value ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minHeight: "56px",
              }}
            >
              <span style={{ marginRight: "6px" }}>{option.emoji}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 생성 버튼 - 크고 명확하게 */}
      <button
        type="submit"
        disabled={!isBirthDateValid || isLoading}
        className="btn-primary"
        style={{
          width: "100%",
          fontSize: "var(--font-xl)",
          padding: "var(--space-lg)",
          height: "68px",
          opacity: !isBirthDateValid || isLoading ? 0.6 : 1,
          cursor: !isBirthDateValid || isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? (
          "생성 중..."
        ) : (
          <>
            <span style={{ fontSize: "28px" }}>🍀</span>
            이번 주 번호 뽑기
          </>
        )}
      </button>

      {!isBirthDateValid && (
        <p
          style={{
            textAlign: "center",
            marginTop: "var(--space-sm)",
            fontSize: "var(--font-base)",
            color: "var(--color-text-muted)",
          }}
        >
          생년월일을 먼저 선택해주세요
        </p>
      )}
    </form>
  );
}
