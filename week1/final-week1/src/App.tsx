import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  
  //'light'또는 'dark' 값을 가질 테마 상태
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // 테마를 전환하는 함수
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 테마 설정을 로컬 스토리지에 저장
  };

  // 테마 상태가 변경될 때마다 html 문서의 클래스를 업데이트
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    }
    else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    // 전체 앱을 감싸는 div에 배경색 적용
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Navbar onToggleTheme={handleToggleTheme} />

      {/*여기에 앞으로 만들 다른 컴포넌트들이 위치할 메인 콘텐츠 영역*/}
      <main className='max-w-5xl mx-auto p-4'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
          메인 콘텐츠 영역
        </h1>
        <p className='text-gray-700 dark:text-gray-300 mt-2'>
          여기에 다양한 컴포넌트들을 추가할 예정입니다.
        </p>
      </main>
    </div>
  );
};

export default App
