import { ProductPrice } from "@/models/product";
import { convertDollarToWon } from "@/utils/currency-converter";
import { parseDate } from "@/utils/date";
import { v4 as uuidv4 } from "uuid";

export default function PriceBox({ prices }: { prices: ProductPrice }) {
  const {
    presentPrice,
    presentPriceUpdatedAt,
    lowPrice,
    lowPriceUpdatedAt,
    highPrice,
    highPriceUpdatedAt,
    averagePrice,
  } = prices;
  const priceList = [
    {
      title: "현재가",
      date: presentPriceUpdatedAt,
      value: presentPrice,
    },
    {
      title: "역대최저가",
      date: lowPriceUpdatedAt,
      value: lowPrice,
    },
    {
      title: "평균가",
      date: null,
      value: averagePrice,
    },
    {
      title: "역대최고가",
      date: highPriceUpdatedAt,
      value: highPrice,
    },
  ];
  return (
    <ul className="grid grid-cols-2 bg-bar">
      {priceList.map(({ title, date, value }) => (
        <li
          key={uuidv4()}
          className="flex flex-col gap-[14px] px-3 py-4 border-b border-r border-border even:border-r-0"
        >
          <p className="text-xs text-secondary leading-[18px]">
            <span>{title}</span>
            <span>{date && `(${parseDate(date)})`}</span>
          </p>
          <div className="self-end text-end">
            <p className="font-bold text-dark-gray leading-7">${value || 0}</p>
            <p className="text-xs text-text leading-[18px]">
              {convertDollarToWon(value || "0")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
