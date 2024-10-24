import Image from "next/image";
import moreRightIcon from "../../../../public/images/more-right.svg";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export default function MoreRightIcon({ className }: Props) {
  return (
    <Image
      src={moreRightIcon}
      alt="more up"
      className={twMerge("w-6 h-6", className)}
    />
  );
}
