'use client';

import PencilIcon from '../common/icons/PencilIcon';
import Button from '../common/Button';

export default function Intro() {
  const onClick = () => {};

  return (
    <div className='pt-5 px-4 pb-4 border-b border-border'>
      <div className='flex items-center gap-0'>
        <span className='text-xl font-bold text-dark-gray'>
          안녕하세요, {`{유저닉네임}`}님
        </span>
        <Button
          type='button'
          onClick={onClick}
          className='ml-2 w-7 h-7 flex items-center justify-center bg-border rounded-full'
        >
          <PencilIcon />
        </Button>
      </div>
      <div className='pt-3'>
        <p className='text-sm py-1 text-dark-gray'>로그인 한 계정</p>
        <p className='text-base text-gray-text'>
          mfd6dfgsdsd@privaterelay.appleid.com
        </p>
      </div>
    </div>
  );
}
