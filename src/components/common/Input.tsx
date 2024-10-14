import { twMerge } from "tailwind-merge";

type Props = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type:
    | "text"
    | "password"
    | "email"
    | "search"
};

export default function Input(props: Props) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        className={twMerge(
          "h-11 w-full rounded-sm px-4 text-sm font-medium placeholder:text-base focus:outline-none",
          className
        )}
        {...rest}
      />
    </>
  );
}