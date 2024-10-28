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
    <div className='absolute bottom-0 z-50 w-full rounded-t-2xl bg-white shadow-xl p-4'>
      <div className='flex justify-center items-center gap-28'>
        <div className='h-6 w-6' />
        <h1 className='flex text-black font-bold'>가격할인 설정</h1>
        <Button className='justify-center items-center flex h-8 w-8 bg-white' onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>

      <p className='text-center text-sm text-gray-text pt-2 pb-4'>
        평균 가격에서 몇 % 떨어질 때 알려드릴까요? <br />
        단, 역대 최저가일 경우에는 무조건 알려드려요!
      </p>

      {/* 할인율 선택 버튼 */}
      <div className='flex justify-center gap-2.5 pb-4 w-80'>
        <Button
          onClick={() => handleSelect('3%')}
          className={`w-20 h-10 px-2.5 rounded-full text-xs ${
            selectedPercentage === '3%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          3% 이상
        </Button>
        <Button
          onClick={() => handleSelect('5%')}
          className={`w-20 h-10 px-2.5 rounded-full text-xs ${
            selectedPercentage === '5%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          5% 이상
        </Button>
        <Button
          onClick={() => handleSelect('7%')}
          className={`w-20 h-10 px-2.5 rounded-full text-xs ${
            selectedPercentage === '7%'
              ? 'bg-brand text-white'
              : 'bg-border text-gray-text'
          }`}
        >
          7% 이상
        </Button>
        <Button
          onClick={() => handleSelect('10%')}
          className={`w-20 h-10 px-2.5 rounded-full text-xs ${
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
