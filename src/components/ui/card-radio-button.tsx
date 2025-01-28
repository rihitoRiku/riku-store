import React, { useState } from 'react';

interface CardRadioButtonProps {
  options: { id: number; label: string; imageUrl?: string }[];
  name: string;
  onChange: (selectedId: number) => void;
}

const CardRadioButton: React.FC<CardRadioButtonProps> = ({ options, name, onChange }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedId(id);
    onChange(id);
  };

  return (
    <div className="flex space-x-3">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => handleSelect(option.id)}
          className={`cursor-pointer border rounded-md py-1 px-3 min-w-14 ${
            selectedId === option.id ? 'border-custom-peach' : 'border-custom-cream dark:border-zinc-700'
          }`}
        >
          {option.imageUrl && (
            <img src={option.imageUrl} alt={option.label} className="w-24 h-24 object-cover rounded-md mb-2" />
          )}
          <div className="text-center">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CardRadioButton;