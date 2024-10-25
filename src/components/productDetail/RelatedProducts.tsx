import RelatedProductItem from './RelatedProductItem';
import Carousel from '../common/Carousel';
import { Product } from '@/models/product';

export default function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-col gap-3 border-t-4 border-border px-4 pt-4">
        <h3 className="font-bold leading-7 text-black">
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
