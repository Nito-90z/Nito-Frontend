import Image from 'next/image';
import userIcon from '../../../../public/images/user-brand.svg';

export default function UserBrandIcon() {
  return <Image src={userIcon} alt="user" width={22} height={22} />;
}
