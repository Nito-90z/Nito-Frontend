import { twMerge } from 'tailwind-merge';
import NullProductImageIcon from '../common/icons/NullProductImageIcon';

export default function NullProductImage({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'flex h-20 w-20 flex-col items-center justify-center gap-[6px] rounded bg-border',
        className,
      )}
    >
      <NullProductImageIcon />
      <p className="text-xs font-bold text-[#8F8F8F]">이미지 준비중</p>
    </div>
  );
}
