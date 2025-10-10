export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'TracerPid란 무엇인가요?',
    answer: 'TracerPid는 시스템의 프로세스 활동을 추적하고 모니터링하여 의심스러운 동작을 탐지하는 도구입니다. 실시간으로 시스템 호출을 감시하여 보안 위협을 식별합니다.'
  },
  {
    id: 2,
    question: '로그 탐지 원리는 어떻게 되나요?',
    answer: '로그 탐지는 시스템 및 애플리케이션에서 생성되는 로그 데이터를 수집하고, 미리 정의된 패턴이나 머신러닝 모델을 사용하여 비정상적이거나 악의적인 활동을 식별하는 원리로 동작합니다.'
  },
  {
    id: 3,
    question: '이 대시보드는 어떤 기술 스택을 사용하나요?',
    answer: '이 대시보드는 React, TypeScript, 그리고 Tailwind CSS를 사용하여 구축되었습니다. 빌드 도구로는 Vite를 사용하고 있습니다.',
  },
]