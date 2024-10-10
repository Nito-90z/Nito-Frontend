import Image from "next/image";
import headerAlarmIcon from "../../../../public/images/header-alarm.svg";

export default function HeaderAlarmIcon() {
  return (
    <Image
      src={headerAlarmIcon}
      alt="alarm list"
      width={21.33}
      height={23.33}
    />
  );
}
