'use client';

import Button from '../common/Button';

type Props = {
  mainText: string;
  buttonText: string;
  onClick: () => void;
};

export default function SelectHeader({
  mainText = '메인 텍스트',
  buttonText = '버튼',
  onClick,
}: Props) {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-border bg-white px-4 py-[16.5px]">
      <h1 className="text-xl font-bold text-black">{mainText}</h1>
      <Button
        onClick={onClick}
        className="absolute right-4 flex h-8 w-12 items-center justify-center rounded-full bg-brand px-2.5 font-bold text-white"
      >
        {buttonText}
      </Button>
    </header>
  );
}
