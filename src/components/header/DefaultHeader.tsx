import HeaderAlarmIcon from "../common/icons/HeaderAlarmIcon";
import LogoIcon from "../common/icons/LogoIcon";

export default function DefaultHeader() {
  return (
    <header className="w-full bg-white flex items-center justify-between px-4 py-[15px] border-b border-border">
      <LogoIcon />
      <HeaderAlarmIcon />
    </header>
  );
}
