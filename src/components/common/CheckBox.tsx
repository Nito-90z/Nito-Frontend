import { useId } from "react";
import CheckIcon from "./icons/CheckIcon";

type Props = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id" | "size"
> & {
  size?: "sm" | "lg";
};

export default function Checkbox(props: Props) {
  const { className, children, size, ...rest } = props;
  const uuid = useId();
  const containerStyle = size === "lg" ? "w-7 h-7" : "w-5 h-5";
  const checkStyle =
    size === "lg" ? "top-[14px] left-[14px]" : "top-[10px] left-[10px]";

  return (
    <>
      <label
        htmlFor={uuid}
        className="relative flex gap-2 w-fit cursor-pointer rounded-full"
      >
        <input
          type="checkbox"
          id={uuid}
          className={`peer relative ${containerStyle} cursor-pointer appearance-none rounded-sm border border-light-gray transition-all checked:bg-brand`}
          {...rest}
        />
        <div
          className={`pointer-events-none absolute ${checkStyle} -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100`}
        >
          <CheckIcon className={size === "lg" ? "w-4 h-4" : ""} />
        </div>
        <p className="cursor-pointer">{children}</p>
      </label>
    </>
  );
}
