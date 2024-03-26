import { DetailsContents, Root } from '../types';

export const getData = async (): Promise<Root> => {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  return await res.json();
};

export const getDetails = async (podcastId: string): Promise<DetailsContents> => {
  const res = await fetch(
    `http://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`,
  );
  const json = await res.json();
  return JSON.parse(json.contents);
};
