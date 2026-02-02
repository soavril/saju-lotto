/**
 * 각 세트의 "기운" 라벨과 설명
 * 확률이나 예측 관련 문구 절대 사용 금지!
 */

export interface VibeData {
  labelKo: string;
  labelEn: string;
  descriptions: string[];
}

/**
 * 5가지 기운 타입
 */
export const VIBES: VibeData[] = [
  {
    labelKo: "안정의 기운",
    labelEn: "Steady Energy",
    descriptions: [
      "이번 주는 차분하고 안정적인 에너지가 느껴집니다.",
      "균형 잡힌 기운이 함께하는 한 주입니다.",
      "평온한 흐름 속에서 좋은 기운을 담았습니다.",
    ],
  },
  {
    labelKo: "대담한 반전",
    labelEn: "Bold Twist",
    descriptions: [
      "예상치 못한 재미가 기다리고 있을지도 몰라요.",
      "과감한 변화의 기운을 담아봤습니다.",
      "새로운 시도가 어울리는 에너지입니다.",
    ],
  },
  {
    labelKo: "부드러운 흐름",
    labelEn: "Gentle Flow",
    descriptions: [
      "자연스럽게 흘러가는 기운을 담았습니다.",
      "편안하고 순탄한 에너지가 느껴지네요.",
      "물 흐르듯 부드러운 한 주의 기운입니다.",
    ],
  },
  {
    labelKo: "숨겨진 불꽃",
    labelEn: "Hidden Spark",
    descriptions: [
      "내면에 숨겨진 열정의 기운을 담았습니다.",
      "조용하지만 강한 에너지가 느껴집니다.",
      "잔잔한 표면 아래 특별한 기운이 있어요.",
    ],
  },
  {
    labelKo: "자유로운 기운",
    labelEn: "Free Spirit",
    descriptions: [
      "어떤 일이든 일어날 수 있는 재미있는 기운입니다.",
      "즐거운 서프라이즈의 에너지를 담았어요.",
      "틀에 박히지 않은 자유로운 기운이네요.",
    ],
  },
];

/**
 * 시드 값에 따라 기운 데이터를 가져옵니다.
 */
export function getVibeForSet(
  setIndex: number,
  seed: number
): { label: string; labelEn: string; description: string } {
  const vibeIndex = (setIndex + seed) % VIBES.length;
  const vibe = VIBES[vibeIndex];
  const descIndex = (seed + setIndex * 7) % vibe.descriptions.length;

  return {
    label: vibe.labelKo,
    labelEn: vibe.labelEn,
    description: vibe.descriptions[descIndex],
  };
}

/**
 * 스타일 옵션
 */
export const STYLE_OPTIONS = [
  { value: "balanced", label: "균형", description: "고르게 분포된 번호" },
  { value: "conservative", label: "보수적", description: "중간 대역 중심" },
  { value: "spicy", label: "스파이시", description: "다양한 대역 혼합" },
] as const;

export type StyleOption = (typeof STYLE_OPTIONS)[number]["value"];
