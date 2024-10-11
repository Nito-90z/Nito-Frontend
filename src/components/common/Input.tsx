import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type: "text" | "password" | "email";
};

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, ...rest } = props;
    return (
      <>
        <input
          ref={ref}
          className={twMerge(
            "w-full h-11 rounded-sm px-4 text-sm text-dark-gray border border-light-gray outline-none placeholder:text-base",
            className
          )}
          {...rest}
        />
      </>
    );
  }
);

export default Input;
