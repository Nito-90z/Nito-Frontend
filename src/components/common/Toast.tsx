import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  textColor?: string;
  bgColor?: string;
  position?: string;
};

export default function Toast({
  text = 'Toast',
  bgColor = 'bg-dark-gray',
  textColor = 'text-white',
  position = '',
}: Props) {
  return (
    <div
      className={twMerge(
        'z-50 h-[52px] w-[343px] items-center justify-center whitespace-pre-line rounded-sm px-2 py-1 text-center',
        position,
        bgColor,
        textColor,
      )}
    >
      {text}
    </div>
  );
}
