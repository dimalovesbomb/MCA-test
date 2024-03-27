type RetrieveAndCacheDataSetupObj<Res> = {
  getDataFn: () => Promise<Res>;
  localStorageKeys: {
    date: string;
    data: string;
  };
  callback?: (response: Res) => void;
};

export async function retrieveAndCacheData<Res>(setup: RetrieveAndCacheDataSetupObj<Res>) {
  const {
    getDataFn,
    localStorageKeys: { date, data },
    callback,
  } = setup;
  const response = await getDataFn();

  localStorage.setItem(date, JSON.stringify(Date.now()));
  localStorage.setItem(data, JSON.stringify(response));

  callback && callback(response);
}
