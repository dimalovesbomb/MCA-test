import { useEffect, useState } from 'react';
import { getOverviewData } from '../api';
import { LC_OVERVIEW_DATA_KEY, LC_OVERVIEW_EXP_DATE_KEY } from '../helpers/constants';
import { isDataExpired, retrieveAndCacheData } from '../helpers';
import type { Entry, OverviewDataRes } from '../types';

export const useGetData = () => {
  const [data, setData] = useState<OverviewDataRes | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const localStorageData = localStorage.getItem(LC_OVERVIEW_DATA_KEY);
    const localStorageTimestamp = localStorage.getItem(LC_OVERVIEW_EXP_DATE_KEY);
    if (!localStorageData || isDataExpired(localStorageTimestamp)) {
      retrieveAndCacheData({
        getDataFn: getOverviewData,
        localStorageKeys: {
          date: LC_OVERVIEW_EXP_DATE_KEY,
          data: LC_OVERVIEW_DATA_KEY,
        },
        callback: (response: OverviewDataRes) => {
          setData(response);
          setIsSuccess(true);
        },
      });
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
