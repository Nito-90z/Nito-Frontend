type Props = {
  text: string;
};

export default function SubHeader({ text = '메인텍스트' }: Props) {
  return (
    <header className="flex w-full items-center justify-center border-b border-border bg-white px-4 py-[16.5px]">
      <h1 className="text-xl font-bold text-black">{text}</h1>
    </header>
  );
}
