import { twMerge } from 'tailwind-merge';

type Props = {
  isOn: boolean;
  toggleHandler: () => void;
};

export default function ToggleButton({ isOn, toggleHandler }: Props) {
  return (
    <div className='flex items-center justify-center'>
      <div
        onClick={toggleHandler}
        className={twMerge(
          'relative w-[50px] h-[30px] border-gray rounded-full transition-colors duration-500 cursor-pointer',
          isOn ? 'bg-brand' : 'bg-gray'
        )}
      >
        <div
          className={twMerge(
            'absolute top-0.5 bottom-0.5 left-0.5 w-[25px] h-[25px] rounded-full bg-white transition-transform duration-500',
            isOn ? 'transform translate-x-[20px]' : ''
          )}
        />
      </div>
    </div>
  );
}
