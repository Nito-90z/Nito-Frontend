'use client';

import { useProductQueryStore } from '@/stores/productQuery';
import ProductList from '../products/ProductList';
import SortOptions from '../subHeader/SortOptions';
import NullProductList from './NullProductList';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { getProductsFetcher } from '@/fetchers/product';
import { Product } from '@/models/product';
import Skeleton from '../products/Skeleton';

export default function SearchProducts() {
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

  if (isLoading) return <Skeleton />;
  return (
    <div className="h-full max-h-[calc(100%-62px)] overflow-y-auto">
      <SortOptions className="p-4 pb-2" count={data ? data[0].count : 0} />
      {products.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList
          products={products}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          className="max-h-none"
        />
      )}
    </div>
  );
}
