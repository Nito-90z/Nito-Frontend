import Image from "next/image";
import restockAlarmIcon from "../../../../public/images/restock-alarm.svg";
import { CircleButtonSize } from "../CircleButton";

export default function RestockAlarmIcon({ size }: { size: CircleButtonSize }) {
  const { width, height } = getIconSizeStyle(size);

  return (
    <Image
      src={restockAlarmIcon}
      alt="restock alarm"
      width={width}
      height={height}
    />
  );
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case "sm":
      return { width: 24, height: 24 };
    case "md":
      return { width: 28, height: 28 };
    case "lg":
      return { width: 32, height: 32 };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
