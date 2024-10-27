'use client';

import NullProductList from './NullProductList';
import ProductList from './ProductList';
import CategoryDefault from '../subHeader/CategoryDefault';
import Skeleton from './Skeleton';
import { useRef } from 'react';
import useProducts from '@/hooks/product';

export default function Products() {
  const topRef = useRef<HTMLDivElement>(null);
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
    <>
      <div ref={topRef} />
      <CategoryDefault count={totalCount} topRef={topRef} />
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
    </>
  );
}
