import ProductImage from '../products/ProductImage';
import Information from './Information';
import { DetailProduct } from '@/models/product';

export default function Description({ product }: { product: DetailProduct }) {
  return (
    <div className="p-4">
      <ProductImage
        priority
        src={product.image}
        alt={`${product.title} image`}
        size="lg"
        className="h-[295px] w-full object-contain"
      />
      <Information product={product} />
    </div>
  );
}
