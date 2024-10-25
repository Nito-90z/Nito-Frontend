'use client';

import {
  getProductFetcher,
  getProductPriceFetcher,
  getRelatedProductsFetcher,
} from '@/fetchers/product';
import { useSuspenseQueries } from '@tanstack/react-query';
import Description from './Description';
import DetailPrice from './DetailPrice';
import RelatedProducts from './RelatedProducts';
import Link from 'next/link';
import CircleButton from '../common/CircleButton';
import PlusIcon from '../common/icons/PlusIcon';
import { useAddFavorite } from '@/hooks/product';
import { useToastStore } from '@/stores/toast';
import { notFound } from 'next/navigation';

export default function DetailDataFetcher({ id }: { id: string }) {
  const productId = Number(id);
  const { mutateAsync } = useAddFavorite();
  const setToast = useToastStore.use.setToast();
  const results = useSuspenseQueries({
    queries: [
      {
        queryKey: ['product', productId],
        queryFn: () => getProductFetcher(productId),
      },
      {
        queryKey: ['product', productId, 'price_info'],
        queryFn: () => getProductPriceFetcher(productId),
      },
      {
        queryKey: ['product', productId, 'related_product_list'],
        queryFn: () => getRelatedProductsFetcher(productId),
      },
    ],
  });

  const handleAddFavorite = async () => {
    await mutateAsync({ id: productId });
    setToast('상품을 추가했어요', 5000);
  };

  const isError = results.some((results) => results.isError);

  if (isError) notFound();

  const [product, prices, products] = results;
  return (
    <>
      <Description product={product.data} />
      <DetailPrice prices={prices.data} />
      <RelatedProducts products={products.data} />
      <footer className="sticky bottom-0 z-50 flex w-full items-center gap-4 border-t border-border bg-white px-5 py-4">
        <Link
          href={product.data.affiliateUrl}
          target="_blank"
          className="w-full bg-brand py-[14px] text-center text-white"
        >
          구매하러가기
        </Link>
        <CircleButton
          size="lg"
          className="bg-dark-gray"
          onClick={handleAddFavorite}
        >
          <PlusIcon size="lg" />
        </CircleButton>
      </footer>
    </>
  );
}
