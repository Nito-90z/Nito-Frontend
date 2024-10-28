'use client';

import Badge from '../common/Badge';
import { twMerge } from 'tailwind-merge';
import { convertDollarToWon } from '@/utils/currency-converter';
import CircleButton from '../common/CircleButton';
import RestockAlarmIcon from '../common/icons/RestockAlarmIcon';
import AlarmIcon from '../common/icons/AlarmIcon';
import PlusIcon from '../common/icons/PlusIcon';
import RestockAlarmOffIcon from '../common/icons/RestockAlarmOffIcon';
import ProductImage from './ProductImage';
import CheckBox from '../common/CheckBox';
import { FavoriteProductInfo, Product } from '@/models/product';
import AlarmOffIcon from '../common/icons/AlarmOffIcon';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { useExchangeRateStore } from '@/stores/exchange';

type Props = {
  priority: boolean;
  favoriteId: number | null;
  product: Product | FavoriteProductInfo;
  isAlarm: boolean;
  isEditing?: boolean;
  selected?: number[];
  onSelect?: (id: number) => void;
  addFavorite?: (id: number) => void;
  setIsAlarm?: (id: number, isAlarm: boolean) => void;
};

export default function ProductItem({
  priority,
  favoriteId,
  product,
  isAlarm,
  isEditing,
  selected,
  onSelect,
  addFavorite,
  setIsAlarm,
}: Props) {
  const {
    id,
    image,
    title,
    isOutOfStock,
    presentPrice,
    discountRate,
    isStopSelling,
    isLowestPriceEver,
  } = product;
  const router = useRouter();
  const { usdToKrw } = useExchangeRateStore.use.exchangeRate();
  const isUnavailable = isOutOfStock || isStopSelling;
  const isFavoritePage = !('isFavorite' in product);
  const isSelected = selected?.includes(favoriteId || -1);

  const handleClick = () => {
    if (isEditing && favoriteId) {
      if (onSelect) onSelect(favoriteId);
    } else {
      router.push(`/product-list/product/${id}`);
    }
  };
  const handleAddFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    if (addFavorite) addFavorite(id);
    e.stopPropagation();
  };
  const handleSetIsAlarm = (e: MouseEvent<HTMLButtonElement>) => {
    if (setIsAlarm) setIsAlarm(favoriteId!, isAlarm);
    e.stopPropagation();
  };
  return (
    <li
      className={twMerge(
        'relative flex cursor-pointer items-start gap-3 border-b border-border py-4 last:border-none',
        isEditing && 'opacity-50',
        isSelected && 'opacity-100',
        isOutOfStock && 'pointer-events-none',
      )}
      onClick={handleClick}
    >
      {isEditing && (
        <div
          className={twMerge(
            'absolute left-0 top-0 z-10 h-full w-full content-center rounded pl-[26px]',
            isSelected && 'bg-brand bg-opacity-20',
          )}
        >
          <CheckBox size="lg" checked={isSelected} className="border-black" />
        </div>
      )}
      <div className="relative h-20 w-20 shrink-0">
        <ProductImage
          priority={priority}
          src={image ?? ''}
          alt={`${title} product image`}
          className={twMerge(
            'aspect-square rounded object-cover',
            isUnavailable && 'brightness-50',
          )}
        />
        {isUnavailable && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold text-white">
            {isStopSelling ? '판매중지' : '품절'}
          </span>
        )}
      </div>
      <div className="flex grow flex-col gap-5">
        <div className="flex justify-between">
          <p
            className={twMerge(
              'mr-4 line-clamp-2 text-sm text-[#555555]',
              isUnavailable && 'opacity-50',
            )}
          >
            {title}
          </p>
          {!isFavoritePage ? (
            <CircleButton
              size="sm"
              className="bg-dark-gray"
              onClick={handleAddFavorite}
            >
              <PlusIcon size="sm" />
            </CircleButton>
          ) : isUnavailable ? (
            <CircleButton
              size="sm"
              className={isAlarm ? '' : 'bg-gray'}
              onClick={handleSetIsAlarm}
            >
              {isAlarm ? (
                <RestockAlarmIcon size="sm" />
              ) : (
                <RestockAlarmOffIcon size="sm" />
              )}
            </CircleButton>
          ) : (
            <CircleButton
              size="sm"
              className={isAlarm ? '' : 'bg-gray'}
              onClick={handleSetIsAlarm}
            >
              {isAlarm ? <AlarmIcon size="sm" /> : <AlarmOffIcon size="sm" />}
            </CircleButton>
          )}
        </div>
        <div
          className={twMerge(
            'flex flex-col gap-1',
            isUnavailable && 'opacity-50',
          )}
        >
          <div
            className={twMerge(
              'flex justify-between',
              !isLowestPriceEver && 'justify-end',
            )}
          >
            {isLowestPriceEver && <Badge direction="up">역대최저가</Badge>}
            <span className="text-sm font-bold text-black">
              $ {presentPrice}
            </span>
          </div>
          <div className="flex justify-end gap-[6px]">
            <span className="text-sm text-[#767676]">
              {convertDollarToWon(presentPrice, usdToKrw)}
            </span>
            {!!discountRate && (
              <Badge size="sm" direction="down" icon>
                {discountRate}%
              </Badge>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
