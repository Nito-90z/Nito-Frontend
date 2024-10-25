import { MouseEventHandler } from 'react';
import MoreRightIcon from '../common/icons/MoreRight';
import { twMerge } from 'tailwind-merge';

type Props = {
  type: 'prev' | 'next';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ArrowButton({ type, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'absolute top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray transition-colors hover:bg-border',
        type === 'prev' ? 'left-0' : 'right-0',
      )}
    >
      {type === 'prev' ? (
        <MoreRightIcon className="rotate-180" />
      ) : (
        <MoreRightIcon />
      )}
    </button>
  );
}
