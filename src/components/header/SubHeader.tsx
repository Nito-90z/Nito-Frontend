type Props = {
  text: string;
};

export default function SubHeader({ text = '메인텍스트' }: Props) {
  return (
    <header className='w-full h-16 bg-white relative flex items-center justify-center px-4 py-[15px] border-b border-border'>
      <h1 className='absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-black'>
        {text}
      </h1>
    </header>
  );
}
