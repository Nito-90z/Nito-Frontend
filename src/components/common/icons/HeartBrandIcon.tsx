import Image from 'next/image';
import heartIcon from '../../../../public/images/heart-brand.svg'
export default function HeartBrandIcon() {
  return (
    <div>
      <Image
      src={heartIcon}
      alt="heart"
      width={30}
      height={30}
    />
    </div>
  );
}