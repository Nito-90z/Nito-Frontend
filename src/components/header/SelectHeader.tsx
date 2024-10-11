'use client';

export default function SelectHeader() {
  const onClick = () => {};
  return (
    <header className='w-full h-20 bg-white relative flex items-center justify-center px-4 py-[15px] border-b border-border'>
      <h1 className='absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-black'>
        상품선택
      </h1>

      <button
        onClick={onClick}
        className='absolute right-4 h-8 w-12 bg-brand text-white text-[14px] font-bold px-2.5 rounded-full flex items-center justify-center'
      >
        완료
      </button>
    </header>
  );
}
