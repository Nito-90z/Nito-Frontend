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
import { notFound } from 'next/navigation';
import Footer from './Footer';

export default function DetailDataFetcher({ id }: { id: string }) {
  const productId = Number(id);
  const results = useSuspenseQueries({
    queries: [
      {
        queryKey: ['product', id],
        queryFn: () => getProductFetcher(productId),
      },
      {
        queryKey: ['product', id, 'price_info'],
        queryFn: () => getProductPriceFetcher(productId),
      },
      {
        queryKey: ['product', id, 'related_product_list'],
        queryFn: () => getRelatedProductsFetcher(productId),
      },
    ],
  });

  const isError = results.some((results) => results.isError);

  if (isError) notFound();

  const [product, prices, products] = results;
  return (
    <>
      <Description product={product.data} />
      <DetailPrice prices={prices.data} />
      <RelatedProducts products={products.data} />
      <Footer id={id} product={product.data} />
    </>
  );
}
