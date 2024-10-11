import Image from 'next/image';
import moreDownIcon from '../../../../public/images/more-down.svg';

export default function MoreDownIcon() {
  return (
    <Image src={moreDownIcon} alt='more down' width={24} height={24} />
  );
}