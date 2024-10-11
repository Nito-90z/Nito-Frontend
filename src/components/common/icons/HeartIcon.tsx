import Image from 'next/image';
import heartIcon from '../../../../public/images/heart.svg'
export default function HeartIcon() {
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