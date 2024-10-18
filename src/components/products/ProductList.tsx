import { twMerge } from "tailwind-merge";
import ProductItem from "./ProductItem";
import { FavoriteProduct, Product } from "@/models/product";

type Props = {
  className?: string;
  products: (Product | FavoriteProduct)[];
  isEditing?: boolean;
  selected?: number[];
  onSelect?: (id: number) => void;
};

export default function ProductList({
  className,
  products,
  isEditing,
  selected,
  onSelect,
}: Props) {
  return (
    <ul
      className={twMerge(
        "flex flex-col gap-3 p-4",
        isEditing ? "max-h-[calc(100%-62px)]" : "max-h-[calc(100%-102px)]",
        className
      )}
    >
      {products.map((item) => {
        const product = "product" in item ? item.product : item;
        const isAlarm = "isAlarm" in item && item.isAlarm;

        return (
          <ProductItem
            key={product.id}
            product={product}
            isAlarm={isAlarm}
            isEditing={isEditing}
            selected={selected}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
}
