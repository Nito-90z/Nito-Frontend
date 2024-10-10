import Image from "next/image";
import alarmIcon from "../../../../public/images/alarm.svg";
import { CircleButtonSize } from "../CircleButton";

export default function AlarmIcon({ size }: { size: CircleButtonSize }) {
  const { width, height } = getIconSizeStyle(size);

  return <Image src={alarmIcon} alt="alarm" width={width} height={height} />;
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case "sm":
      return { width: 14.63, height: 16 };
    case "md":
      return { width: 18.29, height: 20 };
    case "lg":
      return { width: 21.94, height: 24 };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
