import Image from 'next/image';
import product1Icon from '../../../../public/images/product1.svg';

export default function Product1Icon() {
  return <Image src={product1Icon} alt="menual 1" width={311} height={170} />;
}
