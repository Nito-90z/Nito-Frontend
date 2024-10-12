"use client";

import Badge from "../common/Badge";
import { twMerge } from "tailwind-merge";
import { convertDollarToWon } from "@/utils/currency-converter";
import CircleButton from "../common/CircleButton";
import RestockAlarmIcon from "../common/icons/RestockAlarmIcon";
import AlarmIcon from "../common/icons/AlarmIcon";
import PlusIcon from "../common/icons/PlusIcon";
import RestockAlarmOffIcon from "../common/icons/RestockAlarmOffIcon";
import ProductImage from "./wishList/ProductImage";
import Checkbox from "../common/CheckBox";

type Props = {
  product: Product | FavoriteProductInfo;
  isAlarm: boolean;
  isEditing?: boolean;
  selected?: number[];
  onSelect?: (id: number) => void;
};

export default function ProductItem({
  product,
  isAlarm,
  isEditing,
  selected,
  onSelect,
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
  const isUnavailable = isOutOfStock || isStopSelling;
  const isFavorite = !("isFavorite" in product) || product.isFavorite;
  const isSelected = selected?.includes(id);

  const handleClick = () => {
    if (isEditing) {
      onSelect && onSelect(id);
    } else {
      // 상세 페이지로 이동
    }
  };

  return (
    <li
      className={twMerge(
        "relative flex items-start gap-3 py-4 border-b border-border cursor-pointer",
        isEditing && "opacity-50",
        isSelected && "opacity-100"
      )}
      onClick={handleClick}
    >
      {isEditing && (
        <div
          className={twMerge(
            "absolute top-0 left-0 content-center pl-[26px] w-full h-full z-10 rounded",
            isSelected && "bg-brand bg-opacity-20"
          )}
        >
          <Checkbox size="lg" checked={isSelected} className="border-black" />
        </div>
      )}
      <div className="relative">
        <ProductImage
          src={image ?? ""}
          alt={`${title.koTitle} product image`}
          width={80}
          height={80}
          className={twMerge(
            "object-cover aspect-square rounded",
            isUnavailable && "brightness-50"
          )}
        />
        {isUnavailable && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white font-bold whitespace-nowrap">
            {isStopSelling ? "판매중지" : "품절"}
          </span>
        )}
      </div>
      <div className="grow flex flex-col gap-5">
        <div className="flex justify-between">
          <p
            className={twMerge(
              "line-clamp-2 mr-4 text-sm text-[#555555]",
              isUnavailable && "opacity-50"
            )}
          >
            {title.koTitle}
          </p>
          {!isFavorite ? (
            <CircleButton size="sm" className="bg-dark-gray">
              <PlusIcon size="sm" />
            </CircleButton>
          ) : isUnavailable ? (
            <CircleButton size="sm" className={isAlarm ? "" : "bg-gray"}>
              {isAlarm ? (
                <RestockAlarmIcon size="sm" />
              ) : (
                <RestockAlarmOffIcon size="sm" />
              )}
            </CircleButton>
          ) : (
            <CircleButton size="sm" className={isAlarm ? "" : "bg-gray"}>
              <AlarmIcon size="sm" />
            </CircleButton>
          )}
        </div>
        <div
          className={twMerge(
            "flex flex-col gap-1",
            isUnavailable && "opacity-50"
          )}
        >
          <div
            className={twMerge(
              "flex justify-between",
              !isLowestPriceEver && "justify-end"
            )}
          >
            {isLowestPriceEver && <Badge direction="up">역대최저가</Badge>}
            <span className="text-sm text-black font-bold">
              $ {presentPrice}
            </span>
          </div>
          <div className="flex justify-end gap-[6px]">
            <span className="text-sm text-[#767676]">
              {convertDollarToWon(presentPrice)}
            </span>
            <Badge size="sm" direction="down" icon>
              {discountRate}%
            </Badge>
          </div>
        </div>
      </div>
    </li>
  );
}
