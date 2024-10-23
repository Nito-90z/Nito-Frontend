import RelatedProductItem from "./RelatedProductItem";
import Carousel from "../common/Carousel";
import { Product } from "@/models/product";

export default function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-col gap-3 px-4 pt-4 border-t-4 border-border">
        <h3 className="font-bold text-black leading-7">
          해당 상품과 비슷한 상품
        </h3>
        <Carousel>
          {products.map((product) => (
            <RelatedProductItem key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
