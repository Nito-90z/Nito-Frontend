'use client';

import { useState } from 'react';
import Button from '../common/Button';
import AppleIcon from '../common/icons/AppleIcon';
import GoogleIcon from '../common/icons/GoogleIcon';
import PencilIcon from '../common/icons/PencilIcon';
import ChangeName from './ChangeName';

export default function SocialLogin() {
  const [showChangeName, setShowChangeName] = useState(false);

  const onPencilClick = () => {
    setShowChangeName(true);
  };

  const handleClose = () => {
    setShowChangeName(false);
  };

  return (
    <>
      <div className="flex items-center gap-0 border-b-8 border-bar p-4">
        <span className="text-xl font-bold text-dark-gray">
          안녕하세요, {`{유저닉네임}`}님
        </span>
        <Button
          type='button'
          onClick={onPencilClick}
          className='ml-2 w-7 h-7 flex items-center justify-center bg-border rounded-full'
        >
          <PencilIcon />
        </Button>
      </div>
      <div className="px-4 pt-4">
        <p className="py-1 text-base font-bold text-dark-gray">
          소셜 계정을 연동하고 사용해보세요
        </p>
        <p className="text-base text-gray-text">
          기기를 변경해도 내 데이터를 편하게 옮길 수 있어요.
        </p>
      </div>
      <div className="flex justify-center gap-10 border-b border-border px-4 py-5">
        <div>
          <Button className="flex h-14 w-14 items-center justify-center rounded-full bg-black p-1">
            <AppleIcon />
          </Button>
          <p className="pt-2 text-center text-xs text-secondary">Apple</p>
        </div>
        <div>
          <Button className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white p-1">
            <GoogleIcon />
          </Button>
          <p className="pt-2 text-center text-xs text-secondary">Google</p>
        </div>
      </div>
      {showChangeName && <ChangeName onClose={handleClose} />}
    </>
  );
}
