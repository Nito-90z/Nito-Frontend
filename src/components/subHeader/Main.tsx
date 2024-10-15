"use client";

import { twMerge } from "tailwind-merge";
import Button from "../common/Button";
import HeaderAlarmIcon from "../common/icons/HeaderAlarmIcon";

type Props = {
  count: number;
  onEditing: () => void;
};

export default function Main({ count, onEditing }: Props) {
  return (
    <div className="sticky top-0 bg-white z-50">
      <header className="w-full p-4 pt-5 flex items-center justify-between">
        <h1 className="text-[26px] leading-[38px] font-bold text-black">
          찜한 상품{count !== 0 && `(${count})`}
        </h1>
        <div className="flex items-center">
          <button>
            <HeaderAlarmIcon />
          </button>
        </div>
      </header>
      <div className="w-full pb-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-light-gray text-sm">
          <Button
            onClick={() => {}}
            className="w-fit h-fit text-light-gray bg-transparent"
          >
            할인율순
          </Button>
          |
          <Button
            onClick={() => {}}
            className="w-fit h-fit text-light-gray bg-transparent"
          >
            낮은 가격순
          </Button>
        </div>
        <Button
          disabled={count === 0}
          className={twMerge(
            "text-sm text-dark-gray bg-transparent w-fit h-fit disabled:bg-transparent",
            count === 0 && "text-light-gray"
          )}
          onClick={onEditing}
        >
          편집
        </Button>
      </div>
    </div>
  );
}
