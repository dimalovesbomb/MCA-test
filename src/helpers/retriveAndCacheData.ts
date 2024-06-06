import { LocalStorageMeta } from '../types';
import { isDateExpired } from './isDateExpired';
import { LC_QUOTA_EXCEEDED_ERROR } from './constants';

type RetrieveAndCacheDataSetupObj<Res> = {
  getDataFn: () => Promise<Res | void>;
  localStorageKey: string;
  callback?: (response: Res) => void;
  onError?: (e: unknown) => void;
};

function setItemToLocalStorage<T>(localStorageKey: string, data: T) {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  } catch (e: DOMException | unknown) {
    if (e instanceof DOMException && e.name === LC_QUOTA_EXCEEDED_ERROR) {
      console.log('!!! LocalStorage is full, removing the oldest data !!!');

      const timestampAndPodcastIdMap = Object.keys(localStorage).reduce(
        (acc, currKey) => {
          const currentObj = JSON.parse(localStorage.getItem(currKey) || '{}');

          if (currentObj.meta.podcastId) {
            acc[currentObj.meta.loadedTimestamp] = currentObj.meta.podcastId;
          }

          return acc;
        },
        {} as Record<string, string>,
      );
      const oldestPodcastTimestamp = Object.keys(timestampAndPodcastIdMap)
        .map((str) => parseInt(str))
        .sort((a, b) => a - b)[0];

      localStorage.removeItem(timestampAndPodcastIdMap[oldestPodcastTimestamp]);
      console.log(`!!! Removed data for podcast with id of ${timestampAndPodcastIdMap[oldestPodcastTimestamp]} !!!`);
      // try to save again
      setItemToLocalStorage(localStorageKey, data);
    } else {
      console.log(e);
    }
  }
}

export async function retrieveAndCacheData<Res>(setup: RetrieveAndCacheDataSetupObj<Res>) {
  const { getDataFn, localStorageKey, callback, onError } = setup;
  try {
    const response = await getDataFn();
    response && setItemToLocalStorage(localStorageKey, response);
    callback && response && callback(response);
  } catch (e) {
    onError && onError(e);
  }
}

export const checkAndRemoveExpiredData = () => {
  Object.keys(localStorage).forEach((key) => {
    const item = localStorage.getItem(key);
    const parsed: unknown & LocalStorageMeta = JSON.parse(item || '{}');

    if (Object.keys(parsed).length && parsed.meta?.loadedTimestamp && isDateExpired(parsed.meta.loadedTimestamp)) {
      localStorage.removeItem(key);
    }
  });
};
