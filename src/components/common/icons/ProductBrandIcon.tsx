import Image from 'next/image';
import productIcon from '../../../../public/images/product-brand.svg';

export default function ProductBrandIcon() {
  return <Image src={productIcon} alt="product" width={23.16} height={22} />;
}
