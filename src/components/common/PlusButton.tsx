"use client";

import Image from "next/image";
import plusIcon from "../../../public/images/plus.svg";

type ButtonSize = "sm" | "md" | "lg";

type Props = {
  size?: ButtonSize;
  onClick: () => void;
};

export default function PlusButton({ size = "md", onClick }: Props) {
  return (
    <button onClick={onClick} className={getContainerStyle(size)}>
      <Image
        src={plusIcon}
        alt="plus"
        className={size === "lg" ? "w-6 h-6" : "w-5 h-5"}
      />
    </button>
  );
}

function getContainerStyle(size: ButtonSize) {
  const baseStyle =
    "flex justify-center items-center bg-dark-gray rounded-full";
  const sizeStyle = getButtonSizeStyle(size);

  return `${baseStyle} ${sizeStyle}`;
}

function getButtonSizeStyle(size: ButtonSize) {
  switch (size) {
    case "sm":
      return "w-8 h-8";
    case "md":
      return "w-10 h-10";
    case "lg":
      return "w-12 h-12";
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
