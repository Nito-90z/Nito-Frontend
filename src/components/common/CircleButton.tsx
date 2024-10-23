"use client";

import { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

export type CircleButtonSize = "sm" | "md" | "lg";

type Props = {
  size: CircleButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void);
};

export default function CircleButton({
  size,
  className = "",
  children,
  onClick,
}: Props) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center shrink-0 bg-brand rounded-full",
        className,
        getCircleButtonSizeStyle(size)
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function getCircleButtonSizeStyle(size: CircleButtonSize) {
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
