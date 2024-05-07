import React from 'react';
import { CounterChip, CounterChipProps } from '../../CounterChip';
import { Input, InputProps } from '../../Input';

type FilterInputProps = InputProps & CounterChipProps;

export const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, placeholder, count }) => {
  return (
    <div className="flex items-center gap-1.5 tablet:gap-4 mt-2">
      <CounterChip count={count} />
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};
