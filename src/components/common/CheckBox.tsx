import { twMerge } from 'tailwind-merge';

type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'id'
>;

export default function CheckBox(props: Props) {
  const { className, children, ...rest } = props;
  return (
    <>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          id=''
          className={twMerge(
            "appearance-none w-5 h-5 border border-light-gray rounded-sm checked:bg-[url('/images/check.svg')] checked:bg-brand  checked:bg-no-repeat checked:bg-center",
            className
          )}
          {...rest}
        />
        <label>{children}</label>
      </div>
    </>
  );
}
