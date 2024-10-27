'use client';

import { Product } from '@/models/product';
import ProductImage from '../products/ProductImage';
import { convertDollarToWon } from '@/utils/currency-converter';
import Badge from '../common/Badge';
import { useRouter } from 'next/navigation';
import CircleButton from '../common/CircleButton';
import PlusIcon from '../common/icons/PlusIcon';
import { useAddFavorite } from '@/hooks/product';
import { MouseEvent } from 'react';
import { useToastStore } from '@/stores/toast';
import { useExchangeRate } from '@/contexts/ExchangeRateContext';

export default function RelatedProductItem({ product }: { product: Product }) {
  const { id, image, title, presentPrice, isLowestPriceEver, discountRate } =
    product;
  const router = useRouter();
  const { mutateAsync } = useAddFavorite();
  const setToast = useToastStore.use.setToast();
  const { usdToKrw } = useExchangeRate();

  const handleClick = () => {
    router.push(`/product-list/product/${id}`);
  };
  const handleAddFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await mutateAsync({ id });
    setToast('상품을 추가했어요', 5000);
  };
  return (
    <div
      className="mr-3 flex cursor-pointer flex-col items-center gap-3 text-sm"
      onClick={handleClick}
    >
      <div className="relative">
        <ProductImage
          src={image}
          alt={`${title} image`}
          size="md"
          className="h-[120px] w-[120px] object-cover"
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
        <h3 className="line-clamp-2 text-text">{title}</h3>
        <div>
          <p className="font-bold text-black">$ {presentPrice}</p>
          <p className="text-secondary">
            {convertDollarToWon(presentPrice, usdToKrw)}
          </p>
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
