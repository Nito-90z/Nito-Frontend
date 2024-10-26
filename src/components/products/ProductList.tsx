'use client';

import { twMerge } from 'tailwind-merge';
import ProductItem from './ProductItem';
import {
  FavoriteProduct,
  FavoriteProductQuery,
  Product,
} from '@/models/product';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAddFavorite } from '@/hooks/product';
import useFavoriteProduct from '@/hooks/favoriteProduct';

type Props = {
  query?: FavoriteProductQuery;
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
  query,
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
  const { setFavoriteProductAlarm } = useFavoriteProduct(
    query || { page_size: 20, ordering: null },
  );

  const handleAddFavorite = async (id: number) => {
    await mutateAsync({ id });
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
        {products.map((item, index) => {
          const product = 'product' in item ? item.product : item;
          const favoriteId = 'id' in item ? item.id : null;
          const isAlarm = 'isAlarm' in item && item.isAlarm;

          return (
            <ProductItem
              key={product.id}
              priority={index < 10}
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
