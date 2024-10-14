"use client";

import Button from "../common/Button";
import HeaderAlarmIcon from "../common/icons/HeaderAlarmIcon";

type Props = {
  count: number;
  onEditing: () => void;
};

export default function Main({ count, onEditing }: Props) {
  return (
    <>
      <header className="w-full bg-white p-4 pt-5 flex items-center justify-between">
        <h1 className="text-[26px] leading-[38px] font-bold text-black">
          찜한 상품({count})
        </h1>
        <div className="flex items-center">
          <button>
            <HeaderAlarmIcon />
          </button>
        </div>
      </header>
      <div className="w-full pb-2 px-4 bg-white flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-text text-sm">
          <button onClick={() => {}} className="px-1 rounded">
            할인율순
          </button>
          |
          <button onClick={() => {}} className="px-1 rounded">
            낮은 가격순
          </button>
        </div>
        <Button
          className="text-sm text-dark-gray bg-transparent w-fit h-fit"
          onClick={onEditing}
        >
          편집
        </Button>
      </div>
    </>
  );
}
