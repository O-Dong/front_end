import React, { useState } from 'react';
import type { FaqItem } from '../data/faqData';

// Accordion 컴포넌트 Props 타입 정의
// FAQ 아이템 목록(items)을 상위 컴포넌트로부터 전달받음
interface AccordionProps {
  items: FaqItem[];
}

// Accordion 컴포넌트
// FAQ 리스트를 아코디언 형태로 표시
// 각 항목을 클릭하면 답변이 열리고, 다시 클릭하면 닫히는 구조
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  // 현재 열려 있는 항목의 id (없으면 null)
  const [openId, setOpenId] = useState<number | null>(null);
  // 특정 항목 클릭 시 토글하는 함수
  // 이미 열린 항목을 다시 클릭하면 닫히고(null), 다른 항목 클릭 시 그 항목이 열림
  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // JSX 렌더링: FAQ 목록을 순회하며 아코디언 구조 생성
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 dark:border-gray-700">
          {/* 질문 영역 (클릭 가능한 버튼) */}
          <h2>
            <button
              type="button"
              className="flex justify-between items-center w-full py-5 font-medium text-left text-gray-800 dark:text-white"
              onClick={() => handleToggle(item.id)}
            >
              {/* 질문 텍스트 */}
              <span>
                {item.question}</span>
              {/* ▼ 화살표 아이콘 (열릴 때 회전) */}
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${openId === item.id ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </h2>
        
          {/* 답변 영역 (해당 항목이 열려 있을 때만 표시) */}
          {openId === item.id && (
            <div className="pb-5 text-gray-600 dark:text-gray-300">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;