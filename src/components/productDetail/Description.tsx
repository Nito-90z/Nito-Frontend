import { twMerge } from 'tailwind-merge';
import ProductImage from '../products/ProductImage';
import Information from './Information';
import { DetailProduct } from '@/models/product';

export default function Description({ product }: { product: DetailProduct }) {
  const { isOutOfStock, isStopSelling } = product;
  const isUnavailable = isOutOfStock || isStopSelling;

  return (
    <div className="p-4">
      <div className="relative">
        <ProductImage
          priority
          src={product.image}
          alt={`${product.title} image`}
          size="lg"
          className={twMerge(
            'h-[295px] w-full object-contain',
            isUnavailable && 'brightness-50',
          )}
        />
        {isUnavailable && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-white">
            <p className="text-xl font-bold">
              {isStopSelling ? '판매중지된 상품이에요' : '품절'}
            </p>
            {isOutOfStock && <p>상품 추가 후 재입고 알림을 받아보세요!</p>}
          </div>
        )}
      </div>
      <Information product={product} />
    </div>
  );
}
