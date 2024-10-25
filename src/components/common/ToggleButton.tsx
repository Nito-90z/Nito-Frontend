import { twMerge } from 'tailwind-merge';

type Props = {
  isOn: boolean;
  toggleHandler: () => void;
};

export default function ToggleButton({ isOn, toggleHandler }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleHandler}
        className={twMerge(
          'relative h-[30px] w-[50px] cursor-pointer rounded-full border-gray transition-colors duration-500',
          isOn ? 'bg-brand' : 'bg-gray',
        )}
      >
        <div
          className={twMerge(
            'absolute bottom-0.5 left-0.5 top-0.5 h-[25px] w-[25px] rounded-full bg-white transition-transform duration-500',
            isOn ? 'translate-x-[20px] transform' : '',
          )}
        />
      </div>
    </div>
  );
}
