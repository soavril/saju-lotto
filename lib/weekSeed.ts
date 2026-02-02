/**
 * ISO 주차 계산 유틸리티
 * 매주 다른 결과를 생성하기 위해 사용됩니다.
 */

/**
 * 주어진 날짜의 ISO 주차 번호를 반환합니다.
 * ISO 8601 기준: 월요일 시작, 첫 번째 목요일이 포함된 주가 1주차
 */
export function getISOWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/**
 * 주어진 날짜의 ISO 주차 연도를 반환합니다.
 * (12월 마지막 주가 다음 해의 1주차일 수 있음)
 */
export function getISOWeekYear(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  return d.getUTCFullYear();
}

/**
 * 현재 주차 정보를 한국어 문자열로 반환합니다.
 * 예: "2월 첫째주"
 */
export function getCurrentWeekString(timezone: string = "Asia/Seoul"): string {
  // 한국 시간 기준으로 현재 날짜 계산
  const now = new Date();
  const koreaTime = new Date(
    now.toLocaleString("en-US", { timeZone: timezone })
  );

  const month = koreaTime.getMonth() + 1; // 0-indexed
  const date = koreaTime.getDate();

  // 해당 월의 몇째주인지 계산
  const weekOfMonth = Math.ceil(date / 7);

  const weekNames = ["", "첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];

  return `${month}월 ${weekNames[weekOfMonth]}`;
}

/**
 * 현재 주차 시드를 숫자로 반환합니다.
 */
export function getWeeklySeed(timezone: string = "Asia/Seoul"): number {
  const now = new Date();
  const koreaTime = new Date(
    now.toLocaleString("en-US", { timeZone: timezone })
  );

  const year = getISOWeekYear(koreaTime);
  const week = getISOWeekNumber(koreaTime);

  return year * 100 + week; // 예: 202605
}
