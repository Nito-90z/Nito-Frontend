"use client";

import {
  getProductFetcher,
  getProductPriceFetcher,
  getRelatedProductsFetcher,
} from "@/fetchers/product";
import { useSuspenseQueries } from "@tanstack/react-query";
import Description from "./Description";
import DetailPrice from "./DetailPrice";
import RelatedProducts from "./RelatedProducts";

export default function DetailDataFetcher({ id }: { id: string }) {
  const productId = Number(id);

  const [product, prices, products] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["product", productId],
        queryFn: () => getProductFetcher(productId),
      },
      {
        queryKey: ["product", productId, "price_info"],
        queryFn: () => getProductPriceFetcher(productId),
      },
      {
        queryKey: ["product", productId, "related_product_list"],
        queryFn: () => getRelatedProductsFetcher(productId),
      },
    ],
  });

  return (
    <>
      <Description product={product.data} />
      <DetailPrice prices={prices.data} />
      <RelatedProducts products={products.data} />
    </>
  );
}
