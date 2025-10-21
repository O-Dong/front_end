# 🌙 DevPortfolio

> ⏰ Last Updated: 2025-10-09

React + TypeScript + Tailwind CSS로 만든 개인 포트폴리오 프로젝트입니다.  
매주 새로운 UI 컴포넌트와 기능을 추가하며, 프론트엔드 학습 과정을 기록합니다.

## 🗓️ 주요 기능 (구현 완료)

- **다크/라이트 모드 테마 전환** — _2025-10-09 구현 완료_
- **메인 콘텐츠 영역에 탭 추가** — _2025-10-10 구현 완료_
- **FAQ 탭 영역에 아코디언 추가** — _2025-10-10 구현 완료_
- **Tools 탭 영역에 카드 모달 추가** — _2025-10-21 구현 완료_

## 🔧 기술 스택

- **Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## 🧠 트러블슈팅

- Tailwind CSS `dark:` 클래스가 작동하지 않는 문제 해결
  - `tailwind.config.js`에 `darkMode: 'class'` 설정 필요
  - `postcss.config.js` 파일 생성 필요
  - `index.css`에 `@tailwind` directives 추가 필요

## 📄 라이선스

MIT
