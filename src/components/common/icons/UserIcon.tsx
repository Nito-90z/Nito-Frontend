import Image from 'next/image';
import userIcon from '../../../../public/images/user.svg';

export default function UserIcon() {
  return <Image src={userIcon} alt="user" width={22} height={22} />;
}
