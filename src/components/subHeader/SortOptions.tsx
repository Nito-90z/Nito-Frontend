import { twMerge } from "tailwind-merge";
import CheckBox from "../common/CheckBox";
import { useProductQueryStore } from "@/stores/productQuery";
import { DISCOUNT_RATE, PRESENT_PRICE } from "@/constants";

type Props = {
  count?: number;
  className?: string;
};
export default function SortOptions({ count, className }: Props) {
  const productQuery = useProductQueryStore.use.productQuery();
  const setProductQuery = useProductQueryStore.use.setProductQuery();

  const handleOrdering = (value: string) => {
    if (productQuery.ordering === value) {
      setProductQuery("ordering", null);
    } else {
      setProductQuery("ordering", value);
    }
  };
  const handleIsLowestPriceEver = () => {
    if (productQuery.is_lowest_price_ever === true) {
      setProductQuery("is_lowest_price_ever", null);
    } else {
      setProductQuery("is_lowest_price_ever", true);
    }
  };
  const handleIsOutOfStock = () => {
    if (productQuery.is_out_of_stock === false) {
      setProductQuery("is_out_of_stock", null);
    } else {
      setProductQuery("is_out_of_stock", false);
    }
  };
  return (
    <div className={twMerge("w-full bg-white", className)}>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-center text-gray-text">
          <p>전체({count})</p>
          <div>
            <button
              onClick={() => handleOrdering(DISCOUNT_RATE)}
              className={twMerge(
                "pr-2 rounded",
                productQuery.ordering === DISCOUNT_RATE && "text-dark-gray"
              )}
            >
              할인율순
            </button>
            |
            <button
              onClick={() => handleOrdering(PRESENT_PRICE)}
              className={twMerge(
                "pl-2 rounded",
                productQuery.ordering === PRESENT_PRICE && "text-dark-gray"
              )}
            >
              낮은 가격순
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-text">
          <CheckBox
            checked={!!productQuery.is_lowest_price_ever}
            onClick={handleIsLowestPriceEver}
          >
            역대 최저가
          </CheckBox>
          <CheckBox
            checked={productQuery.is_out_of_stock === false}
            onClick={handleIsOutOfStock}
          >
            품절 제외
          </CheckBox>
        </div>
      </div>
    </div>
  );
}
