const sleep = (time: number) => new Promise((res) => setTimeout(res, time));

export const request = async <TData = any>(data: TData, isError = false) => {
  await sleep(500);

  if (isError) throw new Error('Request error');

  return data;
};
