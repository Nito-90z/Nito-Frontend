// 미완성입니다. 
'use client';
import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  // 토글 버튼은 svg 파일로 icon화 하는 것 보단 수치를 바로바로 적용하는게 더 쉬워서 이렇게 적용함
  return (
    <div className='flex items-center cursor-pointer'>
      <div
        onClick={toggleHandler}
        className={`relative w-[50px] h-[30px] rounded-full transition-colors duration-500 ${
          isOn ? 'bg-brand' : 'bg-gray'
        }`}
      >
        <div className='items-center'>
          <div
            className={`absolute w-[24px] h-[24px] rounded-full bg-white transition-transform duration-500 ${
              isOn ? 'transform translate-x-5' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
}
