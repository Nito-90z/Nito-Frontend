import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: Props) {
  const { className, children, ...rest } = props;
  return (
    <button
    className={twMerge(
      "w-full h-14 text-white rounded-sm",
      "disabled:bg-light-gary text-white",
      className
    )}
    {...rest}
  >
    {children}
  </button>
  );
}