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
import Link from "next/link";
import CircleButton from "../common/CircleButton";
import PlusIcon from "../common/icons/PlusIcon";
import { useAddFavorite } from "@/hooks/product";

export default function DetailDataFetcher({ id }: { id: string }) {
  const productId = Number(id);
  const { mutate } = useAddFavorite();
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
      <footer className="sticky bottom-0 flex items-center gap-4 px-5 py-4 w-full border-t border-border bg-white z-50">
        <Link
          href={product.data.affiliateUrl}
          target="_blank"
          className="text-center py-[14px] w-full bg-brand text-white"
        >
          구매하러가기
        </Link>
        <CircleButton
          size="lg"
          className="bg-dark-gray"
          onClick={() => mutate({ id: productId })}
        >
          <PlusIcon size="lg" />
        </CircleButton>
      </footer>
    </>
  );
}
