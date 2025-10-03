# Front-End Week 1: 반응형 네비게이션 바

순수 HTML/CSS/JS만으로 만든 **반응형 네비게이션 바**입니다.

## ✅ 기능

- 데스크톱: 로고 + 가로 메뉴
- 모바일(≤768px): 햄버거 버튼 노출, 클릭 시 메뉴 토글
- 호버 시 강조 색상

## 💡 구현 포인트

- `flex`로 좌우 정렬, `gap`으로 메뉴 간격
- 미디어쿼리(`@media (max-width: 768px)`)로 모바일 레이아웃 전환
- JS로 `.active` 클래스 토글하여 메뉴 열고/닫기

## 🔁 React + TypeScript 변환 계획

1. `document.querySelector`/`classList.toggle` → `useState`로 치환
2. `<a>` 토글 요소 → `<button>` + `aria-expanded`로 접근성 강화
3. CSS는 `Navbar.css`로 분리 후 `Navbar.tsx`에서 import
