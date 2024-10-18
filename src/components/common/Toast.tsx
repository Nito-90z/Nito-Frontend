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
        'w-[343px] h-[52px] py-1 px-2 rounded-sm justify-center text-center items-center whitespace-pre-line',
        position,
        bgColor,
        textColor
      )}
    >
      {text}
    </div>
  );
}
