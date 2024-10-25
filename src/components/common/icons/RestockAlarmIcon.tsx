import Image from "next/image";
import restockAlarmIcon from "../../../../public/images/restock-alarm.svg";
import { CircleButtonSize } from "../CircleButton";

export default function RestockAlarmIcon({ size }: { size: CircleButtonSize }) {
  const className = getIconSizeStyle(size);

  return (
    <Image src={restockAlarmIcon} alt="restock alarm" className={className} />
  );
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case "sm":
      return "w-6 h-6";
    case "md":
      return "w-7 h-7";
    case "lg":
      return "w-8 h-8";
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
