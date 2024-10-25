'use client';

import ProductList from '../products/ProductList';
import SortOptions from '../subHeader/SortOptions';
import NullProductList from './NullProductList';
import { Product } from '@/models/product';
import Skeleton from '../products/Skeleton';
import useProducts from '@/hooks/product';

export default function SearchProducts() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useProducts();
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
