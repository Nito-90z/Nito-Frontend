type Props = {
  text: string;
};

export default function SubHeader({ text = '메인텍스트' }: Props) {
  return (
    <header className='w-full bg-white flex items-center justify-center px-4 py-[16.5px] border-b border-border'>
      <h1 className='text-xl font-bold text-black'>{text}</h1>
    </header>
  );
}
