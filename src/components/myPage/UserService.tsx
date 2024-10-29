'use client';

import { useState } from 'react';
import Button from '../common/Button';
import MoreRightIcon from '../common/icons/MoreRight';
import Link from 'next/link';
import WithDraw from './WithDraw';

export default function UserService() {
  const [showWithDraw, setShowWithDraw] = useState(false);

  const openWithDraw = () => {
    setShowWithDraw(true);
  };

  const handleClose = () => {
    setShowWithDraw(false);
  };
  return (
    <div>
      <div className="border-b border-border bg-bar px-4 py-3.5">
        <span className="text-sm text-gray">유저 서비스</span>
      </div>

      <div className='flex items-center justify-between px-4 py-4'>
        <span className='pt-1 text-base text-dark-gray'>NITO 사용법</span>
        <Link href='/mypage/use-nito'>
          <Button className='w-7 h-6 bg-white'>
            <MoreRightIcon />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="items-center pt-1 text-base text-dark-gray">
          개인정보처리방침
        </span>

        <Link href='/mypage/privacy-policy'>
          <Button className='w-7 h-6 bg-white'>
            <MoreRightIcon />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="items-center pt-1 text-base text-dark-gray">
          이용약관
        </span>
        <Link href='/mypage/tos'>
          <Button className='w-7 h-6 bg-white'>
            <MoreRightIcon />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-base text-dark-gray">고객 문의</span>
        <p className="text-sm text-gray-text">email@email.com</p>
      </div>
      <p className="w-96 px-4 py-2 text-sm text-gray-text">
        문의 사항이 있으신 경우 이메일을 보내주시면 신속하게 확인하고 답변해
        드리겠습니다.
      </p>
      <div className='bg-bar h-2 w-full' />
      <div className='flex justify-between px-4 pt-2 pb-8'>
        <span className='text-white'>Logout</span>
        <Button
          className='bg-white text-sm text-gray-text w-20 h-7'
          onClick={openWithDraw}
        >
          회원탈퇴
        </Button>
      </div>
      {showWithDraw && <WithDraw onClose={handleClose} />}
    </div>
  );
}
