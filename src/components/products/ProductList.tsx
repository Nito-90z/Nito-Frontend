"use client";

import { twMerge } from "tailwind-merge";
import ProductItem from "./ProductItem";
import { FavoriteProduct, Product } from "@/models/product";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "../common/Spinner";
import Toast from "../common/Toast";
import { useAddFavorite } from "@/hooks/product";

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
  const [showToast, setShowToast] = useState(false);
  const { mutateAsync } = useAddFavorite();

  const handleAddFavorite = async (id: number) => {
    await mutateAsync({ id });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
          const isAlarm = "isAlarm" in item && item.isAlarm;

          return (
            <ProductItem
              key={product.id}
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
        <div className="flex justify-center items-center mb-6">
          <Spinner size={24} />
        </div>
      )}
      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-sm">
          <Toast text="상품을 추가했어요" />
        </div>
      )}
    </div>
  );
}
