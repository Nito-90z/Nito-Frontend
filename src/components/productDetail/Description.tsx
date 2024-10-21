"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductFetcher } from "@/fetchers/product";
import ProductImage from "../products/wishList/ProductImage";
import Information from "./Information";

export default function Description({ id }: { id: string }) {
  const productId = Number(id);
  // productId가 number 타입인지 확인 후 not-found로 리다이렉트
  const { data: product } = useSuspenseQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductFetcher(productId),
  });

  return (
    <div className="p-4">
      <ProductImage
        src={product.image}
        alt={`${product.title} image`}
        size="lg"
        className="h-[295px] object-contain"
      />
      <Information product={product} />
    </div>
  );
}
