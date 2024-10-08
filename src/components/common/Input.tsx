import { twMerge } from "tailwind-merge";

type Props = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type:
    | "text"
    | "password"
    | "email"
};

export default function Input(props: Props) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        className={twMerge(
          "w-full h-11 rounded-sm px-4 text-sm font-medium placeholder:text-base",
          className
        )}
        {...rest}
      />
    </>
  );
}
