'use client';
import { SetStateAction, useState } from 'react';
import Button from '@/components/common/Button';
import SelectHeader from '@/components/header/SelectHeader';
import PriceDiscount from '@/components/myPage/PriceDiscount';

export default function ChangeLanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language: SetStateAction<string>) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <SelectHeader mainText='언어 변경' buttonText='완료' />
      <div className='pt-8 pb-11 px-4'>
        <p className='text-xl py-1 font-bold text-dark-gray'>
          편리한 서비스 이용을 위해 <br />
          언어를 선택해주세요.
        </p>
        <p className='text-base text-gray-text'>
          우리는 당신의 언어 선택에 맞는 서비스를 제공해요.
        </p>
      </div>
      <div className='gap-2 flex flex-col pt-10 px-4'>
        <Button
          className={`${
            selectedLanguage === 'English(US)'
              ? 'bg-white text-brand border text-sm font-bold border-brand'
              : 'bg-white border border-border text-sm font-bold text-gray'
          }`}
          onClick={() => handleLanguageSelect('English(US)')}
        >
          English(US)
        </Button>
        <Button
          className={`${
            selectedLanguage === 'Korean(KR)'
              ? 'bg-white text-brand border font-bold text-sm border-brand'
              : 'bg-white border border-border font-bold text-sm text-gray'
          }`}
          onClick={() => handleLanguageSelect('Korean(KR)')}
        >
          Korean(KR)
        </Button>
      </div>
      <PriceDiscount />
    </div>
  
  );
}
