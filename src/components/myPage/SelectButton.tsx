'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../common/Button';
import PriceSetting from './PriceSetting';
import ProductMenual from './ProductMenual';

export default function SelectButton() {
  const [selected, setSelected] = useState('상품 추가');

  const handleSelect = (selection: string) => {
    setSelected(selection);
  };

  return (
    <div className='px-4 py-4 gap-2.5'>
      <div className='flex gap-2.5'>
        <Button
          onClick={() => handleSelect('상품 추가')}
          className={twMerge(
            'rounded-full py-2 px-2.5 w-20 h-10 text-xs font-bold',
            selected === '상품 추가' ? '' : 'bg-border text-gray-text'
          )}
        >
          상품 추가
        </Button>
        <Button
          onClick={() => handleSelect('가격 할인 설정')}
          className={twMerge(
            'rounded-full py-2 px-2.5 w-24 h-10 text-xs font-bold',
            selected === '가격 할인 설정' ? '' : 'bg-border text-gray-text'
          )}
        >
          가격 할인 설정
        </Button>
      </div>
      {selected === '상품 추가' && <ProductMenual />}
      {selected === '가격 할인 설정' && <PriceSetting />}
    </div>
  );
}
