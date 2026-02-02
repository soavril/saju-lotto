/**
 * Mulberry32 - 간단하고 빠른 32비트 시드 기반 PRNG
 * 동일한 시드에서 항상 동일한 결과를 생성합니다.
 */
export function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * 문자열을 숫자 해시로 변환
 * 생년월일 등의 문자열 입력을 시드로 사용하기 위함
 */
export function stringToHash(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return Math.abs(hash);
}

/**
 * 여러 값을 결합하여 단일 시드 생성
 */
export function combineSeed(...values: (string | number | null | undefined)[]): number {
  const combined = values
    .filter((v) => v !== null && v !== undefined)
    .map((v) => String(v))
    .join("|");

  return stringToHash(combined);
}
