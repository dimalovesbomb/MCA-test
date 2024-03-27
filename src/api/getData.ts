import { DetailsContents, OverviewDataRes } from '../types';

export const getOverviewData = async (): Promise<OverviewDataRes> => {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  return await res.json();
};

export const getDetailsData = async (podcastId: string): Promise<DetailsContents> => {
  const res = await fetch(
    `http://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`,
  );
  const json = await res.json();
  return JSON.parse(json.contents);
};
