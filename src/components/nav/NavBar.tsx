'use client';

import { useState } from 'react';
import HeartIcon from '../common/icons/HeartIcon';
import ProductIcon from '../common/icons/ProductIcon';
import SearchIcon from '../common/icons/SearchIcon';
import UserIcon from '../common/icons/UserIcon';
import CircleButton from '../common/CircleButton';
import PlusIcon from '../common/icons/PlusIcon';
import UserBrandIcon from '../common/icons/UserBrandIcon';
import SearchBrandIcon from '../common/icons/SearchBrandIcon';
import ProductBrandIcon from '../common/icons/ProductBrandIcon';
import HeartBrandIcon from '../common/icons/HeartBrandIcon';

export default function NavBar() {
  const [selected, setSelected] = useState('favorite');

  return (
      <nav className='bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-border border-gray-200 flex items-center justify-around'>
        <button
          type='button'
          onClick={() => setSelected('favorite')}
          className={`flex flex-col items-center justify-center ${
            selected === 'favorite' ? 'text-brand' : 'text-text'
          }`}
        >
          {selected === 'favorite' ? <HeartBrandIcon /> : <HeartIcon />}
          <span className='text-sm'>찜한 상품</span>
        </button>

        <button
          type='button'
          onClick={() => setSelected('product')}
          className={`flex flex-col items-center justify-center ${
            selected === 'product' ? 'text-brand' : 'text-text'
          }`}
        >
          {selected === 'product' ? <ProductBrandIcon /> : <ProductIcon />}
          <span className='text-sm'>상품</span>
        </button>

        {/* 중앙의 CircleButton */}
        <div className='relative -translate-y-5'>
          <CircleButton
            className=' bg-black rounded-full flex items-center justify-center'
            size={'lg'}
          >
            <PlusIcon size={'lg'} />
          </CircleButton>
        </div>

        <button
          type='button'
          onClick={() => setSelected('search')}
          className={`flex flex-col items-center justify-center ${
            selected === 'search' ? 'text-brand' : 'text-text'
          }`}
        >
          {selected === 'search' ? <SearchBrandIcon /> : <SearchIcon />}
          <span className='text-sm'>검색</span>
        </button>

        <button
          type='button'
          onClick={() => setSelected('mypage')}
          className={`flex flex-col items-center justify-center ${
            selected === 'mypage' ? 'text-brand' : 'text-text'
          }`}
        >
          {selected === 'mypage' ? <UserBrandIcon /> : <UserIcon />}
          <span className='text-sm'>마이 페이지</span>
        </button>
      </nav>
  );
}
