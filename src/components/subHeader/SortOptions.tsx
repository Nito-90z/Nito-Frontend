import { twMerge } from "tailwind-merge";
import CheckBox from "../common/CheckBox";

export default function SortOptions({ className }: { className?: string }) {
  return (
    <div className={twMerge("w-full bg-white", className)}>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-center text-gray-text">
          <p>전체(12)</p>
          <div className="items-center">
            <button onClick={() => {}} className="pr-2 rounded">
              할인율순
            </button>
            |
            <button onClick={() => {}} className="pl-2 rounded">
              낮은 가격순
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-text">
          <CheckBox>역대 최저가</CheckBox>
          <CheckBox>품절 제외</CheckBox>
        </div>
      </div>
    </div>
  );
}
