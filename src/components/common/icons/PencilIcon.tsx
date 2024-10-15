import Image from 'next/image';
import pencilIcon from '../../../../public/images/pencil-simple.svg';

export default function PencilIcon() {
  return <Image src={pencilIcon} alt='pencil' width={24} height={24} />;
}
