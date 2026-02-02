/**
 * 각 세트의 "기운" 라벨과 설명
 * 확률이나 예측 관련 문구 절대 사용 금지!
 * 3파트 구조: 이번 주 흐름 / 포인트 / 키워드
 */

export interface VibeReading {
  flow: string; // 이번 주 흐름
  point: string; // 포인트
  keywords: string[]; // 키워드 (3개)
}

export interface VibeData {
  labelKo: string;
  readings: VibeReading[];
}

/**
 * 5가지 기운 타입 - 3파트 구조화된 리딩
 */
export const VIBES: VibeData[] = [
  {
    labelKo: "안정의 기운",
    readings: [
      {
        flow: "고요한 에너지가 중심을 잡아주는 한 주",
        point: "급하게 움직이기보다 흐름을 지켜보는 여유",
        keywords: ["평온", "균형", "신중"],
      },
      {
        flow: "차분한 리듬 속에서 내면의 힘이 느껴지는 시기",
        point: "작은 것에 집중할 때 큰 그림이 보이는 순간",
        keywords: ["안정", "집중", "내면"],
      },
      {
        flow: "흔들림 없이 꾸준히 나아가는 기운이 감도는 주",
        point: "조급함보다 묵묵함이 어울리는 타이밍",
        keywords: ["꾸준함", "기반", "차분"],
      },
    ],
  },
  {
    labelKo: "대담한 반전",
    readings: [
      {
        flow: "예상 밖의 전개가 재미를 더하는 한 주",
        point: "익숙한 패턴에서 살짝 벗어나 보는 시도",
        keywords: ["반전", "도전", "새로움"],
      },
      {
        flow: "평소와 다른 선택이 색다른 경험을 만드는 시기",
        point: "고정관념을 내려놓을 때 보이는 가능성",
        keywords: ["변화", "용기", "돌파"],
      },
      {
        flow: "작은 모험이 큰 이야기가 되는 기운의 주",
        point: "두려움보다 호기심이 앞설 때의 즐거움",
        keywords: ["모험", "직감", "전환"],
      },
    ],
  },
  {
    labelKo: "부드러운 흐름",
    readings: [
      {
        flow: "물 흐르듯 자연스럽게 펼쳐지는 한 주",
        point: "억지로 밀어붙이기보다 순리를 따르는 선택",
        keywords: ["유연", "순응", "자연"],
      },
      {
        flow: "편안한 리듬 속에서 좋은 기운이 스며드는 시기",
        point: "긴장을 풀고 있는 그대로를 받아들이는 자세",
        keywords: ["편안", "수용", "흐름"],
      },
      {
        flow: "부드러운 에너지가 주변을 감싸는 기운의 주",
        point: "힘을 빼고 가볍게 임할 때 느껴지는 여유",
        keywords: ["온화", "여유", "조화"],
      },
    ],
  },
  {
    labelKo: "숨겨진 불꽃",
    readings: [
      {
        flow: "겉으로 드러나지 않는 열정이 피어오르는 한 주",
        point: "조용히 준비한 것들이 빛을 발하는 순간",
        keywords: ["열정", "내면", "잠재력"],
      },
      {
        flow: "잔잔해 보이지만 속에서 뜨거운 에너지가 느껴지는 시기",
        point: "표현하지 않아도 알 수 있는 강한 의지",
        keywords: ["불꽃", "의지", "심층"],
      },
      {
        flow: "보이지 않는 곳에서 특별한 기운이 움직이는 주",
        point: "겉모습에 속지 않고 본질을 보는 눈",
        keywords: ["반전", "깊이", "직감"],
      },
    ],
  },
  {
    labelKo: "자유로운 기운",
    readings: [
      {
        flow: "틀에 얽매이지 않는 에너지가 넘치는 한 주",
        point: "정해진 답 없이 자유롭게 즐기는 마음가짐",
        keywords: ["자유", "개방", "즐거움"],
      },
      {
        flow: "어디로 튈지 모르는 재미가 가득한 시기",
        point: "계획보다 즉흥이 어울리는 순간의 매력",
        keywords: ["즉흥", "다양", "유쾌"],
      },
      {
        flow: "예측 불가능한 재미가 기다리는 기운의 주",
        point: "결과보다 과정 자체를 즐기는 여유로움",
        keywords: ["모험", "기대", "설렘"],
      },
    ],
  },
];

/**
 * 시드 값에 따라 기운 데이터를 가져옵니다.
 */
export function getVibeForSet(
  setIndex: number,
  seed: number
): {
  label: string;
  flow: string;
  point: string;
  keywords: string[];
} {
  const vibeIndex = (setIndex + seed) % VIBES.length;
  const vibe = VIBES[vibeIndex];
  const readingIndex = (seed + setIndex * 7) % vibe.readings.length;
  const reading = vibe.readings[readingIndex];

  return {
    label: vibe.labelKo,
    flow: reading.flow,
    point: reading.point,
    keywords: reading.keywords,
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
