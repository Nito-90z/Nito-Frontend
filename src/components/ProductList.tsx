import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="flex flex-col gap-3 p-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
