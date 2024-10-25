import Image from 'next/image';
import alarmOffIcon from '../../../../public/images/alarmOff.svg';
import { CircleButtonSize } from '../CircleButton';

export default function AlarmOffIcon({ size }: { size: CircleButtonSize }) {
  const className = getIconSizeStyle(size);

  return <Image src={alarmOffIcon} alt="alarm off" className={className} />;
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case 'sm':
      return 'w-[20.29px] h-[20.29px]';
    case 'md':
      return 'w-[24.13px] h-[24.13px]';
    case 'lg':
      return 'w-[27px] h-[27px]';
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
