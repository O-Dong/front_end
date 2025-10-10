import { use, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';

// App 컴포넌트: 전체 페이지의 테마(다크/라이트)와 탭 상태를 관리
function App() {
  
  // 현재 테마 상태 ('light' 또는 'dark')
  // 로컬 스토리지에 저장된 이전 테마가 있으면 불러오고, 없으면 기본값 'light' 사용
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // 현재 활성화된 탭 이름 ('Profile', 'Settings', 'Billing' 중 하나)
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = ['Profile', 'Settings', 'Billing'];

  // 테마 전환 함수: light ↔ dark 토글
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // 현재 테마 반대로 변경
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 변경된 테마를 로컬 스토리지에 저장
  };

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
          {activeTab === 'Profile' && (
            <div>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Profile Information</h2>
              <p className='text-gray-700 dark:text-gray-300 mt-2'>유저의 프로필 정보가 여기에 표시됩니다.</p>
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
    </div>
  );
};

export default App
