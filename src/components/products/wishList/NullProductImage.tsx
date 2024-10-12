import { twMerge } from "tailwind-merge";
import NullProductIcon from "../../common/icons/NullProductIcon";

export default function NullProductImage({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-center items-center gap-[6px] w-20 h-20 rounded bg-border",
        className
      )}
    >
      <NullProductIcon />
      <p className="text-xs text-[#8F8F8F] font-bold">이미지 준비중</p>
    </div>
  );
}
