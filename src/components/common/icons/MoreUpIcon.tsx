import Image from 'next/image';
import moreUpIcon from '../../../../public/images/more-up.svg';

export default function MoreUpIcon() {
  return <Image src={moreUpIcon} alt="more up" width={24} height={24} />;
}
