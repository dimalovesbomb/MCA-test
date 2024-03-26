import { useEffect, useState } from 'react';
import { getData } from '../api';
import { LOCALSTORAGE_DATA_KEY, LOCALSTORAGE_EXP_DATE_KEY } from '../helpers/constants';
import { isDataExpired } from '../helpers';
import type { Entry, Root } from '../types';

export const useGetData = () => {
  const [data, setData] = useState<Root | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    async function retrieveAndSaveData() {
      const response = await getData();

      localStorage.setItem(LOCALSTORAGE_EXP_DATE_KEY, JSON.stringify(Date.now()));
      localStorage.setItem(LOCALSTORAGE_DATA_KEY, JSON.stringify(response));
      setData(response);
      setIsSuccess(true);
    }

    const localStorageData = localStorage.getItem(LOCALSTORAGE_DATA_KEY);
    const localStorageTimestamp = localStorage.getItem(LOCALSTORAGE_EXP_DATE_KEY);
    if (!localStorageData || isDataExpired(localStorageTimestamp)) {
      retrieveAndSaveData();
    } else {
      setData(JSON.parse(localStorageData || ''));
      setIsSuccess(true);
    }
  }, []);

  const findPodcast = (id: string): Entry | undefined => {
    return data?.feed.entry.find((podcast) => podcast.id.attributes?.['im:id'] === id);
  };

  return {
    data,
    isSuccess,
    findPodcast,
  };
};
