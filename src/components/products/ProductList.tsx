'use client';

import { twMerge } from 'tailwind-merge';
import ProductItem from './ProductItem';
import { FavoriteProduct, Product } from '@/models/product';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSetFavoriteProduct } from '@/hooks/favoriteProduct';

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
  const { addFavoriteProduct, setFavoriteProductAlarm } =
    useSetFavoriteProduct();

  const handleAddFavorite = async (id: number) => {
    await addFavoriteProduct({ id });
  };
  const handleIsAlarm = (id: number, isAlarm: boolean) => {
    setFavoriteProductAlarm({ id, isAlarm });
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
          'flex flex-col gap-3 p-4',
          isEditing ? 'max-h-[calc(100%-62px)]' : 'max-h-[calc(100%-102px)]',
          className,
        )}
      >
        {products.map((item) => {
          const product = 'product' in item ? item.product : item;
          const favoriteId = 'id' in item ? item.id : null;
          const isAlarm = 'isAlarm' in item && item.isAlarm;

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
              setIsAlarm={handleIsAlarm}
            />
          );
        })}
      </ul>
      <div ref={ref} />
      {isFetching && (
        <div className="flex items-center justify-center bg-platinum py-3">
          <p className="text-gray">조회중...</p>
        </div>
      )}
    </div>
  );
}
