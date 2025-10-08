# Front-End Week 1: 툴팁(Tooltip) 효과

순수 **HTML/CSS**만으로 구현한 **툴팁(tooltip) UI 컴포넌트**입니다.  
`position`, `opacity`, `visibility`, `transform`을 활용해 **부드럽게 나타나는 말풍선 효과**를 구현했습니다.  
텍스트 위에 마우스를 올리면 설명이 자연스럽게 표시됩니다.

## ✅ 기능

- 마우스 **호버 시 툴팁 표시**
- 마우스가 벗어나면 **툴팁 숨김**
- 툴팁 위치를 **텍스트 위쪽 중앙**에 표시
- **부드러운 전환 효과** (`opacity`, `visibility`, `transition`)
- **삼각형 꼬리**를 `::after`로 구현하여 말풍선 형태 완성

## 💡 구현 포인트

- `.tooltip-container`에 `position: relative`를 적용해 툴팁 기준점 설정
- `.tooltip-content`는 `absolute`로 배치하여 트리거 위쪽에 표시
- `opacity` + `visibility` 조합으로 툴팁의 등장/사라짐 제어
- `transition`을 통해 자연스러운 페이드 인/아웃 연출
- `::after`로 꼬리를 만들어 시각적 완성도 향상

## 🖼️ 미리보기

(이미지 또는 GIF 추가 예정)
