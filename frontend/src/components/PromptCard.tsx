import React from 'react';

interface PromptCardProps {
  promptText: string;
  onClick: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ promptText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 text-left border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
    >
      {promptText}
    </button>
  );
};

export default PromptCard;
