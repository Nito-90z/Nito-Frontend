'use client';

import Link from 'next/link';
import Button from '../common/Button';
import MoreRightIcon from '../common/icons/MoreRight';
import { useState } from 'react';
import PriceDiscount from './PriceDiscount';

export default function UserSetting() {
  const [showPriceDiscount, setShowPriceDiscount] = useState(false);

  const onMoreRightClick = () => {
    setShowPriceDiscount(true);
  };

  const handleClose = () => {
    setShowPriceDiscount(false);
  };

  return (
    <div className="border-b border-border">
      <div className="px-4 py-3.5 border-b bg-bar border-border">
        <span className="text-sm text-gray">유저 설정</span>
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <span className=" pt-1 text-base text-dark-gray">언어 변경</span>
        <Link href="/mypage/change-language">
          <Button className="w-10 h-6 bg-white">
            <MoreRightIcon />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="pt-1 text-base text-dark-gray items-center">
          가격 할인 설정
        </span>
        <Button className="w-10 h-6 bg-white" onClick={onMoreRightClick}>
          <MoreRightIcon />
        </Button>
      </div>
      {showPriceDiscount && <PriceDiscount onClose={handleClose} />}
    </div>
  );
}
