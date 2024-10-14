import HeaderAlarmIcon from '../common/icons/HeaderAlarmIcon';
import Image from 'next/image';
import logoIcon from '../../../public/images/logo.svg';

export default function DefaultHeader() {
  return (
    <header className='w-full h-20 bg-white flex items-center justify-between px-4 py-[15px] border-b border-border'>
      <Image src={logoIcon} alt='logo' width={96.18} height={30} />

      <HeaderAlarmIcon />
    </header>
  );
}
