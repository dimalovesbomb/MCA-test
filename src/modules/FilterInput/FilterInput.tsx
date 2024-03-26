import React from 'react';
import { CounterChip, CounterChipProps } from '../../components/CounterChip';
import { Input, InputProps } from '../../components/Input';
import './FilterInputStyles.css';

type FilterInputProps = InputProps & CounterChipProps;

export const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, placeholder, count }) => {
  return (
    <div className="filter-input-container">
      <CounterChip count={count} />
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};
