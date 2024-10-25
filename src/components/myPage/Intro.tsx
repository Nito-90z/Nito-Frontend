'use client';

import PencilIcon from '../common/icons/PencilIcon';
import Button from '../common/Button';

export default function Intro() {
  const onClick = () => {};

  return (
    <div className="border-b border-border px-4 pb-4 pt-5">
      <div className="flex items-center gap-0">
        <span className="text-xl font-bold text-dark-gray">
          안녕하세요, {`{유저닉네임}`}님
        </span>
        <Button
          type="button"
          onClick={onClick}
          className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-border"
        >
          <PencilIcon />
        </Button>
      </div>
      <div className="pt-3">
        <p className="py-1 text-sm text-dark-gray">로그인 한 계정</p>
        <p className="text-base text-gray-text">
          mfd6dfgsdsd@privaterelay.appleid.com
        </p>
      </div>
    </div>
  );
}
