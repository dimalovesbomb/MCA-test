import React, { ChangeEvent } from 'react';

export interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder = 'Type in' }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="inline-block w-60 h-8 px-2 rounded border border-primary-blue bg-primary-white"
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};
