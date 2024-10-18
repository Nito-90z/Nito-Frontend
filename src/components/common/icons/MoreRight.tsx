import Image from 'next/image';
import moreUpIcon from '../../../../public/images/more-right.svg';

export default function MoreRightIcon() {
  return <Image src={moreUpIcon} alt='more up' width={24} height={24} />;
}