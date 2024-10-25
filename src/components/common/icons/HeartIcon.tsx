import Image from 'next/image';
import heartIcon from '../../../../public/images/heart.svg';
import { twMerge } from 'tailwind-merge';

export default function HeartIcon({ className }: { className?: string }) {
  return (
    <Image
      src={heartIcon}
      alt="heart"
      className={twMerge('h-[30px] w-[30px]', className)}
    />
  );
}
