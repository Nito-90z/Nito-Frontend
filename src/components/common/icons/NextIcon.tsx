import Image from 'next/image';
import nextIcon from '../../../../public/images/next.svg';
import { twMerge } from 'tailwind-merge';

export default function NextIcon({ className }: { className?: string }) {
  return (
    <Image
      src={nextIcon}
      alt="next"
      className={twMerge('h-3 w-[9.6px]', className)}
    />
  );
}
