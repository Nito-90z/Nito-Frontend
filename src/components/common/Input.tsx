import { ForwardedRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'search';
};

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, ...rest } = props;
    return (
      <input
        ref={ref}
        className={twMerge(
          'h-11 w-full rounded-sm px-4 font-medium focus:outline-none',
          className,
        )}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
