'use client';

import { ChangeEvent, useState } from 'react';
import NicknameForm from './NicknameForm';
import Button from '../common/Button';
import CloseIcon from '../common/icons/CloseIcon';
import Agreement from './Agreement';
import { useQuery } from '@tanstack/react-query';
import { generateNicknameFetcher } from '@/fetchers/user';
import axios from 'axios';
import { useSignIn } from '@/hooks/auth';
import { AgreementType } from '@/models/user';
import { useForm } from 'react-hook-form';

const INITIAL_AGREEMENT = {
  isOverAge14: false,
  isServiceAccept: false,
  isInfoAccept: true,
  isMarketing: false,
};

const ALL_AGREEMENTS = {
  isOverAge14: true,
  isServiceAccept: true,
  isInfoAccept: true,
  isMarketing: true,
};

export type Nickname = { nickname: string };

export default function SignInForm({ callbackUrl }: { callbackUrl: string }) {
  const { data } = useQuery<{ nickname: string }>({
    queryKey: ['nickname'],
    queryFn: generateNicknameFetcher,
    staleTime: Infinity,
  });
  const {
    register,
    watch,
    getValues,
    setFocus,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<Nickname>();
  const [agreement, setAgreement] = useState<AgreementType>(INITIAL_AGREEMENT);
  const isAllAgree = Object.values(agreement).every((v) => v === true);
  const isValidate =
    agreement.isOverAge14 &&
    agreement.isServiceAccept &&
    watch('nickname').trim() !== '';
  const { mutateAsync } = useSignIn(callbackUrl);

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreement((prev) => ({ ...prev, [name]: checked }));
  };
  const handleAllAgreementChange = () => {
    if (isAllAgree) {
      setAgreement(INITIAL_AGREEMENT);
    } else {
      setAgreement(ALL_AGREEMENTS);
    }
  };
  const handleSignIn = async () => {
    if (!isValidate) return;

    try {
      await mutateAsync({ nickname: getValues('nickname'), agreement });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError('nickname', {
            type: 'duplicated',
            message: error.response.data.message,
          });
          setFocus('nickname');
        }
      }
      console.log(error);
    }
  };
  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-col gap-6">
        <Button className="h-fit w-fit self-end bg-transparent p-1">
          <CloseIcon />
        </Button>
        <NicknameForm
          generatedNickname={data?.nickname || ''}
          register={register}
          setFocus={() => setFocus('nickname')}
          onSubmit={handleSubmit}
          errors={errors}
          setError={setError}
        />
        <Agreement
          agreement={agreement}
          onChange={handleAgreementChange}
          onAllChange={handleAllAgreementChange}
        />
      </div>
      <div className="px-4 py-5">
        <Button
          className="bg-brand disabled:bg-light-gray"
          disabled={!isValidate}
          onClick={handleSignIn}
        >
          회원가입 완료하기
        </Button>
      </div>
    </div>
  );
}
