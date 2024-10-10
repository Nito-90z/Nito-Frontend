import { twMerge } from 'tailwind-merge';
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <button
    className={twMerge(
      "w-full h-14 text-white rounded-sm",
      "disabled:bg-[#D9D9D9] text-white",
      className
    )}
    {...rest}
  >
    {children}
  </button>
  );
}