"use client";

import { getRelatedProductsFetcher } from "@/fetchers/product";
import { useSuspenseQuery } from "@tanstack/react-query";
import RelatedProductItem from "./RelatedProductItem";
import Carousel from "../common/Carousel";

export default function RelatedProducts({ id }: { id: string }) {
  const productId = Number(id);
  const { data: products } = useSuspenseQuery({
    queryKey: ["product", productId, "related_product_list"],
    queryFn: () => getRelatedProductsFetcher(productId),
  });

  return (
    <div className="flex flex-col gap-3 p-4 border-t-4 border-border">
      <h3 className="font-bold text-black leading-7">
        해당 상품과 비슷한 상품
      </h3>
      <Carousel>
        {products.map((product) => (
          <RelatedProductItem key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}
