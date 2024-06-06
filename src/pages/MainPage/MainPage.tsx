import React from 'react';
import { FilterInput } from '../../components/modules/FilterInput';
import { useFilterData, useGetData } from '../../hooks';
import { PodcastCards } from '../../components/modules/PodcastCards';
import { Header } from '../../components/Header';

export const MainPage = () => {
  const { data } = useGetData();
  const { searchValue, setSearchValue, cards } = useFilterData(data?.feed.entry);

  return (
    <>
      <Header />
      <main className="flex flex-col mx-auto max-w-[1050px]">
        <section className="self-end mr-2">
          <FilterInput
            count={cards.length}
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Filter podcasts..."
          />
        </section>
        <section>{!!cards.length && <PodcastCards entries={cards} />}</section>
      </main>
    </>
  );
};
