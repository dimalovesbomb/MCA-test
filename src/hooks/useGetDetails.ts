import { useEffect, useState } from 'react';
import { getDetailsData } from '../api';
import { parse } from 'rss-to-json';
import { CachedRSSResponse, RSSResponse } from '../types';
import { isDateExpired, checkAndRemoveExpiredData, retrieveAndCacheData } from '../helpers';

const runGetDetails = async (podcastId = ''): Promise<CachedRSSResponse | void> => {
  try {
    const details = await getDetailsData(podcastId);
    const res: RSSResponse = await parse(details?.results[0].feedUrl || '');

    return { ...res, meta: { podcastId, loadedTimestamp: Date.now() } };
  } catch (e) {
    console.error(e);
  }
};

export const useGetDetails = (podcastId = '') => {
  const [details, setDetails] = useState<CachedRSSResponse>();

  useEffect(() => {
    const targetPodcastFromCache = localStorage.getItem(podcastId);
    const parsed: CachedRSSResponse = JSON.parse(targetPodcastFromCache || '{}');

    if (Object.keys(parsed).length && !isDateExpired(parsed.meta.loadedTimestamp)) {
      setDetails(parsed);
    } else {
      retrieveAndCacheData({
        getDataFn: () => runGetDetails(podcastId),
        localStorageKey: podcastId,
        callback: (response: CachedRSSResponse) => {
          setDetails(response);
          checkAndRemoveExpiredData();
        },
      });
    }
  }, []);

  return { details };
};
