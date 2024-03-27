import { useEffect, useState } from 'react';
import { getDetailsData } from '../api';
import { parse } from 'rss-to-json';
import { RSSResponse } from '../types';
import { isDataExpired, retrieveAndCacheData } from '../helpers';
import { LC_DETAILS_DATA_KEY, LS_DETAILS_EXP_DATE_KEY } from '../helpers/constants';

const runGetDetails = async (podcastId = '') => {
  const details = await getDetailsData(podcastId);
  const res: RSSResponse = await parse(details?.results[0].feedUrl || '');

  return res;
};

export const useGetDetails = (podcastId = '') => {
  const [details, setDetails] = useState<RSSResponse>();

  useEffect(() => {
    const localStorageData = localStorage.getItem(LC_DETAILS_DATA_KEY);
    const localStorageTimestamp = localStorage.getItem(LS_DETAILS_EXP_DATE_KEY);
    if (!localStorageData || isDataExpired(localStorageTimestamp)) {
      retrieveAndCacheData({
        getDataFn: () => runGetDetails(podcastId),
        localStorageKeys: {
          date: LS_DETAILS_EXP_DATE_KEY,
          data: LC_DETAILS_DATA_KEY,
        },
        callback: (response: RSSResponse) => {
          setDetails(response);
        },
      });
    } else {
      setDetails(JSON.parse(localStorageData || ''));
    }
  }, []);

  return { details };
};
