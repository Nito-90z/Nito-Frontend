'use client';

import { useState } from 'react';
import Button from '../common/Button';
import CloseIcon from '../common/icons/CloseIcon';
import Input from '../common/Input';

export default function ChangeName() {
  const [errorMessage, setErrorMessage] = useState('6자 이상 12자 이하의 영문 혹은 영문과 숫자를 조합');

  return (
    <div className='absolute bottom-0 z-50 w-full rounded-t-2xl bg-white shadow-xl p-4'>
      <div className='flex justify-center items-center gap-24 pb-2'>
        <div className='h-6 w-6' />
        <div className='flex text-black font-bold'>닉네임 변경하기</div>
        <Button className='justify-center items-center flex h-8 w-8 bg-white'>
          <CloseIcon />
        </Button>
      </div>
      <div className='flex gap-1 pb-1'>
        <Input
          placeholder='닉네임을 입력해주세요'
          className='border-border placeholder:text-base placeholder:text-gray-text border h-14'
          type={'search'}
        />
        <Button className='bg-light-gray w-20 h-14 text-base font-bold'>
          중복확인
        </Button>
      </div>
      {errorMessage && <p className='text-brand text-sm pb-4'>{errorMessage}</p>}
      <Button className='bg-light-gray text-base font-bold'>설정</Button>
    </div>
  );
}
