import HeaderAlarmIcon from '../common/icons/HeaderAlarmIcon';
import LogoIcon from '../common/icons/LogoIcon';

export default function DefaultHeader() {
  return (
    <header className="flex w-full items-center justify-between border-b border-border bg-white px-4 py-[15px]">
      <LogoIcon />
      <HeaderAlarmIcon />
    </header>
  );
}
