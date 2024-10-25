import Image from 'next/image';
import checkIcon from '../../../../public/images/check.svg';
import { twMerge } from 'tailwind-merge';

export default function CheckIcon({ className }: { className?: string }) {
  return (
    <Image
      src={checkIcon}
      alt="check"
      className={twMerge('h-3 w-3', className)}
    />
  );
}
