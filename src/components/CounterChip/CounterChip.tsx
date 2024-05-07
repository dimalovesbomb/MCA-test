import React from 'react';

export interface CounterChipProps {
  count: number;
}
export const CounterChip: React.FC<CounterChipProps> = ({ count }) => {
  return (
    <div className="flex-center rounded-2xl bg-primary-blue w-12 h-8">
      <span className="text-primary-white">{count}</span>
    </div>
  );
};
