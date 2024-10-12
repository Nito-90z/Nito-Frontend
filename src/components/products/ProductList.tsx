import { twMerge } from "tailwind-merge";
import ProductItem from "./ProductItem";

type Props = {
  products: (Product | FavoriteProduct)[];
  isEditing?: boolean;
  selected?: number[];
  onSelect?: (id: number) => void;
};

export default function ProductList({
  products,
  isEditing,
  selected,
  onSelect,
}: Props) {
  return (
    <ul className="flex flex-col gap-3 p-4">
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
