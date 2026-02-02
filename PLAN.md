# 사주 로또 번호 생성기 - PLAN.md

## Product Story

사주 로또 번호 생성기는 생년월일을 기반으로 매주 새로운 로또 번호를 제안하는 **무료 오락 서비스**입니다. 한국의 전통 사주 명리학에서 영감을 받아, 재미있게 번호를 생성합니다. 매주 달라지는 "주간 기운"으로 재방문을 유도하고, 공유하기 쉬운 결과로 바이럴을 만듭니다. **절대로 당첨 확률을 높이거나 예측하지 않습니다.**

---

## Persona Alignment Sign-Off

### ✅ Persona A — Senior Full-Stack Engineer
- [x] Seeded PRNG (mulberry32) 사용으로 동일 입력 시 재현 가능
- [x] Next.js App Router + TypeScript 기반, 서버 컴포넌트 활용
- [x] 외부 API 없음, 모든 로직 클라이언트 사이드
- [x] 개인정보 서버 저장 없음 - 보안 리스크 최소화

### ✅ Persona B — Senior Growth Marketer
- [x] "확률", "예측", "당첨 보장" 문구 전면 배제
- [x] 매주 바뀌는 "주간 기운"으로 재방문 유도
- [x] Privacy Policy, Disclaimer 페이지로 AdSense 심사 대비
- [x] FAQ 섹션 + Schema.org 마크업으로 SEO 강화

### ✅ Persona C — Senior UX/UI Designer (고연령층 최적화)
- [x] 최소 폰트 18px, 버튼 20px+ 적용
- [x] 터치 타겟 최소 48px 보장
- [x] 한 화면에 하나의 행동 원칙
- [x] 명확한 한글 라벨, 직관적 버튼 텍스트
- [x] 높은 대비 색상, 큰 로또 공 디자인

---

## Information Architecture (IA)

| Route | Purpose |
|-------|---------|
| `/` | 홈: 입력 폼 + 생성 결과 + FAQ |
| `/about` | 서비스 소개 + 이용 방법 |
| `/privacy-policy` | 개인정보처리방침 (AdSense 쿠키 명시) |
| `/disclaimer` | 면책조항 (오락 목적 강조) |
| `/contact` | 문의하기 |
| `/sitemap.xml` | 자동 생성 사이트맵 |
| `/robots.txt` | 크롤러 규칙 |

---

## Input Specification

| Field | Type | Required | Default |
|-------|------|----------|---------|
| birthDate | date picker | Yes | — |
| birthTime | time picker | No | null |
| gender | select (남성/여성/건너뛰기) | No | "skip" |
| style | select (균형/안정/도전) | No | "balanced" |

---

## Output Specification

- **5세트** 번호 (각 6개, 1-45, 오름차순 정렬)
- 각 세트에 포함:
  - 한글 라벨 (예: "안정의 기운")
  - 영문 라벨 (예: "Steady Luck")
  - 1줄 바이브 설명 (확률 언급 없음)
- 복사/공유 기능

---

## Copywriting Rules

### ✅ 허용
- "재미로 뽑아보세요"
- "이번 주의 기운"
- "사주 영감을 담은 번호"
- "엔터테인먼트 목적"

### ❌ 금지
- "당첨 확률 높은"
- "예측 번호"
- "이 번호로 당첨"
- "크게 베팅하세요"

---

## Generator Algorithm

```
baseSeed = hash(birthDate + birthTime + gender + style)
weeklySeed = baseSeed + (ISOYear * 100 + ISOWeek)
finalSeed = weeklySeed + nonce

PRNG: mulberry32(finalSeed)
```

- 동일 입력 + 같은 주 = 동일 결과
- "다른 번호 뽑기" = nonce + 1

---

## File Structure

```
saju-lotto/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 (생성기)
│   ├── about/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── disclaimer/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── Generator/
│   │   ├── InputForm.tsx
│   │   ├── ResultCard.tsx
│   │   ├── ResultSkeleton.tsx
│   │   └── ShareBlock.tsx
│   └── FAQ/
│       └── FAQSection.tsx
├── lib/
│   ├── prng.ts             # mulberry32 구현
│   ├── weekSeed.ts         # ISO 주차 계산
│   ├── vibes.ts            # 라벨/설명 풀
│   └── generator.ts        # 메인 생성 로직
└── public/
    └── (이미지 등)
```

---

## SEO Checklist

- [x] 페이지별 고유 title, description
- [x] Open Graph 메타 태그
- [x] Twitter 카드 메타 태그
- [x] canonical URL 설정
- [x] sitemap.xml 자동 생성
- [x] robots.txt 설정
- [x] FAQ Schema.org 마크업
- [x] 시맨틱 HTML (main, article, section)
- [x] 모바일 최적화

---

## AdSense Readiness Checklist

- [x] Privacy Policy 페이지 (쿠키, AdSense 명시)
- [x] Disclaimer 페이지 (오락 목적 강조)
- [x] Contact 페이지
- [x] About 페이지 (서비스 목적 설명)
- [x] 도박 조장 문구 없음
- [x] 충분한 오리지널 콘텐츠
- [x] 명확한 네비게이션

---

## QA Checklist

| Case | Expected |
|------|----------|
| 출생 시간 미입력 | 정상 생성 |
| 미래 날짜 선택 | 선택 불가 (max 제한) |
| 동일 입력 + 동일 주 | 동일 결과 |
| "다른 번호 뽑기" | 새로운 5세트 |
| 복사 버튼 | 클립보드 복사 성공 |
| 모바일 공유 | Web Share API 또는 복사 폴백 |

---

## Phase 2 Ideas

1. **저장 기록**: 로컬스토리지에 지난 주 번호 저장
2. **동적 OG 이미지**: 사용자 번호가 담긴 이미지 생성
3. **주간 알림**: 이메일/푸시로 새 번호 알림 (opt-in)
4. **다크 모드**: 시스템 설정 연동
5. **다국어**: 영문 UI 지원

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables + Tailwind (기본)
- **Font**: Noto Sans KR
- **Hosting**: Vercel (예정)

---

*Last updated: 2026-02-02*
