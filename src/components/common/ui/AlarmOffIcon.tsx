import Image from "next/image";
import alarmOffIcon from "../../../../public/images/alarmOff.svg";
import { CircleButtonSize } from "../CircleButton";

export default function AlarmOffIcon({ size }: { size: CircleButtonSize }) {
  const { width, height } = getIconSizeStyle(size);

  return (
    <Image src={alarmOffIcon} alt="alarm off" width={width} height={height} />
  );
}

function getIconSizeStyle(size: CircleButtonSize) {
  switch (size) {
    case "sm":
      return { width: 20.29, height: 20.29 };
    case "md":
      return { width: 24.13, height: 24.13 };
    case "lg":
      return { width: 27, height: 27 };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
