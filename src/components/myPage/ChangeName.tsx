'use client';

import { useState } from 'react';
import CloseIcon from '../common/icons/CloseIcon';
import Input from '../common/Input';
import { NICKNAME_VALIDATION_ERROR_MESSAGE } from '@/constants';
import Button from '../common/Button';

export default function ChangeName() {
  const [errorMessage, setErrorMessage] = useState(
    NICKNAME_VALIDATION_ERROR_MESSAGE,
  );

  return (
    <div className="absolute bottom-0 z-50 w-full rounded-t-2xl bg-white p-4 shadow-xl">
      <div className="flex items-center justify-center gap-24 pb-2">
        <div className="h-6 w-6" />
        <div className="flex font-bold text-black">닉네임 변경하기</div>
        <Button className="flex h-8 w-8 items-center justify-center bg-white">
          <CloseIcon />
        </Button>
      </div>
      <div className="flex gap-1 pb-1">
        <Input
          placeholder="닉네임을 입력해주세요"
          className="h-14 border border-border placeholder:text-base placeholder:text-gray-text"
          type={'search'}
        />
        <Button className="h-14 w-20 bg-light-gray text-base font-bold">
          중복확인
        </Button>
      </div>
      {errorMessage && (
        <p className="pb-4 text-sm text-brand">{errorMessage}</p>
      )}
      <Button className="bg-light-gray text-base font-bold">설정</Button>
    </div>
  );
}
