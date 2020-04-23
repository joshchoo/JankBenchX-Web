export const faunaTimestampToDate = (ts: number) => {
  return new Date(ts / 1000);
};
