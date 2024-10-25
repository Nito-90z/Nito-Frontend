'use client';

import NullProductList from './NullProductList';
import ProductList from './ProductList';
import { Product } from '@/models/product';
import CategoryDefault from '../subHeader/CategoryDefault';
import Skeleton from './Skeleton';
import { useRef } from 'react';
import useProducts from '@/hooks/product';

export default function Products() {
  const topRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useProducts();
  const products: Product[] = data?.map((page) => page.results).flat() || [];

  if (isLoading) return <Skeleton />;
  return (
    <>
      <div ref={topRef} />
      <CategoryDefault count={data ? data[0].count : 0} topRef={topRef} />
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
