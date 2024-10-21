"use client";

import { getProductPriceFetcher } from "@/fetchers/product";
import { useSuspenseQuery } from "@tanstack/react-query";
import PriceBox from "./PriceBox";

export default function DetailPrice({ id }: { id: string }) {
  const productId = Number(id);
  // productId가 number 타입인지 확인 후 not-found로 리다이렉트
  const { data: prices } = useSuspenseQuery({
    queryKey: ["product", productId, "price_info"],
    queryFn: () => getProductPriceFetcher(productId),
  });

  return (
    <div className="px-4 pb-4">
      <PriceBox prices={prices} />
    </div>
  );
}
