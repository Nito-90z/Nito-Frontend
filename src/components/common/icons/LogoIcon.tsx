import Image from 'next/image';
import logoIcon from '../../../../public/images/logo.svg';

export default function LogoIcon() {
  return <Image src={logoIcon} alt="logo" width={96.18} height={32} />;
}
