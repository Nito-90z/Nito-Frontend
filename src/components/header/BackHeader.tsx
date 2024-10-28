'use client';

import Link from 'next/link';
import Button from '../common/Button';
import MoreIcon from '../common/icons/MoreIcon';

type Props = {
  mainText: string;
};

export default function BackHeader({ mainText = '메인 텍스트' }: Props) {
  return (
    <header className="sticky top-0 w-full bg-white flex items-center justify-center px-4 py-[16.5px] border-b border-border z-50">
      <Link href='/mypage'>
        <Button className="absolute left-4 w-12 h-1 bg-white text-white font-bold px-2.5  flex items-center justify-center">
          <MoreIcon />
        </Button>
      </Link>
      <h1 className="text-xl font-bold text-black">{mainText}</h1>
    </header>
  );
}
