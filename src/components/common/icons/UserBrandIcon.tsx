import Image from 'next/image';
import userIcon from '../../../../public/images/user-brand.svg'
export default function UserBrandIcon() {
  return (
    <div>
      <Image
      src={userIcon}
      alt="user"
      width={30}
      height={30}
    />
    </div>
  );
}