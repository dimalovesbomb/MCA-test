import { LocalStorageMeta } from '../types';
import { isDateExpired } from './isDateExpired';

type RetrieveAndCacheDataSetupObj<Res> = {
  getDataFn: () => Promise<Res | void>;
  localStorageKey: string;
  callback?: (response: Res) => void;
};

export async function retrieveAndCacheData<Res>(setup: RetrieveAndCacheDataSetupObj<Res>) {
  const { getDataFn, localStorageKey, callback } = setup;
  const response = await getDataFn();

  response && localStorage.setItem(localStorageKey, JSON.stringify(response));

  callback && response && callback(response);
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
