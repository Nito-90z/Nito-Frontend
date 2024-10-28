'use client';

import ProductList from '../products/ProductList';
import SortOptions from '../subHeader/SortOptions';
import NullProductList from './NullProductList';
import Skeleton from '../products/Skeleton';
import useProducts from '@/hooks/product';

export default function SearchProducts() {
  const {
    products,
    totalCount,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useProducts();

  if (isLoading) return <Skeleton />;
  return (
    <div className="h-full max-h-[calc(100%-62px)] overflow-y-auto">
      <SortOptions className="p-4 pb-2" count={totalCount} />
      {products.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList
          products={products}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
        />
      )}
    </div>
  );
}
