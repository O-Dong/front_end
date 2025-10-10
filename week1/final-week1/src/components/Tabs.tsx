import React from 'react';

// Tabs 컴포넌트 Props 타입 정의
// 상위(App) 컴포넌트로부터 전달받을 값과 함수들의 형태를 지정
interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// Tabs 컴포넌트
// 여러 개의 탭 버튼을 렌더링하고, 클릭 시 활성 탭 상태를 변경하는 역할
const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {/*탭 버튼들을 담는 네비게이션 컨테이너*/}
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {/*tabs 배열을 순회하면서 버튼 생성*/}
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
              ? 'border-blue-500 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:borde-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
export default Tabs;