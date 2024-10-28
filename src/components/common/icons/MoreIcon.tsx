import Image from 'next/image';
import moreIcon from '../../../../public/images/more.svg';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export default function MoreIcon({ className }: Props) {
  return (
    <Image
      priority
      src={moreIcon}
      alt="more icon"
      className={twMerge('h-8 w-8', className)}
    />
  );
}
