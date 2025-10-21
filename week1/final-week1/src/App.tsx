import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Accordion from './components/Accordion';
import { faqs } from './data/faqData';
import Modal from './components/Modal';
import ToolCard from './components/ToolCard';
import { tools, type Tool } from './data/toolData';

// App 컴포넌트: 전체 페이지의 테마(다크/라이트)와 탭 상태를 관리
function App() {
  
  // 현재 테마 상태 ('light' 또는 'dark')
  // 로컬 스토리지에 저장된 이전 테마가 있으면 불러오고, 없으면 기본값 'light' 사용
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // 현재 활성화된 탭 이름 ('Profile', 'Settings', 'Billing' 중 하나)
  const [activeTab, setActiveTab] = useState('Tools');
  const tabs = ['Tools', 'FAQ', 'Billing'];

  // 모달 관리를 위한 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);


  // 테마 전환 함수: light ↔ dark 토글
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // 현재 테마 반대로 변경
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 변경된 테마를 로컬 스토리지에 저장
  };

  // 카드 클릭 및 모달 핸들러
  const handleCardClick = (tool: Tool) => {
    setSelectedTool(tool); // 클릭된 카드의 정보를 상태에 저장
    setIsModalOpen(true); // 모달을 열음
  }
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달을 닫음
    setSelectedTool(null); // 선택된 툴 정보를 초기화
  }

  // 테마 상태 변화 감지
  // theme 값이 바뀔 때마다 <html> 태그(classList)에 'dark' 클래스를 추가/삭제
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    }
    else {
      root.classList.remove('dark');
    }
  }, [theme]);


  // JSX 반환: 전체 페이지 UI 구성
  return (
    // 배경색은 theme 상태에 따라 Tailwind의 dark 모드로 자동 전환
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
      
      {/* 상단 네비게이션 바 (테마 전환 버튼 포함) */}
      <Navbar onToggleTheme={handleToggleTheme} />

      {/* 메인 콘텐츠 영역 */}
      <main className='max-w-5xl mx-auto p-4'>

        {/* 탭 컴포넌트: 현재 활성 탭 상태를 관리 */}
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* 탭 콘텐츠: activeTab 값에 따라 다른 내용 표시 */}
        <div className='mt-8'>
          {activeTab === 'Tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          )}
          {/* FAQ 탭 콘텐츠: 선택된 경우에만 표시되는 섹션 */}
          {activeTab === 'FAQ' && (
            <div>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>자주 묻는 질문 (FAQ)</h2>
              <Accordion items={faqs} />
            </div>
          )}
          
          {activeTab === 'Billing' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing Details</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">결제 정보 및 내역이 여기에 표시됩니다.</p>
            </div>
          )}
        </div>
      </main>

      {/*모달 컴포넌트 (항상 렌더링 하되, isOpen 상태에 따라 보임/숨김*/}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tool={selectedTool}
      />
    </div>
  );
};

export default App
