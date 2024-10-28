import Image from 'next/image';
import nullProductIcon from '../../../../public/images/null-product.svg';

export default function NullProductIcon() {
  return (
    <Image src={nullProductIcon} alt="No products" width={58.95} height={14} />
  );
}
