'use client';

import { SetStateAction, useState } from 'react';
import Button from '@/components/common/Button';
import SelectHeader from '@/components/header/SelectHeader';
import { useRouter } from 'next/navigation';


export default function ChangeLanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const router = useRouter();

  const handleLanguageSelect = (language: SetStateAction<string>) => {
    setSelectedLanguage(language);
  };

  const handleComplete = () => {
    router.back();
  };

  return (
    <div>
      <SelectHeader
        mainText="언어 변경"
        buttonText="완료"
        onClick={handleComplete}
      />
      <div className="px-4 pb-11 pt-8">
        <p className="py-1 text-xl font-bold text-dark-gray">
          편리한 서비스 이용을 위해 <br />
          언어를 선택해주세요.
        </p>
        <p className="text-base text-gray-text">
          우리는 당신의 언어 선택에 맞는 서비스를 제공해요.
        </p>
      </div>
      <div className="flex flex-col gap-2 px-4 pt-10">
        <Button
          className={`${
            selectedLanguage === 'English(US)'
              ? 'border border-brand bg-white text-sm font-bold text-brand'
              : 'border border-border bg-white text-sm font-bold text-gray'
          }`}
          onClick={() => handleLanguageSelect('English(US)')}
        >
          English(US)
        </Button>
        <Button
          className={`${
            selectedLanguage === 'Korean(KR)'
              ? 'border border-brand bg-white text-sm font-bold text-brand'
              : 'border border-border bg-white text-sm font-bold text-gray'
          }`}
          onClick={() => handleLanguageSelect('Korean(KR)')}
        >
          Korean(KR)
        </Button>
      </div>
    </div>
  );
}
