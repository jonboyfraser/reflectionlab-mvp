import React from 'react';

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
