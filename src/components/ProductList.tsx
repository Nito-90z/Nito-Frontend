import ProductItem from "./ProductItem";

export default function ProductList({
  products,
}: {
  products: (Product | FavoriteProduct)[];
}) {
  return (
    <ul className="flex flex-col gap-3 p-4">
      {products.map((item) => {
        const product = "product" in item ? item.product : item;
        const isAlarm = "isAlarm" in item && item.isAlarm;

        return (
          <ProductItem key={product.id} product={product} isAlarm={isAlarm} />
        );
      })}
    </ul>
  );
}
