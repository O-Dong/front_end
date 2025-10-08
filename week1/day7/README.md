# Front-End Week 1: 드롭다운 메뉴 (Dropdown Menu)

순수 **HTML/CSS/JS**로 구현한 **드롭다운(dropdown) 메뉴 UI 컴포넌트**입니다.  
`position`, `display`, `hover`, `click event` 등을 활용해  
**마우스 호버 방식**과 **클릭 방식** 두 가지 동작 방식을 비교 구현했습니다.

## ✅ 기능

- **호버 방식:** 마우스를 올리면 하위 메뉴 표시
- **클릭 방식:** 클릭 시 하위 메뉴 표시 / 외부 클릭 시 닫힘
- **부드러운 전환 효과** (`display`, `box-shadow`, `transition`)
- 메뉴 항목별로 독립적으로 작동
- 구조가 단순해 확장 및 재사용 용이

## 💡 구현 포인트

- `.dropdown`에 `position: relative`를 적용해 하위 메뉴 기준점 설정
- `.dropdown-content`는 `absolute`로 배치하여 상위 메뉴 바로 아래에 표시
- **호버 방식:** CSS의 `:hover` 선택자를 활용해 순수 CSS로 제어
- **클릭 방식:** JS에서 `classList.toggle('show')`로 열림/닫힘 상태 제어
- `window.addEventListener('click')`로 외부 클릭 시 메뉴 자동 닫힘 처리
- `box-shadow`를 사용해 부드러운 입체감 표현

## 🖼️ 미리보기

<img width="676" height="407" alt="image" src="https://github.com/user-attachments/assets/66acc3cd-f0b5-4849-8c60-17615cbae090" />
<img width="688" height="402" alt="image" src="https://github.com/user-attachments/assets/40542204-7ebf-4d80-b1f8-19bd0f85b355" />
<img width="689" height="599" alt="image" src="https://github.com/user-attachments/assets/489d419c-8d24-49cc-abaf-70445d3c93c7" />

