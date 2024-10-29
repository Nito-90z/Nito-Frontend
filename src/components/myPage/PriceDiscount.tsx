'use client';

import { SetStateAction, useState } from 'react';
import Button from '../common/Button';
import CloseIcon from '../common/icons/CloseIcon';

type Props = {
  onClose: () => void;
};

export default function PriceDiscount({onClose}: Props) {
  const [selectedPercentage, setSelectedPercentage] = useState('');

  const handleSelect = (percentage: SetStateAction<string>) => {
    setSelectedPercentage(percentage);
  };

  return (
    <div className='absolute bottom-0 z-50 w-full rounded-t-2xl border-t-2 border-border bg-white shadow-xl p-4'>
      <div className='flex justify-center items-center gap-28'>
        <div className='h-6 w-6' />
        <h1 className='flex text-black font-bold'>가격할인 설정</h1>
        <Button className='justify-center items-center flex h-8 w-8 bg-white' onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>

      <p className="pb-4 pt-2 text-center text-sm text-gray-text">
        평균 가격에서 몇 % 떨어질 때 알려드릴까요? <br />
        단, 역대 최저가일 경우에는 무조건 알려드려요!
      </p>

      {/* 할인율 선택 버튼 */}
      <div className="flex w-80 justify-center gap-2.5 pb-4">
        <Button
          onClick={() => handleSelect('3%')}
          className={`h-10 w-20 rounded-full px-2.5 text-xs ${
            selectedPercentage === '3%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          3% 이상
        </Button>
        <Button
          onClick={() => handleSelect('5%')}
          className={`h-10 w-20 rounded-full px-2.5 text-xs ${
            selectedPercentage === '5%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          5% 이상
        </Button>
        <Button
          onClick={() => handleSelect('7%')}
          className={`h-10 w-20 rounded-full px-2.5 text-xs ${
            selectedPercentage === '7%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          7% 이상
        </Button>
        <Button
          onClick={() => handleSelect('10%')}
          className={`h-10 w-20 rounded-full px-2.5 text-xs ${
            selectedPercentage === '10%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          10% 이상
        </Button>
      </div>
      <Button>설정 완료</Button>
    </div>
  );
}
