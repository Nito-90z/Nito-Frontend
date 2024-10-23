import { MouseEventHandler } from "react";
import MoreIcon from "../common/icons/MoreIcon";
import MoreRightIcon from "../common/icons/MoreRight";
import { twMerge } from "tailwind-merge";

type Props = {
  type: "prev" | "next";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ArrowButton({ type, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "absolute top-1/2 -translate-y-1/2 flex justify-center items-center w-8 h-8 border border-gray hover:bg-border transition-colors rounded-full z-30",
        type === "prev" ? "left-0" : "right-0"
      )}
    >
      {type === "prev" ? (
        <MoreRightIcon className="rotate-180" />
      ) : (
        <MoreRightIcon />
      )}
    </button>
  );
}
