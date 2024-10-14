import Image from 'next/image';
import moreIcon from '../../../../public/images/more.svg';

export default function MoreIcon() {
  return <Image src={moreIcon} alt='more icon' width={32} height={32} />;
}
