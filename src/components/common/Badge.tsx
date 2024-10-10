import Image from "next/image";
import upIcon from "../../../public/images/up.svg";
import downIcon from "../../../public/images/down.svg";

type Props = {
  size?: "sm" | "lg";
  icon?: boolean;
  direction: "up" | "down";
  children: React.ReactNode;
};

export default function Badge({
  size = "sm",
  direction,
  children,
  icon = false,
}: Props) {
  return (
    <div className={getBadgeStyle(size, direction)}>
      {icon && (
        <Image
          src={direction === "up" ? upIcon : downIcon}
          alt={`${children}% ${direction} badge`}
          className={
            size === "sm" ? "w-[9.5px] h-[10.04px]" : "w-[11.36px] h-3"
          }
        />
      )}
      <span>{children}</span>
    </div>
  );
}

function getBadgeStyle(size: "sm" | "lg", direction: "up" | "down") {
  const baseStyle = "flex justify-center items-center p-[1px] w-fit rounded-sm";
  const sizeStyle = size === "sm" ? " text-xs" : "text-base";
  const directionStyle =
    direction === "up"
      ? "text-green bg-light-green"
      : "text-brand bg-light-brand";

  return `${baseStyle} ${sizeStyle} ${directionStyle}`;
}
