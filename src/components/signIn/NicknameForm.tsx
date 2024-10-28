import Input from '../common/Input';
import Button from '../common/Button';
import { twMerge } from 'tailwind-merge';
import { useNicknameCheck } from '@/hooks/auth';
import axios from 'axios';
import { NICKNAME_VALID_MESSAGE } from '@/constants';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import { Nickname } from './SignInForm';
import { nickNameRegister } from '@/libs/form';

type Props = {
  generatedNickname: string;
  register: UseFormRegister<Nickname>;
  setFocus: () => void;
  onSubmit: UseFormHandleSubmit<Nickname, undefined>;
  errors: FieldErrors<Nickname>;
  setError: UseFormSetError<Nickname>;
};

export default function NicknameForm({
  generatedNickname,
  register,
  setFocus,
  onSubmit,
  errors,
  setError,
}: Props) {
  const { mutateAsync, isPending } = useNicknameCheck();

  const handleSubmit = async (data: Nickname) => {
    try {
      await mutateAsync({ nickname: data.nickname });
      setError('nickname', {
        type: 'success',
        message: NICKNAME_VALID_MESSAGE,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError('nickname', {
            type: 'duplicated',
            message: error.response.data.message,
          });
          setFocus();
        }
      }
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-[6px]" onSubmit={onSubmit(handleSubmit)}>
      <label htmlFor="nickname">
        닉네임 <span className="text-brand">*</span>
      </label>
      <div className="flex gap-2">
        <Input
          defaultValue={generatedNickname}
          {...register('nickname', nickNameRegister)}
          type="text"
          id="nickname"
          className="h-14 border border-light-gray font-normal text-dark-gray"
          placeholder="닉네임을 입력해주세요"
          autoComplete="off"
        />
        <Button
          type="submit"
          className="relative w-[85px] whitespace-nowrap bg-brand px-4 disabled:bg-light-gray"
          disabled={isPending}
        >
          중복확인
        </Button>
      </div>
      {errors.nickname && (
        <p
          className={twMerge(
            'text-xs text-brand',
            errors.nickname.type === 'success' && 'text-[#4850FF]',
          )}
        >
          {errors.nickname.message}
        </p>
      )}
    </form>
  );
}
