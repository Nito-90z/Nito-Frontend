import Image from "next/image";
import restockAlarmOffIcon from "../../../../public/images/restock-alarm-off.svg";
import { CircleButtonSize } from "../CircleButton";

export default function RestockAlarmOffIcon({
  size,
}: {
  size: CircleButtonSize;
}) {
  const { width, height } = getIconSizeStyle(size);

  return (
    <Image
      src={restockAlarmOffIcon}
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
