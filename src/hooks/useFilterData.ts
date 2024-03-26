import type { Entry } from '../types';
import { useState, useDeferredValue, useMemo } from 'react';

export const useFilterData = (entries?: Entry[]) => {
  const [searchValue, setSearchValue] = useState('');
  const deferredSearchValue = useDeferredValue(searchValue);

  const filteredCards = useMemo(() => {
    if (deferredSearchValue) {
      return (
        entries?.filter(
          (card) =>
            card['im:name'].label.toLowerCase().includes(deferredSearchValue) ||
            card['im:artist'].label.toLowerCase().includes(deferredSearchValue),
        ) || []
      );
    }

    return entries || [];
  }, [deferredSearchValue, entries]);

  return { searchValue, setSearchValue, cards: filteredCards };
};
