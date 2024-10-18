import Image from "next/image";
import nextIcon from "../../../../public/images/next.svg";
import { twMerge } from "tailwind-merge";

export default function NextIcon({ className }: { className?: string }) {
  return (
    <Image
      src={nextIcon}
      alt="next"
      className={twMerge("w-[9.6px] h-3", className)}
    />
  );
}
