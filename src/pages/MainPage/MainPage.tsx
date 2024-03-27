import React from 'react';
import { FilterInput } from '../../components/modules/FilterInput';
import { useFilterData, useGetData } from '../../hooks';
import { PodcastCards } from '../../components/modules/PodcastCards';

import './MainPageStyles.css';

export const MainPage = () => {
  const { data } = useGetData();
  const { searchValue, setSearchValue, cards } = useFilterData(data?.feed.entry);

  return (
    <div>
      <main className="main">
        <section className="filter">
          <FilterInput
            count={cards.length}
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Filter podcasts..."
          />
        </section>
        <section className="podcast-cards">{cards.length && <PodcastCards entries={cards} />}</section>
      </main>
    </div>
  );
};
