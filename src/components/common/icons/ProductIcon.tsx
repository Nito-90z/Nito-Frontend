import Image from 'next/image';
import productIcon from '../../../../public/images/product.svg'
export default function ProductIcon() {
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