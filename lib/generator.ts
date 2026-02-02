import { mulberry32, combineSeed } from "./prng";
import { getWeeklySeed, getCurrentWeekString } from "./weekSeed";
import { getVibeForSet, type StyleOption } from "./vibes";

/**
 * 생성기 입력 타입
 */
export interface GeneratorInput {
  birthDate: string; // YYYY-MM-DD
  birthTime?: string | null; // HH:MM
  gender?: "male" | "female" | "skip" | null;
  style?: StyleOption | null;
  nonce?: number; // 재생성 시 증가
}

/**
 * 단일 로또 세트
 */
export interface LottoSet {
  numbers: number[];
  label: string;
  labelEn: string;
  description: string;
}

/**
 * 생성 결과
 */
export interface GeneratorResult {
  sets: LottoSet[];
  weekString: string;
  seed: number;
}

/**
 * 로또 번호 색상 결정 (1-45 범위)
 */
export function getBallColor(num: number): string {
  if (num <= 10) return "yellow";
  if (num <= 20) return "blue";
  if (num <= 30) return "red";
  if (num <= 40) return "gray";
  return "green";
}

/**
 * 6개의 고유한 번호 생성 (1-45)
 */
function generateSixNumbers(
  random: () => number,
  style: StyleOption = "balanced"
): number[] {
  const numbers = new Set<number>();

  // 스타일에 따른 가중치 적용
  const getWeightedNumber = (): number => {
    const r = random();

    switch (style) {
      case "conservative":
        // 중간 대역(15-35) 선호
        if (r < 0.6) {
          return Math.floor(random() * 21) + 15; // 15-35
        }
        return Math.floor(random() * 45) + 1;

      case "spicy":
        // 극단값 포함 확률 높임
        if (r < 0.3) {
          return random() < 0.5
            ? Math.floor(random() * 10) + 1 // 1-10
            : Math.floor(random() * 10) + 36; // 36-45
        }
        return Math.floor(random() * 45) + 1;

      case "balanced":
      default:
        // 균등 분포
        return Math.floor(random() * 45) + 1;
    }
  };

  // 6개가 될 때까지 생성
  let attempts = 0;
  while (numbers.size < 6 && attempts < 100) {
    const num = getWeightedNumber();
    if (num >= 1 && num <= 45) {
      numbers.add(num);
    }
    attempts++;
  }

  // 만약 6개 못 채우면 순차 추가
  let fallback = 1;
  while (numbers.size < 6) {
    if (!numbers.has(fallback)) {
      numbers.add(fallback);
    }
    fallback++;
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * 메인 생성 함수
 * 5세트의 로또 번호를 생성합니다.
 */
export function generateLottoSets(input: GeneratorInput): GeneratorResult {
  // 시드 조합: 생년월일 + 출생시간 + 성별 + 스타일 + 주간시드 + nonce
  const weeklySeed = getWeeklySeed();
  const weekString = getCurrentWeekString();

  const finalSeed = combineSeed(
    input.birthDate,
    input.birthTime,
    input.gender,
    input.style,
    weeklySeed,
    input.nonce || 0
  );

  // PRNG 초기화
  const random = mulberry32(finalSeed);

  // 5세트 생성
  const sets: LottoSet[] = [];

  for (let i = 0; i < 5; i++) {
    // 각 세트마다 약간 다른 시드로 PRNG 재초기화 (세트별 독립성)
    const setRandom = mulberry32(finalSeed + i * 12345);

    const numbers = generateSixNumbers(setRandom, input.style || "balanced");
    const vibe = getVibeForSet(i, finalSeed);

    sets.push({
      numbers,
      label: vibe.label,
      labelEn: vibe.labelEn,
      description: vibe.description,
    });
  }

  return {
    sets,
    weekString,
    seed: finalSeed,
  };
}

/**
 * 결과를 공유용 텍스트로 변환
 */
export function formatResultsForShare(result: GeneratorResult): string {
  let text = `🍀 이번 주 사주 로또 번호 (${result.weekString})\n\n`;

  result.sets.forEach((set, index) => {
    text += `${index + 1}. ${set.label}\n`;
    text += `   ${set.numbers.map((n) => n.toString().padStart(2, "0")).join("  ")}\n\n`;
  });

  text += `⚠️ 재미로만 즐겨주세요! 당첨을 보장하지 않습니다.\n`;
  text += `🔗 https://saju-number.com`;

  return text;
}
