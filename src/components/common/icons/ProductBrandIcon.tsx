import Image from 'next/image';
import productIcon from '../../../../public/images/product-brand.svg'
export default function ProductBrandIcon() {
  return (
    <div>
      <Image
      src={productIcon}
      alt="product"
      width={30}
      height={30}
    />
    </div>
  );
}