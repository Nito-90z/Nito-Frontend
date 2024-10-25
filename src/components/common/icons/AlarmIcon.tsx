import Image from 'next/image';
import alarmIcon from '../../../../public/images/alarm.svg';
import { CircleButtonSize } from '../CircleButton';

export default function AlarmIcon({ size }: { size: CircleButtonSize }) {
  const className = getIconSizeStyle(size);

  return <Image src={alarmIcon} alt="alarm" className={className} />;
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case 'sm':
      return 'w-[14.63px] h-[16px]';
    case 'md':
      return 'w-[18.29px] h-[20px]';
    case 'lg':
      return 'w-[21.94px] h-[24px]';
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
