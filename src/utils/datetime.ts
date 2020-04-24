export const faunaTimestampToDate = (ts: number) => {
  return new Date(ts / 1000);
};

export const formatDateTime = (date: Date) => {
  return `${date.toLocaleDateString('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`;
};
