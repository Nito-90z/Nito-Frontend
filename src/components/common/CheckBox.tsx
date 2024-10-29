import { ForwardedRef, forwardRef, useId } from 'react';
import CheckIcon from './icons/CheckIcon';
import { twMerge } from 'tailwind-merge';

type Props = Omit<
  React.ComponentPropsWithRef<'input'>,
  'type' | 'id' | 'size'
> & {
  size?: 'sm' | 'lg';
};

const CheckBox = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, children, size, ...rest } = props;
    const uuid = useId();
    const containerStyle = size === 'lg' ? 'w-7 h-7' : 'w-5 h-5';
    const checkStyle =
      size === 'lg' ? 'top-[14px] left-[14px]' : 'top-[10px] left-[10px]';

    return (
      <>
        <label
          htmlFor={uuid}
          className="relative flex w-fit cursor-pointer gap-2 rounded-full"
        >
          <input
            ref={ref}
            type="checkbox"
            id={uuid}
            className={twMerge(
              'peer relative cursor-pointer appearance-none rounded-sm border border-light-gray bg-white transition-all checked:bg-brand',
              containerStyle,
              className,
            )}
            readOnly
            {...rest}
          />
          <div
            className={`pointer-events-none absolute ${checkStyle} -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100`}
          >
            <CheckIcon className={size === 'lg' ? 'h-4 w-4' : ''} />
          </div>
          <p className="cursor-pointer">{children}</p>
        </label>
      </>
    );
  },
);

CheckBox.displayName = 'CheckBox';
export default CheckBox;
