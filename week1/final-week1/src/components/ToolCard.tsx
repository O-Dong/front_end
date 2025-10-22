import React from 'react';
import type { Tool } from '../data/toolData';

interface ToolCardProps {
  tool: Tool;
  onCardClick: (tool: Tool) => void; // 클릭시 부모에게 tool 객체를 전달
}

const statusMessage: Record<Tool['status'], string> = {
  Stable: '안정화 버전입니다. 프로덕션 환경에서 사용 가능합니다.',
  Beta: '베타 버전입니다. 일부 버그가 있을 수 있습니다.',
  Alpha: '알파 버전입니다. 테스트 목적으로만 사용하세요.',
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(tool)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {tool.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {tool.description}
        </p>

        <div className='relative inline-block mt-4 group'>
          {/*기존 뱃지*/}
          <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              tool.status === 'Stable' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}
          >
            {tool.status}
          </span>

          <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max
                       px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       dark:bg-gray-200 dark:text-gray-900" // 다크모드 툴팁 스타일
          >
            {statusMessage[tool.status]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;