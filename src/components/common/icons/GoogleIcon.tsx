import Image from 'next/image';
import googleIcon from '../../../../public/images/google-logo.svg';

export default function GoogleIcon() {
  return <Image src={googleIcon} alt='google' width={28} height={28} />;
}
