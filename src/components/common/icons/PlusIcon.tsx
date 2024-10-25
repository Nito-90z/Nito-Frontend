import Image from 'next/image';
import { CircleButtonSize } from '../CircleButton';
import plusIcon from '../../../../public/images/plus.svg';

export default function PlusIcon({ size }: { size: CircleButtonSize }) {
  const { width, height } = getIconSizeStyle(size);

  return <Image src={plusIcon} alt="plus" width={width} height={height} />;
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case 'sm':
    case 'md':
      return { width: 20, height: 20 };
    case 'lg':
      return { width: 24, height: 24 };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
