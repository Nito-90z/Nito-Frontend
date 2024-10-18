import Image from 'next/image';
import googleIcon from '../../../../public/images/apple-logo.svg';

export default function AppleIcon() {
  return <Image src={googleIcon} alt='apple' width={23.58} height={28} />;
}
