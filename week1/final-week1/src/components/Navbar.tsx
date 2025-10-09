import React from "react";

// Navbar가 받을 Props의 타입 정의
// 부포 컴포넌트로부터 테마 전환 함수를 받아옴
interface NavbarProps {
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/*프로젝트 로고 또는 이름*/}
          <span className="text-2xl text-gray-800 dark:text-white font-semibold">
            DevPortfolio
          </span>

          {/*테마 전환 버튼*/}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle theme"
          >
            {/*아이콘*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/*다크 모드 아이콘*/}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="hidden dark:block"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
              {/* 라이트 모드 아이콘*/}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="block dark:hidden"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;