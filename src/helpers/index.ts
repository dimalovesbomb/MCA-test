export const isDataExpired = (localStorageTime: string | null) => {
  const parsedLocalStorageTime = parseInt(JSON.parse(localStorageTime || '{}'));
  if (Number.isNaN(parsedLocalStorageTime)) {
    console.error('localStorageTime could not be parsed at isDataExpired');
    return true;
  }

  const lastTimeUpdated = new Date(parsedLocalStorageTime);
  const tomorrow = new Date(new Date(parsedLocalStorageTime).getTime() + 24 * 60 * 60 * 1000);
  const now = new Date();

  return lastTimeUpdated < now && now > tomorrow;
};
