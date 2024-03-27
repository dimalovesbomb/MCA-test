import { useEffect, useState } from 'react';
import { getOverviewData } from '../api';
import { LC_OVERVIEW_DATA_KEY } from '../helpers/constants';
import { checkAndRemoveExpiredData, isDateExpired, retrieveAndCacheData } from '../helpers';
import { CachedOverviewData, Entry } from '../types';

export const useGetData = () => {
  const [data, setData] = useState<CachedOverviewData | null>(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem(LC_OVERVIEW_DATA_KEY);
    const parsedLSData: CachedOverviewData = JSON.parse(localStorageData || '{}');

    if (Object.keys(parsedLSData).length && !isDateExpired(parsedLSData?.meta?.loadedTimestamp)) {
      setData(parsedLSData);
    } else {
      retrieveAndCacheData({
        getDataFn: getOverviewData,
        localStorageKey: LC_OVERVIEW_DATA_KEY,
        callback: (response: CachedOverviewData) => {
          setData(response);
          checkAndRemoveExpiredData();
        },
      });
    }
  }, []);

  const findPodcast = (id: string): Entry | undefined => {
    return data?.feed.entry.find((podcast) => podcast.id.attributes?.['im:id'] === id);
  };

  return {
    data,
    findPodcast,
  };
};
