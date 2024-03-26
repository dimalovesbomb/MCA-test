import React from 'react';
import { FilterInput } from '../../modules/FilterInput';
import { useFilterData, useGetData } from '../../hooks';
import { PodcastCards } from '../../modules/PodcastCards';

import './MainPageStyles.css';

export const MainPage = () => {
  const { isSuccess, data } = useGetData();
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
        <section className="podcast-cards">{isSuccess && <PodcastCards entries={cards} />}</section>
      </main>
    </div>
  );
};
