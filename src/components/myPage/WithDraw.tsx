import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import CloseIcon from '../common/icons/CloseIcon';
import { withdrawUserFetcher } from '@/fetchers/user';

type Props = {
  onClose: () => void;
};

export default function WithDraw({ onClose }: Props) {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [additionalReason, setAdditionalReason] = useState('');
  const router = useRouter();

  const reasons = [
    '온라인 쇼핑을 잘 이용하지 않아요',
    '아마존을 잘 이용하지 않아요',
    '앱 사용이 불편해요',
    '원하는 상품의 가격이 떨어지지 않아요',
    '많은 알림에 피로를 느껴요',
    '기타',
  ];

  const mutation = useMutation<void, Error, { reason: string }>({
    onSuccess: () => {
      // 성공 시 처리 로직
      // 로그아웃 처리
      localStorage.removeItem('token');
      router.push('/goodbye');
      alert('회원 탈퇴가 완료되었습니다.');
      onClose();
    },
    onError: (error: any) => {
      // 에러 시 처리 로직
      console.error('Error withdrawing user:', error);
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    },
  });

  const handleWithdraw = async () => {
    const reason = [...selectedReasons, additionalReason]
      .filter(Boolean)
      .join(', ');
    if (reason.length > 1000) {
      alert('탈퇴 사유는 1000자 이하로 작성해주세요.');
      return;
    }

    try {
      await mutation.mutateAsync({ reason });
    } catch (error) {
      console.error('Error withdrawing user:', error);
    }
  };

  const handleReasonChange = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  return (
    <div className="absolute bottom-0 z-50 w-full rounded-t-2xl bg-white shadow-xl p-4">
      <div className="flex justify-center items-center gap-36">
        <div className="h-6 w-10" />
        <div className="h-6 w-10" />
        <Button
          className="justify-center items-center flex h-8 w-8 bg-white"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </div>
      <div className="gap-4 flex flex-col">
        <span className="font-bold text-xl text-black">
          탈퇴하시는 이유가 무엇인가요?
        </span>
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-1">
            <CheckBox onChange={() => handleReasonChange(reason)} />
            <p>{reason}</p>
          </div>
        ))}
      </div>
      <textarea
        className="h-48 w-full my-4 p-4 bg-bar rounded-sm text-gray-500 focus:outline-none placeholder:text-sm"
        placeholder="자유롭게 작성해주세요."
        value={additionalReason}
        onChange={(e) => setAdditionalReason(e.target.value)}
      ></textarea>
      <Button onClick={handleWithdraw}>회원탈퇴</Button>
    </div>
  );
}
