import { useWithDraw } from '@/hooks/auth';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import CloseIcon from '../common/icons/CloseIcon';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';

type Props = {
  onClose: () => void;
};

const REASONS = [
  '온라인 쇼핑을 잘 이용하지 않아요',
  '아마존을 잘 이용하지 않아요',
  '앱 사용이 불편해요',
  '원하는 상품의 가격이 떨어지지 않아요',
  '많은 알림에 피로를 느껴요',
  '기타',
];

type Reasons = {
  reason: boolean[];
  textarea: string;
};

export default function WithDraw({ onClose }: Props) {
  const { register, handleSubmit: onSubmit } = useForm<Reasons>();
  const { mutate } = useWithDraw();

  const handleSubmit = ({ reason, textarea }: Reasons) => {
    const reasons = REASONS.filter((_, index) => reason[index]).join(',');
    mutate({ reason: `${reasons},${textarea}` });
  };
  return (
    <form
      className="absolute bottom-0 z-50 w-full rounded-t-2xl border-t-2 border-border bg-white p-4 shadow-xl"
      onSubmit={onSubmit(handleSubmit)}
    >
      <div className="flex items-center justify-center gap-36">
        <div className="h-6 w-10" />
        <div className="h-6 w-10" />
        <Button
          type="button"
          className="flex h-8 w-8 items-center justify-center bg-white"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold text-black">
          탈퇴하시는 이유가 무엇인가요?
        </span>
        {REASONS.map((reason, index) => (
          <div key={uuidv4()} className="flex gap-1">
            <CheckBox {...register(`reason.${index}`)}>{reason}</CheckBox>
          </div>
        ))}
      </div>
      <textarea
        {...register('textarea')}
        className="text-gray-500 my-4 h-48 w-full rounded-sm bg-bar p-4 placeholder:text-sm focus:outline-none"
        placeholder="자유롭게 작성해주세요."
      ></textarea>
      <Button>회원탈퇴</Button>
    </form>
  );
}
