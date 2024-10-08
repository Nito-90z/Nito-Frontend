"use client";

import Image from "next/image";
import Badge from "./common/Badge";
import { twMerge } from "tailwind-merge";
import { convertDollarToWon } from "@/utils/currency-converter";
import CircleButton from "./common/CircleButton";
import RestockAlarmIcon from "./common/icons/RestockAlarmIcon";
import AlarmIcon from "./common/icons/AlarmIcon";
import PlusIcon from "./common/icons/PlusIcon";

export default function ProductItem({ product }: { product: Product }) {
  const {
    image,
    title,
    isOutOfStock,
    presentPrice,
    discountRate,
    isStopSelling,
    isLowestPriceEver,
  } = product;
  const isUnavailable = isOutOfStock || isStopSelling;
  return (
    <li className="flex items-start gap-3 py-4 border-b border-border cursor-pointer">
      <div className="relative">
        <Image
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
          {isOutOfStock ? (
            <CircleButton size="sm">
              <RestockAlarmIcon size="sm" />
            </CircleButton>
          ) : isStopSelling ? (
            <CircleButton size="sm">
              <AlarmIcon size="sm" />
            </CircleButton>
          ) : (
            <CircleButton size="sm" className="bg-dark-gray">
              <PlusIcon size="sm" />
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
