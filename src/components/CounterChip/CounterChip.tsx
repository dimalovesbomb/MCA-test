import React from 'react';
import './CounterChipStyles.css';

export interface CounterChipProps {
  count: number;
}
export const CounterChip: React.FC<CounterChipProps> = ({ count }) => {
  return (
    <div className="counter-chip-container">
      <span className="counter-chip-el">{count}</span>
    </div>
  );
};
