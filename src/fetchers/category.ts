import { clientInstance } from '@/libs/instance.client';

export async function getCategoryFetcher(
  cursor: string | null,
  page_size: number = 20,
) {
  const cursor_query = cursor ? `cursor=${cursor}&` : '';

  return clientInstance
    .get(`/api/category?${cursor_query}page_size=${page_size}`)
    .then((res) => res.data);
}
