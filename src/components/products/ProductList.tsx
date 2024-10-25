"use client";

import { twMerge } from "tailwind-merge";
import ProductItem from "./ProductItem";
import { FavoriteProduct, Product } from "@/models/product";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "../common/Spinner";
import { useAddFavorite } from "@/hooks/product";
import { useToastStore } from "@/stores/toast";

type Props = {
  className?: string;
  products: (Product | FavoriteProduct)[];
  isEditing?: boolean;
  selected?: number[];
  onSelect?: (id: number) => void;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetching?: boolean;
};

export default function ProductList({
  className,
  products,
  isEditing,
  selected,
  onSelect,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: Props) {
  const { ref, inView } = useInView({ threshold: 0 });
  const { mutateAsync } = useAddFavorite();
  const setToast = useToastStore.use.setToast();

  const handleAddFavorite = async (id: number) => {
    await mutateAsync({ id });
    setToast("상품을 추가했어요");
    setTimeout(() => setToast(null), 5000);
  };
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage && fetchNextPage();
    }
  }, [inView]);
  return (
    <div>
      <ul
        className={twMerge(
          "flex flex-col gap-3 p-4",
          isEditing ? "max-h-[calc(100%-62px)]" : "max-h-[calc(100%-102px)]",
          className
        )}
      >
        {products.map((item) => {
          const product = "product" in item ? item.product : item;
          const favoriteId = "id" in item ? item.id : null;
          const isAlarm = "isAlarm" in item && item.isAlarm;

          return (
            <ProductItem
              key={product.id}
              favoriteId={favoriteId}
              product={product}
              isAlarm={isAlarm}
              isEditing={isEditing}
              selected={selected}
              onSelect={onSelect}
              addFavorite={handleAddFavorite}
            />
          );
        })}
      </ul>
      <div ref={ref} />
      {isFetching && (
        <div className="flex justify-center items-center py-3 bg-platinum">
          <p className="text-gray">조회중...</p>
        </div>
      )}
    </div>
  );
}
