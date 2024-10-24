"use client";

import SelectHeader from "@/components/header/SelectHeader";
import Main from "@/components/subHeader/Main";
import { useState } from "react";
import NullProductList from "./NullProductList";
import ProductList from "../ProductList";
import Button from "@/components/common/Button";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import {
  FavoriteProduct,
  FavoriteProductQuery,
  Ordering,
} from "@/models/product";
import { getFavoriteProductsFetcher } from "@/fetchers/product";
import Skeleton from "../Skeleton";

export default function FavoriteProducts() {
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [query, setQuery] = useState<FavoriteProductQuery>({
    page_size: 20,
    ordering: null,
  });
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["favorite_products", query],
      queryFn: ({ pageParam }) =>
        getFavoriteProductsFetcher({ cursor: pageParam, query }),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.cursor,
      select: (data) => data.pages,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });
  const selectedCount = selected.length;
  const products: FavoriteProduct[] =
    data?.map((page) => page.results).flat() || [];

  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };
  const handleEditing = () => {
    setIsEditing((prev) => !prev);
    setSelected([]);
  };
  const handleDelete = () => {
    if (selectedCount === 0) return;
    // API : 찜한 상품 목록 업데이트
    setSelected([]);
  };
  const handleOrdering = (value: Ordering) => {
    setQuery((prev) => ({ ...prev, ordering: value }));
  };

  if (isLoading) return <Skeleton />;
  return (
    <section className="pb-4 h-full overflow-y-auto">
      {isEditing ? (
        <SelectHeader
          mainText={
            selectedCount === 0
              ? "상품 선택"
              : `${selectedCount}개의 상품 선택됨`
          }
          buttonText="완료"
          onClick={handleEditing}
        />
      ) : (
        <Main
          count={products.length}
          query={query}
          onEditing={() => setIsEditing(true)}
          onChangeOrdering={handleOrdering}
        />
      )}
      {products.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList
          products={products}
          isEditing={isEditing}
          selected={selected}
          onSelect={handleSelect}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
        />
      )}
      {isEditing && (
        <div className="z-50 absolute -bottom-16 p-5 left-0 w-full bg-white">
          <Button disabled={selectedCount === 0} onClick={handleDelete}>
            삭제
          </Button>
        </div>
      )}
    </section>
  );
}
