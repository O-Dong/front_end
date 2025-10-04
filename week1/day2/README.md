# Front-End Week 1: 다크 모드 토글

순수 HTML/CSS/JS만으로 만든 **다크 모드 전환 기능**입니다.  
CSS 변수와 `localStorage`를 활용해 사용자의 테마 설정을 기억하고, 부드럽게 색상이 전환되도록 구현했습니다.

## ✅ 기능

- 버튼 클릭으로 **라이트 ↔ 다크 모드 전환**
- 전환 시 **CSS 변수(Custom Properties)** 자동 변경
- 선택한 테마 상태를 **`localStorage`**에 저장하여 새로고침 후에도 유지
- 배경색, 글자색, 버튼색 모두 **부드러운 트랜지션 효과**

## 💡 구현 포인트

- `:root`에 CSS 변수 선언 → `body.dark-mode` 클래스에서 덮어쓰기
- `classList.toggle('dark-mode')`로 테마 전환 제어
- `localStorage.getItem('theme')`으로 사용자 테마 상태 복원
- `transition`으로 색상 변경 시 자연스러운 애니메이션 효과

## 🖼️ 미리보기

## 🔁 React + TypeScript 변환 계획

1. `localStorage` 상태를 `useEffect`로 초기화 및 반영
2. `body.classList.toggle()` → 전역 `useState` 기반 상태 관리
3. 버튼 텍스트를 상태값(`theme`)에 따라 동적으로 변경
4. 스타일은 `ThemeToggle.css`로 분리, `ThemeToggle.tsx`에서 import
