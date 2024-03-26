import React, { ChangeEvent } from 'react';
import './InputStyles.css';

export interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder = 'Type in' }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input className="input-el" value={value} onChange={onChangeHandler} placeholder={placeholder} />;
};
