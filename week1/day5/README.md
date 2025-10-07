# Front-End Week 1: 모달 컴포넌트

순수 **HTML/CSS/JS**만으로 만든 **모달(Modal) UI 컴포넌트**입니다.  
`opacity`, `visibility`, `transform`을 활용하여 부드러운 페이드 인/아웃과 슬라이드 업 애니메이션을 구현했습니다.  
버튼 클릭으로 모달을 열고, 닫기 버튼 또는 배경 클릭으로 닫을 수 있습니다.

## ✅ 기능

- 버튼 클릭 시 **모달창 열기**
- 닫기 버튼(`×`) 클릭 시 **모달 닫기**
- 배경 영역 클릭 시 **모달 닫기**
- **부드러운 전환 효과** (`opacity`, `transform`, `transition`)
- 모달 중앙 정렬 및 반투명 배경 처리

## 💡 구현 포인트

- `.modal-overlay`를 `fixed`로 설정하여 전체 화면 덮기
- `display: flex` + `justify-content: center` + `align-items: center`로 중앙 정렬
- `opacity`와 `visibility`로 모달 표시 상태 제어
- `transform: translateY()`로 등장 애니메이션 구현
- `event.target === modalOverlay` 조건으로 배경 클릭 시만 닫히도록 처리

## 🖼️ 미리보기

(이미지 또는 GIF 추가 예정)
