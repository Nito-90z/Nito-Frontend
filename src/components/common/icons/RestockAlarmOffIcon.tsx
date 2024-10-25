import Image from "next/image";
import restockAlarmOffIcon from "../../../../public/images/restock-alarm-off.svg";
import { CircleButtonSize } from "../CircleButton";

export default function RestockAlarmOffIcon({
  size,
}: {
  size: CircleButtonSize;
}) {
  const className = getIconSizeStyle(size);

  return (
    <Image
      src={restockAlarmOffIcon}
      alt="restock alarm"
      className={className}
    />
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
