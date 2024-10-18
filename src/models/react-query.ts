export type InfiniteQueryResult<T> = {
  pageParams: (string | null)[];
  pages: T[];
};
