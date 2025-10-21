import React from 'react';
import type { Tool } from '../data/toolData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: Tool | null; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, tool }) => {
  // isOpen이 false거나 tool 데이터가 없으면 아무것도 렌더링하지 않음
  if (!isOpen || !tool) return null;

  return (
    // 배경 오버레이
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      {/*모달 본문*/}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않게 함
      >
        {/*닫기 버튼*/}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {tool.name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {tool.details}
        </p>
      </div>
    </div>
  );
};

export default Modal;