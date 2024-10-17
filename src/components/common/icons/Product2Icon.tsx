import Image from 'next/image';
import product2Icon from '../../../../public/images/product2.svg'

export default function Product2Icon() {
  return (
    <Image src={product2Icon} alt='menual 2' width={126} height={170}/>
  );
}