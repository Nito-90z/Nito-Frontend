import Image from 'next/image';

export default function DefaultHeader() {
  return (
    <header className="w-full h-[80px] bg-white flex items-center justify-between px-16 shadow-md">
    {/* 로고 영역 */}
    <div className="flex items-center">
      <Image src='./images/logo.svg' alt={''} width={20} height={20}/>
    </div>
    
    {/* 이모티콘 영역 */}
    <div className="flex items-center">
      <Image src='./images/header_alarm.svg' alt={''} width={20} height={20} />
    </div>
  </header>
  );
}