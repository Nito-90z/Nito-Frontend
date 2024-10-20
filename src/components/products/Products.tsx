"use client";

import { getProductsFetcher } from "@/fetchers/product";
import { useProductQueryStore } from "@/stores/productQuery";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import NullProductList from "./NullProductList";
import ProductList from "./ProductList";
import { Product } from "@/models/product";
import CategoryDefault from "../subHeader/CategoryDefault";
import Skeleton from "./Skeleton";

export default function Products() {
  const productQuery = useProductQueryStore.use.productQuery();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["products", productQuery],
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
    <>
      <CategoryDefault
        className="sticky top-0"
        count={data ? data[0].count : 0}
      />
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
