import { CachedOverviewData, DetailsContents, OverviewDataRes } from '../types';

export const getOverviewData = async (): Promise<CachedOverviewData | void> => {
  try {
    const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
    const parsed: OverviewDataRes = await res.json();
    return { ...parsed, meta: { loadedTimestamp: Date.now() } };
  } catch (e) {
    console.error(e);
  }
};

export const getDetailsData = async (podcastId: string): Promise<DetailsContents | void> => {
  try {
    const res = await fetch(
      `http://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`,
    );
    const json = await res.json();
    return JSON.parse(json.contents);
  } catch (e) {
    console.error(e);
  }
};
