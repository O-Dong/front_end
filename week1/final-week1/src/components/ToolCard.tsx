import React from 'react';
import type { Tool } from '../data/toolData';

interface ToolCardProps {
  tool: Tool;
  onCardClick: (tool: Tool) => void; // 클릭시 부모에게 tool 객체를 전달
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(tool)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {tool.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {tool.description}
        </p>

        <span
          className={`inline-block mt-4 px-3 py-1 text-sm font-semibold rounded-full ${tool.status === 'Stable'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}
        >
          {tool.status}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;