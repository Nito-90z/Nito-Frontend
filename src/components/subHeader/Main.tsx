'use client';

import { twMerge } from 'tailwind-merge';
import Button from '../common/Button';
import HeaderAlarmIcon from '../common/icons/HeaderAlarmIcon';
import { Ordering } from '@/models/product';
import { DISCOUNT_RATE, PRESENT_PRICE } from '@/constants';
import { useFavoriteQueryStore } from '@/stores/favoriteQuery';

type Props = {
  count: number;
  onEditing: () => void;
};

export default function Main({ count, onEditing }: Props) {
  const favoriteQuery = useFavoriteQueryStore.use.favoriteQuery();
  const setFavoriteQuery = useFavoriteQueryStore.use.setFavoriteQuery();

  const handleOrdering = (value: Ordering) => {
    if (favoriteQuery.ordering === value) {
      setFavoriteQuery('ordering', null);
    } else {
      setFavoriteQuery('ordering', value);
    }
  };
  return (
    <div className="sticky top-0 z-50 bg-white">
      <header className="flex w-full items-center justify-between p-4 pt-5">
        <h1 className="text-[26px] font-bold leading-[38px] text-black">
          찜한 상품{count !== 0 && `(${count})`}
        </h1>
        <div className="flex items-center">
          <button>
            <HeaderAlarmIcon />
          </button>
        </div>
      </header>
      <div className="flex w-full items-center justify-between px-4 pb-2">
        <div className="text-sm text-light-gray">
          <button
            onClick={() => handleOrdering(DISCOUNT_RATE)}
            className={twMerge(
              'rounded pr-2',
              favoriteQuery.ordering === DISCOUNT_RATE && 'text-dark-gray',
            )}
          >
            할인율순
          </button>
          |
          <button
            onClick={() => handleOrdering(PRESENT_PRICE)}
            className={twMerge(
              'rounded pl-2',
              favoriteQuery.ordering === PRESENT_PRICE && 'text-dark-gray',
            )}
          >
            낮은 가격순
          </button>
        </div>
        <Button
          disabled={count === 0}
          className={twMerge(
            'h-fit w-fit bg-transparent text-sm text-dark-gray disabled:bg-transparent',
            count === 0 && 'text-light-gray',
          )}
          onClick={onEditing}
        >
          편집
        </Button>
      </div>
    </div>
  );
}
