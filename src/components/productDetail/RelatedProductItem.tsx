"use client";

import { Product } from "@/models/product";
import ProductImage from "../products/wishList/ProductImage";
import { convertDollarToWon } from "@/utils/currency-converter";
import Badge from "../common/Badge";
import { useRouter } from "next/navigation";
import CircleButton from "../common/CircleButton";
import PlusIcon from "../common/icons/PlusIcon";
import { useAddFavorite } from "@/hooks/product";
import { MouseEvent } from "react";
import { useToastStore } from "@/stores/toast";

export default function RelatedProductItem({ product }: { product: Product }) {
  const { id, image, title, presentPrice, isLowestPriceEver, discountRate } =
    product;
  const router = useRouter();
  const { mutateAsync } = useAddFavorite();
  const setToast = useToastStore.use.setToast();

  const handleClick = () => {
    router.push(`/product-list/product/${id}`);
  };
  const handleAddFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await mutateAsync({ id });
    setToast("상품을 추가했어요");
    setTimeout(() => setToast(null), 5000);
  };
  return (
    <div
      className="flex flex-col items-center gap-3 mr-3 text-sm cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <ProductImage
          src={image}
          alt={`${title} image`}
          size="md"
          className="w-[120px] h-[120px] object-cover"
        />
        <CircleButton
          size="sm"
          className="absolute right-2 top-2 bg-dark-gray"
          onClick={handleAddFavorite}
        >
          <PlusIcon size="sm" />
        </CircleButton>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-text line-clamp-2">{title}</h3>
        <div>
          <p className="text-black font-bold">$ {presentPrice}</p>
          <p className="text-secondary">{convertDollarToWon(presentPrice)}</p>
        </div>
        <div className="flex gap-[6px]">
          {isLowestPriceEver && <Badge direction="up">역대최저가</Badge>}
          {!!discountRate && (
            <Badge direction="down" icon>
              {discountRate}%
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
