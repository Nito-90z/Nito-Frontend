"use client";

import Button from "../common/Button";

type Props = {
  mainText: string;
  buttonText: string;
  onClick: () => void;
};

export default function SelectHeader({
  mainText = "메인 텍스트",
  buttonText = "버튼",
  onClick,
}: Props) {
  return (
    <header className="sticky top-0 w-full bg-white flex items-center justify-center px-4 py-[16.5px] border-b border-border z-50">
      <h1 className="text-xl font-bold text-black">{mainText}</h1>
      <Button
        onClick={onClick}
        className="absolute right-4 h-8 w-12 bg-brand text-white font-bold px-2.5 rounded-full flex items-center justify-center"
      >
        {buttonText}
      </Button>
    </header>
  );
}
