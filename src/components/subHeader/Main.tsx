"use client";

import { twMerge } from "tailwind-merge";
import Button from "../common/Button";
import HeaderAlarmIcon from "../common/icons/HeaderAlarmIcon";
import { FavoriteProductQuery, Ordering } from "@/models/product";
import { DISCOUNT_RATE, PRESENT_PRICE } from "@/constants";

type Props = {
  count: number;
  query: FavoriteProductQuery;
  onEditing: () => void;
  onChangeOrdering: (value: Ordering) => void;
};

export default function Main({
  count,
  query,
  onEditing,
  onChangeOrdering,
}: Props) {
  const handleOrdering = (value: Ordering) => {
    if (query.ordering === value) {
      onChangeOrdering(null);
    } else {
      onChangeOrdering(value);
    }
  };
  return (
    <div className="sticky top-0 bg-white z-50">
      <header className="w-full p-4 pt-5 flex items-center justify-between">
        <h1 className="text-[26px] leading-[38px] font-bold text-black">
          찜한 상품{count !== 0 && `(${count})`}
        </h1>
        <div className="flex items-center">
          <button>
            <HeaderAlarmIcon />
          </button>
        </div>
      </header>
      <div className="w-full pb-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-light-gray text-sm">
          <button
            onClick={() => handleOrdering(DISCOUNT_RATE)}
            className={twMerge(
              "pr-2 rounded",
              query.ordering === DISCOUNT_RATE && "text-dark-gray"
            )}
          >
            할인율순
          </button>
          |
          <button
            onClick={() => handleOrdering(PRESENT_PRICE)}
            className={twMerge(
              "pl-2 rounded",
              query.ordering === PRESENT_PRICE && "text-dark-gray"
            )}
          >
            낮은 가격순
          </button>
        </div>
        <Button
          disabled={count === 0}
          className={twMerge(
            "text-sm text-dark-gray bg-transparent w-fit h-fit disabled:bg-transparent",
            count === 0 && "text-light-gray"
          )}
          onClick={onEditing}
        >
          편집
        </Button>
      </div>
    </div>
  );
}
