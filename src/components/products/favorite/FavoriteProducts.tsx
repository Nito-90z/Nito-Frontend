'use client';

import SelectHeader from '@/components/header/SelectHeader';
import Main from '@/components/subHeader/Main';
import { useEffect, useState } from 'react';
import NullProductList from './NullProductList';
import ProductList from '../ProductList';
import Button from '@/components/common/Button';
import { FavoriteProduct } from '@/models/product';
import Skeleton from '../Skeleton';
import useFavoriteProduct from '@/hooks/favoriteProduct';
import { useFavoriteQueryStore } from '@/stores/favoriteQuery';

export default function FavoriteProducts() {
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const resetFavoriteQuery = useFavoriteQueryStore.use.resetFavoriteQuery();
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    deleteFavoriteProduct,
  } = useFavoriteProduct();
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
  const handleDelete = async () => {
    if (selectedCount === 0) return;

    await deleteFavoriteProduct({ ids: selected });
    setSelected([]);
  };

  useEffect(() => {
    resetFavoriteQuery();
  }, []);
  if (isLoading) return <Skeleton />;
  return (
    <section className="h-full overflow-y-auto pb-4">
      {isEditing ? (
        <SelectHeader
          mainText={
            selectedCount === 0
              ? '상품 선택'
              : `${selectedCount}개의 상품 선택됨`
          }
          buttonText="완료"
          onClick={handleEditing}
        />
      ) : (
        <Main count={products.length} onEditing={() => setIsEditing(true)} />
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
        <div className="absolute -bottom-16 left-0 z-50 w-full bg-white p-5">
          <Button disabled={selectedCount === 0} onClick={handleDelete}>
            삭제
          </Button>
        </div>
      )}
    </section>
  );
}
