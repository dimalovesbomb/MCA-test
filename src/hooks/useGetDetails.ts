import { useEffect, useState } from 'react';
import { getDetails } from '../api';
import { parse } from 'rss-to-json';
import { RSSResponse } from '../types';

export const useGetDetails = (podcastId = '') => {
  const [details, setDetails] = useState<RSSResponse>();

  useEffect(() => {
    const runGetDetails = async () => {
      const details = await getDetails(podcastId);
      const res: RSSResponse = await parse(details?.results[0].feedUrl || '');
      setDetails(res);
    };

    runGetDetails();
  }, []);

  return { details };
};
