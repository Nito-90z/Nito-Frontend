import Image from 'next/image';
import userIcon from '../../../../public/images/user.svg'
export default function UserIcon() {
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