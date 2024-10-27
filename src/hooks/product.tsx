import { getProductsFetcher } from '@/fetchers/product';
import { Product } from '@/models/product';
import { useProductQueryStore } from '@/stores/productQuery';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

export default function useProducts() {
  const productQuery = useProductQueryStore.use.productQuery();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['products', productQuery],
      queryFn: ({ pageParam }) =>
        getProductsFetcher({ cursor: pageParam, query: productQuery }),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.cursor,
      select: (data) => data.pages,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });

  const products: Product[] = data?.map((page) => page.results).flat() || [];
  const totalCount = data ? data[0].count : 0;

  return {
    products,
    totalCount,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
}
